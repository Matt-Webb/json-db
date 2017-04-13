/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(6);
/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__user__["a" /* default */]);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(12);
/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__helper__["a" /* default */]);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./model.spec.js": 9,
	"./service.spec.js": 10,
	"./utils.spec.js": 11
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


    var testsContext = __webpack_require__(4);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */



// dependencies



// constructor
const User = function( args ) {
	this.id = __WEBPACK_IMPORTED_MODULE_0_uuid_v1___default()();
	this.created = __WEBPACK_IMPORTED_MODULE_1_moment___default()().unix();
	this.firstName = args.firstName;
	this.secondName = args.secondName;
};

// basic prototype method
User.prototype.fullName = function() {
	return `${this.firstName} ${this.secondName}`;
};

// basic object literal used for saving to the database
User.prototype.toObj = function() {
	const data = {
		id: this.id,
		created: this.created,
		firstName: this.firstName,
		secondName: this.secondName,
		fullName: this.fullName()
	};

	return data; // JSON.stringify( data ); // moved onto service.database.
};

// interface
/* harmony default export */ __webpack_exports__["a"] = (User);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */



// dependencies



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
Database.prototype.getUsers = function ( callback ) {

	const file = this.file;

	__WEBPACK_IMPORTED_MODULE_0_fs___default.a.readFile( file, ( err, data ) => {

		if ( err ) return callback( new Error( err ) );

		data = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].strip( data );
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
Database.prototype.createUser = function ( user, callback ) {

	let file = this.file;
	/**
	 * Check if the record exists! Please advert your eyes ...
	 * no indexing, no streaming, just a plain old read the entire file,
	 * loop it and string match to return true if we find what we want.
	 */
	this.getUsers( ( err, data ) => {

		if ( err ) return callback( new Error( err ) );

		let exists = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].exists( data, user.fullName, "fullName" );

		if ( exists ) {
			return callback( new Error( `Record for ${user.fullName} already exists!` ) );
		} else {
			let str = "";
			try {
				str = JSON.stringify( user ) + "\n"; // add line break
			} catch ( err ) {
				return callback( new Error( `${file}: ${err}` ), null );
			}

			__WEBPACK_IMPORTED_MODULE_0_fs___default.a.writeFile( file, str, {
				flag: "a" // allows data to be appended to the existing file.
			}, callback );
		}
	} );
};

// interface
/* harmony default export */ __webpack_exports__["a"] = (Database);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(7);
/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */]);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_assert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);
/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
*/




/* global describe it beforeEach */

