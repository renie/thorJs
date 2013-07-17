var w = window;
var d = document;

/*
 *
 * String functions
 *
 */

//for removing space from a string
var trim = function (string) {

    'use strict';
    return string.replace(/^\s+|\s+$/g,"");

};

//for removing spaces BEFORE from any string
var ltrim = function (string) {

    'use strict';
    return string.replace(/^\s+/,"");

};

// for remove spaces AFTER from any string
var rtrim = function (string) {

    'use strict';
    return string.replace(/\s+$/,"");

};

// Verify if a string is empty
var isEmpty = function (string) {

    'use strict';
    return (string === null || string.trim().length < 1  || string === undefined);

};