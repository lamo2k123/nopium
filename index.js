function customDir(dir) {
    module = arguments[1] || module;
    
    if(dir) {
        if(Array.isArray(dir)) {
            var test = [];

            for(var i in dir) {
                console.log(dir[i]);
                var paths = module.paths.map(function(path) {
                    if(/node_modules/.test(path)) {
                        return path.replace(/node_modules/g, dir[i]);
                    }
                });
                console.log(test);
                test = [].concat(test, paths);
            }

            module.paths = paths.concat(module.paths);
        } else {
            var paths = module.paths.map(function(path) {
                if(/node_modules/.test(path)) {
                    return path.replace(/node_modules/g, dir);
                }
            });

            module.paths = paths.concat(module.paths);
        }

        console.log(module.paths);
    }

    return customDir;
}

module.exports = customDir(process.env.NOPIUM_PATH);