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
})
  .on('error', (err) => {
    if (err && err.code === 'ENOENT') {
      console.error(`Error: "surge" executable not found\n`);
      console.log(`Make sure you have installed surge first: npm -g install surge`);
      process.exit(1);
    }
  });
