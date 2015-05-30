/*
 * ThorJs
 * https://github.com/renie/thorJs
 *
 * Copyright (c) 2014 Renie Siqueira
 * Licensed under the MPL, 2.0 licenses.
 */

describe('Testing THOR Date functions:', function() {

	it('FriendlyDate - Instantiate', function () {
		var result = function() {
			new FriendlyDate();
		};
		expect(result).toThrow(new Error('The date parameter must be a Date instance'));
	});
	
	it('FriendlyDate - Testing "few minutes"', function () {
		var a = new Date();
		a.setMinutes(a.getMinutes() - 19);
		
		var result = ( new FriendlyDate(a) ).toString();
		expect(result).toEqual('At a few minutes ago');
	});
	
	it('FriendlyDate - Testing "21 minutes"', function () {
		var a = new Date();
		a.setMinutes(a.getMinutes() - 21);
		
		var result = ( new FriendlyDate(a) ).toString();
		expect(result).toEqual('At 21 minutes ago');
	});
	
	it('FriendlyDate - Testing "1 hour"', function () {
		var a = new Date();
		a.setHours(a.getHours() - 1);
		
		var result = ( new FriendlyDate(a) ).toString();
		expect(result).toEqual('At 1 hour ago');
	});
	
	it('FriendlyDate - Testing "10 hours"', function () {
		var a = new Date();
		a.setHours(a.getHours() - 10);
		
		var result = ( new FriendlyDate(a) ).toString();
		expect(result).toEqual('At 10 hours ago');
	});
	
	it('FriendlyDate - Testing "1 month"', function () {
		var a = new Date();
		a.setMonth(a.getMonth() - 1);
		
		var result = ( new FriendlyDate(a) ).toString();
		expect(result).toEqual('A month ago');
	});
	
	it('FriendlyDate - Testing "10 months"', function () {
		var a = new Date();
		a.setMonth(a.getMonth() - 10);
		
		var result = ( new FriendlyDate(a) ).toString();
		expect(result).toEqual('At 10 months ago');
	});
	
	it('FriendlyDate - Testing "1 year"', function () {
		var a = new Date();
		a.setFullYear(a.getFullYear() - 1);
		
		var result = ( new FriendlyDate(a) ).toString();
		expect(result).toEqual('A year ago');
	});
	
	it('FriendlyDate - Testing "10 years"', function () {
		var a = new Date();
		a.setFullYear(a.getFullYear() - 10);
		
		var result = ( new FriendlyDate(a) ).toString();
		expect(result).toEqual('At 10 years ago');
	});
});
