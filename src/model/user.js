/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */

"use strict";

// dependencies
import uuidV1 from "uuid/v1";
import	moment from "moment";

// constructor
const User = function( args ) {
	this.id = uuidV1();
	this.created = moment().unix();
	this.firstName = args.firstName;
	this.secondName = args.secondName;
};

// basic prototype method
User.prototype.fullName = function() {
	return `${this.firstName} ${this.secondName}`;
};

// basic object literal used for saving to the database
User.prototype.toObj = function() {
	return {
		id: 		this.id,
		created: 	this.created,
		firstName: 	this.firstName,
		secondName: 	this.secondName,
		fullName: 	this.fullName()
	};
};

// interface
export default User;
