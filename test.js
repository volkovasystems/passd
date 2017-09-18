"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "passd",
			"path": "passd/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/passd.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"passd": "passd"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const passd = require( "./passd.js" );
//: @end-server






//: @server:
describe( "passd", ( ) => {

	describe( "`passd with callback and procedure`", ( ) => {
		it( "should augment callback", ( ) => {
			let CALLED_ONCE = Symbol( "called-once" );
			let callback = function callback( ){
				assert.deepEqual( Array.from( arguments ), [ "hello", "world", "yeah" ] );
			};

			callback[ CALLED_ONCE ] = CALLED_ONCE;

			passd( callback, function test( ){
				assert.deepEqual( Array.from( arguments ), [ "hello", "world", "yeah" ] );
			} );

			assert.equal( typeof callback.passed == "function", true );

			callback.passed( "hello", "world", "yeah" );
			
		} );
	} );

} );
//: @end-server






