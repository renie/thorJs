module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'remove':{
            options:{
                trace: true
            },
            fileList:['compiled/thor.all.js', 'compiled/thor.min.js']
        },
        /*'jasmine' : {
            'src':{
                src : ['src/thor.string.js','src/thor.validation.js','src/thor.dom.js'],
                options:{
                    specs : ['tests/thor.string.test.js','tests/thor.validation.test.js','tests/thor.dom.test.js']
                }
            },
            'all':{
                src : 'compiled/thor.all.js',
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
        },*/
        'jshint': {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        'concat': {
            js: {
                src: [
                    'src/thor.string.js',
                    'src/thor.dom.js',
                    'src/thor.validation.js'
                ],
                dest: 'compiled/thor.all.js'
            }
        },
        'closure-compiler': {
            frontend: {
                closurePath: 'node_modules/grunt-closure-compiler',
                js: 'compiled/thor.all.js',
                jsOutputFile: 'compiled/thor.min.js',
                maxBuffer: 500,
                noreport: true,
                options: {
                    compilation_level: 'SIMPLE_OPTIMIZATIONS'
                }
            }
        },
		'karma': {
			'simple': {
				'configFile': 'karmaConfigs/karma.simple.conf.js'
			},
			'src': {
				'configFile': 'karmaConfigs/karma.src.conf.js'
			},
			'all': {
				'configFile': 'karmaConfigs/karma.all.conf.js'
			},
			'min': {
				'configFile': 'karmaConfigs/karma.min.conf.js'
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-closure-compiler');
    //grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-remove');
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
    
    // without tests
    grunt.registerTask('default', ['remove','jshint','concat:js','closure-compiler', 'karma:simple']);

    // with all tests
    grunt.registerTask('full', ['remove','karma:src','jshint','concat:js','karma:all','closure-compiler','karma:min']);


	// just tests
	grunt.registerTask('tests', ['karma:simple']);
	//grunt.registerTask('src_validations', ['jasmine:src']);
	//grunt.registerTask('concat_validations', ['jasmine:all']);
	//grunt.registerTask('min_validations', ['jasmine:min']);


};