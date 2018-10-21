#!/usr/bin/env node

'use strict';

var child_process = require('child_process'),
	path = require('path');

var args = process.argv.slice(2),
	script = path.join(__dirname, 'bin', 'sonar-scanner'),
	command;

if (process.platform === 'win32') {
	command = 'cmd.exe';
	args = ['/c', (script + '.bat')].concat(args);
}
else {
	command = script;
}

var child = child_process.spawn(command, args, {
	stdio: 'inherit'
});

child.on('close', function(code) {
	process.exit(code);
});
