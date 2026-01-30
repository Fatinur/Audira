module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand-color)',
        prim: 'var(--color-prim)',
        sec: 'var(--color-sec)'
      }
    }
  },
  plugins: []
}
