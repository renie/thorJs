/* exported validateCpf, validateCnpj */
/**
 * Created by Renie Siqueira.
 */

/**
 * Function for validating brazilian's federal personal identification number
 * @param data
 * @returns {boolean}
 */
function validateCpf(data) {
	'use strict';

	if (typeof data !== 'string' )
		throw new Error('String expected!');

	var cpf = data.replace(/[^\d]/g, '');

	if (cpf.length !== 11 ||
		cpf === '00000000000' ||
		cpf === '11111111111' ||
		cpf === '22222222222' ||
		cpf === '33333333333' ||
		cpf === '44444444444' ||
		cpf === '55555555555' ||
		cpf === '66666666666' ||
		cpf === '77777777777' ||
		cpf === '88888888888' ||
		cpf === '99999999999')
		return false;

	var add = 0, i = 0;
	for (; i < 9; i++)
		add += parseInt(cpf.charAt(i), 10) * (10 - i);

	var rev = 11 - (add % 11);
	if (rev === 10 || rev === 11)
		rev = 0;

	if (rev !== parseInt(cpf.charAt(9), 10))
		return false;

	var j = 0;
	add = 0;

	for (; j < 10; j++)
		add += parseInt(cpf.charAt(j), 10) * (11 - j);

	rev = 11 - (add % 11);
	if (rev === 10 || rev === 11)
		rev = 0;

	if (rev !== parseInt(cpf.charAt(10), 10))
		return false;

	return true;
}

/**
 * Function for validating brazilian's federal company identification number
 * @param data
 * @returns {boolean}
 */
function validateCnpj(data) {
	'use strict';

	if (typeof data !== 'string' )
		throw new Error('String expected!');

	var erro = '', CNPJ = data.replace(/[^\d]/g, '');
	if (CNPJ.length !== 14 ||
		CNPJ === '00000000000000' ||
		CNPJ === '11111111111111' ||
		CNPJ === '22222222222222' ||
		CNPJ === '33333333333333' ||
		CNPJ === '44444444444444' ||
		CNPJ === '55555555555555' ||
		CNPJ === '66666666666666' ||
		CNPJ === '77777777777777' ||
		CNPJ === '88888888888888' ||
		CNPJ === '99999999999999' )
		return false;

	var a = [], b = 0, c = [6,5,4,3,2,9,8,7,6,5,4,3,2], i = 0, x = null, y = 0;
	for (; i < 12; i++) {
		a[i] = CNPJ.charAt(i);
		b += a[i] * c[i+1];
	}

	if ((x = b % 11) < 2)
		a[12] = 0 ;
	else
		a[12] = 11-x ;

	b = 0;
	for (; y < 13; y++)
		b += (a[y] * c[y]);

	if ((x = b % 11) < 2)
		a[13] = 0;
	else
		a[13] = 11-x;

	if ((CNPJ.charAt(12) != a[12]) ||
		(CNPJ.charAt(13) != a[13]))
		return false;

	if (erro.length > 0)
		return false;
	else
		return true;

}