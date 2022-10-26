import svgSprite from "gulp-svg-sprite";

export const svg = () => {
    return app.gulp.src(`${app.path.src.svg}`, {})

        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    example: true
                }
            }
        }))
        .pipe(app.gulp.dest(`${app.path.build.img}`))
}

