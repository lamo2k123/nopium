#!/usr/bin/env node

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
    return _wrap("require('nopium')(" + JSON.stringify(envDirs) + ", " + pathTest + ", module);" + content);
};

require(pathRun);
