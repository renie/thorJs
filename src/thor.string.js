/*
 *
 * String functions
 *
 */

//for removing space from a string
var trim = function (string) {

    return string.replace(/\s+/g,"");

};

//for removing spaces BEFORE from any string
var ltrim = function (string) {

    return string.replace(/^\s+/,"");

};

// for remove spaces AFTER from any string
var rtrim = function (string) {

    return string.replace(/\s+$/,"");

};

// Verify if a string is empty
var isEmpty = function (string) {

    return (string === null || string === undefined || string.replace(/\s+/g,"").length < 1);

};

if(exports !== null){
    exports.trim = trim;
    exports.ltrim = ltrim;
    exports.rtrim = rtrim;
    exports.isEmpty = isEmpty;
}