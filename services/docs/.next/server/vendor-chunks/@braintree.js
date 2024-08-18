"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@braintree";
exports.ids = ["vendor-chunks/@braintree"];
exports.modules = {

/***/ "../../../../.yarn/berry/cache/@braintree-sanitize-url-npm-6.0.4-21a20405b9-10c0.zip/node_modules/@braintree/sanitize-url/dist/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/@braintree-sanitize-url-npm-6.0.4-21a20405b9-10c0.zip/node_modules/@braintree/sanitize-url/dist/index.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sanitizeUrl = exports.BLANK_URL = void 0;\nvar invalidProtocolRegex = /^([^\\w]*)(javascript|data|vbscript)/im;\nvar htmlEntitiesRegex = /&#(\\w+)(^\\w|;)?/g;\nvar htmlCtrlEntityRegex = /&(newline|tab);/gi;\nvar ctrlCharactersRegex = /[\\u0000-\\u001F\\u007F-\\u009F\\u2000-\\u200D\\uFEFF]/gim;\nvar urlSchemeRegex = /^.+(:|&colon;)/gim;\nvar relativeFirstCharacters = [\".\", \"/\"];\nexports.BLANK_URL = \"about:blank\";\nfunction isRelativeUrlWithoutProtocol(url) {\n    return relativeFirstCharacters.indexOf(url[0]) > -1;\n}\n// adapted from https://stackoverflow.com/a/29824550/2601552\nfunction decodeHtmlCharacters(str) {\n    var removedNullByte = str.replace(ctrlCharactersRegex, \"\");\n    return removedNullByte.replace(htmlEntitiesRegex, function (match, dec) {\n        return String.fromCharCode(dec);\n    });\n}\nfunction sanitizeUrl(url) {\n    if (!url) {\n        return exports.BLANK_URL;\n    }\n    var sanitizedUrl = decodeHtmlCharacters(url)\n        .replace(htmlCtrlEntityRegex, \"\")\n        .replace(ctrlCharactersRegex, \"\")\n        .trim();\n    if (!sanitizedUrl) {\n        return exports.BLANK_URL;\n    }\n    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {\n        return sanitizedUrl;\n    }\n    var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);\n    if (!urlSchemeParseResults) {\n        return sanitizedUrl;\n    }\n    var urlScheme = urlSchemeParseResults[0];\n    if (invalidProtocolRegex.test(urlScheme)) {\n        return exports.BLANK_URL;\n    }\n    return sanitizedUrl;\n}\nexports.sanitizeUrl = sanitizeUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJyYWludHJlZS1zYW5pdGl6ZS11cmwtbnBtLTYuMC40LTIxYTIwNDA1YjktMTBjMC56aXAvbm9kZV9tb2R1bGVzL0BicmFpbnRyZWUvc2FuaXRpemUtdXJsL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsaUJBQWlCO0FBQ3ZDO0FBQ0Esc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQztBQUNBLG1DQUFtQztBQUNuQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYnJhaW50cmVlLXNhbml0aXplLXVybC1ucG0tNi4wLjQtMjFhMjA0MDViOS0xMGMwLnppcC9ub2RlX21vZHVsZXMvQGJyYWludHJlZS9zYW5pdGl6ZS11cmwvZGlzdC9pbmRleC5qcz8wZTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zYW5pdGl6ZVVybCA9IGV4cG9ydHMuQkxBTktfVVJMID0gdm9pZCAwO1xudmFyIGludmFsaWRQcm90b2NvbFJlZ2V4ID0gL14oW15cXHddKikoamF2YXNjcmlwdHxkYXRhfHZic2NyaXB0KS9pbTtcbnZhciBodG1sRW50aXRpZXNSZWdleCA9IC8mIyhcXHcrKSheXFx3fDspPy9nO1xudmFyIGh0bWxDdHJsRW50aXR5UmVnZXggPSAvJihuZXdsaW5lfHRhYik7L2dpO1xudmFyIGN0cmxDaGFyYWN0ZXJzUmVnZXggPSAvW1xcdTAwMDAtXFx1MDAxRlxcdTAwN0YtXFx1MDA5RlxcdTIwMDAtXFx1MjAwRFxcdUZFRkZdL2dpbTtcbnZhciB1cmxTY2hlbWVSZWdleCA9IC9eLisoOnwmY29sb247KS9naW07XG52YXIgcmVsYXRpdmVGaXJzdENoYXJhY3RlcnMgPSBbXCIuXCIsIFwiL1wiXTtcbmV4cG9ydHMuQkxBTktfVVJMID0gXCJhYm91dDpibGFua1wiO1xuZnVuY3Rpb24gaXNSZWxhdGl2ZVVybFdpdGhvdXRQcm90b2NvbCh1cmwpIHtcbiAgICByZXR1cm4gcmVsYXRpdmVGaXJzdENoYXJhY3RlcnMuaW5kZXhPZih1cmxbMF0pID4gLTE7XG59XG4vLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI5ODI0NTUwLzI2MDE1NTJcbmZ1bmN0aW9uIGRlY29kZUh0bWxDaGFyYWN0ZXJzKHN0cikge1xuICAgIHZhciByZW1vdmVkTnVsbEJ5dGUgPSBzdHIucmVwbGFjZShjdHJsQ2hhcmFjdGVyc1JlZ2V4LCBcIlwiKTtcbiAgICByZXR1cm4gcmVtb3ZlZE51bGxCeXRlLnJlcGxhY2UoaHRtbEVudGl0aWVzUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgZGVjKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlYyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzYW5pdGl6ZVVybCh1cmwpIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5CTEFOS19VUkw7XG4gICAgfVxuICAgIHZhciBzYW5pdGl6ZWRVcmwgPSBkZWNvZGVIdG1sQ2hhcmFjdGVycyh1cmwpXG4gICAgICAgIC5yZXBsYWNlKGh0bWxDdHJsRW50aXR5UmVnZXgsIFwiXCIpXG4gICAgICAgIC5yZXBsYWNlKGN0cmxDaGFyYWN0ZXJzUmVnZXgsIFwiXCIpXG4gICAgICAgIC50cmltKCk7XG4gICAgaWYgKCFzYW5pdGl6ZWRVcmwpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuQkxBTktfVVJMO1xuICAgIH1cbiAgICBpZiAoaXNSZWxhdGl2ZVVybFdpdGhvdXRQcm90b2NvbChzYW5pdGl6ZWRVcmwpKSB7XG4gICAgICAgIHJldHVybiBzYW5pdGl6ZWRVcmw7XG4gICAgfVxuICAgIHZhciB1cmxTY2hlbWVQYXJzZVJlc3VsdHMgPSBzYW5pdGl6ZWRVcmwubWF0Y2godXJsU2NoZW1lUmVnZXgpO1xuICAgIGlmICghdXJsU2NoZW1lUGFyc2VSZXN1bHRzKSB7XG4gICAgICAgIHJldHVybiBzYW5pdGl6ZWRVcmw7XG4gICAgfVxuICAgIHZhciB1cmxTY2hlbWUgPSB1cmxTY2hlbWVQYXJzZVJlc3VsdHNbMF07XG4gICAgaWYgKGludmFsaWRQcm90b2NvbFJlZ2V4LnRlc3QodXJsU2NoZW1lKSkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5CTEFOS19VUkw7XG4gICAgfVxuICAgIHJldHVybiBzYW5pdGl6ZWRVcmw7XG59XG5leHBvcnRzLnNhbml0aXplVXJsID0gc2FuaXRpemVVcmw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/@braintree-sanitize-url-npm-6.0.4-21a20405b9-10c0.zip/node_modules/@braintree/sanitize-url/dist/index.js\n");

/***/ })

};
;