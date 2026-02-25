'use client';

import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

type IridescenceProps = {
  className?: string;
  speed?: number;
};

const vertexShaderSource = `#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentShaderSource = `#version 300 es
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
out vec4 fragColor;

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 uv = fragCoord / u_resolution.xy;
  uv -= 0.5;
  uv.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.5;
  float d = 0.0;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }

  d += t;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5);
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  vec3 coolMono = mix(col, vec3(luma), 0.5);
  col = coolMono * vec3(0.58, 0.78, 1.32);
  col = clamp(col, 0.0, 1.0);

  fragColor = vec4(col, 1.0);
}`;

function compileShader(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export function Iridescence({ className, speed = 0.5 }: IridescenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const gl = canvas.getContext('webgl2', { alpha: false, antialias: true });
    if (!gl) {
      return;
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) {
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');

    let raf = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const draw = (now: number) => {
      const elapsed = (now - start) / 1000;
      gl.uniform1f(timeLocation, prefersReducedMotion ? 0 : elapsed * speed);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!prefersReducedMotion) {
        raf = window.requestAnimationFrame(draw);
      }
    };

    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      if (positionBuffer) {
        gl.deleteBuffer(positionBuffer);
      }
    };
  }, [prefersReducedMotion, speed]);

  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,18,0.06),rgba(2,6,18,0.12))]" />
    </div>
  );
}
