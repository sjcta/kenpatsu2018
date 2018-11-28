// vue.config.js
module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  lintOnSave: process.env.NODE_ENV !== 'production'
}
