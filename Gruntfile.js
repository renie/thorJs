module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'concat': {
            js: {
                src: [
                    'src/thor.*.js'
                ],
                dest: 'src/thor.all.js'
            }
        },
        'closure-compiler': {
            frontend: {
                closurePath: 'node_modules/grunt-closure-compiler',
                js: 'src/thor.all.js',
                jsOutputFile: 'compiled/thor.min.js',
                maxBuffer: 500,
                noreport: true,
                options: {
                  compilation_level: 'SIMPLE_OPTIMIZATIONS'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.registerTask('default', ['concat:js','closure-compiler']);

};