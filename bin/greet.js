#!/usr/bin/env node
var parseArgs = require('minimist');
var greet = require('../index');
var argv = parseArgs(process.argv,opts={});
console.log(greet(argv._[2],argv.drunk));
