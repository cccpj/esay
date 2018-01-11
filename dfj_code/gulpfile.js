var gulp = require('gulp')
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var babel = require('gulp-babel')

gulp.task('cssTask', function(){
	gulp.src('src/css/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));
});

gulp.task('jsTask', function(){
	gulp.src('src/js/*.js')
	.pipe(babel({'presets':['es2015']}))
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'));
});

gulp.task('default', ['cssTask', 'jsTask']);