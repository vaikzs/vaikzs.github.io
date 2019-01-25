var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');

gulp.task('clean', function() {
    return del([
        'generated/**/*'
    ])
});

gulp.task('generate-zip', function() {
    return gulp.src(['**/*','!node_modules', '!node_modules/**','!generated','!generated/**'])
        .pipe(zip('vaikzs.github.io.zip'))
        .pipe(gulp.dest('generated'));
});

gulp.task('default', gulp.series('clean', 'generate-zip'));
