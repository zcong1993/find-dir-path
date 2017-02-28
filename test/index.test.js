const path = require('path')
const findDirPath = require('../')

test('main', () => {
  expect(typeof findDirPath).toBe('function')
})

test('main async', () => {
  findDirPath('node_modules')
    .then(res => {
      expect(res).toBe(path.resolve(__dirname, '../'))
    })
  findDirPath('package.json')
    .then(res => {
      expect(res).toBe(null)
    })
})

test('main sync', () => {
  expect(findDirPath.sync('node_modules')).toBe(path.resolve(__dirname, '../'))
  expect(findDirPath.sync('package.json')).toBe(null)
})
