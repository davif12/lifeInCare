"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[8336],{

/***/ 8336:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-f6d08e9e.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startStatusTap: () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 4514);
/* harmony import */ var _index_e919e353_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-e919e353.js */ 1293);
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);
/* harmony import */ var _index_738d7504_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-738d7504.js */ 7243);
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.d)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = (0,_index_e919e353_js__WEBPACK_IMPORTED_MODULE_2__.f)(el);
      if (contentEl) {
        new Promise(resolve => (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_3__.c)(contentEl, resolve)).then(() => {
          (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.w)(/*#__PURE__*/(0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            yield (0,_index_e919e353_js__WEBPACK_IMPORTED_MODULE_2__.s)(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          }));
        });
      }
    });
  });
};


/***/ })

}]);
//# sourceMappingURL=8336.js.map