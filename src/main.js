#!/usr/bin/env node

var templateLib = require('./plugin-template.js');
var prompt = require( 'inquirer' ).prompt;
var validateLicense = require('validate-npm-package-license');

main();

function main() {
    var args = process.argv.slice(2);
    if(args.length > 0) {
        var installPath = args[0];
        var pluginName = args[1];
        var pluginId = args[2];

        var options = { 'message' : 'license',
                        'name'    : 'license',
                        'default' : 'MIT',
                        'validate': isValidLicense
                       };

        prompt([options]).then(function(result) {
            templateLib.create(installPath,pluginName,pluginId,result.license);
        });
    }
    else {
        showHelp();
        process.exitCode = 1;
    }
}

function showHelp() {
    console.error("Usage: phonegap-plugin-create DIRECTORY NAME ID");
    console.error("DIRECTORY : relative or absolute path to create the plugin in");
    console.error("    DIRECTORY will be created if it does not exist.");
    console.error("NAME : a name for your plugin, ex. MyPlugin");
    console.error("ID   : the unique id of your plugin, ex. myorg-plugin-myplugin");
}

function errorsFromResult(res) {
    var errors = [].concat(res.errors || []).concat(res.warnings || []);
    var err = new Error('Oops, ' + errors.join(' \n and '));
    return err;
}

// this returns a result the way inquirer.prompt expects it, bool-true or an error
function isValidLicense(data) {
    var result = validateLicense(data);
    return result.validForNewPackages || errorsFromResult(result);
}
