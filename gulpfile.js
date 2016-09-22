var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    imagemin    = require('gulp-imagemin'),
    changed     = require('gulp-changed'),
    browserSync = require('browser-sync');
 
gulp.task('sass', function () {
    gulp.src('./sass/style.scss')
        .pipe(sass({compass: true}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('./css'));
});
 
gulp.task('jpg', function() {
    gulp.src('./img/**/*.jpg')
        .pipe(changed('./img/'))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./img/'));
});
 
gulp.task('browser-sync', function() {
    browserSync.init(['./*.html', './css/*.css', './js/*.js'], {
        server: {
            baseDir: './',
            index: './index.html'
        }
    });
});
 
gulp.task('watch', ['sass', 'browser-sync'], function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});