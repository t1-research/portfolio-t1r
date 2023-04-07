const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra()

const withImages = require('next-images')
module.exports = withImages({
    webpack(config, options) {
        return config
    }
})