#!/usr/bin/env node

'use strict';

var child_process = require('child_process'),
    path = require('path');

if (process.platform === 'win32') {
    process.exit(0);
}

var script = path.join(__dirname, 'bin', 'sonar-scanner'),
    command = 'chmod',
    args = ['+x', script];

var child = child_process.spawn(command, args, {
    stdio: 'inherit'
});

child.on('close', function(code) {
    process.exit(code);
});
