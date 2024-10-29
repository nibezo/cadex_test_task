"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/submitForm";
exports.ids = ["pages/api/submitForm"];
exports.modules = {

/***/ "(api)/./src/pages/api/submitForm.ts":
/*!*************************************!*\
  !*** ./src/pages/api/submitForm.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// src/pages/api/submitForm.ts\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , email , message  } = req.body;\n        console.log(\"Form submitted:\", {\n            name,\n            email,\n            message\n        });\n        res.status(200).json({\n            message: `Thank you for your interest, ${name}!`\n        });\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1Ym1pdEZvcm0udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhCQUE4QjtBQVNmLFNBQVNBLFFBQ3RCQyxHQUFtQixFQUNuQkMsR0FBNkQsRUFDN0Q7SUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtRQUN6Q0MsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQjtZQUFFTDtZQUFNQztZQUFPQztRQUFRO1FBQ3RESixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVMLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRUYsS0FBSyxDQUFDLENBQUM7UUFBQztJQUMxRSxPQUFPO1FBQ0xGLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUNyRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1kb2NrZXItc2FtcGxlLy4vc3JjL3BhZ2VzL2FwaS9zdWJtaXRGb3JtLnRzPzlmZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3BhZ2VzL2FwaS9zdWJtaXRGb3JtLnRzXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgRm9ybURhdGEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPHsgbWVzc2FnZTogc3RyaW5nIH0gfCB7IGVycm9yOiBzdHJpbmcgfT5cclxuKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH0gPSByZXEuYm9keSBhcyBGb3JtRGF0YTtcclxuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQ6XCIsIHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IGBUaGFuayB5b3UgZm9yIHlvdXIgaW50ZXJlc3QsICR7bmFtZX0hYCB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/submitForm.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/submitForm.ts"));
module.exports = __webpack_exports__;

})();