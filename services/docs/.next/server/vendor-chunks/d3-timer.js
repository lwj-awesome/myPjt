"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/d3-timer";
exports.ids = ["vendor-chunks/d3-timer"];
exports.modules = {

/***/ "../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/index.js":
/*!***************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/index.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   interval: () => (/* reexport safe */ _interval_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   now: () => (/* reexport safe */ _timer_js__WEBPACK_IMPORTED_MODULE_0__.now),\n/* harmony export */   timeout: () => (/* reexport safe */ _timeout_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   timer: () => (/* reexport safe */ _timer_js__WEBPACK_IMPORTED_MODULE_0__.timer),\n/* harmony export */   timerFlush: () => (/* reexport safe */ _timer_js__WEBPACK_IMPORTED_MODULE_0__.timerFlush)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timer.js\");\n/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout.js */ \"../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timeout.js\");\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ \"../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/interval.js\");\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvZDMtdGltZXItbnBtLTMuMC4xLTQ1MDgzZjQ2NWQtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlvQjs7QUFJRTs7QUFJQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvZDMtdGltZXItbnBtLTMuMC4xLTQ1MDgzZjQ2NWQtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy9pbmRleC5qcz9mMDIyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7XG4gIG5vdyxcbiAgdGltZXIsXG4gIHRpbWVyRmx1c2hcbn0gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lb3V0XG59IGZyb20gXCIuL3RpbWVvdXQuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBpbnRlcnZhbFxufSBmcm9tIFwiLi9pbnRlcnZhbC5qc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/index.js\n");

/***/ }),

/***/ "../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/interval.js":
/*!******************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/interval.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timer.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {\n  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer, total = delay;\n  if (delay == null) return t.restart(callback, delay, time), t;\n  t._restart = t.restart;\n  t.restart = function(callback, delay, time) {\n    delay = +delay, time = time == null ? (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.now)() : +time;\n    t._restart(function tick(elapsed) {\n      elapsed += total;\n      t._restart(tick, total += delay, time);\n      callback(elapsed);\n    }, delay, time);\n  }\n  t.restart(callback, delay, time);\n  return t;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvZDMtdGltZXItbnBtLTMuMC4xLTQ1MDgzZjQ2NWQtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy9pbnRlcnZhbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzQzs7QUFFdEMsNkJBQWUsb0NBQVM7QUFDeEIsY0FBYyw0Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsOENBQUc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2QzLXRpbWVyLW5wbS0zLjAuMS00NTA4M2Y0NjVkLTEwYzAuemlwL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvaW50ZXJ2YWwuanM/YTA3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RpbWVyLCBub3d9IGZyb20gXCIuL3RpbWVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lciwgdG90YWwgPSBkZWxheTtcbiAgaWYgKGRlbGF5ID09IG51bGwpIHJldHVybiB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSwgdDtcbiAgdC5fcmVzdGFydCA9IHQucmVzdGFydDtcbiAgdC5yZXN0YXJ0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gICAgZGVsYXkgPSArZGVsYXksIHRpbWUgPSB0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lO1xuICAgIHQuX3Jlc3RhcnQoZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgICBlbGFwc2VkICs9IHRvdGFsO1xuICAgICAgdC5fcmVzdGFydCh0aWNrLCB0b3RhbCArPSBkZWxheSwgdGltZSk7XG4gICAgICBjYWxsYmFjayhlbGFwc2VkKTtcbiAgICB9LCBkZWxheSwgdGltZSk7XG4gIH1cbiAgdC5yZXN0YXJ0KGNhbGxiYWNrLCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/interval.js\n");

/***/ }),

/***/ "../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timeout.js":
/*!*****************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timeout.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timer.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {\n  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer;\n  delay = delay == null ? 0 : +delay;\n  t.restart(elapsed => {\n    t.stop();\n    callback(elapsed + delay);\n  }, delay, time);\n  return t;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvZDMtdGltZXItbnBtLTMuMC4xLTQ1MDgzZjQ2NWQtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lb3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDOztBQUVqQyw2QkFBZSxvQ0FBUztBQUN4QixjQUFjLDRDQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2QzLXRpbWVyLW5wbS0zLjAuMS00NTA4M2Y0NjVkLTEwYzAuemlwL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcz8zOTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGltZXJ9IGZyb20gXCIuL3RpbWVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgZGVsYXkgPSBkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheTtcbiAgdC5yZXN0YXJ0KGVsYXBzZWQgPT4ge1xuICAgIHQuc3RvcCgpO1xuICAgIGNhbGxiYWNrKGVsYXBzZWQgKyBkZWxheSk7XG4gIH0sIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timeout.js\n");

/***/ }),

