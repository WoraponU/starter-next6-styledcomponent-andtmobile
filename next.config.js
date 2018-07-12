const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

module.exports = withCSS(
  withLess({
    webpack(config, options) {
      return config
    }
  })
)

// module.exports = withCSS(
//   withLess({
//     lessLoaderOptions: {
//       javascriptEnabled: true
//     }
//   })
// )
