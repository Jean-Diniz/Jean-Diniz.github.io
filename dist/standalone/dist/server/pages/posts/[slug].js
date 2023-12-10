"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 4011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7089);
/* harmony import */ var _prismicio_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9107);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9125);
/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio__WEBPACK_IMPORTED_MODULE_1__, _prismicio_helpers__WEBPACK_IMPORTED_MODULE_2__]);
([_prismicio__WEBPACK_IMPORTED_MODULE_1__, _prismicio_helpers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Post({ post  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        post.title,
                        " | Ignews"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                    className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().post),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: post.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                            children: post.updatedAt
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().postContent),
                            dangerouslySetInnerHTML: {
                                __html: post.content
                            }
                        })
                    ]
                })
            })
        ]
    });
};
const getServerSideProps = async ({ req , params ,  })=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)({
        req
    });
    const { slug  } = params;
    if (!session?.activeSubscription) {
        return {
            redirect: {
                destination: `/posts/preview/${slug}`,
                permanent: false
            }
        };
    }
    const prismic = (0,_prismicio__WEBPACK_IMPORTED_MODULE_1__/* .getPrismicClient */ .e2)(req);
    const response = await prismic.getByUID("page", String(slug), {});
    const post = {
        slug: String(slug),
        title: (0,_prismicio_helpers__WEBPACK_IMPORTED_MODULE_2__.asText)(response.data.title),
        content: (0,_prismicio_helpers__WEBPACK_IMPORTED_MODULE_2__.asHTML)(response.data.content),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        })
    };
    return {
        props: {
            post
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4582:
/***/ ((module) => {

module.exports = import("@prismicio/client");;

/***/ }),

/***/ 9107:
/***/ ((module) => {

module.exports = import("@prismicio/helpers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [781], () => (__webpack_exec__(4011)));
module.exports = __webpack_exports__;

})();