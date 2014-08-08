module.exports = {
    slides: {
        files: ['<%= vars.appdir %>/index.html'],
        tasks: ['copy:slides'],
        options: {
            livereload: true
        }
    }
};