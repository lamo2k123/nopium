#!/usr/bin/env node --use_strict

const path      = require('path');
const Module    = require('module');

const _wrap     = Module.wrap;
const envTest   = /^npm_package_nopium_[\d]+$/;
const envKeys   = Object.keys(process.env);
const envDirs   = envKeys.filter(key => envTest.test(key));
const pathTest  = /node_modules/g;
const pathRun   = path.join(process.cwd(), process.argv[2]);

process.argv.splice(1,1);

Module.wrap = content => _wrap(`
    global.nopium(module);
    ${content}
`);


global.nopium = module => {
    if(envDirs.length && module) {
        let paths = envDirs.map(key => {
            return module.paths.map(path => {
                if(pathTest.test(path)) {
                    return path.replace(pathTest, process.env[key]);
                }
            });
        });

        module.paths = [].concat(...paths, module.paths);
    }
};

require(pathRun);