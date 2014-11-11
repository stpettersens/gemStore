#!/usr/bin/env node

/*
	This hook installs all required plugins.
*/

// Add the plugins to this list -- either by
// the identifier, the filesystem location or the URL.
var pluginList = [
	"com.chariotsolutions.toast.plugin",
	"org.apache.cordova.inappbrowser"
];

// No need to configure below.

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

pluginList.forEach(function(plugin) {
	exec("cordova plugin add " + plugin)
});
