/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          bg: '#08090C',
          'surface-1': 'rgba(18, 20, 28, 0.65)',
          'surface-2': 'rgba(26, 30, 42, 0.80)',
          'surface-hover': 'rgba(35, 40, 56, 0.90)',
          'surface-active': 'rgba(45, 52, 72, 0.95)',
        },
        border: {
          glass: 'rgba(255, 255, 255, 0.08)',
          'glass-medium': 'rgba(255, 255, 255, 0.16)',
          'glass-accent': 'rgba(96, 165, 250, 0.40)',
        },
        accent: {
          blue: '#60A5FA',
          cyan: '#38BDF8',
          emerald: '#34D399',
          amber: '#FBBF24',
          rose: '#F472B6',
        }
      },
      fontFamily: {
        display: ['Outfit', '-apple-system', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '14px',
        'lg': '24px',
        'full': '9999px',
      },
      backdropBlur: {
        'glass-sm': '16px',
        'glass-md': '24px',
        'glass-lg': '32px',
      },
      boxShadow: {
        'glass-low': '0 4px 12px rgba(0, 0, 0, 0.30)',
        'glass-md': '0 12px 28px -4px rgba(0, 0, 0, 0.45)',
        'glass-high': '0 24px 48px -12px rgba(0, 0, 0, 0.65)',
        'hero-glow': '0 32px 64px -16px rgba(0, 0, 0, 0.80), 0 0 40px rgba(96, 165, 250, 0.15)',
        'pin-glow': '0 0 20px rgba(96, 165, 250, 0.60)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
