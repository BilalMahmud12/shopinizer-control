const gulp = require("gulp");
const del = require("del");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const livereload = require("gulp-livereload");

const paths = {
  pugPages: "src/pages/*.pug",
  pug: "src/**/*.pug",
  scss: "src/assets/scss/**/*.scss",
  scripts: "src/assets/scripts/**/*.js",
  fonts: "src/assets/fonts/**/*",
  images: "src/assets/images/**/*"
};

// Clean dist folder
function clean() {
  return del(["dist"]);
}

function html() {
  return gulp
    .src(paths.pugPages)
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
}

function css() {
  return gulp
    .src(paths.scss)
    .pipe(sass())
    .pipe(
      postcss([
        require("tailwindcss"),
        //require("@fullhuman/postcss-purgecss")({
        //  content: ["./src/**/*.pug"],
        //  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        //}),
        require("autoprefixer")
        //require("cssnano")
      ])
    )
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(livereload());
}

function js() {
  return gulp
    .src(paths.scripts, { sourcemaps: true })
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("dist/assets/javascripts", { sourcemaps: true }))
    .pipe(livereload());
}

function images() {
  return gulp
    .src(paths.images)
    .pipe(gulp.dest("dist/assets/images"))
    .pipe(livereload());
}

function fonts() {
  return gulp
    .src(paths.fonts)
    .pipe(gulp.dest("dist/assets/fonts"))
    .pipe(livereload());
}

function watchFiles() {
  livereload.listen();
  gulp.watch(paths.pug, gulp.parallel(html, css));
  gulp.watch(paths.scss, css);
  gulp.watch(paths.scripts, js);
  gulp.watch(paths.images, images);
  gulp.watch(paths.fonts, fonts);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watch = gulp.parallel(build, watchFiles);

exports.build = build;
exports.watch = watch;
