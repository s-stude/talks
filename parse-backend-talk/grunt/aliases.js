module.exports = {

    default: [
//        'clean:distroot',
        'copy'
    ],

    live   : [
        'default',

        'connect:basic',

        'watch'
    ]
};