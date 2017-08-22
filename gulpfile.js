var gulp = require('gulp'),
	util = require('gulp-util'),
	vftp = require('vinyl-ftp');

gulp.task('default', function() {
	var conn = vftp.create({
		host: 'paulmakesthe.net',
		user: 'username',
		pass: 'password',
		parallel: 8,
		log: util.log
	}),
	globs = 'www/**';

	return gulp.src(globs, { buffer: false })
		  .pipe(conn.newer('/public_html/resume'))
		  .pipe(conn.dest('/public_html/resume'));
});
