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
* @extends {Thor}
* @description This is the Thor's animation module, used to make some visual effects. <br />
* 
* For using you just need to use THOR ou T keyword, 'animate' for this module, and call a method. Like:<br /><br />
* var div = T.selector("#myDiv");<br />
* T.animate.fadeIn(div, 2000)<br />
*
* @module Thor.animate
* @namespace
* @version 0.1.0
* @since 0.1.0
**/
THOR.animate = (function(){

    var d = document;
    var w = window;

    return {

        /**
        * @method fadeIn
        * @description Do a simple fadeIn effect
        * @param {!Object} el Element that will be animated
        * @param {!String} speed Duration of animation
        * @return void
        * @memberof Thor.animate
        * @author Renie Siqueira da Silva
        * @version 0.1.0
        * @since 0.1.0
        */
        fadeIn: function(el, speed){
            var badBrowser = THOR.browserInfo()['browserShortName'] == 'ie'?true:false;

            if(el.style){
                if(badBrowser)
                    el.style.filter = 'alpha(opacity = 0)';
                else
                    el.style.opacity = '0';
            }

            var fullspeed = speed/50;
            w.fadeInTimer= setInterval(function(){
                if(badBrowser){
                    el.style.filter = 'alpha(opacity = '+(+el.filters.alpha.opacity+2)+')';
                    
                    if(el.filters.alpha.opacity > 100)
                        clearInterval(fadeInTimer);
                }else{
                    el.style.opacity= +(el.style.opacity)+.02;
                    
                    if(el.style.opacity> 1)
                        clearInterval(fadeInTimer);
                }
            },
            fullspeed);
        },

        /**
        * @method fadeOut
        * @description Do a simple fadeOut effect
        * @param {!Object} el Element that will be animated
        * @param {!String} speed Duration of animation
        * @return void
        * @memberof Thor.animate
        * @author Renie Siqueira da Silva
        * @version 0.1.0
        * @since 0.1.0
        */
        fadeOut: function(el, speed){
            var badBrowser = THOR.browserInfo()['browserShortName'] == 'ie'?true:false;
            
            if(el.style){
                if(badBrowser)
                    el.style.filter = 'alpha(opacity = 100)';
                else
                    el.style.opacity = '1';
            }

            var fullspeed = speed/50;
            w.fadeOutTimer= setInterval(function(){
                if(badBrowser){
                    if(el.filters.alpha.opacity<2)
                        el.style.filter = 'alpha(opacity = 0)'
                    else
                        el.style.filter = 'alpha(opacity = '+(el.filters.alpha.opacity-2)+')';
                    
                    if(el.filters.alpha.opacity<= 0)
                        clearInterval(fadeOutTimer);
                }else{
                    if(el.style.opacity<0.2)
                        el.style.opacity = 0
                    else
                        el.style.opacity= (el.style.opacity)-.02;

                    if(el.style.opacity<= 0)
                        clearInterval(fadeOutTimer);
                }
            },
            fullspeed);
        }
    }

})();