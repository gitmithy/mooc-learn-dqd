const {src,dest,series,watch}=require('gulp')
const del=require('del')
const plugins=require('gulp-load-plugins')()
function js(cb){
    src('js/*.js')
    .pipe(plugins.uglify())
    .pipe(dest('./dist/js'));
    cb();
}
function css(cb) { 
    src('css/*.scss')
    .pipe(plugins.sass({outputStyle:'compressed'}))
    .pipe(plugins.autoprefixer({
        cascade:false,
        remove:false
    }))
    .pipe(dest('./dist/css'))
    cb();
}
function watcher(cb){
    watch('js/*.js',js)
    watch('css/*.scss',css);
    cb();
}
function clean(cb){
    del('./dist');
    cb();
}
exports.scripts=js;
exports.clean=clean;
exports.style=css;
exports.watch=watcher;
exports.default=series([
    clean,
    js,
    css,
    watcher
])