/***/ "../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timer.js":
/*!***************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timer.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Timer: () => (/* binding */ Timer),\n/* harmony export */   now: () => (/* binding */ now),\n/* harmony export */   timer: () => (/* binding */ timer),\n/* harmony export */   timerFlush: () => (/* binding */ timerFlush)\n/* harmony export */ });\nvar frame = 0, // is an animation frame pending?\n    timeout = 0, // is a timeout pending?\n    interval = 0, // are any timers active?\n    pokeDelay = 1000, // how frequently we check for clock skew\n    taskHead,\n    taskTail,\n    clockLast = 0,\n    clockNow = 0,\n    clockSkew = 0,\n    clock = typeof performance === \"object\" && performance.now ? performance : Date,\n    setFrame = typeof window === \"object\" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };\n\nfunction now() {\n  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);\n}\n\nfunction clearNow() {\n  clockNow = 0;\n}\n\nfunction Timer() {\n  this._call =\n  this._time =\n  this._next = null;\n}\n\nTimer.prototype = timer.prototype = {\n  constructor: Timer,\n  restart: function(callback, delay, time) {\n    if (typeof callback !== \"function\") throw new TypeError(\"callback is not a function\");\n    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);\n    if (!this._next && taskTail !== this) {\n      if (taskTail) taskTail._next = this;\n      else taskHead = this;\n      taskTail = this;\n    }\n    this._call = callback;\n    this._time = time;\n    sleep();\n  },\n  stop: function() {\n    if (this._call) {\n      this._call = null;\n      this._time = Infinity;\n      sleep();\n    }\n  }\n};\n\nfunction timer(callback, delay, time) {\n  var t = new Timer;\n  t.restart(callback, delay, time);\n  return t;\n}\n\nfunction timerFlush() {\n  now(); // Get the current time, if not already set.\n  ++frame; // Pretend we’ve set an alarm, if we haven’t already.\n  var t = taskHead, e;\n  while (t) {\n    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);\n    t = t._next;\n  }\n  --frame;\n}\n\nfunction wake() {\n  clockNow = (clockLast = clock.now()) + clockSkew;\n  frame = timeout = 0;\n  try {\n    timerFlush();\n  } finally {\n    frame = 0;\n    nap();\n    clockNow = 0;\n  }\n}\n\nfunction poke() {\n  var now = clock.now(), delay = now - clockLast;\n  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;\n}\n\nfunction nap() {\n  var t0, t1 = taskHead, t2, time = Infinity;\n  while (t1) {\n    if (t1._call) {\n      if (time > t1._time) time = t1._time;\n      t0 = t1, t1 = t1._next;\n    } else {\n      t2 = t1._next, t1._next = null;\n      t1 = t0 ? t0._next = t2 : taskHead = t2;\n    }\n  }\n  taskTail = t0;\n  sleep(time);\n}\n\nfunction sleep(time) {\n  if (frame) return; // Soonest alarm already set, or will be.\n  if (timeout) timeout = clearTimeout(timeout);\n  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.\n  if (delay > 24) {\n    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);\n    if (interval) interval = clearInterval(interval);\n  } else {\n    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);\n    frame = 1, setFrame(wake);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvZDMtdGltZXItbnBtLTMuMC4xLTQ1MDgzZjQ2NWQtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBc0k7O0FBRS9IO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxTQUFTO0FBQ1QsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9kMy10aW1lci1ucG0tMy4wLjEtNDUwODNmNDY1ZC0xMGMwLnppcC9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzPzI1NzMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGZyYW1lID0gMCwgLy8gaXMgYW4gYW5pbWF0aW9uIGZyYW1lIHBlbmRpbmc/XG4gICAgdGltZW91dCA9IDAsIC8vIGlzIGEgdGltZW91dCBwZW5kaW5nP1xuICAgIGludGVydmFsID0gMCwgLy8gYXJlIGFueSB0aW1lcnMgYWN0aXZlP1xuICAgIHBva2VEZWxheSA9IDEwMDAsIC8vIGhvdyBmcmVxdWVudGx5IHdlIGNoZWNrIGZvciBjbG9jayBza2V3XG4gICAgdGFza0hlYWQsXG4gICAgdGFza1RhaWwsXG4gICAgY2xvY2tMYXN0ID0gMCxcbiAgICBjbG9ja05vdyA9IDAsXG4gICAgY2xvY2tTa2V3ID0gMCxcbiAgICBjbG9jayA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gXCJvYmplY3RcIiAmJiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZSA6IERhdGUsXG4gICAgc2V0RnJhbWUgPSB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KSA6IGZ1bmN0aW9uKGYpIHsgc2V0VGltZW91dChmLCAxNyk7IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBjbG9ja05vdyB8fCAoc2V0RnJhbWUoY2xlYXJOb3cpLCBjbG9ja05vdyA9IGNsb2NrLm5vdygpICsgY2xvY2tTa2V3KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOb3coKSB7XG4gIGNsb2NrTm93ID0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKCkge1xuICB0aGlzLl9jYWxsID1cbiAgdGhpcy5fdGltZSA9XG4gIHRoaXMuX25leHQgPSBudWxsO1xufVxuXG5UaW1lci5wcm90b3R5cGUgPSB0aW1lci5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUaW1lcixcbiAgcmVzdGFydDogZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgdGltZSA9ICh0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lKSArIChkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheSk7XG4gICAgaWYgKCF0aGlzLl9uZXh0ICYmIHRhc2tUYWlsICE9PSB0aGlzKSB7XG4gICAgICBpZiAodGFza1RhaWwpIHRhc2tUYWlsLl9uZXh0ID0gdGhpcztcbiAgICAgIGVsc2UgdGFza0hlYWQgPSB0aGlzO1xuICAgICAgdGFza1RhaWwgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgc2xlZXAoKTtcbiAgfSxcbiAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2NhbGwpIHtcbiAgICAgIHRoaXMuX2NhbGwgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZSA9IEluZmluaXR5O1xuICAgICAgc2xlZXAoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyRmx1c2goKSB7XG4gIG5vdygpOyAvLyBHZXQgdGhlIGN1cnJlbnQgdGltZSwgaWYgbm90IGFscmVhZHkgc2V0LlxuICArK2ZyYW1lOyAvLyBQcmV0ZW5kIHdl4oCZdmUgc2V0IGFuIGFsYXJtLCBpZiB3ZSBoYXZlbuKAmXQgYWxyZWFkeS5cbiAgdmFyIHQgPSB0YXNrSGVhZCwgZTtcbiAgd2hpbGUgKHQpIHtcbiAgICBpZiAoKGUgPSBjbG9ja05vdyAtIHQuX3RpbWUpID49IDApIHQuX2NhbGwuY2FsbCh1bmRlZmluZWQsIGUpO1xuICAgIHQgPSB0Ll9uZXh0O1xuICB9XG4gIC0tZnJhbWU7XG59XG5cbmZ1bmN0aW9uIHdha2UoKSB7XG4gIGNsb2NrTm93ID0gKGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpKSArIGNsb2NrU2tldztcbiAgZnJhbWUgPSB0aW1lb3V0ID0gMDtcbiAgdHJ5IHtcbiAgICB0aW1lckZsdXNoKCk7XG4gIH0gZmluYWxseSB7XG4gICAgZnJhbWUgPSAwO1xuICAgIG5hcCgpO1xuICAgIGNsb2NrTm93ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2tlKCkge1xuICB2YXIgbm93ID0gY2xvY2subm93KCksIGRlbGF5ID0gbm93IC0gY2xvY2tMYXN0O1xuICBpZiAoZGVsYXkgPiBwb2tlRGVsYXkpIGNsb2NrU2tldyAtPSBkZWxheSwgY2xvY2tMYXN0ID0gbm93O1xufVxuXG5mdW5jdGlvbiBuYXAoKSB7XG4gIHZhciB0MCwgdDEgPSB0YXNrSGVhZCwgdDIsIHRpbWUgPSBJbmZpbml0eTtcbiAgd2hpbGUgKHQxKSB7XG4gICAgaWYgKHQxLl9jYWxsKSB7XG4gICAgICBpZiAodGltZSA+IHQxLl90aW1lKSB0aW1lID0gdDEuX3RpbWU7XG4gICAgICB0MCA9IHQxLCB0MSA9IHQxLl9uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0MiA9IHQxLl9uZXh0LCB0MS5fbmV4dCA9IG51bGw7XG4gICAgICB0MSA9IHQwID8gdDAuX25leHQgPSB0MiA6IHRhc2tIZWFkID0gdDI7XG4gICAgfVxuICB9XG4gIHRhc2tUYWlsID0gdDA7XG4gIHNsZWVwKHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzbGVlcCh0aW1lKSB7XG4gIGlmIChmcmFtZSkgcmV0dXJuOyAvLyBTb29uZXN0IGFsYXJtIGFscmVhZHkgc2V0LCBvciB3aWxsIGJlLlxuICBpZiAodGltZW91dCkgdGltZW91dCA9IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgdmFyIGRlbGF5ID0gdGltZSAtIGNsb2NrTm93OyAvLyBTdHJpY3RseSBsZXNzIHRoYW4gaWYgd2UgcmVjb21wdXRlZCBjbG9ja05vdy5cbiAgaWYgKGRlbGF5ID4gMjQpIHtcbiAgICBpZiAodGltZSA8IEluZmluaXR5KSB0aW1lb3V0ID0gc2V0VGltZW91dCh3YWtlLCB0aW1lIC0gY2xvY2subm93KCkgLSBjbG9ja1NrZXcpO1xuICAgIGlmIChpbnRlcnZhbCkgaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWludGVydmFsKSBjbG9ja0xhc3QgPSBjbG9jay5ub3coKSwgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChwb2tlLCBwb2tlRGVsYXkpO1xuICAgIGZyYW1lID0gMSwgc2V0RnJhbWUod2FrZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/d3-timer-npm-3.0.1-45083f465d-10c0.zip/node_modules/d3-timer/src/timer.js\n");

/***/ })

};
;