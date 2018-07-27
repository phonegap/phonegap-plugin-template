
phonegap-plugin-template
------------------------

This is a tool for generating new plugins for use in PhoneGap / Apache Cordova applications.
Much of the work to start authoring a new plugin can be automated, so that is the goal of this tool.


How to use it
===

    // install it ( from github for now )
    npm install -g phonegap/phonegap-plugin-template

    // use it
    // Usage: phonegap-plugin-create DIRECTORY NAME ID License
    // DIRECTORY : relative or absolute path to create the plugin in
    //// Note: DIRECTORY will be created if it does not exist.
    // NAME : a name for your plugin, ex. cordova-plugin-myplugin  
    // ID : the id of your plugin
    // LICENSE: the license for your app, default is MIT
    
    //basic usage using directory and name params only
    //plugin id will be set to plugin name
    //will prompt for license    
    phonegap-plugin-create ~/MyNewPlugin MyNewPlugin 
    
    //full usage using directory, name, id and license params    
    phonegap-plugin-create ~/MyNewPlugin MyNewPlugin PluginID PluginLicense
 
Use it as a module
===

    npm install --save phonegap/phonegap-plugin-template

    var templateLib = require('phonegap-plugin-template');
    
    var result = templateLib.create(installPath,pluginName);

