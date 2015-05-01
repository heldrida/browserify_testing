var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function () {

	gulp.src('js/main.js')
	 .pipe(browserify({
		 insertGlobals: true,
		 debug: true
	 }))
	 .pipe(gulp.dest('./build/js'));

});
