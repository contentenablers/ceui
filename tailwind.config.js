/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        c1: 'var(--color-p1)', // Deep Navy Blue
        c2: 'var(--color-p2)', // Vivid Red / Crimson
        c3: 'var(--color-p3)', // Dark Midnight Blue
        c4: 'var(--color-p4)', // Light Gray / Soft Gray
        c5:'var( --color-p4)', // 
        white: '#ffffff', // Pure White
      },
      fontSize: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem',// 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        '6xl': '4rem',    // 64px
      },
    },
  },
  plugins: [],
};
