/**
Copyright (C) 2013  Renie Siqueira da Silva

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

**/
var THOR = T = (function() {

	var d = document;
	var w = window;

	// Mapping metatags
	var metas = d.getElementsByTagName('meta');
	var metasValues = [];
	for (i=0; i < metas.length ; i++)
		metasValues[metas[i].getAttribute('name')] = metas[i].getAttribute('content'); 
	
	return {

		/*
		*	Return if there is a class in a specific element
		*	RETURN: BOOLEAN
		*/
		hasClass : function(el, name) {
			return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);	
		},

		/*
		*	Add a class in a specific element
		*	RETURN: void
		*/
		addClass : function(el, name){
		   	if (!ED.hasClass(el, name)){
	   			el.className += (el.className ? ' ' : '') +name;
	   		}
		},

		/*
		*	Remove a class from a specific element
		*	RETURN: void
		*/
		removeClass : function(el, name){
			if (ED.hasClass(el, name)){
	    		el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
	    	}
		},

		/*
		*	Add an event on a specifc element
		*	RETURN: void
		*/
		addEvent : function(evnt, elem, func) {
		   if (elem.addEventListener){  // W3C DOM
		      elem.addEventListener(evnt,func,false);
		   }else if (elem.attachEvent) { // IE DOM
		      elem.attachEvent("on"+evnt, function(){ func.call(elem) });// in IE it's necessary to make 'this' acessible inside callback function
		   }else {
		      elem[evnt] = func;
		   }
		},

		/*
		*	Verify HTML placeholder support
		*	RETURN: BOOLEAN
		*/
		placeholderSupported : function(){
			return ("placeholder" in d.createElement("input"));
		},

		/*
		*	Get inforformation about browser
		*	RETURN: ARRAY
		*/
		browserInfo : function(){
			var n = navigator;
			var nVer = n.appVersion;
			var nAgt = n.userAgent;
			var browserName  = n.appName;
			var fullVersion  = ''+parseFloat(n.appVersion); 
			var majorVersion = parseInt(n.appVersion,10);
			var nameOffset,verOffset,ix;

			if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
				browserName = "Opera";
				browserShortName = "op";
			 	fullVersion = nAgt.substring(verOffset+6);
			 	if ((verOffset=nAgt.indexOf("Version"))!=-1) 
			   		fullVersion = nAgt.substring(verOffset+8);
			}
			else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
			 	browserName = "Microsoft Internet Explorer";
			 	browserShortName = "ie";
			 	fullVersion = nAgt.substring(verOffset+5);
			}
			else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
			 	browserName = "Google Chrome";
			 	browserShortName = "gc";
			 	fullVersion = nAgt.substring(verOffset+7);
			}
			else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
			 	browserName = "Safari";
			 	browserShortName = "sa";
			 	fullVersion = nAgt.substring(verOffset+7);
			 	if ((verOffset=nAgt.indexOf("Version"))!=-1) 
			   		fullVersion = nAgt.substring(verOffset+8);
			}
			else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
			 	browserName = "Mozilla Firefox";
			 	browserShortName = "mf";
			 	fullVersion = nAgt.substring(verOffset+8);
			}
			else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
			{
			 	browserName = nAgt.substring(nameOffset,verOffset);
			 	browserShortName = browserName;
			 	fullVersion = nAgt.substring(verOffset+1);
			 	if (browserName.toLowerCase()==browserName.toUpperCase())
			  		browserName = n.appName;
			}
			
			if ((ix=fullVersion.indexOf(';'))!=-1) 
				fullVersion=fullVersion.substring(0,ix);
			if ((ix=fullVersion.indexOf(' '))!=-1) 
				fullVersion=fullVersion.substring(0,ix);

			majorVersion = parseInt(''+fullVersion,10);
			if (isNaN(majorVersion)) {
			 	fullVersion  = ''+parseFloat(n.appVersion); 
			 	majorVersion = parseInt(n.appVersion,10);
			}

			var browser = [];
			browser['browserShortName'] = browserShortName;
			browser['browserName'] = browserName;
			browser['browserFullVersion'] = fullVersion;
			browser['browserMajorVersion'] = majorVersion;
			return browser;
		},

		/*
		*	Make a simple ajax request
		*	RETURN: void
		*/
		ajax : function(url, callback, method, params) {  
			
			var xhr;
			
			if(typeof XMLHttpRequest !== 'undefined'){ 
	        	xhr = new XMLHttpRequest();  
	        }else{  
	            var versions = ["MSXML2.XmlHttp.5.0",  
	                            "MSXML2.XmlHttp.4.0",  
	                            "MSXML2.XmlHttp.3.0",  
	                            "MSXML2.XmlHttp.2.0",  
	                            "Microsoft.XmlHttp"]  
	            for(var i = 0, len = versions.length; i < len; i++) {  
	                try {  
	                    xhr = new ActiveXObject(versions[i]);  
	                    break;  
	                }  
	            	catch(e){
	            		console.error(e);
	            	}  
	            }
	        }  
	        xhr.onreadystatechange = function(){
	            
	            if(xhr.readyState < 4) {  
	                return;  
	            }

	            if(xhr.status !== 200) {  
	                return;  
	            }  
	            
	            if(xhr.readyState === 4) {  
	                callback(xhr, ED.parseJSON(xhr.responseText));  
	            }  
	        }

	        if(params != null){
	        	var pairs = [];
				for (var key in params)
				  if (params.hasOwnProperty(key))
				    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
				params = pairs.join('&');
	        }

	        method = method != null?method:'GET';
        	url += "?"+params;
	        xhr.open(method, url, true);  
	        xhr.send('');
		},

		/*
		*	Parse a JSON string to a javascript object
		*	RETURN: OBJECT
		*/
		parseJSON : function(string){
			return eval('(' + string + ')');
		},

		/*
		*	Get value for specific meta tag
		*	RETURN: STRING
		*/
		getMeta : function(string){
			return metasValues[string];
		},

		/*
		*	Get label owned by specif input id
		*	RETURN: OBJECT
		*/
		getLabelByForAttribute : function(string){
			return userDataLabels[string];
		}
	};


})();

var THOR = THOR || {};

/*
*	Remove spaces from any string
*	RETURN: STRING
*/
String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g,"");
}

/*
*	Remove spaces BEFORE from any string
*	RETURN: STRING
*/
String.prototype.ltrim = function () {
	return this.replace(/^\s+/,"");
}

/*
*	Remove spaces AFTER from any string
*	RETURN: STRING
*/
String.prototype.rtrim = function () {
	return this.replace(/\s+$/,"");
}

/*
*	Verify if a string is empty
*	RETURN: BOOLEAN
*/
String.prototype.isEmpty = function () {
	return (this == null || this.trim().length < 1)
}