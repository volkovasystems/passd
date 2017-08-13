
const assert = require( "assert" );
const passd = require( "./passd.js" );

let CALLED_ONCE = Symbol( "called-once" );
let callback = function callback( ){
	assert.deepEqual( Array.from( arguments ), [ "hello", "world", "yeah" ], "should be equal to [ 'hello', 'world', 'yeah' ]" );
};
callback[ CALLED_ONCE ] = CALLED_ONCE;

passd( callback, function test( ){
	assert.deepEqual( Array.from( arguments ), [ "hello", "world", "yeah" ], "should be equal to [ 'hello', 'world', 'yeah' ]" );

	console.log( "ok" );
} );

assert.equal( typeof callback.passed == "function", true, "should passed function" );

callback.passed( "hello", "world", "yeah" );
