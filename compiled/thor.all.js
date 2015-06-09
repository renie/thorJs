/* exported trim, ltrim, rtrim, isEmpty, truncate*/
/*
 * ThorJs
 * https://github.com/renie/thorJs
 *
 * Copyright (c) 2014 Renie Siqueira
 * Licensed under the MPL, 2.0 licenses.
 */

/**
 * Function for replace every ocurrence of {\d} by corresponding parameter
 * @returns {string}
 */
String.prototype.format = function() {
	'use strict';
	var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) { 
		return typeof args[number] != 'undefined' ? args[number] : match;
	});
};

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
/* exported FriendlyDate */
/*
 * ThorJs
 * https://github.com/renie/thorJs
 *
 * Copyright (c) 2014 Renie Siqueira
 * Licensed under the MPL, 2.0 licenses.
 */
 
/**
 * FriendlyDate is a way to show a "facebook" format date
 * The comparisons are made using timestamp
 * 
 * Use this way: var fd = new FriendlyDate(new Date()); 
 * fd.toString();
 */
function FriendlyDate( date ) {
	if( !(date instanceof Date) )
		throw new Error("The date parameter must be a Date instance");
	
	this.date		= date;
}

FriendlyDate.prototype = {
	
	/**
	 * Method to print a friendly date like "At 2 minutes ago"
	 * @return {String}
	 */
	toString: function() {
		 
		if( this.minutesDifference < 0 ) {
			
			/**
			 * @TODO Make friendly date future
			 */
			return this.date.toLocaleString();
			
		} else if( this.minutesDifference < 60 ) {
			return this.friendlyMinutes();
			
		} else if( this.hoursDifference < 24 ) {
			return this.friendlyHours();
			
		} else if( this.daysDifference < 30 ) {
			return this.friendlyDays();
			
		} else if( this.monthsDifference < 12 ) {
			return this.friendlyMonths();
			
		}
			
		return this.friendlyYears();
	},
	
	/**
	 * Shows the year difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyYears: function() {
		var real = this.yearsDifference, 
			single = real === 1 ? this.i18n.single.year : this.i18n.single.years; 
			
		return real === 1 ? this.i18n.phrases.aAgo.format(single) : this.i18n.phrases.atAgo.format(real, single);
	},
	
	/**
	 * Shows the month difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyMonths: function() {
		var real = this.monthsDifference, 
			single = real === 1 ? this.i18n.single.month : this.i18n.single.months; 
			
		return real === 1 ? this.i18n.phrases.aAgo.format(single) : this.i18n.phrases.atAgo.format(real, single);
	},
	
	/**
	 * Shows the day difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyDays: function() {
		var real = this.daysDifference, 
			single = real === 1 ? this.i18n.single.day : this.i18n.single.days; 
			
		return real === 1 ? this.i18n.phrases.aAgo.format(single) : this.i18n.phrases.atAgo.format(real, single);
	},
	
	/**
	 * Shows the hour difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyHours: function() {
		var real = this.hoursDifference, 
			single = real === 1 ? this.i18n.single.hour : this.i18n.single.hours; 
			
		return this.i18n.phrases.atAgo.format(real, single);
	},
	
	/**
	 * Shows the minutes difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyMinutes: function() {
		var real = this.minutesDifference <= 20 ? this.i18n.phrases.aFew : this.minutesDifference;

		return this.i18n.phrases.atAgo.format(real, this.i18n.single.minutes);
	},
	
	get yearsDifference() {
		return Math.round(this.daysDifference / 365);
	},
	
	get monthsDifference() {
		return Math.round(this.daysDifference / 30);
	},
	
	get daysDifference() {
		return Math.round(this.hoursDifference / 24);
	},
	
	get hoursDifference() {
		return Math.round(this.minutesDifference / 60);
	},
	
	get minutesDifference() {
		return Math.round(( this.current.getTime() - this.date.getTime() ) / 60000);
	},
	
	get i18n() {
		return FriendlyDate.I18N;	
	},
	
	/**
	 * Ever returns the current date
	 */
	get current() {
		return new Date();
	}
};

/**
 * Global terms
 */
FriendlyDate.I18N = {
	single: { 
		minute: 'minute', 
		minutes: 'minutes', 
		hour: 'hour', 
		hours: 'hours', 
		day: 'day', 
		days: 'days', 
		month: 'month', 
		months: 'months', 
		year: 'year', 
		years: 'years', 
	},
	
	phrases: {
		aFew: 'a few',
		aAgo: 'A {0} ago',
		atAgo: 'At {0} {1} ago',
	}
};
/* globals HTMLDocument*/
/*
 * ThorJs
 * https://github.com/renie/thorJs
 *
 * Copyright (c) 2014 Renie Siqueira
 * Licensed under the MPL, 2.0 licenses.
 */

/**
 * Function for getting HTML Meta Tags' contents
 * @param name
 * @returns {String}
 */
HTMLDocument.prototype.getMeta = function(name) {
	'use strict';

	if(typeof name !== 'string' )
		throw new Error('String expected!');

	var metas = document.getElementsByTagName('meta');
	var metasValues = [], mLength = metas.length, i = 0;
	for (; i < mLength; i++)
		metasValues[metas[i].getAttribute('name')] = metas[i].getAttribute('content');

	if(metasValues[name] === undefined || metasValues[name] === null)
		throw new Error('There is no meta tags with name: ' + name);
	else
		return metasValues[name];
};

