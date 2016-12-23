exports = module.exports = function (grunt, options) {
	var host = 'localhost';

	if (process.env.REMOTE_TESTSERVER_HOST) {
		host = process.env.REMOTE_TESTSERVER_HOST;
	}

	function mapToUrl(files, port) {
		return grunt.file.expand(files).map(function (file) {
			return 'http://' + host + ':' + port + '/' + file;
		});
	}

	return {
		options: options,
		unit: {
			options: {
				log: true,
				urls: [
					'http://' + host + ':<%= connect.test.options.port %>/test/core/',
					'http://' + host + ':<%= connect.test.options.port %>/test/checks/',
					'http://' + host + ':<%= connect.test.options.port %>/test/rule-matches/',
					'http://' + host + ':<%= connect.test.options.port %>/test/commons/',
					'http://' + host + ':<%= connect.test.options.port %>/test/integration/rules/'
				],
				run: true,
				mocha: {
					grep: grunt.option('grep')
				}
			}
		},
		unitmobile: {
			options: {
				log: true,
				urls: [
					'http://' + host + ':<%= connect.test.options.port %>/test/core/',
					'http://' + host + ':<%= connect.test.options.port %>/test/checks/',
					'http://' + host + ':<%= connect.test.options.port %>/test/rule-matches/',
					'http://' + host + ':<%= connect.test.options.port %>/test/commons/',
					'http://' + host + ':<%= connect.test.options.port %>/test/integration/rules/'
				],
				run: true,
				mocha: {
					grep: grunt.option('grep')
				},
				view: '400x800' //tell phantomjs to use a mobile width
			}
		},
		integration: {
			options: {
				log: true,
				urls: mapToUrl(['test/integration/full/**/*.html', '!test/integration/full/**/frames/**/*.html'],
					'<%= connect.test.options.port %>'),
				run: true,
				mocha: {
					grep: grunt.option('grep')
				}
			}
		},
		integrationmobile: {
			options: {
				log: true,
				urls: mapToUrl(['test/integration/full/**/*.html', '!test/integration/full/**/frames/**/*.html'],
					'<%= connect.test.options.port %>'),
				run: true,
				mocha: {
					grep: grunt.option('grep')
				},
				view: '400x800' //tell phantomjs to use a mobile width
			}
		}
	};
};
