/*exported trim, ltrim, rtrim, isEmpty*/
/*
 *
 * String functions
 *
 */

//for removing space from a string
function trim(string) {
	'use strict';

	if(typeof string !== 'string' )
		throw new Error('String expected!');
	return string.replace(/\s+/g,'');
}

//for removing spaces BEFORE from any string
function ltrim(string) {
	'use strict';
	
	if(typeof string !== 'string' )
		throw new Error('String expected!');
	return string.replace(/^\s+/,'');
}

// for remove spaces AFTER from any string
function rtrim(string) {
	'use strict';
	
	if(typeof string !== 'string' )
		throw new Error('String expected!');
	return string.replace(/\s+$/,'');
}

// Verify if a string is empty
function isEmpty(string) {
	'use strict';
	
	if(typeof string !== 'string' )
		throw new Error('String expected!');
	return (string === null || string === undefined || string.replace(/\s+/g,'').length < 1);
}