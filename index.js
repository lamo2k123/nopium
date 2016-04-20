module.exports = function(dirs, test, module) {
    if(dirs.length && module) {
        var _ref;

        var paths = dirs.map(function(dir) {
            return module.paths.map(function(path) {
                if(test.test(path)) {
                    return path.replace(test, process.env[dir]);
                }
            });
        });

        module.paths = (_ref = []).concat.apply(_ref, paths.concat([module.paths]));
    }
};