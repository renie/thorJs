/* exported trim, ltrim, rtrim, isEmpty, truncate*/
/*
 * ThorJs
 * https://github.com/renie/thorJs
 *
 * Copyright (c) 2014 Renie Siqueira
 * Licensed under the MPL, 2.0 licenses.
 */

/**
 * Function for removing every single space of the string
 * @returns {string}
 */
String.prototype.trim = function() {
	'use strict';
	return this.replace(/\s+/g,'');
};

/**
 * Function for removing spaces BEFORE any string
 * @returns {string}
 */
String.prototype.ltrim = function() {
	'use strict';
	return this.replace(/^\s+/,'');
};

/**
 * Function for removing spaces AFTER any string
 * @returns {string}
 */
String.prototype.rtrim = function() {
	'use strict';

	return this.replace(/\s+$/,'');
};

/**
 * Function for verifying if a string is empty
 * @returns {boolean}
 */
String.prototype.isEmpty = function() {
	'use strict';

	return (this.replace(/\s+/g,'').length < 1);
};

/**
 * Function for breaking a string in an specified size
 * @param size
 * @param suffix
 * @param breakword
 * @returns {string}
 */
String.prototype.truncate = function(size, suffix, breakword) {
	'use strict';

	if (this.replace(/\s+/g, '').length < 1)
		return '';

	suffix = suffix || '';
	size = size || 0;
	if (typeof size !== 'number' )
		throw new Error('Number expected!');

	if (size < 1)
		return this + suffix;

	if (breakword || this.length < size) {
		var r = new RegExp('^(.{' + size.toString() + '}\\s*).*$');
		return this.replace(r, '$1') + suffix;
	} else {

		var str = this;

		if (this.lastIndexOf(' ') !== -1) {
			str = str.substring(0, size + 1);
			str = str.substring(0, Math.min(str.length, str.lastIndexOf(' ')));
		}

		str += suffix;
		return str;
	}

};