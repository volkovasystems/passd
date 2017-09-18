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
                                                                                                                                                                                                                			"contributors": [
                                                                                                                                                                                                                				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                			],
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
	typeof callback != "function" ||
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3NkLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXBseSIsInJlcXVpcmUiLCJhcmlkIiwiYnVybmUiLCJleGVjZCIsImZhbHp5IiwiaW1wZWwiLCJrZWluIiwibXJrZCIsInBhcmxldiIsInBsb3VnaCIsInB5Y2siLCJyYXplIiwic2hmdCIsIndpY2hpcyIsInplbGYiLCJDQUxMRURfT05DRSIsIlBBU1NBQkxFIiwiUFJPQ0VEVVJFIiwicGFzc2QiLCJjYWxsYmFjayIsInByb2NlZHVyZSIsInBhcmFtZXRlciIsIkVycm9yIiwiYXJndW1lbnRzIiwiRlVOQ1RJT04iLCJyZXZlcnNlIiwiZm9yRWFjaCIsInB1c2giLCJzZWxmIiwicGFzc2VkIiwiYXJndW1lbnQiLCJyZXN1bHQiLCJsZW5ndGgiLCJwb3AiLCJlcnJvciIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJnTkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0VBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSyxRQUFRTCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1NLE9BQU9OLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTU8sT0FBT1AsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNUSxTQUFTUixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1TLFNBQVNULFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVUsT0FBT1YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNVyxPQUFPWCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1ZLE9BQU9aLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTWEsU0FBU2IsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNYyxPQUFPZCxRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNZSxjQUFjLHNCQUFRLGFBQVIsQ0FBcEI7QUFDQSxJQUFNQyxXQUFXLHNCQUFRLFVBQVIsQ0FBakI7QUFDQSxJQUFNQyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxRQUFoQixFQUEwQkMsU0FBMUIsRUFBcUNDLFNBQXJDLEVBQWdEO0FBQzdEOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQUlqQixNQUFPZSxRQUFQO0FBQ0gsUUFBT0EsUUFBUCxJQUFtQixVQURoQjtBQUVILEVBQUNaLEtBQU1RLFdBQU4sRUFBbUJJLFFBQW5CLEVBQTZCLElBQTdCLENBRkY7QUFHQTtBQUNDLFFBQU0sSUFBSUcsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJbkIsTUFBT2dCLFFBQVAsQ0FBSixFQUF1QjtBQUN0QixTQUFPQSxRQUFQO0FBQ0E7O0FBRURDLGFBQVlWLEtBQU1ELE9BQVFHLEtBQU1XLFNBQU4sQ0FBUixDQUFOLEVBQW1DQyxRQUFuQyxFQUE4Q0MsT0FBOUMsRUFBWjs7QUFFQSxLQUFJeEIsS0FBTW1CLFNBQU4sQ0FBSixFQUF1QjtBQUN0QixRQUFNLElBQUlFLEtBQUosQ0FBVywwQ0FBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSWYsS0FBTVMsUUFBTixFQUFnQkcsUUFBaEIsRUFBMEIsSUFBMUIsQ0FBSixFQUFzQztBQUNyQyxNQUFJYixLQUFNVyxTQUFOLEVBQWlCRSxRQUFqQixDQUFKLEVBQWlDO0FBQ2hDQyxhQUFVTSxPQUFWLENBQW1CLFVBQUVOLFNBQUYsVUFBaUJELFNBQVVGLFNBQVYsRUFBc0JVLElBQXRCLENBQTRCUCxTQUE1QixDQUFqQixFQUFuQjtBQUNBOztBQUVELFNBQU9ELFFBQVA7QUFDQTs7QUFFREUsYUFBWWIsT0FBUUksS0FBTVcsU0FBTixFQUFpQixDQUFqQixDQUFSLENBQVo7O0FBRUFKLFVBQVVGLFNBQVYsSUFBd0JHLFNBQXhCOztBQUVBLEtBQUlRLE9BQU9kLEtBQU0sSUFBTixDQUFYOztBQUVBVCxPQUFPLFFBQVAsRUFBaUIsU0FBU3dCLE1BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCO0FBQzNDOzs7Ozs7OztBQVFDQSxhQUFXakIsT0FBUUYsS0FBTVksU0FBTixDQUFSLEVBQTJCRixTQUEzQixDQUFYOztBQUVELE1BQUc7QUFDRixPQUFJVSxTQUFTaEMsS0FBTW9CLFFBQU4sRUFBZ0JTLElBQWhCLEVBQXNCRSxRQUF0QixDQUFiOztBQUVBLFVBQU9WLFVBQVVZLE1BQWpCLEVBQXlCO0FBQ3hCakMsU0FBTXFCLFVBQVVhLEdBQVYsRUFBTixFQUF3QkwsSUFBeEIsRUFBOEJFLFFBQTlCO0FBQ0E7O0FBRUQsVUFBT0MsTUFBUDs7QUFFQSxHQVRELENBU0MsT0FBT0csS0FBUCxFQUFjO0FBQ2QsVUFBT0EsS0FBUDs7QUFFQSxHQVpELFNBWVE7QUFDUCxVQUFPZixTQUFVRixTQUFWLENBQVA7O0FBRUFFLGNBQVdnQixTQUFYO0FBQ0FkLGVBQVljLFNBQVo7QUFDQTs7QUFFRCxFQTlCRCxFQThCR2hCLFFBOUJIOztBQWdDQWpCLE9BQU9jLFFBQVAsRUFBaUJHLFFBQWpCOztBQUVBLFFBQU9BLFFBQVA7QUFDQSxDQWpGRDs7QUFtRkFpQixPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJmaWxlIjoicGFzc2Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwYXNzZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicGFzc2QvcGFzc2QuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInBhc3NkLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInBhc3NkXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wYXNzZC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInBhc3NkLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0QXVnbWVudCBjYWxsYmFjay5cblxuXHRcdFRoaXMgd2lsbCBsZXQgdXMgcHJlc3VtZSBhbmQgYXNzdW1lIHRoYXQgdGhlIGNhbGxiYWNrIGlzIGF1Z21lbnRlZCBhbmQgcGFzc2FibGUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFwbHlcIjogXCJhcGx5XCIsXG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImJ1cm5lXCI6IFwiYnVybmVcIixcblx0XHRcdFwiZXhlY2RcIjogXCJleGVjZFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImltcGVsXCI6IFwiaW1wZWxcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwibXJrZFwiOiBcIm1ya2RcIixcblx0XHRcdFwicGFybGV2XCI6IFwicGFybGV2XCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJ3aWNoaXNcIjogXCJ3aWNoaXNcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcGx5ID0gcmVxdWlyZSggXCJhcGx5XCIgKTtcbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYnVybmUgPSByZXF1aXJlKCBcImJ1cm5lXCIgKTtcbmNvbnN0IGV4ZWNkID0gcmVxdWlyZSggXCJleGVjZFwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaW1wZWwgPSByZXF1aXJlKCBcImltcGVsXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbXJrZCA9IHJlcXVpcmUoIFwibXJrZFwiICk7XG5jb25zdCBwYXJsZXYgPSByZXF1aXJlKCBcInBhcmxldlwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBweWNrID0gcmVxdWlyZSggXCJweWNrXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5jb25zdCB3aWNoaXMgPSByZXF1aXJlKCBcIndpY2hpc1wiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3QgQ0FMTEVEX09OQ0UgPSBTeW1ib2woIFwiY2FsbGVkLW9uY2VcIiApO1xuY29uc3QgUEFTU0FCTEUgPSBTeW1ib2woIFwicGFzc2FibGVcIiApO1xuY29uc3QgUFJPQ0VEVVJFID0gU3ltYm9sKCBcInByb2NlZHVyZVwiICk7XG5cbmNvbnN0IHBhc3NkID0gZnVuY3Rpb24gcGFzc2QoIGNhbGxiYWNrLCBwcm9jZWR1cmUsIHBhcmFtZXRlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJwcm9jZWR1cmVcIjogW1xuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIltmdW5jdGlvbl1cIlxuXHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogQXJyYXlcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fFxuXHRcdHR5cGVvZiBjYWxsYmFjayAhPSBcImZ1bmN0aW9uXCIgfHxcblx0XHQhbXJrZCggQ0FMTEVEX09OQ0UsIGNhbGxiYWNrLCB0cnVlICkgKVxuXHR7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHR9XG5cblx0aWYoIGV4ZWNkKCBjYWxsYmFjayApICl7XG5cdFx0cmV0dXJuIGNhbGxiYWNrO1xuXHR9XG5cblx0cHJvY2VkdXJlID0gcHljayggcGxvdWdoKCBzaGZ0KCBhcmd1bWVudHMgKSApLCBGVU5DVElPTiApLnJldmVyc2UoICk7XG5cblx0aWYoIGFyaWQoIHByb2NlZHVyZSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcInByb2NlZHVyZSBlbXB0eSwgY2Fubm90IGF1Z21lbnQgY2FsbGJhY2tcIiApO1xuXHR9XG5cblx0aWYoIG1ya2QoIFBBU1NBQkxFLCBjYWxsYmFjaywgdHJ1ZSApICl7XG5cdFx0aWYoIGtlaW4oIFBST0NFRFVSRSwgY2FsbGJhY2sgKSApe1xuXHRcdFx0cHJvY2VkdXJlLmZvckVhY2goICggcHJvY2VkdXJlICkgPT4gY2FsbGJhY2tbIFBST0NFRFVSRSBdLnB1c2goIHByb2NlZHVyZSApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxiYWNrO1xuXHR9XG5cblx0cGFyYW1ldGVyID0gcGFybGV2KCBzaGZ0KCBhcmd1bWVudHMsIDIgKSApO1xuXG5cdGNhbGxiYWNrWyBQUk9DRURVUkUgXSA9IHByb2NlZHVyZTtcblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRpbXBlbCggXCJwYXNzZWRcIiwgZnVuY3Rpb24gcGFzc2VkKCBhcmd1bWVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdCBcdGFyZ3VtZW50ID0gd2ljaGlzKCByYXplKCBhcmd1bWVudHMgKSwgcGFyYW1ldGVyICk7XG5cblx0XHR0cnl7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYXBseSggY2FsbGJhY2ssIHNlbGYsIGFyZ3VtZW50ICk7XG5cblx0XHRcdHdoaWxlKCBwcm9jZWR1cmUubGVuZ3RoICl7XG5cdFx0XHRcdGFwbHkoIHByb2NlZHVyZS5wb3AoICksIHNlbGYsIGFyZ3VtZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gZXJyb3I7XG5cblx0XHR9ZmluYWxseXtcblx0XHRcdGRlbGV0ZSBjYWxsYmFja1sgUFJPQ0VEVVJFIF07XG5cblx0XHRcdGNhbGxiYWNrID0gdW5kZWZpbmVkO1xuXHRcdFx0cGFyYW1ldGVyID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHR9LCBjYWxsYmFjayApO1xuXG5cdGJ1cm5lKCBQQVNTQUJMRSwgY2FsbGJhY2sgKTtcblxuXHRyZXR1cm4gY2FsbGJhY2s7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhc3NkO1xuIl19
//# sourceMappingURL=passd.support.js.map
