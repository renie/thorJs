var Thor={};Thor.String={'format':function(libobj){"use strict";var args=arguments;return libobj.replace(/{(\d+)}/g,function(match,number){return"undefined"!=typeof args[number]?args[number]:match});},'trim':function(libobj){"use strict";return libobj.replace(/\s+/g,"");},'ltrim':function(libobj){"use strict";return libobj.replace(/^\s+/,"");},'rtrim':function(libobj){"use strict";return libobj.replace(/\s+$/,"");},'isEmpty':function(libobj){"use strict";return libobj.replace(/\s+/g,"").length<1;},'truncate':function(libobj,size,suffix,breakword){"use strict";if(libobj.replace(/\s+/g,"").length<1)return"";if(suffix=suffix||"",size=size||0,"number"!=typeof size)throw new Error("Number expected!");if(1>size)return libobj+suffix;if(breakword||libobj.length<size){var r=new RegExp("^(.{"+size.toString()+"}\\s*).*$");return libobj.replace(r,"$1")+suffix}var str=libobj;return-1!==libobj.lastIndexOf(" ")&&(str=str.substring(0,size+1),str=str.substring(0,Math.min(str.length,str.lastIndexOf(" ")))),str+=suffix;}};Thor.DOM={'getMeta':function(name){"use strict";if("string"!=typeof name)throw new Error("String expected!");for(var metas=document.getElementsByTagName("meta"),metasValues=[],mLength=metas.length,i=0;mLength>i;i++)metasValues[metas[i].getAttribute("name")]=metas[i].getAttribute("content");if(void 0===metasValues[name]||null===metasValues[name])throw new Error("There is no meta tags with name: "+name);return metasValues[name];},'hasClass':function(libobj,name){"use strict";if("string"!=typeof name)throw new Error("String expected on second parameter!");return new RegExp("(\\s|^)"+name+"(\\s|$)").test(libobj.className);},'addClass':function(libobj,name){"use strict";if("string"!=typeof name)throw new Error("String expected on second parameter!");-1===libobj.className.indexOf(name)&&(libobj.className+=" "+name,libobj.className=libobj.className.replace(/^\s+|\s+$/g,""));},'removeClass':function(libobj,name){"use strict";if("string"!=typeof name)throw new Error("String expected on second parameter!");libobj.className=libobj.className.replace(new RegExp(name),"").replace(/\s\s/g,"").replace(/^\s+|\s+$/g,"");},'addEvent':function(libobj,evnt,func){"use strict";libobj.addEventListener?libobj.addEventListener(evnt,func,!1):libobj.attachEvent?libobj.attachEvent("on"+evnt,function(){func.call(libobj)}):libobj[evnt]=func;},'getStyle':function(libobj,styleName){"use strict";if("string"!=typeof styleName)throw new Error("String expected on second parameter!");var value=libobj.style[styleName]||window.getComputedStyle(libobj,null).getPropertyValue(styleName);return(0===value||"auto"===value)&&(libobj.style.visibility="hidden",libobj.style.display="block",value=libobj.style[styleName]||window.getComputedStyle(libobj,null).getPropertyValue(styleName),libobj.style.visibility="visible",libobj.style.display="none"),value;}};Thor.ValidationHelper={'validateCpf':function(data){"use strict";if("string"!=typeof data)throw new Error("String expected!");var cpf=data.replace(/[^\d]/g,"");if(11!==cpf.length||"00000000000"===cpf||"11111111111"===cpf||"22222222222"===cpf||"33333333333"===cpf||"44444444444"===cpf||"55555555555"===cpf||"66666666666"===cpf||"77777777777"===cpf||"88888888888"===cpf||"99999999999"===cpf)return!1;for(var add=0,i=0;9>i;i++)add+=parseInt(cpf.charAt(i),10)*(10-i);var rev=11-add%11;if((10===rev||11===rev)&&(rev=0),rev!==parseInt(cpf.charAt(9),10))return!1;var j=0;for(add=0;10>j;j++)add+=parseInt(cpf.charAt(j),10)*(11-j);return rev=11-add%11,(10===rev||11===rev)&&(rev=0),rev===parseInt(cpf.charAt(10),10);},'validateCnpj':function(data){"use strict";if("string"!=typeof data)throw new Error("String expected!");var erro="",CNPJ=data.replace(/[^\d]/g,"");if(14!==CNPJ.length||"00000000000000"===CNPJ||"11111111111111"===CNPJ||"22222222222222"===CNPJ||"33333333333333"===CNPJ||"44444444444444"===CNPJ||"55555555555555"===CNPJ||"66666666666666"===CNPJ||"77777777777777"===CNPJ||"88888888888888"===CNPJ||"99999999999999"===CNPJ)return!1;for(var x,a=[],b=0,c=[6,5,4,3,2,9,8,7,6,5,4,3,2],i=0,y=0;12>i;i++)a[i]=CNPJ.charAt(i),b+=a[i]*c[i+1];for((x=b%11)<2?a[12]=0:a[12]=11-x,b=0;13>y;y++)b+=a[y]*c[y];return(x=b%11)<2?a[13]=0:a[13]=11-x,CNPJ.charAt(12)!=a[12]||CNPJ.charAt(13)!=a[13]?!1:erro.length<=0;}};