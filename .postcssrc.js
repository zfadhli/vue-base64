// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('tailwindcss')('./tailwind.js'),
    require('postcss-cssnext'),
    // require('cssnano'),
    // require('postcss-uncss')({ html: ['index.html'] })
  ]
}
