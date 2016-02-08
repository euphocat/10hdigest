var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: 'src'
    });
});

gulp.task('less', function() {
    gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['less', 'webserver', 'watch']);