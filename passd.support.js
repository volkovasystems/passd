"use strict";var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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
                                                                                                                                                                                                                			"parlev": "parlev",
                                                                                                                                                                                                                			"plough": "plough",
                                                                                                                                                                                                                			"protype": "protype",
                                                                                                                                                                                                                			"pyck": "pyck",
                                                                                                                                                                                                                			"raze": "raze",
                                                                                                                                                                                                                			"shft": "shft",
                                                                                                                                                                                                                			"wichis": "wichis",
                                                                                                                                                                                                                			"zelf": "zelf"
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-include
                                                                                                                                                                                                                */

var aply = require("aply");
var arid = require("arid");
var burne = require("burne");
var execd = require("execd");
var falzy = require("falzy");
var impel = require("impel");
var kein = require("kein");
var mrkd = require("mrkd");
var parlev = require("parlev");
var plough = require("plough");
var protype = require("protype");
var pyck = require("pyck");
var raze = require("raze");
var shft = require("shft");
var wichis = require("wichis");
var zelf = require("zelf");

var CALLED_ONCE = (0, _symbol2.default)("called-once");
var PASSABLE = (0, _symbol2.default)("passable");
var PROCEDURE = (0, _symbol2.default)("procedure");

var passd = function passd(callback, procedure, parameter) {
	/*;
                                                            	@meta-configuration:
                                                            		{
                                                            			"callback:required": "function",
                                                            			"procedure": [
                                                            				"function",
                                                            				"[function]"
                                                            				"..."
                                                            			],
                                                            			"parameter": Array
                                                            		}
                                                            	@end-meta-configuration
                                                            */

	if (falzy(callback) ||
	!protype(callback, FUNCTION) ||
	!mrkd(CALLED_ONCE, callback, true))
	{
		throw new Error("invalid callback");
	}

	if (execd(callback)) {
		return callback;
	}

	procedure = pyck(plough(shft(arguments)), FUNCTION).reverse();

	if (arid(procedure)) {
		throw new Error("procedure empty, cannot augment callback");
	}

	if (mrkd(PASSABLE, callback, true)) {
		if (kein(PROCEDURE, callback)) {
			procedure.forEach(function (procedure) {return callback[PROCEDURE].push(procedure);});
		}

		return callback;
	}

	parameter = parlev(shft(arguments, 2));

	callback[PROCEDURE] = procedure;

	var self = zelf(this);

	impel("passed", function passed(argument) {
		/*;
                                            	@meta-configuration:
                                            		{
                                            			"parameter": "..."
                                            		}
                                            	@end-meta-configuration
                                            */

		argument = wichis(raze(arguments), parameter);

		try {
			var result = aply(callback, self, argument);

			while (procedure.length) {
				aply(procedure.pop(), self, argument);
			}

			return result;

		} catch (error) {
			return error;

		} finally {
			delete callback[PROCEDURE];

			callback = undefined;
			parameter = undefined;
		}

	}, callback);

	burne(PASSABLE, callback);

	return callback;
};

module.exports = passd;

//# sourceMappingURL=passd.support.js.map