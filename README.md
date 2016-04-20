# Nopium
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/lamo2k123/nopium/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/nopium.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/nopium)
[![Travis](https://img.shields.io/travis/lamo2k123/nopium.svg?maxAge=2592000?style=flat-square)](https://travis-ci.org/lamo2k123/nopium)
## Installation
local
```bash
$ npm install nopium
```
global
```bash
$ npm install nopium -g
```

## Used
```bash
$ nopium ./my-script.js
```

## Configuring
Add `nopium` key in `package.json` with an array of directories.
```javascript
{
  "name": "my-module",
  "version": "0.0.0",
  ...
  "nopium": [
    "my_modules",
    "my_dev_modules",
    ...
  ]
}
```

## License
[MIT](LICENSE.md)
