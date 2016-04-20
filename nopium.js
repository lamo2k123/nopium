var path = require('path');
var Module = require('module');

var _wrap = Module.wrap;
var envTest = /^npm_package_nopium_[\d]+$/;
var envKeys = Object.keys(process.env);
var envDirs = envKeys.filter(function (key) {
    return envTest.test(key);
});
var pathTest = /node_modules/g;
var pathRun = path.join(process.cwd(), process.argv[2]);

process.argv.splice(1, 1);

Module.wrap = function (content) {
    return _wrap('\n    global.nopium(module);\n    ' + content + '\n');
};

global.nopium = function (module) {
    if (envDirs.length && module) {
        var _ref;

        var paths = envDirs.map(function (key) {
            return module.paths.map(function (path) {
                if (pathTest.test(path)) {
                    return path.replace(pathTest, process.env[key]);
                }
            });
        });

        module.paths = (_ref = []).concat.apply(_ref, paths.concat([module.paths]));
    }
};

require(pathRun);
