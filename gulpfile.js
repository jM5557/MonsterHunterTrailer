'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const shell = require('gulp-shell');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./src/scss/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('precompile', function () {
	return gulp.src('./src/templates-handlebars/**/*.handlebars')
		.pipe(shell('npm run build'))
});

gulp.task('minifyJS', function () {
	return gulp.src('./src/js/**/*.js')
	.pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
    }))
    .pipe(gulp.dest('./dist/assets/js'))
});

gulp.task('watch', function () {
	gulp.watch('./src/scss/**/*.scss', ['sass']);
	gulp.watch('./src/templates-handlebars/**/*.handlebars', ['precompile']);

});