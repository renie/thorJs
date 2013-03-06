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
THOR.animate = (function(){

    var d = document;
    var w = window;

    return {

        /*
        *   Do a simple fadeIn effect
        *   RETURN: void
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

        /*
        *   Do a simple fadeOut effect
        *   RETURN: void
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