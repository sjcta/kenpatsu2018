// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/event/kenpatsu2018/'
    : '/'
}