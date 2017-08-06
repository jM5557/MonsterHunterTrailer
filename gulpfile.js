'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./src/scss/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('precompile', function () {
	return gulp.src('./src/templates-handlebars/**/*.handlebars')
		.pipe(shell('npm run build'))
});

gulp.task('watch', function () {
	gulp.watch('./src/scss/**/*.scss', ['sass']);
	gulp.watch('./src/templates-handlebars/**/*.handlebars', ['precompile']);

});