/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF6A00',
          50: '#FFF7F1',
          100: '#FFE9D8',
          200: '#FFD2AF',
          500: '#FF7A1A',
          600: '#FF6A00',
          700: '#E85A00',
        },
        ink: {
          DEFAULT: '#111111',
          900: '#111111',
          800: '#1B1C1E',
          700: '#2A2C2F',
        },
        muted: '#5F6368',
        line: '#E8E8E8',
        // Светлые фоны
        bg: '#FFFFFF',
        soft: '#F7F8FA',
        soft2: '#F2F3F5',
        warm: '#FFF7F1',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17,17,17,0.04), 0 10px 30px -16px rgba(17,17,17,0.10)',
        cardHover:
          '0 8px 18px -6px rgba(17,17,17,0.08), 0 22px 48px -18px rgba(255,106,0,0.28)',
        soft: '0 2px 6px rgba(17,17,17,0.05), 0 18px 44px -22px rgba(17,17,17,0.18)',
        float: '0 6px 16px -6px rgba(17,17,17,0.12), 0 2px 6px rgba(17,17,17,0.06)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.66,0,0,1) infinite',
        floaty: 'floaty 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