describe( "Model", () => {

	describe( "User", () => {

		let user;

		beforeEach(()=> {
			user = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */]( { firstName: "Jeff", secondName: "Stelling" } );
		});

		it("should return a fullName property", () => {
			__WEBPACK_IMPORTED_MODULE_0_assert___default()(typeof user.fullName === "function");
			__WEBPACK_IMPORTED_MODULE_0_assert___default()(user.fullName());
			__WEBPACK_IMPORTED_MODULE_0_assert___default()(user.fullName() === "Jeff Stelling");
		});

		it("should return a id property", () => {
			__WEBPACK_IMPORTED_MODULE_0_assert___default()(user.id);
			__WEBPACK_IMPORTED_MODULE_0_assert___default()(user.id.length === 36);
		});

		it("should return a date property", () => {
			__WEBPACK_IMPORTED_MODULE_0_assert___default()(user.created);
			__WEBPACK_IMPORTED_MODULE_0_assert___default()(typeof user.created === "number");
		});

		it("should return an object literal from .toObj()", () => {
			__WEBPACK_IMPORTED_MODULE_0_assert___default()(typeof user.toObj === "function");

			let userObj = user.toObj();

			__WEBPACK_IMPORTED_MODULE_0_assert___default()(userObj);
			__WEBPACK_IMPORTED_MODULE_0_assert___default()(typeof userObj === "object");
		});
	});
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_assert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_os__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sinon__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sinon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sinon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rimraf__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rimraf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rimraf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service__ = __webpack_require__(8);
/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */










/* global describe it beforeEach afterEach */

describe( "Database", function () {

	let TEST_DIR, db, file, pre1, pre2;

	beforeEach( ( done ) => {
		TEST_DIR = __WEBPACK_IMPORTED_MODULE_3_path___default.a.join( __WEBPACK_IMPORTED_MODULE_2_os___default.a.tmpdir(), "users" );
		file = __WEBPACK_IMPORTED_MODULE_3_path___default.a.join( TEST_DIR, "users.json" );
		db = new __WEBPACK_IMPORTED_MODULE_7__service__["a" /* default */]( {
			file: file
		} );
		pre1 = new __WEBPACK_IMPORTED_MODULE_6__model__["a" /* default */]( {
			firstName: "Jeff",
			secondName: "Stelling"
		} ).toObj();
		pre2 = new __WEBPACK_IMPORTED_MODULE_6__model__["a" /* default */]( {
			firstName: "Heyley",
			secondName: "McQueen"
		} ).toObj();

		__WEBPACK_IMPORTED_MODULE_5_rimraf___default.a.sync( TEST_DIR );
		__WEBPACK_IMPORTED_MODULE_1_fs___default.a.mkdir( TEST_DIR, done );
	} );

	afterEach( ( done ) => {
		__WEBPACK_IMPORTED_MODULE_5_rimraf___default.a.sync( TEST_DIR );
		done();
	} );

	describe( "getUsers()", function () {

		it( "should read and parse JSON", ( done ) => {
			const user = {
				firstName: "Kirsty",
				secondName: "Gallacher"
			};

			__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync( file, JSON.stringify( user ) );

			db.getUsers( ( err, arr ) => {
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.ifError( err );
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.equal( arr[ 0 ].firstName, user.firstName );
				done();
			} );
		} );

		it( "should return an array with two users", ( done ) => {

			__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync( file, JSON.stringify( pre1 ) );
			__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync( file, JSON.stringify( pre2 ) );

			db.getUsers( ( err, arr ) => {
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( arr instanceof Array );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( arr.length === 1 );
				done();
			} );
		} );

		it( "should include the filename in error", ( done ) => {

			__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync( file, "{" );

			db.getUsers( ( err ) => {
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( err instanceof Error );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( err.message.match( file ) );
				done();
			} );
		} );

		it( "should call getUsers method only once", ( done ) => {

			let spy = __WEBPACK_IMPORTED_MODULE_4_sinon___default.a.spy( db, "getUsers" );

			__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync( file, JSON.stringify( pre1 ) );

			db.getUsers( ( err ) => {
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.ifError( err );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( spy.calledOnce );
				done();
			} );

		} );

	} );

	describe( "createUser()", function () {

		it( "should create a json record", ( done ) => {
			db.createUser( pre1, ( err, data ) => {
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.ifError( err );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( data );
			} );
			__WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFile( file, "utf8", ( err, data ) => {
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.ifError( err );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( data, pre1 );
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.deepEqual( data, pre1 );
			} );
			done();
		} );

    // TODO: fix.
		it.skip( "should error when trying to create duplicate a records", ( done ) => {

			__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync( file, JSON.stringify( pre1 ) );

			db.createUser( pre1, ( err ) => {
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( err instanceof Error );
        __WEBPACK_IMPORTED_MODULE_0_assert___default()( err.message.match( pre1.fullName ));
			} );
			done();
		} );

		it( "should call createUser method only once", ( done ) => {
			let spy = __WEBPACK_IMPORTED_MODULE_4_sinon___default.a.spy( db, "createUser" );
			db.createUser( pre1, ( err ) => {
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.ifError( err );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( spy.calledOnce );
			} );
			done();
		} );

		it( "should call getusers method only once", ( done ) => {
			let spy = __WEBPACK_IMPORTED_MODULE_4_sinon___default.a.spy( db, "getUsers" );
			db.createUser( pre1, ( err ) => {
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.ifError( err );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( spy.calledOnce );
			} );
			done();
		} );

	} );

} );


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_assert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */




/* global describe it beforeEach */

describe( "Utilities", () => {

	describe( "helper", () => {

		let data, helper, prop;

		beforeEach( ( done ) => {
			data = [ {
				name: "Jeff Stelling"
			}, {
				name: "Kirsy Gallacher"
			}, {
				name: "Hayley McQueen"
			} ];
			helper = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */];
			prop = "name";
			done();
		} );

		describe( "exists()", () => {
			it( "should return TRUE if object value is found in database", ( done ) => {
				const item = {
					name: "Jeff Stelling"
				};
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( helper.exists( data, item, prop ) );
				done();
			} );

			it( "should return FALSE if object value is NOT found in database", ( done ) => {
				const item = {
					name: "Legend Jeff"
				};
				const prop = "name";
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( !helper.exists( data, item, prop ) );
				done();
			} );

			it( "should return FALSE if data is not an Array", ( done ) => {
				const data = {
					name: "Jeff Stelling"
				};
				const item = {
					name: "Jeff Stelling"
				};
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( !helper.exists( data, item, prop ) );
				done();
			} );

		} );

		describe( "extract()", () => {

			it( "should return object from the database", ( done ) => {
				const item = {
					name: "Jeff Stelling"
				};
				const record = helper.extract( data, item, prop );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( typeof record === "object" );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( record.name === item.name );
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.deepEqual( record, item );
				done();
			} );

			it( "should return undefined when object is not in database", ( done ) => {
				const item = {
					name: "Insanely Hot McQueen"
				};
				const record = helper.extract( data, item, prop );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( !record );
				done();
			} );

			it( "should return undefined when object is not in database", ( done ) => {
				const item = {
					name: "Insanely Hot McQueen"
				};
				const record = helper.extract( data, item, prop );
				__WEBPACK_IMPORTED_MODULE_0_assert___default()( !record );
				done();
			} );

		} );

		describe( "strip", () => {

			it( "should properly parse", ( done ) => {
				const missFormedItem = "\uFEFF" + JSON.stringify( {
					name: "Kirsy Gallacher"
				} );
				const item = JSON.stringify( {
					name: "Kirsy Gallacher"
				} );
				const obj = helper.strip( missFormedItem );
				__WEBPACK_IMPORTED_MODULE_0_assert___default.a.deepEqual( obj, item );
				done();
			} );
		} );

	} );
} );


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */



