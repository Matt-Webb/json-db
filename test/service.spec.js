/*!
 * Basic JSON Database
 * Copyright(c) 2017 Matthew D Webb <matt.d.webb@icloud.com>
 * MIT Licensed
 */

import assert from "assert";
import fs from "fs";
import os from "os";
import path from "path";
import sinon from "sinon";
import rimraf from "rimraf";

import User from "../src/model";
import Database from "../src/service";

/* global describe it beforeEach afterEach */

describe( "Database", function () {

	let TEST_DIR, db, file, pre1, pre2;

	beforeEach( ( done ) => {
		TEST_DIR = path.join( os.tmpdir(), "users" );
		file = path.join( TEST_DIR, "users.json" );
		db = new Database( {
			file: file
		} );
		pre1 = new User( {
			firstName: "Jeff",
			secondName: "Stelling"
		} ).toObj();
		pre2 = new User( {
			firstName: "Heyley",
			secondName: "McQueen"
		} ).toObj();

		rimraf.sync( TEST_DIR );
		fs.mkdir( TEST_DIR, done );
	} );

	afterEach( ( done ) => {
		rimraf.sync( TEST_DIR );
		done();
	} );

	describe( "get()", function () {

		it( "should read and parse JSON", ( done ) => {
			const user = {
				firstName: "Kirsty",
				secondName: "Gallacher"
			};

			fs.writeFileSync( file, JSON.stringify( user ) );

			db.get( ( err, arr ) => {
				assert.ifError( err );
				assert.equal( arr[ 0 ].firstName, user.firstName );
				done();
			} );
		} );

		it( "should return an array with two users", ( done ) => {

			fs.writeFileSync( file, JSON.stringify( pre1 ) );
			fs.writeFileSync( file, JSON.stringify( pre2 ) );

			db.get( ( err, arr ) => {
				assert( arr instanceof Array );
				assert( arr.length === 1 );
				done();
			} );
		} );

		it( "should include the filename in error", ( done ) => {

			fs.writeFileSync( file, "{" );

			db.get( ( err ) => {
				assert( err instanceof Error );
				assert( err.message.match( file ) );
				done();
			} );
		} );

		it( "should call get method only once", ( done ) => {

			let spy = sinon.spy( db, "get" );

			fs.writeFileSync( file, JSON.stringify( pre1 ) );

			db.get( ( err ) => {
				assert.ifError( err );
				assert( spy.calledOnce );
				done();
			} );

		} );

	} );

	describe( "create()", function () {

		it( "should create a json record", ( done ) => {
			db.create( pre1, ( err, data ) => {
				assert.ifError( err );
				assert( data );
			} );
			fs.readFile( file, "utf8", ( err, data ) => {
				assert.ifError( err );
				assert( data, pre1 );
				assert.deepEqual( data, pre1 );
			} );
			done();
		} );

    // TODO: fix.
		it.skip( "should error when trying to create duplicate a records", ( done ) => {

			fs.writeFileSync( file, JSON.stringify( pre1 ) );

			db.create( pre1, ( err ) => {
				assert( err instanceof Error );
        assert( err.message.match( pre1.fullName ));
			} );
			done();
		} );

		it( "should call create method only once", ( done ) => {
			let spy = sinon.spy( db, "create" );
			db.create( pre1, ( err ) => {
				assert.ifError( err );
				assert( spy.calledOnce );
			} );
			done();
		} );

		it( "should call get method only once", ( done ) => {
			let spy = sinon.spy( db, "get" );
			db.create( pre1, ( err ) => {
				assert.ifError( err );
				assert( spy.calledOnce );
			} );
			done();
		} );

	} );

} );
