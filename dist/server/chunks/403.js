"use strict";
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ fauna)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4584);
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);

const fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({
    secret: process.env.FAUNADB_KEY
});


/***/ }),

/***/ 1250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ stripe)
});

// EXTERNAL MODULE: external "stripe"
var external_stripe_ = __webpack_require__(8174);
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_);
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"0.1.0"};
;// CONCATENATED MODULE: ./src/services/stripe.ts


const stripe = new (external_stripe_default())(process.env.STRIPE_API_KEY, {
    apiVersion: "2020-08-27",
    appInfo: {
        name: "Ignews",
        version: package_namespaceObject.i8
    }
});


/***/ })

};
;