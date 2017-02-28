const path = require('path')
const fs = require('fs')
const findUp = require('find-up')

function isDir(tmp) {
  return new Promise((resolve, reject) => {
    fs.stat(tmp, (err, stats) => {
      if (err) {
        return reject(err)
      }
      return resolve(stats.isDirectory() ? tmp : false)
    })
  })
}

function isDirSync(tmp) {
  return fs.statSync(tmp).isDirectory()
}

module.exports = (dirname, opts = {}) => {
  return findUp(dirname, opts)
    .then(fp => {
      if (fp) {
        return isDir(fp)
      }
      return null
    })
    .then(fp => {
      if (fp) {
        return path.dirname(fp)
      }
      return null
    })
}

module.exports.sync = (dirname, opts = {}) => {
  const fp = findUp.sync(dirname, opts)
  return isDirSync(fp) ? path.dirname(fp) : null
}
