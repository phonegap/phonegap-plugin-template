#!/usr/bin/env node

var shell = require('shelljs');
var path = require('path');
var fs = require('fs');

function getTemplatePath() {
    var currPath = path.dirname(require.resolve('../'));
    var parPath = path.resolve(currPath + '/../template/');
    return parPath;
}


module.exports = {
    create:function(destPath,name,id) {
        
        var templatePath = getTemplatePath();
        // copy tempate files over
        shell.cp('-r',templatePath + "/.",destPath);
        // go there, and get a list of all the files
        shell.cd(destPath);
        var files = shell.find('.');
        
        // TODO: clean up / validate these values
        var safeName = name || "PLUGIN_NAME";
        var safeId = id || "PLUGIN_ID";
        
        for (var n = 0; n < files.length; n++) {
            var fileName = files[n];
            if (fs.lstatSync(fileName).isFile()) {
                var contents = fs.readFileSync(fileName, 'utf-8');
                contents = contents.replace("PLUGIN_NAME",name);
                contents = contents.replace("PLUGIN_ID",id);
                fs.writeFileSync(fileName, contents);
            }
        }

        // TODO: file names should be replacable as well.
        
    }
};
