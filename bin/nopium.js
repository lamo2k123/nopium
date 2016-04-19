#!/usr/bin/env node

var path    = require('path'),
    Module  = require('module'),

    pathRun = path.join(process.cwd(), process.argv[2]),
    filter  = /^npm_package_nopium_[\d]+$/,
    packKeys= Object.keys(process.env),
    nopium  = packKeys.filter(function(item) {
        return filter.test(item);
    });

nopium = nopium.map(function(item) {
    return process.env[item];
});

process.argv.splice(1,1);

Module._originWrap = Module.wrap;
Module.wrap = function(script) {
    return Module._originWrap("var nopium = require('nopium'); !/nopium/.test(module.id) && nopium(" + JSON.stringify(nopium) + ", module);" + script);
};

console.log('NOPIUM RUNNING', pathRun);
require(pathRun);
