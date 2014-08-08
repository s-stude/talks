module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        config: {
            pkg: grunt.file.readJSON('package.json'),
            vars: {
                appdir: './',

                dist: 'wwwroot/',
                distroot: 'wwwroot/',
                connectroot: 'wwwroot'
            }
        }
    });
};