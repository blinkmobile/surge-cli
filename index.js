'use strict';

// Node.js built-ins

const childProcess = require('child_process');

// this module

const surgeArgs = process.argv.slice(2).join(' ');

childProcess.spawn('surge', process.argv.slice(2), {
  cwd: process.cwd(),
  detached: false,
  env: process.env,
  stdio: 'inherit'
});