/**
 * This is a primative / sightly "over-engineered" example of a utility you might create in order to
 * reduce complexity and increase re-usability across your package / application.
 *
 * @namespace Utils { exists, extract, strip }
 * @name Helper
 */

function Helper() {}

/**
 * Checks for existing records in an Array of Objects
 *
 * @public
 * @param {Array} data The data used to check against.
 * @param {Object} item The object we are looking for within the data.
 * @param {String} prop The object properly we match both data and item against.
 * @returns {Boolean} Returns `true`.
 */
Helper.prototype.exists = function ( data, item, prop ) {

	if ( !Array.isArray( data ) ) return false;

	return data.some( record => record[ prop ] === item[ prop ] );
};

/**
 * Finds and returns existing records in an Array of Objects
 *
 * @public
 * @param {Array} data The data used to check against.
 * @param {Object} item The object we are looking for within the data.
 * @param {String} prop The object properly we match both data and item against.
 * @returns {Object} Returns `object`.
 */
Helper.prototype.extract = function ( data, item, prop ) {

	if ( !Array.isArray( data ) ) return;
	return data.filter( record => record[ prop ] === item[ prop ] )[ 0 ] || undefined;
};

/**
 * JSON.parse would convert this to a utf8 string if encoding wasn't specified
 *
 * @public
 * @param {Object} data json object
 * @returns {Object} Returns `object`.
 */
Helper.prototype.strip = function ( data ) {
	if ( Buffer.isBuffer( data ) ) {
		data = data.toString( "utf8" );
	}
	data = data.replace( /^\uFEFF/, "" );

	return data;
};

// interface
/* harmony default export */ __webpack_exports__["a"] = (new Helper()); // singleton!


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("rimraf");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("sinon");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })
/******/ ]);