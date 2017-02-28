# find-dir-path

[![NPM version](https://img.shields.io/npm/v/find-dir-path.svg?style=flat)](https://npmjs.com/package/find-dir-path) [![NPM downloads](https://img.shields.io/npm/dm/find-dir-path.svg?style=flat)](https://npmjs.com/package/find-dir-path) [![Build Status](https://img.shields.io/circleci/project/zcong1993/find-dir-path/master.svg?style=flat)](https://circleci.com/gh/zcong1993/find-dir-path)

> Find a directory by walking up parent directories

> based on [sindresorhus/find-up](https://github.com/sindresorhus/find-up), project template [egoist/template-nm](https://github.com/egoist/template-nm)

## Install

```bash
yarn add find-dir-path
```

## Usage

```
/
└── Users
        └── zcong1993
                ├── unicorn.png
                └── foo
                        └── bar
                        └── foo(file) ├── baz
                                      └── example.js
```

```js
// example.js
const findDirPath = require('find-dir-path')

findDirPath('foo')
  .then(path => {
    console.log(path)
    //=> '/Users/zcong1993/'
  })

findDirPath.sync('foo')
//=> '/Users/zcong1993/'
```

## API

### findDirPath(name, [options])
Returns a Promise for either the dirpath or null if it could be found.
### findDirPath.sync(name, [options])
Returns the first filepath found (by respecting the order) or null.
#### name
Type: `string`

Name of the directory to find.
#### options
##### cwd
Type: `string`<br>
Default: `process.cwd()`

Directory to start from.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**find-dir-path** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/find-dir-path/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
