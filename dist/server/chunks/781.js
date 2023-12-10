exports.id = 781;
exports.ids = [781];
exports.modules = {

/***/ 9125:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "post_container__MzB65",
	"post": "post_post__ejhnw",
	"postContent": "post_postContent__B93C3",
	"previewContent": "post_previewContent__2mmIt",
	"continueReading": "post_continueReading___ZrFL"
};


/***/ }),

/***/ 7089:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e2": () => (/* binding */ getPrismicClient)
/* harmony export */ });
/* unused harmony exports endpoint, repositoryName, linkResolver */
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4582);
/* harmony import */ var _sm_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__]);
_prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const endpoint = _sm_json__WEBPACK_IMPORTED_MODULE_1__/* .apiEndpoint */ ._d;
const repositoryName = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.getRepositoryName(endpoint);
// Update the Link Resolver to match your project's route structure
function linkResolver(doc) {
    switch(doc.type){
        case "homepage":
            return "/";
        case "page":
            return `/${doc.uid}`;
        default:
            return null;
    }
}
// This factory function allows smooth preview setup
function getPrismicClient(req) {
    const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(endpoint, {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        defaultParams: {
            pageSize: 10
        }
    });
    return client;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 125:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_d":"https://jeandinizignews.prismic.io/api/v2"}');

/***/ })

};
;