/*exported getMeta, hasClass, addClass, removeClass, addEvent, isPropertySupported, getStyle */
var d = document;

/*
 *
 * DOM functions
 *
 */

//for getting metatag's contents
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

//for checking if an element has a specific class
function hasClass (el, name) {
	'use strict';

	if (el === null || el === undefined || !el.tagName)
		throw new Error('Element expected on first parameter!');
	if (typeof name !== 'string')
		throw new Error('String expected on second parameter!');

	return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
}

//for adding a specific class to an element
function addClass (el, name) {
    'use strict';

    if (el === null || el === undefined || !el.tagName)
        throw new Error('Element expected on first parameter!');
    if (typeof name !== 'string')
        throw new Error('String expected on second parameter!');

    if (!new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className))
        el.className += (el.className ? ' ' : '') +name;
}

//for removing a specific class to an element
function removeClass (el, name) {
	'use strict';

	if(el === null || el === undefined || !el.tagName)
		throw new Error('Element expected on first parameter!');
	if(typeof name !== 'string' )
		throw new Error('String expected on second parameter!');

	if (new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className))
		el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
}

//for getting metatag's contents
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

//for checking if this browser supports a specific property
function isPropertySupported (property) {
	'use strict';

	return d.createElement('span').style[property] !== null;
}

//for getting styles
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
