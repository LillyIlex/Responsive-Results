

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'hanken': 'HankenGrotesk'
    },
    extend: {
      colors: {
        primary: {
        'light-red':'#ff5757',
        'orangey-yellow':'#ffb01f',
        'green-teal':'#00bd91',
        'cobalt-blue':'#1125d4'
      },
       gradients: {
        'light-slate-blue':'#7857ff',
        'light-royal-blue':'#2e2be9',
        'violet-blue':'hsla(256, 72%, 46%, 1)',
        'persian-blue':'hsla(241, 72%, 46%, 0)'
      },
      neutral: {
        'pale-blue':'#ebf1ff',
        'light-lavender':'#c8c7ff',
        'dark-gray-blue':'#303b5a'
      },
    },
  },
  plugins: [],
}
}