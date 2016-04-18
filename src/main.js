#!/usr/bin/env node

var templateLib = require('./plugin-template.js');

function showHelp() {
    console.error("Usage: phonegap-plugin-create DIRECTORY NAME");
    console.error("DIRECTORY : relative or absolute path to create the plugin in");
    console.error("    DIRECTORY will be created if it does not exist.");
    console.error("NAME : a name for your plugin, ex. cordova-plugin-myplugin");
}

var args = process.argv.slice(2);
if(args.length > 0) {
    var installPath = args[0];
    var pluginName = args[1];
    var pluginId = args[2]; // id is TODO:
    var result = templateLib.create(installPath,pluginName,pluginId);
    // TODO: check result for error, output some info if we were not successful
}
else {
    showHelp();
    process.exit(1);
}





