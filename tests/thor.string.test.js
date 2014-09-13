/*
 * ThorJs
 * https://github.com/renie/thorJs
 *
 * Copyright (c) 2014 Renie Siqueira
 * Licensed under the MPL, 2.0 licenses.
 */

describe('Testing THOR String functions:', function() {

	/**
	* TRIM
	*/
	it('TRIM - multiple and variable spaces', function () {
		var result = ' t  e s   t i  n g '.trim();
		expect(result).toEqual('testing');
	});

	it('TRIM - empty string', function () {
		var result = ''.trim();
		expect(result).toEqual('');
	});

	it('TRIM - no spaces at begin and end of string', function () {
		var result = 't  e s   t i  n g'.trim();
		expect(result).toEqual('testing');
	});

	it('TRIM - no spaces', function () {
		var result = 'testing'.trim();
		expect(result).toEqual('testing');
	});


	/**
	* LEFT TRIM
	*/
	it('LEFT TRIM - multiple and variable spaces', function () {
		var result = '   t  e s t i  n g   '.ltrim();
		expect(result).toEqual('t  e s t i  n g   ');
	});

	it('LEFT TRIM - no spaces on left side', function () {
		var result = 't  e s t i  n g   '.ltrim();
		expect(result).toEqual('t  e s t i  n g   ');
	});

	it('LEFT TRIM - no spaces on right side', function () {
		var result = '   t  e s t i  n g'.ltrim();
		expect(result).toEqual('t  e s t i  n g');
	});

	it('LEFT TRIM - empty string', function () {
		var result = ''.ltrim();
		expect(result).toEqual('');
	});

	it('LEFT TRIM - no spaces', function () {
		var result = 'testing'.ltrim();
		expect(result).toEqual('testing');
	});


	/**
	* RIGHT TRIM
	*/
	it('RIGHT TRIM - multiple and variable spaces', function () {
		var result = '   t  e s t i  n g   '.rtrim();
		expect(result).toEqual('   t  e s t i  n g');
	});

	it('RIGHT TRIM - no spaces on left side', function () {
		var result = 't  e s t i  n g   '.rtrim();
		expect(result).toEqual('t  e s t i  n g');
	});

	it('RIGHT TRIM - no spaces on right side', function () {
		var result = '   t  e s t i  n g'.rtrim();
		expect(result).toEqual('   t  e s t i  n g');
	});

	it('RIGHT TRIM - empty string', function () {
		var result = ''.rtrim();
		expect(result).toEqual('');
	});

	it('RIGHT TRIM - no spaces', function () {
		var result = 'testing'.rtrim();
		expect(result).toEqual('testing');
	});


	/**
	* IS EMPTY
	*/
	it('IS EMPTY - string with spaces', function () {
		var result = ' t  e s   t i  n g '.isEmpty();
		expect(result).toEqual(false);
	});

	it('IS EMPTY - no string or space', function () {
		var result = ''.isEmpty();
		expect(result).toEqual(true);
	});

	it('IS EMPTY - just spaces', function () {
		var result = '   '.isEmpty();
		expect(result).toEqual(true);
	});


	/**
	* TRUNCATE
	*/
	it('TRUNCATE - string with spaces', function () {
		var result = 'This is a testing string'.truncate(12, '', false);
		expect(result).toEqual('This is a');
	});

	it('TRUNCATE - string without spaces', function () {
		var result = 'Thisisatestingstring'.truncate(12, '', false);
		expect(result).toEqual('Thisisatestingstring');
	});

	it('TRUNCATE - string with spaces and suffix', function () {
		var result = 'This is a testing string'.truncate(12, '---', false);
		expect(result).toEqual('This is a---');
	});

	it('TRUNCATE - string without spaces and suffix', function () {
		var result = 'Thisisatestingstring'.truncate(12, '...', false);
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - string with spaces', function () {
		var result = 'This is a testing string'.truncate(12, '', true);
		expect(result).toEqual('This is a te');
	});

	it('TRUNCATE - string without spaces', function () {
		var result = 'Thisisatestingstring'.truncate(12, '', true);
		expect(result).toEqual('Thisisatesti');
	});

	it('TRUNCATE - string with spaces and suffix', function () {
		var result = 'This is a testing string'.truncate(12, '---', true);
		expect(result).toEqual('This is a te---');
	});

	it('TRUNCATE - string without spaces and suffix', function () {
		var result = 'Thisisatestingstring'.truncate(12, '...', true);
		expect(result).toEqual('Thisisatesti...');
	});

	it('TRUNCATE - size greater than string length', function () {
		var result = 'Thisisatestingstring'.truncate(58, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - size negative', function () {
		var result = 'Thisisatestingstring'.truncate(-2, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - size null', function () {
		var result = 'Thisisatestingstring'.truncate(-2, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - size undefined', function () {
		var result = 'Thisisatestingstring'.truncate(-2, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - size 0', function () {
		var result = 'Thisisatestingstring'.truncate(-2, '...');
		expect(result).toEqual('Thisisatestingstring...');
	});

	it('TRUNCATE - empty string', function () {
		var result = '   '.truncate();
		expect(result).toEqual('');
	});

	it('TRUNCATE - missing parameter', function () {
		var result = function() {
			'blablabla'.truncate('sizeerrado');
		};
		expect(result).toThrow(new Error('Number expected!'));
	});
});
