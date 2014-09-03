/* globals HTMLDocument*/
/**
 * Created by Renie Siqueira.
 */

var d = document;

/**
 * Function for getting HTML Meta Tags' contents
 * @param name
 * @returns {String}
 */
HTMLDocument.prototype.getMeta = function(name) {
	'use strict';

	if(typeof name !== 'string' )
		throw new Error('String expected!');

	var metas = d.getElementsByTagName('meta');
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