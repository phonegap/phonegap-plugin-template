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

    create:function(destPath,name,id,license) {

        var templatePath = getTemplatePath();
        // copy tempate files over
        shell.cp('-r',templatePath + "/.",destPath);
        var prev_cwd = process.cwd();
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
                contents = contents.replace("PLUGIN_LOWER_NAME",name.toLowerCase());
                contents = contents.replace("PLUGIN_ID",id);
                contents = contents.replace("PLUGIN_LICENSE",license);
                contents = contents.replace("PLUGIN_LOWER_ID",id.toLowerCase());
                fs.writeFileSync(fileName, contents);
            }
        }

        shell.cd(prev_cwd);

        // TODO: file names should be replacable as well.

    }
};
