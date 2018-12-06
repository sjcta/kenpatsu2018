// vue.config.js
module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },

  baseUrl: '/micro/hcrd/kenpatsu2018/',
  lintOnSave: false,
  outputDir: undefined,
  assetsDir: 'assets',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
}
