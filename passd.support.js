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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3NkLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXBseSIsInJlcXVpcmUiLCJhcmlkIiwiYnVybmUiLCJleGVjZCIsImZhbHp5IiwiaW1wZWwiLCJrZWluIiwibXJrZCIsInBhcmxldiIsInBsb3VnaCIsInByb3R5cGUiLCJweWNrIiwicmF6ZSIsInNoZnQiLCJ3aWNoaXMiLCJ6ZWxmIiwiQ0FMTEVEX09OQ0UiLCJQQVNTQUJMRSIsIlBST0NFRFVSRSIsInBhc3NkIiwiY2FsbGJhY2siLCJwcm9jZWR1cmUiLCJwYXJhbWV0ZXIiLCJGVU5DVElPTiIsIkVycm9yIiwiYXJndW1lbnRzIiwicmV2ZXJzZSIsImZvckVhY2giLCJwdXNoIiwic2VsZiIsInBhc3NlZCIsImFyZ3VtZW50IiwicmVzdWx0IiwibGVuZ3RoIiwicG9wIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiZ05BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1LLFFBQVFMLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTyxPQUFPUCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1RLFNBQVNSLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVMsU0FBU1QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNVSxVQUFVVixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNVyxPQUFPWCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1ZLE9BQU9aLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTWEsT0FBT2IsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNYyxTQUFTZCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1lLE9BQU9mLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1nQixjQUFjLHNCQUFRLGFBQVIsQ0FBcEI7QUFDQSxJQUFNQyxXQUFXLHNCQUFRLFVBQVIsQ0FBakI7QUFDQSxJQUFNQyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxRQUFoQixFQUEwQkMsU0FBMUIsRUFBcUNDLFNBQXJDLEVBQWdEO0FBQzdEOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQUlsQixNQUFPZ0IsUUFBUDtBQUNILEVBQUNWLFFBQVNVLFFBQVQsRUFBbUJHLFFBQW5CLENBREU7QUFFSCxFQUFDaEIsS0FBTVMsV0FBTixFQUFtQkksUUFBbkIsRUFBNkIsSUFBN0IsQ0FGRjtBQUdBO0FBQ0MsUUFBTSxJQUFJSSxLQUFKLENBQVcsa0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlyQixNQUFPaUIsUUFBUCxDQUFKLEVBQXVCO0FBQ3RCLFNBQU9BLFFBQVA7QUFDQTs7QUFFREMsYUFBWVYsS0FBTUYsT0FBUUksS0FBTVksU0FBTixDQUFSLENBQU4sRUFBbUNGLFFBQW5DLEVBQThDRyxPQUE5QyxFQUFaOztBQUVBLEtBQUl6QixLQUFNb0IsU0FBTixDQUFKLEVBQXVCO0FBQ3RCLFFBQU0sSUFBSUcsS0FBSixDQUFXLDBDQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJakIsS0FBTVUsUUFBTixFQUFnQkcsUUFBaEIsRUFBMEIsSUFBMUIsQ0FBSixFQUFzQztBQUNyQyxNQUFJZCxLQUFNWSxTQUFOLEVBQWlCRSxRQUFqQixDQUFKLEVBQWlDO0FBQ2hDQyxhQUFVTSxPQUFWLENBQW1CLFVBQUVOLFNBQUYsVUFBaUJELFNBQVVGLFNBQVYsRUFBc0JVLElBQXRCLENBQTRCUCxTQUE1QixDQUFqQixFQUFuQjtBQUNBOztBQUVELFNBQU9ELFFBQVA7QUFDQTs7QUFFREUsYUFBWWQsT0FBUUssS0FBTVksU0FBTixFQUFpQixDQUFqQixDQUFSLENBQVo7O0FBRUFMLFVBQVVGLFNBQVYsSUFBd0JHLFNBQXhCOztBQUVBLEtBQUlRLE9BQU9kLEtBQU0sSUFBTixDQUFYOztBQUVBVixPQUFPLFFBQVAsRUFBaUIsU0FBU3lCLE1BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCO0FBQzNDOzs7Ozs7OztBQVFDQSxhQUFXakIsT0FBUUYsS0FBTWEsU0FBTixDQUFSLEVBQTJCSCxTQUEzQixDQUFYOztBQUVELE1BQUc7QUFDRixPQUFJVSxTQUFTakMsS0FBTXFCLFFBQU4sRUFBZ0JTLElBQWhCLEVBQXNCRSxRQUF0QixDQUFiOztBQUVBLFVBQU9WLFVBQVVZLE1BQWpCLEVBQXlCO0FBQ3hCbEMsU0FBTXNCLFVBQVVhLEdBQVYsRUFBTixFQUF3QkwsSUFBeEIsRUFBOEJFLFFBQTlCO0FBQ0E7O0FBRUQsVUFBT0MsTUFBUDs7QUFFQSxHQVRELENBU0MsT0FBT0csS0FBUCxFQUFjO0FBQ2QsVUFBT0EsS0FBUDs7QUFFQSxHQVpELFNBWVE7QUFDUCxVQUFPZixTQUFVRixTQUFWLENBQVA7O0FBRUFFLGNBQVdnQixTQUFYO0FBQ0FkLGVBQVljLFNBQVo7QUFDQTs7QUFFRCxFQTlCRCxFQThCR2hCLFFBOUJIOztBQWdDQWxCLE9BQU9lLFFBQVAsRUFBaUJHLFFBQWpCOztBQUVBLFFBQU9BLFFBQVA7QUFDQSxDQWpGRDs7QUFtRkFpQixPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJmaWxlIjoicGFzc2Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicGFzc2RcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwicGFzc2QvcGFzc2QuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwicGFzc2QuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJwYXNzZFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wYXNzZC5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwicGFzc2QtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRBdWdtZW50IGNhbGxiYWNrLlxyXG5cclxuXHRcdFRoaXMgd2lsbCBsZXQgdXMgcHJlc3VtZSBhbmQgYXNzdW1lIHRoYXQgdGhlIGNhbGxiYWNrIGlzIGF1Z21lbnRlZCBhbmQgcGFzc2FibGUuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhcGx5XCI6IFwiYXBseVwiLFxyXG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXHJcblx0XHRcdFwiYnVybmVcIjogXCJidXJuZVwiLFxyXG5cdFx0XHRcImV4ZWNkXCI6IFwiZXhlY2RcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwiaW1wZWxcIjogXCJpbXBlbFwiLFxyXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXHJcblx0XHRcdFwibXJrZFwiOiBcIm1ya2RcIixcclxuXHRcdFx0XCJwYXJsZXZcIjogXCJwYXJsZXZcIixcclxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcclxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxyXG5cdFx0XHRcInB5Y2tcIjogXCJweWNrXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcIndpY2hpc1wiOiBcIndpY2hpc1wiLFxyXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFwbHkgPSByZXF1aXJlKCBcImFwbHlcIiApO1xyXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcclxuY29uc3QgYnVybmUgPSByZXF1aXJlKCBcImJ1cm5lXCIgKTtcclxuY29uc3QgZXhlY2QgPSByZXF1aXJlKCBcImV4ZWNkXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgaW1wZWwgPSByZXF1aXJlKCBcImltcGVsXCIgKTtcclxuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XHJcbmNvbnN0IG1ya2QgPSByZXF1aXJlKCBcIm1ya2RcIiApO1xyXG5jb25zdCBwYXJsZXYgPSByZXF1aXJlKCBcInBhcmxldlwiICk7XHJcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcInB5Y2tcIiApO1xyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcclxuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XHJcbmNvbnN0IHdpY2hpcyA9IHJlcXVpcmUoIFwid2ljaGlzXCIgKTtcclxuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XHJcblxyXG5jb25zdCBDQUxMRURfT05DRSA9IFN5bWJvbCggXCJjYWxsZWQtb25jZVwiICk7XHJcbmNvbnN0IFBBU1NBQkxFID0gU3ltYm9sKCBcInBhc3NhYmxlXCIgKTtcclxuY29uc3QgUFJPQ0VEVVJFID0gU3ltYm9sKCBcInByb2NlZHVyZVwiICk7XHJcblxyXG5jb25zdCBwYXNzZCA9IGZ1bmN0aW9uIHBhc3NkKCBjYWxsYmFjaywgcHJvY2VkdXJlLCBwYXJhbWV0ZXIgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcInByb2NlZHVyZVwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcIltmdW5jdGlvbl1cIlxyXG5cdFx0XHRcdFx0XCIuLi5cIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogQXJyYXlcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHxcclxuXHRcdCFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSB8fFxyXG5cdFx0IW1ya2QoIENBTExFRF9PTkNFLCBjYWxsYmFjaywgdHJ1ZSApIClcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZXhlY2QoIGNhbGxiYWNrICkgKXtcclxuXHRcdHJldHVybiBjYWxsYmFjaztcclxuXHR9XHJcblxyXG5cdHByb2NlZHVyZSA9IHB5Y2soIHBsb3VnaCggc2hmdCggYXJndW1lbnRzICkgKSwgRlVOQ1RJT04gKS5yZXZlcnNlKCApO1xyXG5cclxuXHRpZiggYXJpZCggcHJvY2VkdXJlICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJwcm9jZWR1cmUgZW1wdHksIGNhbm5vdCBhdWdtZW50IGNhbGxiYWNrXCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBtcmtkKCBQQVNTQUJMRSwgY2FsbGJhY2ssIHRydWUgKSApe1xyXG5cdFx0aWYoIGtlaW4oIFBST0NFRFVSRSwgY2FsbGJhY2sgKSApe1xyXG5cdFx0XHRwcm9jZWR1cmUuZm9yRWFjaCggKCBwcm9jZWR1cmUgKSA9PiBjYWxsYmFja1sgUFJPQ0VEVVJFIF0ucHVzaCggcHJvY2VkdXJlICkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY2FsbGJhY2s7XHJcblx0fVxyXG5cclxuXHRwYXJhbWV0ZXIgPSBwYXJsZXYoIHNoZnQoIGFyZ3VtZW50cywgMiApICk7XHJcblxyXG5cdGNhbGxiYWNrWyBQUk9DRURVUkUgXSA9IHByb2NlZHVyZTtcclxuXHJcblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XHJcblxyXG5cdGltcGVsKCBcInBhc3NlZFwiLCBmdW5jdGlvbiBwYXNzZWQoIGFyZ3VtZW50ICl7XHJcblx0XHQvKjtcclxuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdFx0Ki9cclxuXHJcblx0IFx0YXJndW1lbnQgPSB3aWNoaXMoIHJhemUoIGFyZ3VtZW50cyApLCBwYXJhbWV0ZXIgKTtcclxuXHJcblx0XHR0cnl7XHJcblx0XHRcdGxldCByZXN1bHQgPSBhcGx5KCBjYWxsYmFjaywgc2VsZiwgYXJndW1lbnQgKTtcclxuXHJcblx0XHRcdHdoaWxlKCBwcm9jZWR1cmUubGVuZ3RoICl7XHJcblx0XHRcdFx0YXBseSggcHJvY2VkdXJlLnBvcCggKSwgc2VsZiwgYXJndW1lbnQgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHJcblx0XHR9Y2F0Y2goIGVycm9yICl7XHJcblx0XHRcdHJldHVybiBlcnJvcjtcclxuXHJcblx0XHR9ZmluYWxseXtcclxuXHRcdFx0ZGVsZXRlIGNhbGxiYWNrWyBQUk9DRURVUkUgXTtcclxuXHJcblx0XHRcdGNhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRwYXJhbWV0ZXIgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdH0sIGNhbGxiYWNrICk7XHJcblxyXG5cdGJ1cm5lKCBQQVNTQUJMRSwgY2FsbGJhY2sgKTtcclxuXHJcblx0cmV0dXJuIGNhbGxiYWNrO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwYXNzZDtcclxuIl19
//# sourceMappingURL=passd.support.js.map
