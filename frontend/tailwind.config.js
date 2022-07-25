module.exports = {
  mode: 'jit',
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}
