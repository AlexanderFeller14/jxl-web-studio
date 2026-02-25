import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f5f7f9',
        ink: '#0f1c2d',
        accent: '#1667c3',
        accentSoft: '#6eb6ff'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(22, 103, 195, 0.18)',
        card: '0 14px 32px rgba(15, 28, 45, 0.08)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      backgroundImage: {
        shimmer:
          'linear-gradient(110deg, rgba(255,255,255,0) 25%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 75%)'
      }
    }
  },
  plugins: []
};

export default config;
