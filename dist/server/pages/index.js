(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9515:
/***/ ((module) => {

// Exports
module.exports = {
	"subscribeButton": "styles_subscribeButton__52c6u"
};


/***/ }),

/***/ 8339:
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "home_contentContainer__HYuN8",
	"hero": "home_hero__lhpWS"
};


/***/ }),

/***/ 2117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/services/api.ts

const api = external_axios_default().create({
    baseURL: "/api"
});

;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
;// CONCATENATED MODULE: ./src/services/stripe-js.ts

async function getStripeJS() {
    const stripeJs = await (0,stripe_js_namespaceObject.loadStripe)("pk_test_51Kg8yfL7hT4auRGCi27QeBQBPpkntP98WngCnOMMgTeVEfpt9FPQK9lKdYTXAHAfI3cI7NrYPMm93eszKmu07hVF002aYzEqrR");
    return stripeJs;
}

// EXTERNAL MODULE: ./src/components/SubscribeButton/styles.module.scss
var styles_module = __webpack_require__(9515);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/SubscribeButton/index.tsx






function SubscribeButton() {
    const { data: session  } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    async function handleSubscribe() {
        if (!session) {
            (0,react_.signIn)("github");
            return;
        }
        if (session.activeSubscription) {
            router.push("/posts");
            return;
        }
        try {
            const response = await api.post("/subscribe");
            const { sessionId  } = response.data;
            const stripe = await getStripeJS();
            await stripe.redirectToCheckout({
                sessionId
            });
        } catch (err) {
            alert(err.message);
        }
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: (styles_module_default()).subscribeButton,
        onClick: handleSubscribe,
        children: "Subscribe now"
    }));
}

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
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

// EXTERNAL MODULE: ./src/pages/home.module.scss
var home_module = __webpack_require__(8339);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
;// CONCATENATED MODULE: ./src/pages/index.tsx






function Home({ product  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Home | ig.news"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (home_module_default()).contentContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (home_module_default()).hero,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "👏 Hey, welcome"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                children: [
                                    "News about ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "React"
                                    }),
                                    " world"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Get acess to all the publications ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "for ",
                                            product.amount,
                                            "/month"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SubscribeButton, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/avatar.svg",
                        alt: "Girl coding",
                        width: 334,
                        height: 520
                    })
                ]
            })
        ]
    }));
};
const getStaticProps = async ()=>{
    const price = await stripe.prices.retrieve("price_1Kg94HL7hT4auRGCSkQPKWxa");
    const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(price.unit_amount / 100)
    };
    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24
    };
};


/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,675], () => (__webpack_exec__(2117)));
module.exports = __webpack_exports__;

})();