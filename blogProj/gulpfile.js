// подключение галпа
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const browserSync = require('browser-sync');
const cleanCss = require('gulp-clean-css');
const nodemon = require('gulp-nodemon');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');

gulp.task('build', () => {
  return (
    gulp
      .src('dev/scss/**/style.scss')
      .pipe(sass())
      .pipe(
        autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
          cascade: true
        })
      ).pipe(cleanCss())
      .pipe(gulp.dest('public/styles/'))
  );
});

gulp.task('start', function (done) {
  nodemon({
    script: 'app.js', 
    ext: 'js html', 
    env: { 'NODE_ENV': 'development' }, 
    done: done
  })
});

gulp.task('scripts', () =>
  gulp
    .src([
      'dev/js/auth.js',
      'dev/js/post.js',
      'dev/js/comment.js'
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/scripts'))
);

gulp.task('watch', ['build', 'scripts', 'start'], () => {
  gulp.watch('dev/scss/**/*.scss', ['build']);
  gulp.watch('dev/js/**/*.js', ['scripts']);
});

//дабы сохранить всё это на будущее, надо написать npm init
//дабы перенести его в другую папку: npm up (--save-dev)