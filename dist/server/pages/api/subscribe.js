"use strict";
(() => {
var exports = {};
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 4584:
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 3631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ subscribe)
});

// EXTERNAL MODULE: external "faunadb"
var external_faunadb_ = __webpack_require__(4584);
;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
// EXTERNAL MODULE: ./src/services/fauna.ts
var fauna = __webpack_require__(751);
// EXTERNAL MODULE: ./src/services/stripe.ts + 1 modules
var stripe = __webpack_require__(1250);
;// CONCATENATED MODULE: ./src/pages/api/subscribe.ts
/* eslint-disable import/no-anonymous-default-export */ 



/* harmony default export */ const subscribe = (async (req, res)=>{
    if (req.method === "POST") {
        const session = await (0,react_namespaceObject.getSession)({
            req
        });
        const user = await fauna/* fauna.query */.r.query(external_faunadb_.query.Get(external_faunadb_.query.Match(external_faunadb_.query.Index("user_by_email"), external_faunadb_.query.Casefold(session.user.email))));
        let customerId = user.data.stripe_customer_id;
        if (!customerId) {
            const stripeCustomer = await stripe/* stripe.customers.create */.A.customers.create({
                email: session.user.email
            });
            await fauna/* fauna.query */.r.query(external_faunadb_.query.Update(external_faunadb_.query.Ref(external_faunadb_.query.Collection("users"), user.ref.id), {
                data: {
                    stripe_customer_id: stripeCustomer.id
                }
            }));
            customerId = stripeCustomer.id;
        }
        const stripeCheckoutSession = await stripe/* stripe.checkout.sessions.create */.A.checkout.sessions.create({
            customer: customerId,
            payment_method_types: [
                "card"
            ],
            billing_address_collection: "required",
            line_items: [
                {
                    price: "price_1Kg94HL7hT4auRGCSkQPKWxa",
                    quantity: 1
                }
            ],
            mode: "subscription",
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        });
        return res.status(200).json({
            sessionId: stripeCheckoutSession.id
        });
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method not allowed");
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [403], () => (__webpack_exec__(3631)));
module.exports = __webpack_exports__;

})();