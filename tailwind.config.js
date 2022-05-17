module.exports = {
  content: [],
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: { extend: {} },
  plugins: [],
  variants: {
    extend: {
      textOpacity: ['dark'],
      backgroundColor: ['dark'],
    }
  }
}
