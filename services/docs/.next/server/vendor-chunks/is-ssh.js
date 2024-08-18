"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-ssh";
exports.ids = ["vendor-chunks/is-ssh"];
exports.modules = {

/***/ "../../../../.yarn/berry/cache/is-ssh-npm-1.4.0-c6d7eec087-10c0.zip/node_modules/is-ssh/lib/index.js":
/*!***********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/is-ssh-npm-1.4.0-c6d7eec087-10c0.zip/node_modules/is-ssh/lib/index.js ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// Dependencies\nvar protocols = __webpack_require__(/*! protocols */ \"../../../../.yarn/berry/cache/protocols-npm-2.0.1-e2bc74d1c1-10c0.zip/node_modules/protocols/lib/index.js\");\n\n/**\n * isSsh\n * Checks if an input value is a ssh url or not.\n *\n * @name isSsh\n * @function\n * @param {String|Array} input The input url or an array of protocols.\n * @return {Boolean} `true` if the input is a ssh url, `false` otherwise.\n */\nfunction isSsh(input) {\n\n    if (Array.isArray(input)) {\n        return input.indexOf(\"ssh\") !== -1 || input.indexOf(\"rsync\") !== -1;\n    }\n\n    if (typeof input !== \"string\") {\n        return false;\n    }\n\n    var prots = protocols(input);\n    input = input.substring(input.indexOf(\"://\") + 3);\n    if (isSsh(prots)) {\n        return true;\n    }\n\n    // TODO This probably could be improved :)\n    var urlPortPattern = new RegExp('\\.([a-zA-Z\\\\d]+):(\\\\d+)\\/');\n    return !input.match(urlPortPattern) && input.indexOf(\"@\") < input.indexOf(\":\");\n}\n\nmodule.exports = isSsh;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvaXMtc3NoLW5wbS0xLjQuMC1jNmQ3ZWVjMDg3LTEwYzAuemlwL25vZGVfbW9kdWxlcy9pcy1zc2gvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsNEhBQVc7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixZQUFZLFNBQVM7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2lzLXNzaC1ucG0tMS40LjAtYzZkN2VlYzA4Ny0xMGMwLnppcC9ub2RlX21vZHVsZXMvaXMtc3NoL2xpYi9pbmRleC5qcz8yOGViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBEZXBlbmRlbmNpZXNcbnZhciBwcm90b2NvbHMgPSByZXF1aXJlKFwicHJvdG9jb2xzXCIpO1xuXG4vKipcbiAqIGlzU3NoXG4gKiBDaGVja3MgaWYgYW4gaW5wdXQgdmFsdWUgaXMgYSBzc2ggdXJsIG9yIG5vdC5cbiAqXG4gKiBAbmFtZSBpc1NzaFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gaW5wdXQgVGhlIGlucHV0IHVybCBvciBhbiBhcnJheSBvZiBwcm90b2NvbHMuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGlucHV0IGlzIGEgc3NoIHVybCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzU3NoKGlucHV0KSB7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LmluZGV4T2YoXCJzc2hcIikgIT09IC0xIHx8IGlucHV0LmluZGV4T2YoXCJyc3luY1wiKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHByb3RzID0gcHJvdG9jb2xzKGlucHV0KTtcbiAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZyhpbnB1dC5pbmRleE9mKFwiOi8vXCIpICsgMyk7XG4gICAgaWYgKGlzU3NoKHByb3RzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIFRoaXMgcHJvYmFibHkgY291bGQgYmUgaW1wcm92ZWQgOilcbiAgICB2YXIgdXJsUG9ydFBhdHRlcm4gPSBuZXcgUmVnRXhwKCdcXC4oW2EtekEtWlxcXFxkXSspOihcXFxcZCspXFwvJyk7XG4gICAgcmV0dXJuICFpbnB1dC5tYXRjaCh1cmxQb3J0UGF0dGVybikgJiYgaW5wdXQuaW5kZXhPZihcIkBcIikgPCBpbnB1dC5pbmRleE9mKFwiOlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NzaDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/is-ssh-npm-1.4.0-c6d7eec087-10c0.zip/node_modules/is-ssh/lib/index.js\n");

/***/ })

};
;