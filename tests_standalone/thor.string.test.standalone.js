/* globals Thor */
describe('Testing THOR String functions:', function() {

	/**
	* TRIM
	*/
	it('TRIM - multiple and variable spaces', function () {
		var result = Thor.String.trim(' t  e s   t i  n g ');
		expect(result).toEqual('testing');
	});

	it('TRIM - empty string', function () {
		var result = Thor.String.trim('');
		expect(result).toEqual('');
	});

	it('TRIM - no spaces at begin and end of string', function () {
		var result = Thor.String.trim('t  e s   t i  n g');
		expect(result).toEqual('testing');
	});

	it('TRIM - no spaces', function () {
		var result = Thor.String.trim('testing');
		expect(result).toEqual('testing');
	});


	/**
	* LEFT TRIM
	*/
	it('LEFT TRIM - multiple and variable spaces', function () {
		var result = Thor.String.ltrim('   t  e s t i  n g   ');
		expect(result).toEqual('t  e s t i  n g   ');
	});

	it('LEFT TRIM - no spaces on left side', function () {
		var result = Thor.String.ltrim('t  e s t i  n g   ');
		expect(result).toEqual('t  e s t i  n g   ');
	});

	it('LEFT TRIM - no spaces on right side', function () {
		var result = Thor.String.ltrim('   t  e s t i  n g');
		expect(result).toEqual('t  e s t i  n g');
	});

	it('LEFT TRIM - empty string', function () {
		var result = Thor.String.ltrim('');
		expect(result).toEqual('');
	});

	it('LEFT TRIM - no spaces', function () {
		var result = Thor.String.ltrim('testing');
		expect(result).toEqual('testing');
	});


	/**
	* RIGHT TRIM
	*/
	it('RIGHT TRIM - multiple and variable spaces', function () {
		var result = Thor.String.rtrim('   t  e s t i  n g   ');
		expect(result).toEqual('   t  e s t i  n g');
	});

	it('RIGHT TRIM - no spaces on left side', function () {
		var result = Thor.String.rtrim('t  e s t i  n g   ');
		expect(result).toEqual('t  e s t i  n g');
	});

	it('RIGHT TRIM - no spaces on right side', function () {
		var result = Thor.String.rtrim('   t  e s t i  n g');
		expect(result).toEqual('   t  e s t i  n g');
	});

	it('RIGHT TRIM - empty string', function () {
		var result = Thor.String.rtrim('');
		expect(result).toEqual('');
	});

	it('RIGHT TRIM - no spaces', function () {
		var result = Thor.String.rtrim('testing');
		expect(result).toEqual('testing');
	});


	/**
	* IS EMPTY
	*/
	it('IS EMPTY - string with spaces', function () {
		var result = Thor.String.isEmpty(' t  e s   t i  n g ');
		expect(result).toEqual(false);
	});

	it('IS EMPTY - no string or space', function () {
		var result = Thor.String.isEmpty('');
		expect(result).toEqual(true);
	});

	it('IS EMPTY - just spaces', function () {
		var result = Thor.String.isEmpty('   ');
		expect(result).toEqual(true);
	});


	/**
	* TRUNCATE
	*/
	it('TRUNCATE - string with spaces', function () {
		var result = Thor.String.truncate('This is a testing string', 12, '', false);
		expect(result).toEqual('This is a');
	});

	it('TRUNCATE - string without spaces', function () {
		var result = Thor.String.truncate('Thisisatestingstring', 12, '', false);
		expect(result).toEqual('Thisisatestingstring');
	});

	it('TRUNCATE - string with spaces and suffix', function () {
		var result = Thor.String.truncate('This is a testing string', 12, '---', false);
		expect(result).toEqual('This is a---');
	});

	it('TRUNCATE - string without spaces and suffix', function () {
		var result = Thor.String.truncate('Thisisatestingstring', 12, '...', false);
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - string with spaces', function () {
		var result = Thor.String.truncate('This is a testing string', 12, '', true);
		expect(result).toEqual('This is a te');
	});

	it('TRUNCATE - string without spaces', function () {
		var result = Thor.String.truncate('Thisisatestingstring', 12, '', true);
		expect(result).toEqual('Thisisatesti');
	});

	it('TRUNCATE - string with spaces and suffix', function () {
		var result = Thor.String.truncate('This is a testing string', 12, '---', true);
		expect(result).toEqual('This is a te---');
	});

	it('TRUNCATE - string without spaces and suffix', function () {
		var result = Thor.String.truncate('Thisisatestingstring', 12, '...', true);
		expect(result).toEqual('Thisisatesti...');
	});

	it('TRUNCATE - size greater than string length', function () {
		var result = Thor.String.truncate('Thisisatestingstring', 58, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - size negative', function () {
		var result = Thor.String.truncate('Thisisatestingstring', -2, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - size null', function () {
		var result = Thor.String.truncate('Thisisatestingstring', -2, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - size undefined', function () {
		var result = Thor.String.truncate('Thisisatestingstring', -2, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - size 0', function () {
		var result = Thor.String.truncate('Thisisatestingstring', -2, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - empty string', function () {
		var result = Thor.String.truncate('   ');
		expect(result).toEqual('');
	});

	it('TRUNCATE - missing parameter', function () {
		var result = function() {
			Thor.String.truncate('blablabla', 'sizeerrado');
		};
		expect(result).toThrow(new Error('Number expected!'));
	});
});
