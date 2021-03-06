const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const compile = gulpSass(require("sass"));

gulp.task("sass", async () => {
  gulp
    .src("src/components/**/*.scss")
    .pipe(compile())
    .pipe(gulp.dest("src/css"));

  //moveing the scs fils To css Folder
  gulp.src("src/*.scss").pipe(compile()).pipe(gulp.dest("src/css"));

  //moveing the jsx fils To pages Folder
  gulp
    .src("src/components/**/*.jsx")

    .pipe(gulp.dest("src/pages"));
});

gulp.task("watching", () => {
  gulp.watch("src/components/**/*.scss", async () => {
    gulp
      .src("src/components/**/*.scss")
      .pipe(compile())
      .pipe(gulp.dest("src/css"));
  });

  gulp.watch("src/*.scss", async () => {
    gulp.src("src/*.scss").pipe(compile()).pipe(gulp.dest("src/css"));
  });
});
