var SSH = require('simple-ssh');
var gulp = require('gulp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

var ssh = new SSH({
    host: '104.41.201.75',
    user: 'ftpuser',
    pass: 'kpjs.123',
    baseDir:'c:\\!\\www\\blog'
});

gulp.task('deploy', function(done) {

ssh.exec('git pull', {
    out: function(stdout) {
        console.log(stdout);
    },
    err: function(stderr) {
        console.log(stderr); // this-does-not-exist: command not found
    },
	exit: function(code) {
        console.log("EXIT: " + code);
    }
})
/*.exec('npm install', {
    out: function(stdout) {
        console.log(stdout);
		done(null);
		console.log("DONE");
    },
    err: function(stderr) {
        console.log(stderr); // this-does-not-exist: command not found
    },
	exit: function(code) {
        console.log("EXIT: " + code);
    }
})*/
.start();

});
