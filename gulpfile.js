var SSH = require('simple-ssh');
var gulp = require('gulp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

var ssh = new SSH({
    host: args.address,
    user: args.user,
    pass: args.password
});

gulp.task('deploy', function(done) {

ssh.exec('powershell -file deploy.ps1', {
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
.start();

});
