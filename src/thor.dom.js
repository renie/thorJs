var w = window;
var d = document;

/*
 *
 * DOM functions
 *
 */

//for getting metatag's contents
var getMeta = function (name) {
    
    'use strict';
    var metas = d.getElementsByTagName('meta');
    var metasValues = [];
    
    
    for (var i = 0; i < metas.length; i++) {
        metasValues[metas[i].getAttribute('name')] = metas[i].getAttribute('content');
        
    }
    return metasValues[name];

};

//for checking if an element has a specific class
var hasClass = function (el, name) {

    'use strict';
    return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className); 

};

//for adding a specific class to an element
var addClass = function (el, name) {

    'use strict';
    if (!new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className)){
        el.className += (el.className ? ' ' : '') +name;
    }

};

//for removing a specific class to an element
var removeClass = function (el, name) {

    'use strict';
    if (new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className)){
        el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
    }

};

//for getting metatag's contents
var addEvent = function (evnt, elem, func) {

   'use strict';
   if (elem.addEventListener){  // W3C DOM
        elem.addEventListener(evnt,func,false);
   }
   else if (elem.attachEvent) { // IE DOM
        elem.attachEvent("on"+evnt, function() {
            func.call(elem);
        });
   }
   else {
        elem[evnt] = func;
   }

};

//for checking if this browser supports a specific property
var isPropertySupported = function (property) {
    
    'use strict';
    return d.createElement('span').style[property] !== null;

};
