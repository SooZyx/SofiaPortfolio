'use strict';

// browser-sync start --server 'static' --files 'static/' --port 9000 --no-ui
var fs = require('fs');
var path = require('path');
var browserSync = require('browser-sync');
var url = require('url');
var historyApiFallback = require('connect-history-api-fallback');

var folder = path.resolve(__dirname, "../static/");

var routes = []

var defaultFile = "index.html";

browserSync({
    files: 'static/',
    port: 9000,
    browser: 'google chrome',
    notify: true,
    reloadDelay: 300,
    minify: true,
    open: false,
    server: {
        baseDir: './static',
        index: 'index.html',
        host: 'localhost',
        //middleware: function (req, res, next) {
        //
        //    //if ( routes.indexOf( req.url ) !== -1 ) {
        //    //  req.url = "/index.html";
        //    //}
        //
        //    var fileName = url.parse(req.url);
        //    fileName = fileName.href.split(fileName.search).join("");
        //    var fileExists = fs.existsSync(folder + fileName);
        //    if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
        //        req.url = "/" + defaultFile;
        //    }
        //
        //    return next();
        //}
        middleware: [ historyApiFallback() ]

    }
});
