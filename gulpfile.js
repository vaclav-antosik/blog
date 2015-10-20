var SSH = require('simple-ssh');
var gulp = require('gulp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

var ssh = new SSH({
    host: '104.41.201.75',
    user: 'ftpuser',
    pass: 'kpjs.123'
});

gulp.task('deploy', function(done) {
    ssh.exec('powershell -File "deploy.ps1"', {
        out: function(stdout) {
            console.log(stdout);
        },
        err: function(stderr) {
            console.log(stderr); 
        },
        exit: function(code) {
            console.log("EXIT: " + code);
        }
    });
});
