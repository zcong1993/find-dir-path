const path = require('path')
const fs = require('fs')
const findUp = require('find-up')

function isDir(tmp) {
  return new Promise((resolve, reject) => {
    fs.stat(tmp, (err, stats) => {
      if (err) {
        return reject(err)
      }
      return resolve(stats.isDirectory())
    })
  })
}

function isDirSync(tmp) {
  return fs.statSync(tmp).isDirectory()
}

module.exports = async function findDir(dirname, opts = {}) {
  const root = path.parse(dirname).root
  const fp = await findUp(dirname, opts)
  if (!fp) {
    return null
  }
  const _isDir = await isDir(fp)
  if (_isDir) {
    return path.dirname(fp)
  } else if (path.dirname(fp) !== root) {
    return findDir(dirname, {cwd: path.dirname(path.dirname(fp))})
  }
  return null
}

module.exports.sync = (dirname, opts = {}) => {
  const root = path.parse(dirname).root
  const fp = findUp.sync(dirname, opts)

  if (fp) {
    if (isDirSync(fp)) {
      return path.dirname(fp)
    } else if (path.dirname(fp) !== root) {
      return module.exports.sync(dirname, {cwd: path.dirname(path.dirname(fp))})
    }
    return null
  }
  return null
}
