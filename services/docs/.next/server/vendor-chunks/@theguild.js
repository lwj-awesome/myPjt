"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@theguild";
exports.ids = ["vendor-chunks/@theguild"];
exports.modules = {

/***/ "../../.yarn/__virtual__/@theguild-remark-mermaid-virtual-cbcac50d1e/3/.yarn/berry/cache/@theguild-remark-mermaid-npm-0.0.5-8344cf6566-10c0.zip/node_modules/@theguild/remark-mermaid/dist/mermaid.js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/@theguild-remark-mermaid-virtual-cbcac50d1e/3/.yarn/berry/cache/@theguild-remark-mermaid-npm-0.0.5-8344cf6566-10c0.zip/node_modules/@theguild/remark-mermaid/dist/mermaid.js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Mermaid: () => (/* binding */ Mermaid)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mermaid */ \"../../../../.yarn/berry/cache/mermaid-npm-10.9.1-a6eb2f99ec-10c0.zip/node_modules/mermaid/dist/mermaid.core.mjs\");\n\n\n\nfunction Mermaid({ chart }) {\n  const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();\n  const [svg, setSvg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const htmlElement = document.documentElement;\n    const mutationObserver = new MutationObserver(renderChart);\n    mutationObserver.observe(htmlElement, { attributes: true });\n    renderChart();\n    return () => {\n      mutationObserver.disconnect();\n    };\n    async function renderChart() {\n      const isDarkTheme = htmlElement.classList.contains(\"dark\") || htmlElement.attributes.getNamedItem(\"data-theme\")?.value === \"dark\";\n      const mermaidConfig = {\n        startOnLoad: false,\n        securityLevel: \"loose\",\n        fontFamily: \"inherit\",\n        themeCSS: \"margin: 1.5rem auto 0;\",\n        theme: isDarkTheme ? \"dark\" : \"default\"\n      };\n      try {\n        mermaid__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initialize(mermaidConfig);\n        const { svg: svg2 } = await mermaid__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(\n          // strip invalid characters for `id` attribute\n          id.replaceAll(\":\", \"\"),\n          chart\n        );\n        setSvg(svg2);\n      } catch (error) {\n        console.error(\"Error while rendering mermaid\", error);\n      }\n    }\n  }, [chart]);\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { dangerouslySetInnerHTML: { __html: svg } });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vQHRoZWd1aWxkLXJlbWFyay1tZXJtYWlkLXZpcnR1YWwtY2JjYWM1MGQxZS8zLy55YXJuL2JlcnJ5L2NhY2hlL0B0aGVndWlsZC1yZW1hcmstbWVybWFpZC1ucG0tMC4wLjUtODM0NGNmNjU2Ni0xMGMwLnppcC9ub2RlX21vZHVsZXMvQHRoZWd1aWxkL3JlbWFyay1tZXJtYWlkL2Rpc3QvbWVybWFpZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ1c7QUFDckI7QUFDOUIsbUJBQW1CLE9BQU87QUFDMUIsYUFBYSw0Q0FBSztBQUNsQix3QkFBd0IsK0NBQVE7QUFDaEMsRUFBRSxnREFBUztBQUNYO0FBQ0E7QUFDQSw0Q0FBNEMsa0JBQWtCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWtCO0FBQzFCLGdCQUFnQixZQUFZLFFBQVEsc0RBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLHNEQUFHLFVBQVUsMkJBQTJCLGVBQWU7QUFDaEY7QUFHRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vQHRoZWd1aWxkLXJlbWFyay1tZXJtYWlkLXZpcnR1YWwtY2JjYWM1MGQxZS8zLy55YXJuL2JlcnJ5L2NhY2hlL0B0aGVndWlsZC1yZW1hcmstbWVybWFpZC1ucG0tMC4wLjUtODM0NGNmNjU2Ni0xMGMwLnppcC9ub2RlX21vZHVsZXMvQHRoZWd1aWxkL3JlbWFyay1tZXJtYWlkL2Rpc3QvbWVybWFpZC5qcz83YTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VJZCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtZXJtYWlkIGZyb20gXCJtZXJtYWlkXCI7XG5mdW5jdGlvbiBNZXJtYWlkKHsgY2hhcnQgfSkge1xuICBjb25zdCBpZCA9IHVzZUlkKCk7XG4gIGNvbnN0IFtzdmcsIHNldFN2Z10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocmVuZGVyQ2hhcnQpO1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShodG1sRWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuICAgIHJlbmRlckNoYXJ0KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gICAgYXN5bmMgZnVuY3Rpb24gcmVuZGVyQ2hhcnQoKSB7XG4gICAgICBjb25zdCBpc0RhcmtUaGVtZSA9IGh0bWxFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIikgfHwgaHRtbEVsZW1lbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oXCJkYXRhLXRoZW1lXCIpPy52YWx1ZSA9PT0gXCJkYXJrXCI7XG4gICAgICBjb25zdCBtZXJtYWlkQ29uZmlnID0ge1xuICAgICAgICBzdGFydE9uTG9hZDogZmFsc2UsXG4gICAgICAgIHNlY3VyaXR5TGV2ZWw6IFwibG9vc2VcIixcbiAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXG4gICAgICAgIHRoZW1lQ1NTOiBcIm1hcmdpbjogMS41cmVtIGF1dG8gMDtcIixcbiAgICAgICAgdGhlbWU6IGlzRGFya1RoZW1lID8gXCJkYXJrXCIgOiBcImRlZmF1bHRcIlxuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1lcm1haWQuaW5pdGlhbGl6ZShtZXJtYWlkQ29uZmlnKTtcbiAgICAgICAgY29uc3QgeyBzdmc6IHN2ZzIgfSA9IGF3YWl0IG1lcm1haWQucmVuZGVyKFxuICAgICAgICAgIC8vIHN0cmlwIGludmFsaWQgY2hhcmFjdGVycyBmb3IgYGlkYCBhdHRyaWJ1dGVcbiAgICAgICAgICBpZC5yZXBsYWNlQWxsKFwiOlwiLCBcIlwiKSxcbiAgICAgICAgICBjaGFydFxuICAgICAgICApO1xuICAgICAgICBzZXRTdmcoc3ZnMik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgcmVuZGVyaW5nIG1lcm1haWRcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2NoYXJ0XSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFwiZGl2XCIsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBzdmcgfSB9KTtcbn1cbmV4cG9ydCB7XG4gIE1lcm1haWRcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../.yarn/__virtual__/@theguild-remark-mermaid-virtual-cbcac50d1e/3/.yarn/berry/cache/@theguild-remark-mermaid-npm-0.0.5-8344cf6566-10c0.zip/node_modules/@theguild/remark-mermaid/dist/mermaid.js\n");

/***/ })

};
;