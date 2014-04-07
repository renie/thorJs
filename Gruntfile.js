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
			},
			'alltravis': {
				'configFile': 'karmaConfigs/karma.all.travis.conf.js'
			},
			'mintravis': {
				'configFile': 'karmaConfigs/karma.min.travis.conf.js'
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.loadNpmTasks('grunt-remove');
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
    
    // without tests
    grunt.registerTask('default', ['remove','jshint','concat:js','closure-compiler', 'karma:simple']);

    // with all tests
    grunt.registerTask('full', ['remove','jshint','karma:src','concat:js','karma:all','closure-compiler','karma:min']);

	// just tests
	grunt.registerTask('tests', ['karma:simple']);

	// with all tests
	grunt.registerTask('travis', ['remove','jshint','karma:simple','concat:js','karma:alltravis','closure-compiler','karma:mintravis']);

};