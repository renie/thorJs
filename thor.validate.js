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
THOR.validate = (function(){

	var d = document;
	var w = window;

	return {

		/*
		* 	Verify if a brazilian federal id (for companies) is valid
		* 	RETURN: BOOLEAN
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

		/*
		* 	Verify if a brazilian federal id (for companies) is valid
		* 	RETURN: BOOLEAN
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