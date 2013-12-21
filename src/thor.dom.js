var w = window;
var d = document;

/*
 *
 * DOM functions
 *
 */

//for getting metatag's contents
function getMeta (name) {
    
    if(typeof name !== 'string' )
        throw new Error('String expected!');

    var metas = d.getElementsByTagName('meta');
    var metasValues = [];
    var mLength = metas.length;
    for (var i = 0; i < mLength; i++) {
        metasValues[metas[i].getAttribute('name')] = metas[i].getAttribute('content');
    }

    if(metasValues[name] === undefined || metasValues[name] === null)
        throw new Error('There is no meta tags with name: '+name);
    else
        return metasValues[name];

}

//for checking if an element has a specific class
function hasClass (el, name) {

    if(el === null || el === undefined || !el.tagName)
        throw new Error('Element expected on first parameter!');
    if(typeof name !== 'string' )
        throw new Error('String expected on second parameter!');

    return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className); 

}

//for adding a specific class to an element
function addClass (el, name) {

    if(el === null || el === undefined || !el.tagName)
        throw new Error('Element expected on first parameter!');
    if(typeof name !== 'string' )
        throw new Error('String expected on second parameter!');

    if (!new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className))
        el.className += (el.className ? ' ' : '') +name;

}

//for removing a specific class to an element
function removeClass (el, name) {

    if(el === null || el === undefined || !el.tagName)
        throw new Error('Element expected on first parameter!');
    if(typeof name !== 'string' )
        throw new Error('String expected on second parameter!');

    if (new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className))
        el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');

}

//for getting metatag's contents
function addEvent (evnt, elem, func) {

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

}

//for checking if this browser supports a specific property
function isPropertySupported (property) {
    
    return d.createElement('span').style[property] !== null;

}
