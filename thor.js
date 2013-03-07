/**
* @copyright Copyright (C) 2013  Renie Siqueira da Silva <br /><br />
* 
* This program is free software: you can redistribute it and/or modify<br />
* it under the terms of the GNU Affero General Public License as<br />
* published by the Free Software Foundation, either version 3 of the<br />
* License, or (at your option) any later version.<br /><br />
* 
* This program is distributed in the hope that it will be useful,<br />
* but WITHOUT ANY WARRANTY; without even the implied warranty of<br />
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the<br />
* GNU Affero General Public License for more details.<br /><br />
* 
* You should have received a copy of the GNU Affero General Public License<br />
* along with this program.  If not, see [&lt;http://www.gnu.org/licenses/&gt;]{@link http://www.gnu.org/licenses/}.<br /><br />
* 
* @author Renie Siqueira da Silva
* @module Thor
* @description This is the Thor's core, all other modules depends on this. Bugs should be reported to renie.webdev[at]gmail.com
* @namespace
* @version 0.1.0
*/
var THOR = T = t = thor = SONOFODIN = SonOfOdin = sonofodin = (function() {

	var d = document;
	var w = window;

	var metas = d.getElementsByTagName('meta');
	var metasValues = [];
	for (i=0; i < metas.length ; i++)
		metasValues[metas[i].getAttribute('name')] = metas[i].getAttribute('content'); 
	
	return {

		/**
		* @method hasClass
		* @description Returns if the specified element(el) has the specified class(name)
		* @param {!Object} el element to verify
		* @param {!String} name class name
		* @return {boolean}
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		hasClass : function(el, name) {
			return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);	
		},

		/**
		* @method addClass
		* @description Add a class in a specific element
		* @param {!Object} el element to verify
		* @param {!String} name class name
		* @return void
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		addClass : function(el, name){
		   	if (!ED.hasClass(el, name)){
	   			el.className += (el.className ? ' ' : '') +name;
	   		}
		},

		/**
		* @method removeClass
		* @description Remove a class from a specific element
		* @param {!Object} el the target element
		* @param {!String} name class name
		* @return void
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		removeClass : function(el, name){
			if (ED.hasClass(el, name)){
	    		el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
	    	}
		},

		/**
		* @method addEvent
		* @description Add an event on a specific element
		* @param {!String} evnt name of the event
		* @param {!Object} elem the target element
		* @param {!Function} func callback function
		* @return void
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
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

		/**
		* @method placeholderSupported
		* @description Verify HTML placeholder support
		* @return {boolean}
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		placeholderSupported : function(){
			return ("placeholder" in d.createElement("input"));
		},

		
		/**
		* @method browserInfo
		* @description Get inforformation about browser. Available information:<br>
		* <ul>
		* <li><strong>browserShortName:</strong> abbreviated name, facilitating conditionals:
		* <ul>
		* <li><em>ie</em> - Internet Explorer</li>
		* <li><em>op</em> - Opera</li>
		* <li><em>gc</em> - Google Chrome</li>
		* <li><em>sa</em> - Safari</li>
		* <li><em>mf</em> - Mozilla Firefox</li>
		* </ul>
		* </li>
		* <li><strong>browserName:</strong> full browser name</li>
		* <li><strong>browserFullVersion:</strong> full information about version</li>
		* <li><strong>browserMajorVersion:</strong> short version number</li>
		* </ul>
		* @param {!String} evnt name of the event
		* @param {!Object} elem the target element
		* @param {!Function} func callback function
		* @return {Array.<*>}
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
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

		/**
		* @method ajax
		* @description Make a simple ajax request<br />
		* Callback function must receive 2 parameters:
		* <ul>
		* <li>Object: all request object</li>
		* <li>Object: parsed response</li>
		* </ul>
		* @param {!String} url request URL
		* @param {!Function} callback callback function
		* @param {String} method request method
		* @param {JSON} params parameters in JSON format
		* @return void
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
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

		/**
		* @method parseJSON
		* @description Parse a JSON string into a javascript object
		* @param {!String} JSON string
		* @return {Object}
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		parseJSON : function(string){
			return eval('(' + string + ')');
		},

		/**
		* @method getMeta
		* @description Get value for specific meta tag
		* @param {!String} Metatag name
		* @return {String}
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		getMeta : function(string){
			return metasValues[string];
		},

		
		/**
		* @method getLabelByForAttribute
		* @description Get label owned by specif input id
		* @param {!String} Metatag name
		* @return {Object}
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		getLabelByForAttribute : function(string){
			return userDataLabels[string];
		},

		/**
		* @method selector
		* @description Just an alias for lazy people
		* @param {!String} selector string
		* @return {Object|String}
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		selector : function(string){
			if(d.querySelectorAll)
				return d.querySelectorAll(string);
			else
				return "Bad Browser";
		},

		/**
		* @method seekAndDestroy
		* @description Search for elements and destroy them
		* @param {!String} selector string
		* @return {Object|String}
		* @memberof Thor
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		seekAndDestroy : function(string){
			if(d.querySelectorAll){
				var elements = d.querySelectorAll(string);
				for(i=0; i<elements.length; i++)
					elements[i].parentNode.removeChild(elements[i]);
			}
		}
	};


})();

var THOR = THOR || {};

var $T = $THOR = THOR.selector;

/**
* @method trim
* @description Remove spaces from any string
* @return {String}
* @author Renie Siqueira da Silva
* @version 0.1.0
* @since 0.1.0
*/
String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g,"");
}

/**
* @method ltrim
* @description Remove spaces BEFORE from any string
* @return {String}
* @author Renie Siqueira da Silva
* @version 0.1.0
* @since 0.1.0
*/
String.prototype.ltrim = function () {
	return this.replace(/^\s+/,"");
}

/**
* @method rtrim
* @description Remove spaces AFTER from any string
* @return {String}
* @author Renie Siqueira da Silva
* @version 0.1.0
* @since 0.1.0
*/
String.prototype.rtrim = function () {
	return this.replace(/\s+$/,"");
}

/**
* @method isEmpty
* @description Verify if a string is empty
* @return {Boolean}
* @author Renie Siqueira da Silva
* @version 0.1.0
* @since 0.1.0
*/
String.prototype.isEmpty = function () {
	return (this == null || this.trim().length < 1  || this == undefined);
}