module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'remove':{
            options:{
                trace: true
            },
            fileList:['src/thor.all.js', 'compiled/thor.min.js']
        },
        'jasmine' : {
            'src':{
                src : ['src/thor.string.js','src/thor.validation.js','src/thor.dom.js'],
                options:{
                    specs : ['tests/thor.string.test.js','tests/thor.validation.test.js','tests/thor.dom.test.js']
                }
            },
            'all':{
                src : 'src/thor.all.js',
                options:{
                    specs : ['tests/thor.string.test.js','tests/thor.validation.test.js','tests/thor.dom.test.js']
                }
            },
            'min':{
                src : 'compiled/thor.min.js',
                options:{
                    specs : ['tests/thor.string.test.js','tests/thor.validation.test.js','tests/thor.dom.test.js']
                }
            }
        },
        'concat': {
            js: {
                src: [
                    'src/thor.string.js',
                    'src/thor.dom.js',
                    'src/thor.validation.js',
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
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-remove');

    // without tests
    grunt.registerTask('default', ['remove','concat:js','closure-compiler']);
    
    // with all tests
    grunt.registerTask('full', ['remove','jasmine:src','concat:js','jasmine:all','closure-compiler','jasmine:min']);
    
    // just tests
    grunt.registerTask('src_validations', ['jasmine:src']);
    grunt.registerTask('concat_validations', ['jasmine:all']);
    grunt.registerTask('min_validations', ['jasmine:min']);

};