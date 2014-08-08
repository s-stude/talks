module.exports = {

    slides:{
        files:[
            {
                expand:true,
                cwd:'<%= vars.appdir %>/',
                src:['index.html'],
                dest:'<%= vars.distroot %>/'
            }
        ]
    },
    shower:{
        files:[
            {
                expand:true,
                cwd:'<%= vars.appdir %>/',
                src:['shower/**'],
                dest:'<%= vars.distroot %>/'
            }
        ]
    },
    assets:{
        files:[
            {
                expand:true,
                cwd:'<%= vars.appdir %>/',
                src:['pictures/**', 'css/**', 'js/**'],
                dest:'<%= vars.distroot %>/'
            }
        ]
    }
};
