function customDir(dir) {
    if(dir) {
        module.paths = module.paths.concat(module.paths.map(function(path) {
            return path.replace('node_modules', dir)
        }));
    }

    return customDir;
}

module.exports = customDir(process.env.NOPIUM);