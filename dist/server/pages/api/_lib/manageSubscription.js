"use strict";
(() => {
var exports = {};
exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 4584:
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 7582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveSubscription": () => (/* binding */ saveSubscription)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4584);
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1250);



async function saveSubscription(subscriptionId, customerId, createAction = false) {
    const userRef = await _services_fauna__WEBPACK_IMPORTED_MODULE_1__/* .fauna.query */ .r.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select("ref", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index("user_by_stripe_customer_id"), customerId))));
    const subscription = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__/* .stripe.subscriptions.retrieve */ .A.subscriptions.retrieve(subscriptionId);
    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id
    };
    if (createAction) {
        await _services_fauna__WEBPACK_IMPORTED_MODULE_1__/* .fauna.query */ .r.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection("subscriptions"), {
            data: subscriptionData
        }));
    } else {
        await _services_fauna__WEBPACK_IMPORTED_MODULE_1__/* .fauna.query */ .r.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Replace(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select("ref", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index("subscription_by_id"), subscriptionId))), {
            data: subscriptionData
        }));
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [403], () => (__webpack_exec__(7582)));
module.exports = __webpack_exports__;

})();