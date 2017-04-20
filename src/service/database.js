/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */

"use strict";

// dependencies
import fs from "fs";
import util from "../utils";

// constructor
const Database = function( config ) {
	this.file = config.file || undefined;
};

/**
 * Using the fs.readFile we return an array of json objects in a callback.
 *
 * @public
 * @param {String} file file location on disc for writing data.
 * @param {Function} callback function executed on return.
 * @returns {Function} Returns `function`.
 */
Database.prototype.get = function get( callback ) {

	const file = this.file;

	fs.readFile( file, ( err, data ) => {

		if ( err ) return callback( new Error( err ) );

		data = util.strip( data );
		const arr = [];

		try {
			data.split( "\n" ).forEach( record => {
				if ( record !== "" ) {
					arr.push( JSON.parse( record ) );
				}
			} );
		} catch ( err2 ) {
			err2.message = `${file} : ${err2.message}`;
			return callback( new Error( err2 ) );
		}
		callback( null, arr );
	} );
};

/**
 * Using the fs.writefile we write data to a file, checking for presence of existing record.
 *
 * @public
 * @param {String} file file location on disc for writing data.
 * @param {Object} user The object json stringified object to be written to the file.
 * @param {Function} callback function executed on return.
 * @returns {Function} Returns `function`.
 */
Database.prototype.create = function ( obj, callback ) {

	let file = this.file;

	this.get( ( err, data ) => {

		if ( err ) return new Error( err );

		let exists = util.exists( data, user.fullName, "fullName" );

		if ( exists ) {
			return new Error( `Record for ${user.fullName} already exists!` );
		} else {
			let str = "";
			try {
				str = JSON.stringify( user ) + "\n"; // add line break
			} catch ( err ) {
				return new Error( `${file}: ${err}` );
			}

			fs.writeFile( file, str, {
				flag: "a" // allows data to be appended to the existing file.
			}, callback );
		}
	} );
};

// interface
export default Database;
