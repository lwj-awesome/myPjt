"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/protocols";
exports.ids = ["vendor-chunks/protocols"];
exports.modules = {

/***/ "../../../../.yarn/berry/cache/protocols-npm-2.0.1-e2bc74d1c1-10c0.zip/node_modules/protocols/lib/index.js":
/*!*****************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/protocols-npm-2.0.1-e2bc74d1c1-10c0.zip/node_modules/protocols/lib/index.js ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

eval("\n\n/**\n * protocols\n * Returns the protocols of an input url.\n *\n * @name protocols\n * @function\n * @param {String|URL} input The input url (string or `URL` instance)\n * @param {Boolean|Number} first If `true`, the first protocol will be returned. If number, it will represent the zero-based index of the protocols array.\n * @return {Array|String} The array of protocols or the specified protocol.\n */\nmodule.exports = function protocols(input, first) {\n\n    if (first === true) {\n        first = 0;\n    }\n\n    var prots = \"\";\n    if (typeof input === \"string\") {\n        try {\n            prots = new URL(input).protocol;\n        } catch (e) {}\n    } else if (input && input.constructor === URL) {\n        prots = input.protocol;\n    }\n\n    var splits = prots.split(/\\:|\\+/).filter(Boolean);\n\n    if (typeof first === \"number\") {\n        return splits[first];\n    }\n\n    return splits;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvcHJvdG9jb2xzLW5wbS0yLjAuMS1lMmJjNzRkMWMxLTEwYzAuemlwL25vZGVfbW9kdWxlcy9wcm90b2NvbHMvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLGdCQUFnQjtBQUMzQixZQUFZLGNBQWM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL3Byb3RvY29scy1ucG0tMi4wLjEtZTJiYzc0ZDFjMS0xMGMwLnppcC9ub2RlX21vZHVsZXMvcHJvdG9jb2xzL2xpYi9pbmRleC5qcz81YzM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIHByb3RvY29sc1xuICogUmV0dXJucyB0aGUgcHJvdG9jb2xzIG9mIGFuIGlucHV0IHVybC5cbiAqXG4gKiBAbmFtZSBwcm90b2NvbHNcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd8VVJMfSBpbnB1dCBUaGUgaW5wdXQgdXJsIChzdHJpbmcgb3IgYFVSTGAgaW5zdGFuY2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW58TnVtYmVyfSBmaXJzdCBJZiBgdHJ1ZWAsIHRoZSBmaXJzdCBwcm90b2NvbCB3aWxsIGJlIHJldHVybmVkLiBJZiBudW1iZXIsIGl0IHdpbGwgcmVwcmVzZW50IHRoZSB6ZXJvLWJhc2VkIGluZGV4IG9mIHRoZSBwcm90b2NvbHMgYXJyYXkuXG4gKiBAcmV0dXJuIHtBcnJheXxTdHJpbmd9IFRoZSBhcnJheSBvZiBwcm90b2NvbHMgb3IgdGhlIHNwZWNpZmllZCBwcm90b2NvbC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwcm90b2NvbHMoaW5wdXQsIGZpcnN0KSB7XG5cbiAgICBpZiAoZmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmlyc3QgPSAwO1xuICAgIH1cblxuICAgIHZhciBwcm90cyA9IFwiXCI7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcHJvdHMgPSBuZXcgVVJMKGlucHV0KS5wcm90b2NvbDtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9IGVsc2UgaWYgKGlucHV0ICYmIGlucHV0LmNvbnN0cnVjdG9yID09PSBVUkwpIHtcbiAgICAgICAgcHJvdHMgPSBpbnB1dC5wcm90b2NvbDtcbiAgICB9XG5cbiAgICB2YXIgc3BsaXRzID0gcHJvdHMuc3BsaXQoL1xcOnxcXCsvKS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBzcGxpdHNbZmlyc3RdO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdHM7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/protocols-npm-2.0.1-e2bc74d1c1-10c0.zip/node_modules/protocols/lib/index.js\n");

/***/ })

};
;