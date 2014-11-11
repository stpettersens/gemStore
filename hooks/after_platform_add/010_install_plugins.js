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
var sys = require('sys');
var exec = require('child_process').exec;

function puts(error, stdout, stderr)
	sys.puts(stdout);
}

plugins.forEach(function(plug) {
	exec("cordova plugin add " + plug, puts)
});
