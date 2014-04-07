/* exported trim, ltrim, rtrim, isEmpty*/
/**
 * Created by Renie Siqueira.
 */

/**
 * Function for removing every single space of the string
 * @param string
 * @returns {string}
 */
function trim(string) {
	'use strict';

	if (typeof string !== 'string' )
		throw new Error('String expected!');
	return string.replace(/\s+/g,'');
}

/**
 * Function for removing spaces BEFORE any string
 * @param string
 * @returns {string}
 */
function ltrim(string) {
	'use strict';

	if (typeof string !== 'string' )
		throw new Error('String expected!');
	return string.replace(/^\s+/,'');
}

/**
 * Function for removing spaces AFTER any string
 * @param string
 * @returns {string}
 */
function rtrim(string) {
	'use strict';

	if (typeof string !== 'string' )
		throw new Error('String expected!');

	return string.replace(/\s+$/,'');
}

/**
 * Function for verifying if a string is empty
 * @param string
 * @returns {boolean}
 */
function isEmpty(string) {
	'use strict';

	if (string === null || string === undefined)
		return true;

	if (typeof string !== 'string' )
		throw new Error('String expected!');
	return (string === null || string === undefined || string.replace(/\s+/g,'').length < 1);
}