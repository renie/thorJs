/* exported trim, ltrim, rtrim, isEmpty, truncate*/
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
	return (string.replace(/\s+/g,'').length < 1);
}

/**
 * Function for breaking a string in an specified size
 * @param string
 * @returns {string}
 */
function truncate(string, size, suffix, breakword) {

	if (typeof string !== 'string' )
		throw new Error('String expected!');

	if (string.replace(/\s+/g, '').length < 1)
		return '';

	suffix = suffix || '';
	size = size || 0;
	if (typeof size !== 'number' )
		throw new Error('Number expected!');

	if (size < 1)
		return string + suffix;

	if (breakword || string.length < size) {
		var r = new RegExp('^(.{' + size.toString() + '}\\s*).*$');
		return string.replace(r, '$1') + suffix;
	} else if(string.length > size) {

		if (string.lastIndexOf(' ') !== -1) {
			string = string.substring(0, size + 1);
			string = string.substring(0, Math.min(string.length, string.lastIndexOf(' ')));
		}
		string = string + suffix;
		return string;
	}

}