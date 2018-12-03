// подключение галпа
const gulp = require('gulp'),
	  autoprefixer = require('gulp-autoprefixer'),
	  cleanCSS = require('gulp-clean-css'),
	  sourcemap = require('gulp-sourcemaps'),
	  less = require('gulp-less'),
	  browserSync = require('browser-sync').create();

// const $ = require("jquery");

// задачи, после которых обработанный файл попадает в папку с проектом
gulp.task('build', function(){
	return gulp.src('./less/*.css') 
		.pipe(sourcemap.init())
		.pipe(less())
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemap.write('./maps'))
		.pipe(gulp.dest('./css')) 
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('./less/*.less' , ['build']); 
});

gulp.task('browserSync', function(){
	browserSync.init({
		injectChanges: true,
		server: {
			// baseDir: config.root,  ВАЖНО МЕНЯТЬ КАЖДЫЙ РАЗ
			index: 'index.html'
		},
		tunnel: true
	})
});

//дабы сохранить всё это на будущее, надо написать npm init
//дабы перенести его в другую папку: npm up (--save-dev)