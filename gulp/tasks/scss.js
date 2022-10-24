import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { soursemaps: true })

        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}