/* globals ValidationHelper */
describe('Testing THOR Validation functions:', function () {

	var helper;

	beforeEach(function() {
		helper = new ValidationHelper();
	});

	/**
	 * CPF
	 */
	it('CPF - valid number 1', function () {
		var result = helper.validateCpf('43301271723');
		expect(result).toEqual(true);
	});
	it('CPF - valid number 2', function () {
		var result = helper.validateCpf('32299509844');
		expect(result).toEqual(true);
	});
	it('CPF - valid number 3', function () {
		var result = helper.validateCpf('62255216159');
		expect(result).toEqual(true);
	});
	it('CPF - valid number 4', function () {
		var result = helper.validateCpf('28688721580');
		expect(result).toEqual(true);
	});
	it('CPF - valid number 4', function () {
		var result = helper.validateCpf('30199212104');
		expect(result).toEqual(true);
	});
	it('CPF - invalid number', function () {
		var result = helper.validateCpf('53301271723');
		expect(result).toEqual(false);
	});
	it('CPF - repeated number', function () {
		var result = helper.validateCpf('11111111111');
		expect(result).toEqual(false);
	});
	it('CPF - number 0', function () {
		var result = function(){
			helper.validateCpf(0);
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CPF - number', function () {
		var result = function(){
			helper.validateCpf(43301271723);
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CPF - undefined', function () {
		var result = function(){
			helper.validateCpf(undefined);
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CPF - null', function () {
		var result = function(){
			helper.validateCpf(null);
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CPF - element', function () {
		var result = function(){
			helper.validateCpf(document.createElement('div'));
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CPF - missing parameter', function () {
		var result = function(){
			helper.validateCpf();
		};
		expect(result).toThrow(new Error('String expected!'));
	});

	/**
	 * CNPJ
	 */
	it('CNPJ - valid number 1', function () {
		var result = helper.validateCnpj('72444771000189');
		expect(result).toEqual(true);
	});
	it('CNPJ - valid number 2', function () {
		var result = helper.validateCnpj('81753144000110');
		expect(result).toEqual(true);
	});
	it('CNPJ - valid number 3', function () {
		var result = helper.validateCnpj('74721836000111');
		expect(result).toEqual(true);
	});
	it('CNPJ - valid number 4', function () {
		var result = helper.validateCnpj('67065345000102');
		expect(result).toEqual(true);
	});
	it('CNPJ - invalid number', function () {
		var result = helper.validateCnpj('74721836000112');
		expect(result).toEqual(false);
	});
	it('CNPJ - repeated number', function () {
		var result = helper.validateCnpj('11111111111111');
		expect(result).toEqual(false);
	});
	it('CNPJ - number 0', function () {
		var result = function(){
			helper.validateCnpj(0);
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CNPJ - number', function () {
		var result = function(){
			helper.validateCnpj(72444771000189);
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CNPJ - undefined', function () {
		var result = function(){
			helper.validateCnpj(undefined);
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CNPJ - null', function () {
		var result = function(){
			helper.validateCnpj(null);
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CNPJ - element', function () {
		var result = function(){
			helper.validateCnpj(document.createElement('div'));
		};
		expect(result).toThrow(new Error('String expected!'));
	});
	it('CNPJ - missing parameter', function () {
		var result = function(){
			helper.validateCnpj();
		};
		expect(result).toThrow(new Error('String expected!'));
	});
});