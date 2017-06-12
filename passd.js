/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "passd",
			"path": "passd/passd.js",
			"file": "passd.js",
			"module": "passd",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/passd.git",
			"test": "passd-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Augment callback.

		This will let us presume and assume that the callback is augmented and passable.
	@end-module-documentation

	@include:
		{
			"aply": "aply",
			"arid": "arid",
			"burne": "burne",
			"execd": "execd",
			"falzy": "falzy",
			"impel": "impel",
			"kein": "kein",
			"mrkd": "mrkd",
			"plough": "plough",
			"protype": "protype",
			"pyck": "pyck",
			"raze": "raze",
			"shft": "shft",
			"zelf": "zelf"
		}
	@end-include
*/

const aply = require( "aply" );
const arid = require( "arid" );
const burne = require( "burne" );
const execd = require( "execd" );
const falzy = require( "falzy" );
const impel = require( "impel" );
const kein = require( "kein" );
const mrkd = require( "mrkd" );
const plough = require( "plough" );
const protype = require( "protype" );
const pyck = require( "pyck" );
const raze = require( "raze" );
const shft = require( "shft" );
const zelf = require( "zelf" );

const CALLED_ONCE = Symbol( "called-once" );
const PASSABLE = Symbol( "passable" );
const PROCEDURE = Symbol( "procedure" );

const passd = function passd( callback, procedure ){
	/*;
		@meta-configuration:
			{
				"callback:required": "function",
				"procedure": [
					"function",
					"[function]"
					"..."
				]
			}
		@end-meta-configuration
	*/

	if( falzy( callback ) ||
		!protype( callback, FUNCTION ) ||
		!mrkd( CALLED_ONCE, callback, true ) )
	{
		throw new Error( "invalid callback" );
	}

	if( execd( callback ) ){
		return callback;
	}

	procedure = pyck( plough( shft( arguments ) ), FUNCTION ).reverse( );

	if( arid( procedure ) ){
		throw new Error( "procedure empty, cannot augment callback" );
	}

	if( mrkd( PASSABLE, callback, true ) ){
		if( kein( PROCEDURE, callback ) ){
			procedure.forEach( ( procedure ) => callback[ PROCEDURE ].push( procedure ) );
		}

		return callback;
	}

	callback[ PROCEDURE ] = procedure;

	let self = zelf( this );

	impel( "passed", function passed( parameter ){
		/*;
			@meta-configuration:
				{
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		parameter = raze( arguments );

		try{
			let result = aply( callback, self, parameter );

			while( procedure.length ){
				aply( procedure.pop( ), self, parameter );
			}

			return result;

		}catch( error ){
			return error;

		}finally{
			delete callback[ PROCEDURE ];
		}

	}, callback );

	burne( PASSABLE, callback );

	return callback;
};

module.exports = passd;
