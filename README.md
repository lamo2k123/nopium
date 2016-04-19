# Nopium

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