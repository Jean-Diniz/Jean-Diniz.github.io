"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 4584:
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ 7384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

// EXTERNAL MODULE: external "faunadb"
var external_faunadb_ = __webpack_require__(4584);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/github"
const github_namespaceObject = require("next-auth/providers/github");
var github_default = /*#__PURE__*/__webpack_require__.n(github_namespaceObject);
// EXTERNAL MODULE: ./src/services/fauna.ts
var fauna = __webpack_require__(751);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts




/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        github_default()({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            authorization: {
                params: {
                    scope: "read:user"
                }
            }
        }), 
    ],
    callbacks: {
        async session (session) {
            try {
                const userActiveSubscription = await fauna/* fauna.query */.r.query(external_faunadb_.query.Get(external_faunadb_.query.Intersection([
                    external_faunadb_.query.Match(external_faunadb_.query.Index("subscription_by_user_ref"), external_faunadb_.query.Select("ref", external_faunadb_.query.Get(external_faunadb_.query.Match(external_faunadb_.query.Index("user_by_email"), external_faunadb_.query.Casefold(session.session.user.email))))),
                    external_faunadb_.query.Match(external_faunadb_.query.Index("subscription_by_status"), "active"), 
                ])));
                return {
                    ...session.session,
                    activeSubscription: userActiveSubscription
                };
            } catch  {
                return {
                    ...session.session,
                    activeSubscription: null
                };
            }
        },
        async signIn ({ user , account , profile , credentials  }) {
            const { email  } = user;
            try {
                await fauna/* fauna.query */.r.query(external_faunadb_.query.If(external_faunadb_.query.Not(external_faunadb_.query.Exists(external_faunadb_.query.Match(external_faunadb_.query.Index("user_by_email"), external_faunadb_.query.Casefold(user.email)))), external_faunadb_.query.Create(external_faunadb_.query.Collection("users"), {
                    data: {
                        email
                    }
                }), external_faunadb_.query.Get(external_faunadb_.query.Match(external_faunadb_.query.Index("user_by_email"), external_faunadb_.query.Casefold(user.email)))));
                return true;
            } catch (err) {
                console.error("Error: [%s] %s: %s", err.name, err.message, err.errors()[0].description);
                return false;
            }
        }
    }
}));


/***/ }),

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7384));
module.exports = __webpack_exports__;

})();