/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
*/

import assert from "assert";
import User from "../src/model";

/* global describe it beforeEach */

describe( "Model", () => {

	describe( "User", () => {

		let user;

		beforeEach(()=> {
			user = new User( { firstName: "Jeff", secondName: "Stelling" } );
		});

		it("should return a fullName property", () => {
			assert(typeof user.fullName === "function");
			assert(user.fullName());
			assert(user.fullName() === "Jeff Stelling");
		});

		it("should return a id property", () => {
			assert(user.id);
			assert(user.id.length === 36);
		});

		it("should return a date property", () => {
			assert(user.created);
			assert(typeof user.created === "number");
		});

		it("should return an object literal from .toObj()", () => {
			assert(typeof user.toObj === "function");

			let userObj = user.toObj();

			assert(userObj);
			assert(typeof userObj === "object");
		});
	});
});
