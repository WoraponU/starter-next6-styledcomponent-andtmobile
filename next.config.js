const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withSass = require('@zeit/next-sass')

module.exports = withCSS(
  withSass(
    withLess({
      webpack(config, options) {
        return config
      }
    })
  )
)

// module.exports = withCSS(
//   withLess({
//     lessLoaderOptions: {
//       javascriptEnabled: true
//     }
//   })
// )