/**
 * Function for checking if an DOM element has a specific style class
 * @param name
 * @returns {boolean}
 */
HTMLElement.prototype.hasClass = function (name) {
	'use strict';

	if (typeof name !== 'string')
		throw new Error('String expected on second parameter!');

	return new RegExp('(\\s|^)' + name + '(\\s|$)').test(this.className);
};

/**
 * Function for adding a specific style class in a DOM element
 * @param name
 * @returns {void}
 */
HTMLElement.prototype.addClass = function(name) {
	'use strict';

	if (typeof name !== 'string')
		throw new Error('String expected on second parameter!');

	if (this.className.indexOf(name) === -1) {
		this.className += ' ' + name;
		this.className = this.className.replace(/^\s+|\s+$/g, '');
	}
};

/**
 * Function for removing a specific style class in a DOM element
 * @param name
 * @returns {void}
 */
HTMLElement.prototype.removeClass = function(name) {
	'use strict';

	if(typeof name !== 'string' )
		throw new Error('String expected on second parameter!');

	this.className = this.className.replace(new RegExp(name), '').replace(/\s\s/g, '').replace(/^\s+|\s+$/g, '');
};

/**
 * Function for adding an event listener in a DOM element
 * @param evnt
 * @param func
 * @returns {void}
 */
HTMLElement.prototype.addEvent = function(evnt, func) {
	'use strict';

	if (this.addEventListener){  // W3C DOM
		this.addEventListener(evnt,func,false);
	} else if (this.attachEvent) { // IE DOM
		this.attachEvent('on' + evnt, function() {
			func.call(this);
		});
	} else {
		this[evnt] = func;
	}
};

/**
 * Function for getting styles of any element
 * @param styleName
 * @returns {string}
 */
HTMLElement.prototype.getStyle = function(styleName) {
	'use strict';

	if(typeof styleName !== 'string' )
		throw new Error('String expected on second parameter!');

	var value = this.style[styleName] || window.getComputedStyle(this, null).getPropertyValue(styleName);
	if (value === 0 || value === 'auto') {
		this.style.visibility = 'hidden';
		this.style.display	= 'block';
		value				= this.style[styleName] || window.getComputedStyle(this, null).getPropertyValue(styleName);
		this.style.visibility = 'visible';
		this.style.display	= 'none';
	}

	return value;
};
/* exported ValidationHelper */
/*
 * ThorJs
 * https://github.com/renie/thorJs
 *
 * Copyright (c) 2014 Renie Siqueira
 * Licensed under the MPL, 2.0 licenses.
 */

function ValidationHelper() {}


/**
 * Function for validating brazilian's federal personal identification number
 * @param data
 * @returns {boolean}
 */
ValidationHelper.prototype.validateCpf = function(data) {
	'use strict';

	if (typeof data !== 'string' )
		throw new Error('String expected!');

	var cpf = data.replace(/[^\d]/g, '');

	if (cpf.length !== 11 ||
		cpf === '00000000000' ||
		cpf === '11111111111' ||
		cpf === '22222222222' ||
		cpf === '33333333333' ||
		cpf === '44444444444' ||
		cpf === '55555555555' ||
		cpf === '66666666666' ||
		cpf === '77777777777' ||
		cpf === '88888888888' ||
		cpf === '99999999999')
		return false;

	var add = 0, i = 0;
	for (; i < 9; i++)
		add += parseInt(cpf.charAt(i), 10) * (10 - i);

	var rev = 11 - (add % 11);
	if (rev === 10 || rev === 11)
		rev = 0;

	if (rev !== parseInt(cpf.charAt(9), 10))
		return false;

	var j = 0;
	add = 0;

	for (; j < 10; j++)
		add += parseInt(cpf.charAt(j), 10) * (11 - j);

	rev = 11 - (add % 11);
	if (rev === 10 || rev === 11)
		rev = 0;

	return rev === parseInt(cpf.charAt(10), 10);


};

/**
 * Function for validating brazilian's federal company identification number
 * @param data
 * @returns {boolean}
 */
ValidationHelper.prototype.validateCnpj = function(data) {
	'use strict';

	if (typeof data !== 'string' )
		throw new Error('String expected!');

	var erro = '', CNPJ = data.replace(/[^\d]/g, '');
	if (CNPJ.length !== 14 ||
		CNPJ === '00000000000000' ||
		CNPJ === '11111111111111' ||
		CNPJ === '22222222222222' ||
		CNPJ === '33333333333333' ||
		CNPJ === '44444444444444' ||
		CNPJ === '55555555555555' ||
		CNPJ === '66666666666666' ||
		CNPJ === '77777777777777' ||
		CNPJ === '88888888888888' ||
		CNPJ === '99999999999999' )
		return false;

	var a = [],
		b = 0,
		c = [6,5,4,3,2,9,8,7,6,5,4,3,2],
		i = 0,
		y = 0,
		x;
	for (; i < 12; i++) {
		a[i] = CNPJ.charAt(i);
		b += a[i] * c[i+1];
	}

	if ((x = b % 11) < 2)
		a[12] = 0 ;
	else
		a[12] = 11-x ;

	b = 0;
	for (; y < 13; y++)
		b += (a[y] * c[y]);

	if ((x = b % 11) < 2)
		a[13] = 0;
	else
		a[13] = 11-x;

	if ((CNPJ.charAt(12) != a[12]) ||
		(CNPJ.charAt(13) != a[13]))
		return false;

	return erro.length <= 0;

};