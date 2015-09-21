#!/usr/bin/env node
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var args = ['inspect', 'dev'];
var opts = { stdio: [0, 'pipe', 2] };
var dmac = spawn('docker-machine', args, opts);

var inputChunks = [];
dmac.stdout.on('data', inputChunks.push.bind(inputChunks));

dmac.on('close', function (code) {
	if (code === 0) {
		var input = JSON.parse(inputChunks.join());
		console.log('export DOCKER_TLS_VERIFY=1');
		console.log('export DOCKER_CERT_PATH="%s"', input.StorePath);
		console.log('export DOCKER_HOST="tcp://%s:2376/"', input.Driver.IPAddress);
		console.log('export DOCKER_MACHINE_NAME="%s"', input.Driver.MachineName);
		console.log('# Run this command to configure your shell:');
		console.log('# eval "$(fast-docker-machine-env)"');
	}
	process.exit(code);
});
