theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 1s ease-in-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
  },
}
