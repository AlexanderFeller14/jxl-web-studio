import { cn } from '@/lib/utils';

type ShinyTextProps = {
  text: string;
  className?: string;
};

export function ShinyText({ text, className }: ShinyTextProps) {
  return (
    <span
      className={cn(
        'shiny-text inline-block bg-gradient-to-r from-sky-700 via-blue-400 to-cyan-300 bg-clip-text text-transparent',
        className
      )}
    >
      {text}
    </span>
  );
}
