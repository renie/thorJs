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
* @description This is the Thor's validation module, used to validate forms. <br />
* 
* For using you just need to use THOR ou T keyword, 'validate' for this module, and call a method. Like:<br /><br />
* if(T.validate.cpf('00000000000'))<br />
* &nbsp;&nbsp;&nbsp;&nbsp;alert("CPF is valid!");<br /><br />
*
* @module Thor.validate
* @namespace
* @version 0.1.0
* @since 0.1.0
**/
THOR.validate = (function(){

	var d = document;
	var w = window;

	return {

		
		/**
		* @method cpf
		* @description Verify if a brazilian federal id is valid
		* @param {!String} data CPF string
		* @return {boolean}
		* @memberof Thor.validate
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		cpf : function(data){
			
			// ignore non-numbers
			var cpf = data.replace(/[^\d]/g, "");
			
			// ignore repeating numbers
			if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
				return false;
			
			var add = 0;
			
			for (i=0; i < 9; i++)
				add += parseInt(cpf.charAt(i)) * (10 - i);
			
			var rev = 11 - (add % 11);
			
			if (rev == 10 || rev == 11)
				rev = 0;
			
			if (rev != parseInt(cpf.charAt(9)))
				return false;
			
			add = 0;
			
			for (i = 0; i < 10; i ++)
				add += parseInt(cpf.charAt(i)) * (11 - i);
			
			rev = 11 - (add % 11);
			
			if (rev == 10 || rev == 11)
				rev = 0;
			
			if (rev != parseInt(cpf.charAt(10)))
				return false;
			
			return true;
		},

		/**
		* @method cnpj
		* @description Verify if a brazilian federal id(for companies) is valid
		* @param {!String} data CPF string
		* @return {boolean}
		* @memberof Thor.validate
		* @author Renie Siqueira da Silva
		* @version 0.1.0
        * @since 0.1.0
		*/
		cnpj : function(data) {
			CNPJ = data;
			erro = new String;

			if (CNPJ.length < 18)
				return false;

			if ((CNPJ.charAt(2) != ".") || (CNPJ.charAt(6) != ".") || (CNPJ.charAt(10) != "/") || (CNPJ.charAt(15) != "-")){
				if (erro.length == 0) 
					return false;
			}
			
			// substituir os caracteres que não são números
			if(d.layers && parseInt(navigator.appVersion) == 4){
				x = CNPJ.substring(0,2);
				x += CNPJ.substring (3,6);
				x += CNPJ.substring (7,10);
				x += CNPJ.substring (11,15);
				x += CNPJ.substring (16,18);
				CNPJ = x; 
			} else {
				CNPJ = CNPJ.replace (".","");
				CNPJ = CNPJ.replace (".","");
				CNPJ = CNPJ.replace ("-","");
				CNPJ = CNPJ.replace ("/","");
			}

			var nonNumbers = /\D/;
			if (nonNumbers.test(CNPJ))
				return false;

			var a = [];
			var b = new Number;
			var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];

			for (i=0; i<12; i++){
				a[i] = CNPJ.charAt(i);
				b += a[i] * c[i+1];
			}

			if ((x = b % 11) < 2) 
				a[12] = 0 
			else 
				a[12] = 11-x 
			

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
	}

})();