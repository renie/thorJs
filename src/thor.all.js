/*
 *
 * String functions
 *
 */

//for removing space from a string
function trim(string) {
    if(typeof string !== 'string' )
        throw new Error('String expected!');
    return string.replace(/\s+/g,"");
}

//for removing spaces BEFORE from any string
function ltrim(string) {
    if(typeof string !== 'string' )
        throw new Error('String expected!');
    return string.replace(/^\s+/,"");
}

// for remove spaces AFTER from any string
function rtrim(string) {
    if(typeof string !== 'string' )
        throw new Error('String expected!');
    return string.replace(/\s+$/,"");
}

// Verify if a string is empty
function isEmpty(string) {
    if(typeof string !== 'string' )
        throw new Error('String expected!');
    return (string === null || string === undefined || string.replace(/\s+/g,"").length < 1);
}
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

/*
 *
 * Validations functions
 *
 */

//for validating brazilian federal personal identification number
function validateCpf(data) {

    if(typeof data !== 'string' )
        throw new Error('String expected!');
    
    // ignore non-numbers
    var cpf = data.replace(/[^\d]/g, "");

    // ignore repeating numbers
    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
        return false;

    var add = 0;

    for (var i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i), 10) * (10 - i);

    var rev = 11 - (add % 11);

    if (rev == 10 || rev == 11)
        rev = 0;

    if (rev != parseInt(cpf.charAt(9), 10))
        return false;

    add = 0;

    for (var j = 0; j < 10; j++)
        add += parseInt(cpf.charAt(j), 10) * (11 - j);

    rev = 11 - (add % 11);

    if (rev == 10 || rev == 11)
        rev = 0;

    if (rev != parseInt(cpf.charAt(10), 10))
        return false;

    return true;

}

//for validating brazilian federal company identification number
function validateCnpj(data) {

    if(typeof data !== 'string' )
        throw new Error('String expected!');

    var erro = '';
    var CNPJ = data.replace(/[^\d]/g, "");

    if (CNPJ.length != 14 || CNPJ == "00000000000000" || CNPJ == "11111111111111" || CNPJ == "22222222222222" || CNPJ == "33333333333333" || CNPJ == "44444444444444" || CNPJ == "55555555555555" || CNPJ == "66666666666666" || CNPJ == "77777777777777" || CNPJ == "88888888888888" || CNPJ == "99999999999999" )
        return false;

    var a = [];
    var b = 0;
    var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];

    for (i=0; i<12; i++){
        a[i] = CNPJ.charAt(i);
        b += a[i] * c[i+1];
    }

    if ((x = b % 11) < 2) 
        a[12] = 0 ;
    else 
        a[12] = 11-x ;
    

    b = 0;
    for (y=0; y<13; y++)
        b += (a[y] * c[y]); 
    
    
    if ((x = b % 11) < 2)
        a[13] = 0;
    else
        a[13] = 11-x;

    if ((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13]))
        return false;
    
    if (erro.length > 0){
        return false;
    }
    else {
        return true;
    }

    return true;

}