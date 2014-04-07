/* exported getMeta, hasClass, addClass, removeClass, addEvent, isPropertySupported, getStyle */
/**
 * Created by Renie Siqueira.
 */

var d = document;

/**
 * Function for getting HTML Meta Tags' contents
 * @param name
 * @returns {String}
 */
function getMeta (name) {
	'use strict';

	if(typeof name !== 'string' )
		throw new Error('String expected!');

	var metas = d.getElementsByTagName('meta');
	var metasValues = [], mLength = metas.length, i = 0;
	for (; i < mLength; i++)
		metasValues[metas[i].getAttribute('name')] = metas[i].getAttribute('content');

	if(metasValues[name] === undefined || metasValues[name] === null)
		throw new Error('There is no meta tags with name: '+name);
	else
		return metasValues[name];
}

/**
 * Function for checking if an DOM element has a specific style class
 * @param el
 * @param name
 * @returns {boolean}
 */
function hasClass (el, name) {
	'use strict';

	if (el === null || el === undefined || !el.tagName)
		throw new Error('Element expected on first parameter!');
	if (typeof name !== 'string')
		throw new Error('String expected on second parameter!');

	return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
}

/**
 * Function for adding a specific style class in a DOM element
 * @param el
 * @param name
 * @returns {void}
 */
function addClass (el, name) {
    'use strict';

    if (el === null || el === undefined || !el.tagName)
        throw new Error('Element expected on first parameter!');
    if (typeof name !== 'string')
        throw new Error('String expected on second parameter!');

    if (!new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className))
        el.className += (el.className ? ' ' : '') +name;
}

/**
 * Function for removing a specific style class in a DOM element
 * @param el
 * @param name
 * @returns {void}
 */
function removeClass (el, name) {
	'use strict';

	if(el === null || el === undefined || !el.tagName)
		throw new Error('Element expected on first parameter!');
	if(typeof name !== 'string' )
		throw new Error('String expected on second parameter!');

	if (new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className))
		el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
}

/**
 * Function for adding an event listener in a DOM element
 * @param el
 * @param name
 * @returns {void}
 */
function addEvent (evnt, elem, func) {
	'use strict';

	if (elem.addEventListener){  // W3C DOM
		elem.addEventListener(evnt,func,false);
	} else if (elem.attachEvent) { // IE DOM
		elem.attachEvent('on'+evnt, function() {
			func.call(elem);
		});
	} else {
		elem[evnt] = func;
	}
}

/**
 * Function for getting styles of any element
 * @param el
 * @param styleName
 * @returns {*|string}
 */
function getStyle(el, styleName) {
	'use strict';

	if(el === null || el === undefined || !el.tagName)
		throw new Error('Element expected on first parameter!');
	if(typeof styleName !== 'string' )
		throw new Error('String expected on second parameter!');

	var value = el.style[styleName] || window.getComputedStyle(el, null).getPropertyValue(styleName);
	if (value === 0 || value === 'auto') {
		el.style.visibility = 'hidden';
		el.style.display	= 'block';
		value				= el.style[styleName] || window.getComputedStyle(el, null).getPropertyValue(styleName);
		el.style.visibility = 'visible';
		el.style.display	= 'none';
	}
	
	return value;
}
