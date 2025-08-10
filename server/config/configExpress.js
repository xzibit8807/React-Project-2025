const express = require(`express`);
const path = require(`path`);
const cookieParser = require(`cookie-parser`);

const {auth} = require(`../middleware/middleware`);

function configExpress(app){
    // app.use(express.static(path.resolve(`src/css`)))
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth);

    return app;
};

module.exports = configExpress;