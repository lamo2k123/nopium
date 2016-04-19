# Nopium
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/lamo2k123/nopium/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/express.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/nopium)
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
    "my_dev_modyles",
    ...
  ]
}
```

## License
[MIT](LICENSE.md)
