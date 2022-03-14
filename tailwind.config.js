module.exports = {
  mode: 'jit',
  purge: [
    './lib/components/**/*.tsx',
    './lib/components/**/**/*.tsx',
    './modules/**/*.tsx',
    './pages/**/*.tsx',
  ],
  content: [],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'system-ui'],
      custom: ['Arial', 'system-ui'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
