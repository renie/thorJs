/* exported FriendlyDate */
/*
 * ThorJs
 * https://github.com/renie/thorJs
 *
 * Copyright (c) 2014 Renie Siqueira
 * Licensed under the MPL, 2.0 licenses.
 */
 
/**
 * FriendlyDate is a way to show a "facebook" format date
 * The comparisons are made using timestamp
 * 
 * Use this way: var fd = new FriendlyDate(new Date()); 
 * fd.toString();
 */
function FriendlyDate( date ) {
	if( !(date instanceof Date) )
		throw new Error("The date parameter must be a Date instance");
	
	this.date		= date;
}

FriendlyDate.prototype = {
	
	/**
	 * Method to print a friendly date like "At 2 minutes ago"
	 * @return {String}
	 */
	toString: function() {
		 
		if( this.minutesDifference < 0 ) {
			
			/**
			 * @TODO Make friendly date future
			 */
			return this.date.toLocaleString();
			
		} else if( this.minutesDifference < 60 ) {
			return this.friendlyMinutes();
			
		} else if( this.hoursDifference < 24 ) {
			return this.friendlyHours();
			
		} else if( this.daysDifference < 30 ) {
			return this.friendlyDays();
			
		} else if( this.monthsDifference < 12 ) {
			return this.friendlyMonths();
			
		}
			
		return this.friendlyYears();
	},
	
	/**
	 * Shows the year difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyYears: function() {
		var real = this.yearsDifference, 
			single = real === 1 ? this.i18n.single.year : this.i18n.single.years; 
			
		return real === 1 ? this.i18n.phrases.aAgo.format(single) : this.i18n.phrases.atAgo.format(real, single);
	},
	
	/**
	 * Shows the month difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyMonths: function() {
		var real = this.monthsDifference, 
			single = real === 1 ? this.i18n.single.month : this.i18n.single.months; 
			
		return real === 1 ? this.i18n.phrases.aAgo.format(single) : this.i18n.phrases.atAgo.format(real, single);
	},
	
	/**
	 * Shows the day difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyDays: function() {
		var real = this.daysDifference, 
			single = real === 1 ? this.i18n.single.day : this.i18n.single.days; 
			
		return real === 1 ? this.i18n.phrases.aAgo.format(single) : this.i18n.phrases.atAgo.format(real, single);
	},
	
	/**
	 * Shows the hour difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyHours: function() {
		var real = this.hoursDifference, 
			single = real === 1 ? this.i18n.single.hour : this.i18n.single.hours; 
			
		return this.i18n.phrases.atAgo.format(real, single);
	},
	
	/**
	 * Shows the minutes difference on a friendly format
	 * 
	 * @return {String}
	 */
	friendlyMinutes: function() {
		var real = this.minutesDifference <= 20 ? this.i18n.phrases.aFew : this.minutesDifference;

		return this.i18n.phrases.atAgo.format(real, this.i18n.single.minutes);
	},
	
	get yearsDifference() {
		return Math.round(this.daysDifference / 365);
	},
	
	get monthsDifference() {
		return Math.round(this.daysDifference / 30);
	},
	
	get daysDifference() {
		return Math.round(this.hoursDifference / 24);
	},
	
	get hoursDifference() {
		return Math.round(this.minutesDifference / 60);
	},
	
	get minutesDifference() {
		return Math.round(( this.current.getTime() - this.date.getTime() ) / 60000);
	},
	
	get i18n() {
		return FriendlyDate.I18N;	
	},
	
	/**
	 * Ever returns the current date
	 */
	get current() {
		return new Date();
	}
};

/**
 * Global terms
 */
FriendlyDate.I18N = {
	single: { 
		minute: 'minute', 
		minutes: 'minutes', 
		hour: 'hour', 
		hours: 'hours', 
		day: 'day', 
		days: 'days', 
		month: 'month', 
		months: 'months', 
		year: 'year', 
		years: 'years', 
	},
	
	phrases: {
		aFew: 'a few',
		aAgo: 'A {0} ago',
		atAgo: 'At {0} {1} ago',
	}
};