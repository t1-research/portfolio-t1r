const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra()

module.exports = {
    images: {
      path: 'public/static/images/',
    },
  }