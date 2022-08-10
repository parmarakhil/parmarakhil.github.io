(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/page-not-found-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/404/page-not-found-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PageNotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutingModule", function() { return PageNotFoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/404/page-not-found.component.ts");





const routes = [
    { path: "page-not-found", component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
class PageNotFoundRoutingModule {
}
PageNotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundRoutingModule });
PageNotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundRoutingModule_Factory(t) { return new (t || PageNotFoundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/404/page-not-found.component.ts":
/*!*************************************************!*\
  !*** ./src/app/404/page-not-found.component.ts ***!
  \*************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() {
    }
    ngOnInit() { }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 38, vars: 0, consts: [[1, "page-not-found-text"], [1, "container"], [1, "caveman"], [1, "leg"], [1, "foot"], [1, "fingers"], [1, "shape"], [1, "circle"], [1, "head"], [1, "eye"], [1, "nose"], [1, "mouth"], [1, "arm-right"], [1, "club"], ["href", "/"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Go back to Home Page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  margin-top: 12em;\n  background-color: #3a5f8e;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  padding: 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n}\na[_ngcontent-%COMP%]:hover {\n  background-color: #2a3c52;\n}\n\n.page-not-found-text[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  color: rgba(42, 60, 82, 0.1);\n  font-size: 30em;\n  text-align: center;\n  top: 40%;\n  height: 400px;\n}\n.page-not-found-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.container[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  height: 300px;\n  width: 500px;\n}\n.container[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  background-color: rgba(42, 60, 82, 0.1);\n  border-radius: 12px;\n  bottom: 40px;\n  height: 12px;\n  left: 80px;\n  width: 350px;\n  z-index: -1;\n  -webkit-animation: shadow-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: shadow-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n\n.caveman[_ngcontent-%COMP%] {\n  height: 300px;\n  position: absolute;\n  width: 250px;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1) {\n  right: 20px;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2) {\n  left: 20px;\n  transform: rotateY(180deg);\n}\n.head[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #2a3c52;\n  border-radius: 50px;\n  height: 140px;\n  left: 60px;\n  top: 25px;\n  width: 65px;\n}\n.head[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 10px;\n  height: 20px;\n  width: 7px;\n}\n.head[_ngcontent-%COMP%]:after {\n  left: 35px;\n  top: -8px;\n  -ms-transform: rotate(20deg);\n      transform: rotate(20deg);\n}\n.head[_ngcontent-%COMP%]:before {\n  left: 30px;\n  top: -8px;\n  -ms-transform: rotate(-20deg);\n      transform: rotate(-20deg);\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n  background-color: #e2af90;\n  border-radius: 50px;\n  height: 16px;\n  left: 45%;\n  top: 40px;\n  width: 48px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 50%;\n  height: 5px;\n  width: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after {\n  left: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  right: 9px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]   .nose[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #d6a486;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 10px;\n  box-sizing: border-box;\n  height: 35px;\n  left: 45%;\n  top: 12px;\n  width: 15px;\n}\n.shape[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n  border-radius: 50%;\n  height: 140px;\n  overflow: hidden;\n  top: 70px;\n  width: 140px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after {\n  left: 50px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  left: 60px;\n  top: 45px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1) {\n  left: -12px;\n  top: 80px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2) {\n  right: 10px;\n  top: 0;\n  -ms-transform: rotate(90deg);\n      transform: rotate(90deg);\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):after {\n  left: 65px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):before {\n  display: none;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3a5f8e;\n}\n.arm-right[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #e2af90;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 50px;\n  box-sizing: border-box;\n  height: 180px;\n  left: 135px;\n  top: 80px;\n  -ms-transform-origin: 30px 30px;\n      transform-origin: 30px 30px;\n  width: 60px;\n  z-index: 1;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%] {\n  position: absolute;\n  border-bottom: 110px solid #601513;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  height: 0;\n  left: -60px;\n  top: 120px;\n  -ms-transform: rotate(70deg);\n      transform: rotate(70deg);\n  width: 20px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after, .arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #601513;\n  border-radius: 50%;\n  left: 0;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after {\n  height: 20px;\n  width: 20px;\n  top: -10px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  height: 40px;\n  width: 40px;\n  left: -10px;\n  top: 90px;\n}\n.leg[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 10px;\n  height: 55px;\n  top: 200px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  height: 10px;\n  left: -5px;\n  top: 15px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 25px 25px 0 0;\n  height: 25px;\n  left: -38px;\n  top: 30px;\n  width: 50px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%], .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #e2af90;\n  border-radius: 50%;\n  bottom: 0;\n  height: 15px;\n  -ms-transform-origin: bottom;\n      transform-origin: bottom;\n  width: 15px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after {\n  left: -6px;\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before {\n  left: 8px;\n  -ms-transform: scale(0.6);\n      transform: scale(0.6);\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%] {\n  left: 15px;\n  -ms-transform: scale(0.6);\n      transform: scale(0.6);\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  left: 11px;\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #bf9176;\n  left: 95px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1):after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%] {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:before {\n  display: none;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #d6a486;\n  left: 115px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2):after {\n  background-color: #d6a486;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2)   .foot[_ngcontent-%COMP%] {\n  background-color: #d6a486;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .arm-right[_ngcontent-%COMP%] {\n  -webkit-animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .arm-right[_ngcontent-%COMP%] {\n  -webkit-animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes arm-anima {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n@keyframes arm-anima {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .head[_ngcontent-%COMP%] {\n  -webkit-animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .head[_ngcontent-%COMP%] {\n  -webkit-animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes head-anima {\n  0% {\n    top: 25px;\n  }\n  42% {\n    top: 25px;\n  }\n  45% {\n    top: 50px;\n  }\n  100% {\n    top: 25px;\n  }\n}\n@keyframes head-anima {\n  0% {\n    top: 25px;\n  }\n  42% {\n    top: 25px;\n  }\n  45% {\n    top: 50px;\n  }\n  100% {\n    top: 25px;\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:before {\n  -webkit-animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:before {\n  -webkit-animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes eye-anima {\n  0% {\n    height: 5px;\n  }\n  42% {\n    height: 5px;\n  }\n  45% {\n    height: 1px;\n  }\n  100% {\n    height: 5px;\n  }\n}\n@keyframes eye-anima {\n  0% {\n    height: 5px;\n  }\n  42% {\n    height: 5px;\n  }\n  45% {\n    height: 1px;\n  }\n  100% {\n    height: 5px;\n  }\n}\n@-webkit-keyframes shadow-anima {\n  0% {\n    width: 350px;\n    left: 80px;\n  }\n  25% {\n    width: 450px;\n    left: 80px;\n  }\n  50% {\n    width: 350px;\n    left: 80px;\n  }\n  75% {\n    width: 450px;\n    left: 0;\n  }\n  100% {\n    width: 350px;\n    left: 80px;\n  }\n}\n@keyframes shadow-anima {\n  0% {\n    width: 350px;\n    left: 80px;\n  }\n  25% {\n    width: 450px;\n    left: 80px;\n  }\n  50% {\n    width: 350px;\n    left: 80px;\n  }\n  75% {\n    width: 450px;\n    left: 0;\n  }\n  100% {\n    width: 350px;\n    left: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwLzQwNC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQU5FLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtNQUFBLGdDQUFBO0VBTUUsZ0JBQUE7RUFDQSx5QkFoQ1c7RUFpQ1gsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUMzQko7QUQ2Qkk7RUFDSSx5QkFBQTtBQzNCUjtBRCtCQSxjQUFBO0FBQ0E7RUEzQkUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO01BQUEsZ0NBQUE7RUEyQkEsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQzFCRjtBRDRCRTtFQUNJLFNBQUE7QUMxQk47QUQ4QkE7RUF6Q0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO01BQUEsZ0NBQUE7RUF5Q0EsYUFBQTtFQUNBLFlBQUE7QUN6QkY7QUQwQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrRkFBQTtVQUFBLDBFQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ3hCSjtBRDRCQSxZQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDekJGO0FENEJBO0VBQXdCLFdBQUE7QUN4QnhCO0FEeUJBO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0FDdEJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx5QkE1Rlc7RUE2RlgsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDckJGO0FEc0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBNUdVO0VBNkdWLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNwQko7QURzQkU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO01BQUEsd0JBQUE7QUNwQko7QURzQkU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO01BQUEseUJBQUE7QUNwQko7QURzQkU7RUF6R0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7TUFBQSwyQkFBQTtFQTBHRSx5QkExSFc7RUEySFgsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDbkJKO0FEb0JJO0VBeEhGLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO01BQUEsMkJBQUE7RUF5SEksV0FBQTtFQUNBLHlCQXhJUTtFQXlJUixrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDakJOO0FEbUJJO0VBQ0UsU0FBQTtBQ2pCTjtBRG1CSTtFQUNFLFVBQUE7QUNqQk47QURtQkk7RUEzSEYsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO01BQUEsZ0NBQUE7RUEySEkseUJBakpTO0VBa0pULDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNmTjtBRG9CQTtFQWhKRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtNQUFBLDJCQUFBO0VBaUpBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNoQkY7QURpQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNmSjtBRGdCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNkTjtBRGdCSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDZE47QURnQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ2ROO0FEaUJFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUNmSjtBRGtCRTtFQUNFLFdBQUE7RUFDQSxNQUFBO0VBQ0EsNEJBQUE7TUFBQSx3QkFBQTtBQ2hCSjtBRGlCSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDZk47QURpQkk7RUFDRSxhQUFBO0FDZk47QURvQkE7RUFDRSx5QkFqTmE7QUNnTWY7QURtQkU7RUFDRSx5QkFuTlc7QUNrTWY7QURrQkk7RUFBb0IseUJBcE5UO0FDcU1mO0FEbUJBO0VBQ0UseUJBek5hO0FDeU1mO0FEaUJFO0VBQ0kseUJBNU5TO0FDNk1mO0FEZ0JNO0VBQW9CLHlCQTdOWDtBQ2dOZjtBRGlCQTtFQUNFLGtCQUFBO0VBQ0EseUJBak9hO0VBa09iLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO01BQUEsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ2RGO0FEZ0JFO0VBQ0Usa0JBQUE7RUFDRCxrQ0FBQTtFQUNDLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtNQUFBLHdCQUFBO0VBQ0EsV0FBQTtBQ2RKO0FEZ0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBdFBTO0VBdVBULGtCQUFBO0VBQ0EsT0FBQTtBQ2ROO0FEZ0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDZE47QURnQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDZE47QURtQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDaEJGO0FEaUJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDZko7QURrQkU7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2hCSjtBRGlCSTtFQUNFLGtCQUFBO0VBQ0EseUJBclNTO0VBc1NULGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtNQUFBLHdCQUFBO0VBQ0EsV0FBQTtBQ2ZOO0FEaUJJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNmTjtBRGlCSTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO0VBQ0EsV0FBQTtBQ2ZOO0FEa0JJO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO01BQUEscUJBQUE7QUNoQk47QURrQkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ2hCTjtBRHFCQTtFQUNFLHlCQWhVYTtFQWlVYixVQUFBO0FDbEJGO0FEbUJFO0VBQVUseUJBbFVHO0FDa1RmO0FEaUJFO0VBQ0UseUJBcFVXO0FDcVRmO0FEZ0JJO0VBQVUseUJBclVDO0FDd1RmO0FEY0k7RUFBVyxhQUFBO0FDWGY7QURlQTtFQUNFLHlCQTVVYTtFQTZVYixXQUFBO0FDWkY7QURhRTtFQUFVLHlCQTlVRztBQ29VZjtBRFdFO0VBQVEseUJBL1VLO0FDdVVmO0FEV0EsY0FBQTtBQUNBO0VBQ0UsK0VBQUE7VUFBQSx1RUFBQTtBQ1JGO0FEV0E7RUFDRSwrRUFBQTtVQUFBLHVFQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ1JGO0FEV0E7RUFDRTtJQUFLLG9CQUFBO0VDUEw7RURRQTtJQUFPLDBCQUFBO0VDTFA7QUFDRjtBREVBO0VBQ0U7SUFBSyxvQkFBQTtFQ1BMO0VEUUE7SUFBTywwQkFBQTtFQ0xQO0FBQ0Y7QURPQTtFQUNFLGdGQUFBO1VBQUEsd0VBQUE7QUNMRjtBRFFBO0VBQ0UsZ0ZBQUE7VUFBQSx3RUFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNMRjtBRFFBO0VBQ0U7SUFBSyxTQUFBO0VDSkw7RURLQTtJQUFNLFNBQUE7RUNGTjtFREdBO0lBQU0sU0FBQTtFQ0FOO0VEQ0E7SUFBTyxTQUFBO0VDRVA7QUFDRjtBRFBBO0VBQ0U7SUFBSyxTQUFBO0VDSkw7RURLQTtJQUFNLFNBQUE7RUNGTjtFREdBO0lBQU0sU0FBQTtFQ0FOO0VEQ0E7SUFBTyxTQUFBO0VDRVA7QUFDRjtBREFBOztFQUVFLCtFQUFBO1VBQUEsdUVBQUE7QUNFRjtBRENBOztFQUVFLCtFQUFBO1VBQUEsdUVBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDRUY7QURDQTtFQUNFO0lBQUssV0FBQTtFQ0dMO0VERkE7SUFBTSxXQUFBO0VDS047RURKQTtJQUFNLFdBQUE7RUNPTjtFRE5BO0lBQU8sV0FBQTtFQ1NQO0FBQ0Y7QURkQTtFQUNFO0lBQUssV0FBQTtFQ0dMO0VERkE7SUFBTSxXQUFBO0VDS047RURKQTtJQUFNLFdBQUE7RUNPTjtFRE5BO0lBQU8sV0FBQTtFQ1NQO0FBQ0Y7QURQQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLE9BQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtBQUNGO0FEN0JBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ1NGO0VEUEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ1NGO0VEUEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ1NGO0VEUEE7SUFDRSxZQUFBO0lBQ0EsT0FBQTtFQ1NGO0VEUEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ1NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC80MDQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmxhY2s6ICMyYTNjNTI7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmx1ZS0xOiAjM2E1ZjhlO1xuJGNvbG9yLWJsdWUtMjogIzNmNTU3MTtcbiRjb2xvci1za2luLTE6ICNlMmFmOTA7XG4kY29sb3Itc2tpbi0yOiAjZDZhNDg2O1xuJGNvbG9yLXNraW4tMzogI2JmOTE3NjtcbiRjb2xvci1oYWlyOiAjMmEzYzUyO1xuJGNvbG9yLXdvb2QtMTogIzYwMTUxMztcbiRjb2xvci13b29kLTI6ICM0MTBhMDk7XG5cbkBtaXhpbiB0b3A1MCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuQG1peGluIGxlZnQ1MCB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbkBtaXhpbiBjZW50ZXJlZCB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmEge1xuICAgIEBpbmNsdWRlIGNlbnRlcmVkO1xuXG4gICAgbWFyZ2luLXRvcDogMTJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xO1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhM2M1MjtcbiAgICB9XG59XG5cbi8qIFRoZSBzY2VuZSAqL1xuLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICBAaW5jbHVkZSBjZW50ZXJlZDtcblxuICBjb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XG4gIGZvbnQtc2l6ZTogMzBlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDQwJTtcbiAgaGVpZ2h0OiA0MDBweDtcblxuICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgQGluY2x1ZGUgY2VudGVyZWQ7XG5cbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbGVmdDogODBweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgei1pbmRleDogLTE7XG4gICAgYW5pbWF0aW9uOiBzaGFkb3ctYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICB9XG59XG5cbi8qIGNhdmVtYW4gKi9cbi5jYXZlbWFuIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSB7IHJpZ2h0OiAyMHB4OyB9XG4uY2F2ZW1hbjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5oZWFkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaGFpcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbGVmdDogNjBweDtcbiAgdG9wOiAyNXB4O1xuICB3aWR0aDogNjVweDtcbiAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDdweDtcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBsZWZ0OiAzNXB4O1xuICAgIHRvcDogLThweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgdG9wOiAtOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gIH1cbiAgLmV5ZSB7XG4gICAgQGluY2x1ZGUgbGVmdDUwO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBsZWZ0OiA0NSU7XG4gICAgdG9wOiA0MHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcbiAgICAgIEBpbmNsdWRlIHRvcDUwO1xuICAgICAgXG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogNXB4O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDVweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgcmlnaHQ6IDlweDtcbiAgICB9XG4gICAgLm5vc2Uge1xuICAgICAgQGluY2x1ZGUgY2VudGVyZWQ7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTI7XG4gICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYmEoJGNvbG9yLWJsYWNrLCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBsZWZ0OiA0NSU7XG4gICAgICB0b3A6IDEycHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLnNoYXBlIHtcbiAgQGluY2x1ZGUgbGVmdDUwOyBcblxuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogNzBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICAuY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgaGVpZ2h0OiAyMHB4OyAgICAgIFxuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogNTBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogNjBweDtcbiAgICAgIHRvcDogNDVweDtcbiAgICB9XG4gIH1cbiAgLmNpcmNsZTpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IC0xMnB4O1xuICAgIHRvcDogODBweDtcbiAgfVxuXG4gIC5jaXJjbGU6bnRoLWNoaWxkKDIpIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogNjVweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5zaGFwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTE7XG5cbiAgLmNpcmNsZSB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTI7IFxuICAgICY6YWZ0ZXIsICY6YmVmb3JlIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMjsgfVxuICB9XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuc2hhcGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0yO1xuICAuY2lyY2xlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTE7IFxuICAgICAgJjphZnRlciwgJjpiZWZvcmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xOyB9XG4gIH1cbn1cblxuLmFybS1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMTtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKCRjb2xvci1ibGFjaywgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgbGVmdDogMTM1cHg7IFxuICB0b3A6IDgwcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDMwcHggMzBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgLmNsdWIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICBib3JkZXItYm90dG9tOiAxMTBweCBzb2xpZCAkY29sb3Itd29vZC0xO1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbGVmdDogLTYwcHg7XG4gICAgdG9wOiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MGRlZyk7XG4gICAgd2lkdGg6IDIwcHg7XG5cbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdvb2QtMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB0b3A6IC0xMHB4O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgdG9wOiA5MHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubGVnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDU1cHg7ICBcbiAgdG9wOiAyMDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgbGVmdDogLTVweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICAuZm9vdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGxlZnQ6IC0zOHB4O1xuICAgIHRvcDogMzBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSwgLmZpbmdlcnMsIC5maW5nZXJzOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICBsZWZ0OiAtNnB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogOHB4O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG5cbiAgICAuZmluZ2VycyB7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIH1cbiAgICAuZmluZ2VyczphZnRlciB7XG4gICAgICBsZWZ0OiAxMXB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuLmxlZzpudGgtY2hpbGQoMSkgeyBcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMztcbiAgbGVmdDogOTVweDtcbiAgJjphZnRlciB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7IH1cbiAgLmZvb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7IFxuICAgICY6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0zOyB9XG4gICAgJjpiZWZvcmUgeyBkaXNwbGF5OiBub25lOyB9XG4gIH1cbn1cblxuLmxlZzpudGgtY2hpbGQoMikgeyBcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMjtcbiAgbGVmdDogMTE1cHg7ICAgXG4gICY6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0yOyB9XG4gIC5mb290IHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMjsgfVxufVxuXG4vKiBhbmltYXRpb24gKi9cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuYXJtLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBhcm0tYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuYXJtLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBhcm0tYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuQGtleWZyYW1lcyBhcm0tYW5pbWEge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgfVxufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLmhlYWQge1xuICBhbmltYXRpb246IGhlYWQtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuaGVhZCB7XG4gIGFuaW1hdGlvbjogaGVhZC1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGhlYWQtYW5pbWEge1xuICAwJSB7IHRvcDogMjVweDsgfVxuICA0MiUgeyB0b3A6IDI1cHg7IH1cbiAgNDUlIHsgdG9wOiA1MHB4OyB9XG4gIDEwMCUgeyB0b3A6IDI1cHg7IH1cbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5leWU6YWZ0ZXIsIFxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5leWU6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBleWUtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuZXllOmFmdGVyLCBcbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuZXllOmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogZXllLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgZXllLWFuaW1hIHtcbiAgMCUgeyBoZWlnaHQ6IDVweDsgfVxuICA0MiUgeyBoZWlnaHQ6IDVweDsgfVxuICA0NSUgeyBoZWlnaHQ6IDFweDsgfVxuICAxMDAlIHsgaGVpZ2h0OiA1cHg7IH1cbn1cblxuQGtleWZyYW1lcyBzaGFkb3ctYW5pbWEge1xuICAwJSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbiAgMjUlIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG4gIDc1JSB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbn0iLCJhIHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWFyZ2luLXRvcDogMTJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNWY4ZTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTNjNTI7XG59XG5cbi8qIFRoZSBzY2VuZSAqL1xuLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogcmdiYSg0MiwgNjAsIDgyLCAwLjEpO1xuICBmb250LXNpemU6IDMwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA0MCU7XG4gIGhlaWdodDogNDAwcHg7XG59XG4ucGFnZS1ub3QtZm91bmQtdGV4dCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLmNvbnRhaW5lcjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNjAsIDgyLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3R0b206IDQwcHg7XG4gIGhlaWdodDogMTJweDtcbiAgbGVmdDogODBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiBzaGFkb3ctYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbn1cblxuLyogY2F2ZW1hbiAqL1xuLmNhdmVtYW4ge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIHtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDIwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uaGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhM2M1MjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbGVmdDogNjBweDtcbiAgdG9wOiAyNXB4O1xuICB3aWR0aDogNjVweDtcbn1cbi5oZWFkOmFmdGVyLCAuaGVhZDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTNjNTI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDdweDtcbn1cbi5oZWFkOmFmdGVyIHtcbiAgbGVmdDogMzVweDtcbiAgdG9wOiAtOHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG59XG4uaGVhZDpiZWZvcmUge1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IC04cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG59XG4uaGVhZCAuZXllIHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyYWY5MDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBsZWZ0OiA0NSU7XG4gIHRvcDogNDBweDtcbiAgd2lkdGg6IDQ4cHg7XG59XG4uaGVhZCAuZXllOmFmdGVyLCAuaGVhZCAuZXllOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhM2M1MjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDVweDtcbn1cbi5oZWFkIC5leWU6YWZ0ZXIge1xuICBsZWZ0OiA1cHg7XG59XG4uaGVhZCAuZXllOmJlZm9yZSB7XG4gIHJpZ2h0OiA5cHg7XG59XG4uaGVhZCAuZXllIC5ub3NlIHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2YTQ4NjtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKDQyLCA2MCwgODIsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMzVweDtcbiAgbGVmdDogNDUlO1xuICB0b3A6IDEycHg7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4uc2hhcGUge1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogNzBweDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuLnNoYXBlIC5jaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn1cbi5zaGFwZSAuY2lyY2xlOmFmdGVyLCAuc2hhcGUgLmNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi5zaGFwZSAuY2lyY2xlOmFmdGVyIHtcbiAgbGVmdDogNTBweDtcbiAgdG9wOiAxMHB4O1xufVxuLnNoYXBlIC5jaXJjbGU6YmVmb3JlIHtcbiAgbGVmdDogNjBweDtcbiAgdG9wOiA0NXB4O1xufVxuLnNoYXBlIC5jaXJjbGU6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogLTEycHg7XG4gIHRvcDogODBweDtcbn1cbi5zaGFwZSAuY2lyY2xlOm50aC1jaGlsZCgyKSB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5zaGFwZSAuY2lyY2xlOm50aC1jaGlsZCgyKTphZnRlciB7XG4gIGxlZnQ6IDY1cHg7XG4gIHRvcDogMTBweDtcbn1cbi5zaGFwZSAuY2lyY2xlOm50aC1jaGlsZCgyKTpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLnNoYXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNWY4ZTtcbn1cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuc2hhcGUgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjU1NzE7XG59XG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLnNoYXBlIC5jaXJjbGU6YWZ0ZXIsIC5jYXZlbWFuOm50aC1jaGlsZCgxKSAuc2hhcGUgLmNpcmNsZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1NTcxO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLnNoYXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTU3MTtcbn1cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuc2hhcGUgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTVmOGU7XG59XG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLnNoYXBlIC5jaXJjbGU6YWZ0ZXIsIC5jYXZlbWFuOm50aC1jaGlsZCgyKSAuc2hhcGUgLmNpcmNsZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ZjhlO1xufVxuXG4uYXJtLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJhZjkwO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYmEoNDIsIDYwLCA4MiwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgbGVmdDogMTM1cHg7XG4gIHRvcDogODBweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMzBweCAzMHB4O1xuICB3aWR0aDogNjBweDtcbiAgei1pbmRleDogMTtcbn1cbi5hcm0tcmlnaHQgLmNsdWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1ib3R0b206IDExMHB4IHNvbGlkICM2MDE1MTM7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMDtcbiAgbGVmdDogLTYwcHg7XG4gIHRvcDogMTIwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcbiAgd2lkdGg6IDIwcHg7XG59XG4uYXJtLXJpZ2h0IC5jbHViOmFmdGVyLCAuYXJtLXJpZ2h0IC5jbHViOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwMTUxMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsZWZ0OiAwO1xufVxuLmFybS1yaWdodCAuY2x1YjphZnRlciB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHRvcDogLTEwcHg7XG59XG4uYXJtLXJpZ2h0IC5jbHViOmJlZm9yZSB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IDkwcHg7XG59XG5cbi5sZWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgdG9wOiAyMDBweDtcbiAgd2lkdGg6IDEwcHg7XG59XG4ubGVnOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTBweDtcbiAgbGVmdDogLTVweDtcbiAgdG9wOiAxNXB4O1xuICB3aWR0aDogMTBweDtcbn1cbi5sZWcgLmZvb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogLTM4cHg7XG4gIHRvcDogMzBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG4ubGVnIC5mb290OmFmdGVyLCAubGVnIC5mb290OmJlZm9yZSwgLmxlZyAuZm9vdCAuZmluZ2VycywgLmxlZyAuZm9vdCAuZmluZ2VyczphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyYWY5MDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTVweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICB3aWR0aDogMTVweDtcbn1cbi5sZWcgLmZvb3Q6YWZ0ZXIge1xuICBsZWZ0OiAtNnB4O1xuICBjb250ZW50OiBcIlwiO1xufVxuLmxlZyAuZm9vdDpiZWZvcmUge1xuICBsZWZ0OiA4cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgY29udGVudDogXCJcIjtcbn1cbi5sZWcgLmZvb3QgLmZpbmdlcnMge1xuICBsZWZ0OiAxNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG59XG4ubGVnIC5mb290IC5maW5nZXJzOmFmdGVyIHtcbiAgbGVmdDogMTFweDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmxlZzpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmY5MTc2O1xuICBsZWZ0OiA5NXB4O1xufVxuLmxlZzpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmY5MTc2O1xufVxuLmxlZzpudGgtY2hpbGQoMSkgLmZvb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmY5MTc2O1xufVxuLmxlZzpudGgtY2hpbGQoMSkgLmZvb3Q6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmY5MTc2O1xufVxuLmxlZzpudGgtY2hpbGQoMSkgLmZvb3Q6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxlZzpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZhNDg2O1xuICBsZWZ0OiAxMTVweDtcbn1cbi5sZWc6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2YTQ4Njtcbn1cbi5sZWc6bnRoLWNoaWxkKDIpIC5mb290IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2YTQ4Njtcbn1cblxuLyogYW5pbWF0aW9uICovXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmFybS1yaWdodCB7XG4gIGFuaW1hdGlvbjogYXJtLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLmFybS1yaWdodCB7XG4gIGFuaW1hdGlvbjogYXJtLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgYXJtLWFuaW1hIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICB9XG59XG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLmhlYWQge1xuICBhbmltYXRpb246IGhlYWQtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuaGVhZCB7XG4gIGFuaW1hdGlvbjogaGVhZC1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGhlYWQtYW5pbWEge1xuICAwJSB7XG4gICAgdG9wOiAyNXB4O1xuICB9XG4gIDQyJSB7XG4gICAgdG9wOiAyNXB4O1xuICB9XG4gIDQ1JSB7XG4gICAgdG9wOiA1MHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMjVweDtcbiAgfVxufVxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5leWU6YWZ0ZXIsXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLmV5ZTpiZWZvcmUge1xuICBhbmltYXRpb246IGV5ZS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5leWU6YWZ0ZXIsXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmV5ZTpiZWZvcmUge1xuICBhbmltYXRpb246IGV5ZS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGV5ZS1hbmltYSB7XG4gIDAlIHtcbiAgICBoZWlnaHQ6IDVweDtcbiAgfVxuICA0MiUge1xuICAgIGhlaWdodDogNXB4O1xuICB9XG4gIDQ1JSB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hhZG93LWFuaW1hIHtcbiAgMCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG4gIDI1JSB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxuICA3NSUge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG59Il19 */", "@media screen and (max-width: 990px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 23em;\n  }\n}\n@media screen and (max-width: 790px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 20em;\n  }\n}\n@media screen and (max-width: 690px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 18em;\n  }\n}\n@media screen and (max-width: 600px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 14em;\n  }\n}\n@media screen and (max-width: 500px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwLzQwNC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzcmMvYXBwLzQwNC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLGVBQUE7RUNBTjtBQUNGO0FER0E7RUFFSTtJQUNJLGVBQUE7RUNGTjtBQUNGO0FES0E7RUFFSTtJQUNJLGVBQUE7RUNKTjtBQUNGO0FET0E7RUFFSTtJQUNJLGVBQUE7RUNOTjtBQUNGO0FEU0E7RUFFSTtJQUNJLGVBQUE7RUNSTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5MHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBlbTtcbiAgICB9XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjNlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjBlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMThlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-page-not-found",
                templateUrl: "./page-not-found.html",
                styleUrls: ["./page-not-found.component.scss", "./page-not-found.component.responsivity.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/404/page-not-found.module.ts":
/*!**********************************************!*\
  !*** ./src/app/404/page-not-found.module.ts ***!
  \**********************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found-routing.module */ "./src/app/404/page-not-found-routing.module.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/404/page-not-found.component.ts");




class PageNotFoundModule {
}
PageNotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
PageNotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); }, imports: [[_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]], imports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]], exports: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]],
                declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]],
                exports: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_aboutMe$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_1 = goog.getMsg("About me");
    I18N_0 = MSG_EXTERNAL_aboutMe$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:nav@@aboutMe␟1f3e393d5483be2d063bee208dbaa462793a59cd␟3562199946446423606:About me`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc about
     */ 
    const MSG_EXTERNAL_yearsOld$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_3 = goog.getMsg("years old");
    I18N_2 = MSG_EXTERNAL_yearsOld$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:about@@yearsOld␟77280729e57b6f62675100eec0a0e00d8ec4fa5e␟2509424109113872121:years old`;
}
const _c4 = function (a1) { return ["fas", a1]; };
function AboutComponent_fa_icon_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 20);
} if (rf & 2) {
    const hobby_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", hobby_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, hobby_r4.icon));
} }
const _c5 = function (a1) { return ["fab", a1]; };
function AboutComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", media_r5.http, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", media_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c5, media_r5.icon));
} }
class AboutComponent {
    constructor(dataService, library) {
        this.dataService = dataService;
        this.library = library;
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["fab"]);
    }
    ngOnInit() {
        this.name = "Akhil Parmar"; // Sets here, your full name
        this.yearsOld = this.calcAge("1996-04-24"); // Sets here, your date birthday
        // Fetches the About information from the Data Service (about.json file).
        this.subscription = this.dataService.getAbout()
            .subscribe((about) => this.aboutData = about);
    }
    ngOnDestroy() {
        // Only need to unsubscribe if its a multi event Observable
        this.subscription.unsubscribe();
    }
    calcAge(dateString) {
        const birthday = new Date(dateString);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getFullYear() - 1970);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 31, vars: 5, consts: [["id", "about", "itemscope", "", "itemtype", "https://schema.org/AboutPage"], ["itemscope", "", "itemtype", "https://schema.org/Person", 1, "about-container"], ["itemprop", "jobTitle", "content", "Full-stack Java Developer"], ["itemprop", "knowsLanguage", "content", "en"], ["itemprop", "nationality", "content", "India"], ["itemprop", "gender", "content", "Male"], ["itemprop", "email", "content", "akhilparmar2496@gmail.com"], ["itemprop", "birthDate", "content", "1996-04-24"], ["itemprop", "url", "content", "https://parmarakhil.github.io/parmarakhil.github.io/"], [1, "first-column"], ["itemprop", "name"], [1, "years-old"], ["itemprop", "yearsOld"], ["internationalization", "", "property", "description", "itemprop", "summary", 1, "text", 3, "data"], [1, "hobbies"], ["class", "icon", "itemprop", "hobby", 3, "icon", "title", 4, "ngFor", "ngForOf"], [1, "second-column"], [1, "profile-picture"], [1, "social-media"], ["target", "_blank", "itemprop", "sameAs", 3, "href", 4, "ngFor", "ngForOf"], ["itemprop", "hobby", 1, "icon", 3, "icon", "title"], ["target", "_blank", "itemprop", "sameAs", 3, "href"], [1, "icon", 3, "icon", "title"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "meta", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Loading Data...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AboutComponent_fa_icon_26_Template, 1, 4, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AboutComponent_a_30_Template, 2, 5, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.yearsOld);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.aboutData == null ? null : ctx.aboutData.internationalizations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutData == null ? null : ctx.aboutData.hobbies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutData == null ? null : ctx.aboutData.medias);
    } }, directives: [_core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__["InternationalizationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["#about[_ngcontent-%COMP%] {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  background-image: linear-gradient(0deg, #fff 44.44%, #d4e7fe 44.44%, #d4e7fe 0%, #fff 0%, #fff 94.44%, #d4e7fe 94.44%, #d4e7fe 100%);\n  background-size: 10px 1220px;\n}\n\n.about-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #fff;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  width: 85vw;\n  z-index: 2;\n  padding: 2em;\n  max-width: 1400px;\n}\n\n.about-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #7d7d7d;\n  font-size: 22px;\n  font-weight: normal;\n  text-transform: uppercase;\n  margin: 0;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  color: #222f5c;\n  margin: 5px 0 0 0;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #7d7d7d;\n  margin-bottom: 10px;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n  color: #b2b6c6;\n  font-size: 18px;\n  font-style: italic;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  margin-right: 2em;\n  text-align: left;\n  min-height: 220px;\n  line-height: 1.5em;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #555f81;\n  margin-right: 1em;\n  transition: 0.3s;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 450px;\n  height: 450px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  background-image: url('akhil-parmar.jpg');\n  border: 3px solid #d4e7fe;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1em;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #414c73;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO01BQUEsc0JBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0Esb0lBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDUjs7QURFSTtFQUNJLG9CQUFBO01BQUEsWUFBQTtBQ0FSOztBREVRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQ0FaOztBREdRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRFo7O0FESVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNGWjs7QURPWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNMaEI7O0FEUVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTmhCOztBRFVRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDUlo7O0FEVVk7RUFDSSxjQUFBO0FDUmhCOztBRGFJO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0FDWFI7O0FEYVE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFHQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUNYWjs7QURjUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ1paOztBRGNZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDWmhCOztBRGNnQjtFQUNJLGNBQUE7QUNacEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmIDQ0LjQ0JSwgI2Q0ZTdmZSA0NC40NCUsICNkNGU3ZmUgMCUsICNmZmYgMCUsICNmZmYgOTQuNDQlLCAjZDRlN2ZlIDk0LjQ0JSwgI2Q0ZTdmZSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTIyMHB4O1xufVxuXG4uYWJvdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgIHdpZHRoOiA4NXZ3O1xuICAgIHotaW5kZXg6IDI7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuZmlyc3QtY29sdW1uIHtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogIzdkN2Q3ZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzdkN2Q3ZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcCB7XG4gICAgXG4gICAgICAgICAgICAmLnllYXJzLW9sZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNiMmI2YzY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi50ZXh0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1ZTY3ODg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1NTVmODE7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgwODdhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2Vjb25kLWNvbHVtbiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBcbiAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDk5ZW07XG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDk5ZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvdGVtcGxhdGUvYWJvdXQvYWtoaWwtcGFybWFyLmpwZycpO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2Q0ZTdmZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTRjNzM7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODA4N2ExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIjYWJvdXQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmZiA0NC40NCUsICNkNGU3ZmUgNDQuNDQlLCAjZDRlN2ZlIDAlLCAjZmZmIDAlLCAjZmZmIDk0LjQ0JSwgI2Q0ZTdmZSA5NC40NCUsICNkNGU3ZmUgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMjIwcHg7XG59XG5cbi5hYm91dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgd2lkdGg6IDg1dnc7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDJlbTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG59XG4uYWJvdXQtY29udGFpbmVyIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4ge1xuICBmbGV4LWdyb3c6IDI7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gaDEge1xuICBjb2xvcjogIzdkN2Q3ZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gaDIge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBtYXJnaW46IDVweCAwIDAgMDtcbn1cbi5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM3ZDdkN2Q7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gcC55ZWFycy1vbGQge1xuICBjb2xvcjogI2IyYjZjNjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gcC50ZXh0IHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNWU2Nzg4O1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cbi5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICM1NTVmODE7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIC5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICM4MDg3YTE7XG59XG4uYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0NTBweDtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5OWVtO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDk5ZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5ZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZW1wbGF0ZS9hYm91dC9ha2hpbC1wYXJtYXIuanBnXCIpO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZDRlN2ZlO1xufVxuLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAuc29jaWFsLW1lZGlhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4uYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGNvbG9yOiAjNDE0YzczO1xuICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5zb2NpYWwtbWVkaWEgLmljb246aG92ZXIge1xuICBjb2xvcjogIzgwODdhMTtcbn0iXX0= */", "@media screen and (max-width: 1280px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 380px;\n    height: 380px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 370px;\n    height: 370px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n\n  .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .first-column[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .second-column[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    margin-top: 2em;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 360px;\n    -ms-flex-item-align: center;\n        align-self: center;\n  }\n}\n@media screen and (max-width: 880px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1350px;\n  }\n\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-right: 0;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 340px;\n    height: 340px;\n  }\n}\n@media screen and (max-width: 600px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1600px;\n  }\n\n  .about-container[_ngcontent-%COMP%] {\n    width: 75vw;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 0.5em;\n  }\n}\n@media screen and (max-width: 460px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin: 10px;\n  }\n\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 370px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    padding: 15px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 240px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1E7SUFDSSxlQUFBO0VDRFY7RURJTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDRlY7QUFDRjtBRE1BO0VBRUk7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ0xOO0FBQ0Y7QURRQTtFQUVJO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO1FBQUEsZUFBQTtFQ1BOOztFRFlNO0lBQ0ksZUFBQTtFQ1RWO0VEWU07SUFDSSxlQUFBO0VDVlY7RURhTTtJQUNJLGVBQUE7RUNYVjtFRGNNO0lBQ0ksa0JBQUE7RUNaVjs7RURnQkU7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSwwQkFBQTtRQUFBLHNCQUFBO0lBQ0EsZUFBQTtFQ2JOO0VEZU07SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDJCQUFBO1FBQUEsa0JBQUE7RUNiVjtBQUNGO0FEaUJBO0VBRUk7SUFDSSw0QkFBQTtFQ2hCTjs7RUR1QlU7SUFDSSxlQUFBO0VDcEJkO0VEdUJVO0lBQ0ksWUFBQTtFQ3JCZDtFRHdCVTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VDdEJkO0VEMEJNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUN4QlY7QUFDRjtBRDRCQTtFQUVJO0lBQ0ksNEJBQUE7RUMzQk47O0VEOEJFO0lBQ0ksV0FBQTtFQzNCTjtFRCtCVTtJQUNJLGVBQUE7RUM3QmQ7RURnQ1U7SUFDSSxhQUFBO0VDOUJkO0FBQ0Y7QURtQ0E7RUFNWTtJQUNJLGVBQUE7RUN0Q2Q7RUR5Q1U7SUFDSSxlQUFBO0VDdkNkO0VENENjO0lBQ0ksZUFBQTtFQzFDbEI7RUQ2Q2M7SUFDSSxlQUFBO0VDM0NsQjtFRCtDVTtJQUNJLGVBQUE7SUFDQSxZQUFBO0VDN0NkOztFRG9ETTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDakRWO0VEbURVO0lBQ0ksZUFBQTtFQ2pEZDtBQUNGO0FEc0RBO0VBRUk7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ3JETjtBQUNGO0FEd0RBO0VBRUk7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ3ZETjtFRDJEVTtJQUNJLGVBQUE7RUN6RGQ7RUQrRFU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQzdEZDtFRGdFVTtJQUNJLGVBQUE7RUM5RGQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIC5maXJzdC1jb2x1bW4gcC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgXG4gICAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDM3MHB4O1xuICAgICAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAuZmlyc3QtY29sdW1uIHtcbiAgICAgICAgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAueWVhcnMtb2xkIHsgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaG9iYmllcyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Vjb25kLWNvbHVtbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcblxuICAgICAgICAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzYwcHg7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG5cbiAgICAjYWJvdXQge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTM1MHB4O1xuICAgIH1cblxuICAgIC5hYm91dC1jb250YWluZXIge1xuXG4gICAgICAgIC5maXJzdC1jb2x1bW4ge1xuICAgIFxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5pY29uIHsgXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcC50ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDM0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNDBweDtcbiAgICAgICAgfSAgICBcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAjYWJvdXQge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTYwMHB4O1xuICAgIH1cblxuICAgIC5hYm91dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNzV2dztcbiAgICAgICAgXG4gICAgICAgIC5maXJzdC1jb2x1bW4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gICAgXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmZpcnN0LWNvbHVtbiB7XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuXG4gICAgICAgICAgICAgICAgJi55ZWFycy1vbGQgeyAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYudGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlY29uZC1jb2x1bW4ge1xuXG4gICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcblxuICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuXG4gICAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcblxuICAgIC5hYm91dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgICAuZmlyc3QtY29sdW1uIHtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmQtY29sdW1uIHtcbiAgICBcbiAgICAgICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIHAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIGhlaWdodDogMzgwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgIHdpZHRoOiAzNzBweDtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuZmlyc3QtY29sdW1uIGgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmZpcnN0LWNvbHVtbiBoMiB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5maXJzdC1jb2x1bW4gcC55ZWFycy1vbGQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZmlyc3QtY29sdW1uIC5ob2JiaWVzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2Vjb25kLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgfVxuICAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgaGVpZ2h0OiAzNjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG4gICNhYm91dCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEzNTBweDtcbiAgfVxuXG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBoMiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiAuaWNvbiB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBwLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2Fib3V0IHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTYwMHB4O1xuICB9XG5cbiAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1dnc7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIGgyIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIC5pY29uIHtcbiAgICBtYXJnaW46IDAuNWVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gaDEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gcC55ZWFycy1vbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gcC50ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIC5pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG5cbiAgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogMjgwcHg7XG4gIH1cbiAgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5hYm91dC1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-about",
                templateUrl: "./about.component.html",
                styleUrls: ["./about.component.scss", "./about.component.responsivity.scss"]
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");





// Any URL apart from the root domain is going to be rendered as "page-not-found".
const routes = [
    { path: "", component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"] },
    { path: "about", redirectTo: "/#about" },
    { path: "experience", redirectTo: "/#experience" },
    { path: "experiences", redirectTo: "/#experience" },
    { path: "posts", redirectTo: "/#posts" },
    { path: "projects", redirectTo: "/#projects" },
    { path: "contact", redirectTo: "/#contact" },
    { path: "**", redirectTo: "/page-not-found" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                // In order to get anchor / fragment scrolling to work at all, we need to
                // enable it on the router.
                anchorScrolling: "enabled",
                // Once the above is enabled, the fragment link will only work on the
                // first click. This is because, by default, the Router ignores requests
                // to navigate to the SAME URL that is currently rendered. Unfortunately,
                // the fragment scrolling is powered by Navigation Events. As such, we
                // have to tell the Router to re-trigger the Navigation Events even if we
                // are navigating to the same URL.
                onSameUrlNavigation: "reload"
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        // In order to get anchor / fragment scrolling to work at all, we need to
                        // enable it on the router.
                        anchorScrolling: "enabled",
                        // Once the above is enabled, the fragment link will only work on the
                        // first click. This is because, by default, the Router ignores requests
                        // to navigate to the SAME URL that is currently rendered. Unfortunately,
                        // the fragment scrolling is powered by Navigation Events. As such, we
                        // have to tell the Router to re-trigger the Navigation Events even if we
                        // are navigating to the same URL.
                        onSameUrlNavigation: "reload"
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = "Akhil Parmar";
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
        this.metaTagService.addTags([
            { name: "keywords", content: "Software developer, Web Developer, Java Developer, Full-stack Java Developer,Automation developer,Camunda Developer, Akhil Parmar, Akhil Parmar website, Akhil Parmar CV" },
            { name: "robots", content: "index, follow" },
            { name: "author", content: "Akhil Parmar" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "date", content: "2020-05-12", scheme: "YYYY-MM-DD" },
            { charset: "UTF-8" }
        ]);
        this.metaTagService.updateTag({ name: "description", content: "Hello, I'm a Full-stack Java Web Developer with 2 years of experience developing automation tools using java, angular and camunda" });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.module */ "./src/app/resume/resume.module.ts");
/* harmony import */ var _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./404/page-not-found-routing.module */ "./src/app/404/page-not-found-routing.module.ts");
/* harmony import */ var _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./404/page-not-found.module */ "./src/app/404/page-not-found.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/extra/pt */ "./node_modules/@angular/common/locales/extra/pt.js");
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/analytics */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



















Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default.a, "en");
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default.a, "pt-BR", _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"],
            _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"],
            _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_15__["AngularFireAnalyticsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"],
        _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"],
        _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_15__["AngularFireAnalyticsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                    _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"],
                    _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"],
                    _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_15__["AngularFireAnalyticsModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"]
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact/contact.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_1 = goog.getMsg("Thank you for contacting me, I'll reply to you very soon. Feel free to contact me on linkedin");
    I18N_0 = MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:contact@@successfulSubmit␟e1b567a2a5c8a5638dc32f7d7d4908d0d0475bee␟720299982185292840:Thank you for contacting me, I'll reply to you very soon. Feel free to contact me on linkedin`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_3 = goog.getMsg("Sorry, there is an instability, please try again later, or contact me via email or social media.");
    I18N_2 = MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:contact@@errorSubmit␟0076090b82b5109b30c69caa370c4374fb951854␟1856027775128674946:Sorry, there is an instability, please try again later, or contact me via email or social media.`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_contact$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_5 = goog.getMsg("Contact");
    I18N_4 = MSG_EXTERNAL_contact$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize `:nav@@contact␟34746fb1c7f3d2194d99652bdff89e6e14c9c4f4␟7922989125096435449:Contact`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_name$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_7 = goog.getMsg("Your name:");
    I18N_6 = MSG_EXTERNAL_name$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize `:contact@@name␟78235c38d8f083b2e3b27c168b92fc389f22d5ea␟7961815355441875063:Your name:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_9 = goog.getMsg("Max");
    I18N_8 = MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize `:contact@@namePlaceholder␟c3ced4d162a0a55ee233a187ce7208ba5e922418␟3667949571823271511:Max`;
}
const _c10 = ["placeholder", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_email$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_12 = goog.getMsg("Email:");
    I18N_11 = MSG_EXTERNAL_email$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_12;
}
else {
    I18N_11 = $localize `:contact@@email␟91b96d7228b6e05c238fa4e39abfc17ad51a6eef␟6631334172623029500:Email:`;
}
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_14 = goog.getMsg("max@gmail.com");
    I18N_13 = MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_14;
}
else {
    I18N_13 = $localize `:contact@@emailPlaceholder␟669217f99a1df8557fec0cdcf273fff81ebcabd1␟7835046795596290486:max@gmail.com`;
}
const _c15 = ["placeholder", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_message$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_17 = goog.getMsg("Your message:");
    I18N_16 = MSG_EXTERNAL_message$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_17;
}
else {
    I18N_16 = $localize `:contact@@message␟38b9c0422f08a662cb5cf4e2c3b7b006dc19ca46␟7108908926006173610:Your message:`;
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_19 = goog.getMsg("Write here your message... I will reply to you soon.");
    I18N_18 = MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_19;
}
else {
    I18N_18 = $localize `:contact@@messagePlaceholder␟5dbab65c47e2519c192302f4cd631f8f763d32a0␟4695044849168425148:Write here your message... I will reply to you soon.`;
}
const _c20 = ["placeholder", I18N_18];
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_send$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_22 = goog.getMsg("Send");
    I18N_21 = MSG_EXTERNAL_send$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_22;
}
else {
    I18N_21 = $localize `:contact@@send␟2c5ff8fa9c9aaec93f97e37c9a0edcd797194573␟6490688569532630280:Send`;
}
const _c23 = ["value", I18N_21];
function ContactComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.name);
} }
function ContactComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faMapMarkerAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.location);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___25 = goog.getMsg("The name is required.");
    I18N_24 = MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:contact@@requiredNameError␟84dd68358deff2c306c9e1f1e1ea36ac1399187f␟2251827586065267500:The name is required.`;
}
function ContactComponent_div_29_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___27 = goog.getMsg("Please, provide a valid name.");
    I18N_26 = MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___27;
}
else {
    I18N_26 = $localize `:contact@@invalidNameError␟563120cc8523ffbb5f3bdf377adae708bcfc7782␟8310581068201003485:Please, provide a valid name.`;
}
function ContactComponent_div_29_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_29_small_1_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_29_small_2_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.senderName.errors == null ? null : ctx_r9.senderName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.senderName.errors == null ? null : ctx_r9.senderName.errors.pattern);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___29 = goog.getMsg("The email is required.");
    I18N_28 = MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___29;
}
else {
    I18N_28 = $localize `:contact@@requiredEmailError␟02e28ad299c02273b0031dd65a1facf425b771c3␟6618823522652189267:The email is required.`;
}
function ContactComponent_div_35_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___31 = goog.getMsg("Please, provide a valid email address.");
    I18N_30 = MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___31;
}
else {
    I18N_30 = $localize `:contact@@invalidEmailError␟18ede2f6adb0ef80114915c53dca42cb0c6a986f␟3304023609309135379:Please, provide a valid email address.`;
}
function ContactComponent_div_35_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_35_small_1_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_35_small_2_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.senderEmail.errors == null ? null : ctx_r10.senderEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.senderEmail.errors == null ? null : ctx_r10.senderEmail.errors.pattern);
} }
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___33 = goog.getMsg("The message is required.");
    I18N_32 = MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___33;
}
else {
    I18N_32 = $localize `:contact@@requiredMessageError␟24552e065fcea281bd42c77a67fb5932a27edbdf␟1849854291408426034:The message is required.`;
}
function ContactComponent_div_41_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_41_small_1_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.senderMessage.errors == null ? null : ctx_r11.senderMessage.errors.required);
} }
const _c34 = function (a0) { return { "fade": a0 }; };
const _c35 = function (a0) { return { "loading": a0 }; };
class ContactComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.isLoading = false;
        this.hasBeenSubmited = false;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-zÀ-ú ]*")
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    }
    get senderEmail() {
        return this.contactForm.get("email");
    }
    get senderName() {
        return this.contactForm.get("name");
    }
    get senderMessage() {
        return this.contactForm.get("message");
    }
    get options() {
        return this.contactForm.get("options");
    }
    ngOnInit() {
        this.name = "Akhil Parmar";
        this.email = "akhilparmar2496@gmail.com";
        // this.phone = "+919898266637";
        this.location = "India";
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkerAlt"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
    }
    saveContact(contact) {
        this.contactService.createContact(contact).then(() => {
            this.displayUserInterfaceMessage(true);
        })
            .catch(error => {
            this.displayUserInterfaceMessage(false);
        });
    }
    displayUserInterfaceMessage(hasBeenSuccessfuly) {
        this.isLoading = false;
        this.hasBeenSubmited = true;
        this.feedbackStatus = hasBeenSuccessfuly ? "success" : "error";
        this.contactForm.reset();
    }
    closeFeedbackMessage() {
        this.hasBeenSubmited = false;
        this.feedbackStatus = "";
    }
    onSubmit(contactForm) {
        this.isLoading = true;
        const contactValues = {
            name: this.senderName.value,
            email: this.senderEmail.value,
            message: this.senderMessage.value,
            date: new Date()
        };
        this.saveContact(contactValues);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 47, vars: 21, consts: [["id", "contact", "itemscope", "", "itemtype", "https://schema.org/ContactPage"], [1, "feedback-container", 3, "ngClass"], [1, "success"], ["title", "Close", 1, "icon", 3, "icon", "click"], [1, "error"], [1, "container", 3, "ngClass"], [1, "left-side"], [1, "title"], [1, "top-container"], [1, "picture"], [1, "info"], ["class", "name", 4, "ngIf"], ["class", "location", 4, "ngIf"], [1, "bottom-container"], [3, "formGroup", "ngClass", "ngSubmit"], ["contactNgForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "formControlName", "name", 6, "placeholder"], ["class", "warnings", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "formControlName", "email", "required", "", 6, "placeholder"], ["for", "message"], ["name", "message", "formControlName", "message", "required", "", 6, "placeholder"], ["type", "submit", 6, "value"], [1, "right-side"], ["loading", "lazy", "height", "705", "src", "./assets/template/contact/akhil.png", "alt", "illustration of akhil", "itemprop", "avatar", 1, "illustration"], [1, "half-circle"], [1, "name"], ["itemprop", "name"], [1, "location"], ["title", "City", 1, "icon", 3, "icon"], ["itemprop", "city"], [1, "warnings"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_fa_icon_click_5_listener() { return ctx.closeFeedbackMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_fa_icon_click_9_listener() { return ctx.closeFeedbackMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactComponent_p_19_Template, 3, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactComponent_p_20_Template, 4, 2, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.onSubmit(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](26, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](28, _c10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ContactComponent_div_29_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](32, I18N_11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](34, _c15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ContactComponent_div_35_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](38, I18N_16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](40, _c20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ContactComponent_div_41_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](43, _c23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.feedbackStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c34, ctx.hasBeenSubmited));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c35, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.senderName.invalid && ctx.senderName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.senderName.invalid && ctx.senderName.touched || ctx.senderName.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.senderEmail.invalid && ctx.senderEmail.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.senderEmail.invalid && ctx.senderEmail.touched || ctx.senderEmail.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.senderMessage.invalid && ctx.senderMessage.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.senderMessage.invalid && ctx.senderMessage.touched || ctx.senderMessage.dirty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["#contact[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #d4e7fe;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  padding: 1em;\n  border-radius: 15px;\n  z-index: 3;\n  top: 50%;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  margin: 0 1em;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  font-size: 22px;\n  top: 2px;\n  position: relative;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #656565;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: none;\n  color: #77242c;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: none;\n  color: #373837;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #c4e4c6;\n  border: 1px solid #cecece;\n  -webkit-animation: fadeIn 1s;\n  animation: fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #e6adb2;\n  border: 1px solid #d49399;\n  -webkit-animation: fadeIn 1s;\n  animation: fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 105%;\n  bottom: -1em;\n  right: 0;\n  z-index: 1;\n}\n#contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 450px;\n  background-color: #c1d5ee;\n  border-top-left-radius: 100%;\n  border: 0;\n  border-right: 0;\n  border-bottom: 0;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: -1em;\n  right: 0;\n  z-index: 0;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  width: 85vw;\n  max-width: 1400px;\n  opacity: 1;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n  z-index: 2;\n  margin-bottom: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n}\n@media screen and (min-width: 192px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    display: block;\n    width: 10px;\n    height: 110px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    border-radius: 49em;\n    background-image: url('akhil-parmar-contact.jpg');\n    border: 1px solid #d4e7fe;\n    margin-right: 1em;\n  }\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 110px;\n  height: 110px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 79em;\n  background-image: url('akhil-parmar-contact.jpg');\n  border: 1px solid #d4e7fe;\n  margin-right: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #646d8d;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #646d8d;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222f5c;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n  margin-top: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 1em;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .warnings[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #222f5c;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background-color: #70c576;\n  font-size: 22px;\n  color: #fff;\n  padding: 1em;\n  border: 0;\n  border-radius: 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  color: #2c612f;\n  background-color: #68bd6e;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.ng-invalid[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  -ms-flex-positive: 6;\n      flex-grow: 6;\n}\n#contact[_ngcontent-%COMP%]   .container.fade[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-animation: fadeOut 1s;\n  animation: fadeOut 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsK0NBQUE7RUFDQSxhQUFBO0FDQ1I7QURDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDWjtBRENZO0VBQ0ksY0FBQTtBQ0NoQjtBREdRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDRFo7QURJUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDRlo7QURLUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDSFo7QURNUTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0paO0FETVk7RUFDSSxlQUFBO0FDSmhCO0FET1E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNMWjtBRE9ZO0VBQ0ksZUFBQTtBQ0xoQjtBRFVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDUlI7QURXSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDVFI7QURZSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDVlI7QURZUTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ1ZaO0FEY2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1pwQjtBRGdCWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7QUNkaEI7QURlZ0I7RUFDSTtJQUNJLGNBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsNEJBQUE7SUFDQSxrQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsaURBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0VDYnRCO0FBQ0Y7QURlZ0I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ2JwQjtBRGtCb0I7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNoQnhCO0FEbUJvQjtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ2pCeEI7QURvQm9CO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNsQnhCO0FEcUJvQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDbkJ4QjtBRHdCWTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDdEJoQjtBRHdCZ0I7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQkFBQTtNQUFBLHNCQUFBO0FDdEJwQjtBRHdCb0I7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7QUN0QnhCO0FEMEI0QjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ3hCaEM7QUQ2Qm9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUMzQnhCO0FEOEJvQjtFQUNJLHFDQUFBO0FDNUJ4QjtBRCtCb0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDN0J4QjtBRCtCd0I7RUFDSSxxQkFBQTtBQzdCNUI7QURpQ29CO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQy9CeEI7QURpQ3dCO0VBQ0kscUJBQUE7QUMvQjVCO0FEa0N3QjtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ2hDNUI7QURvQ29CO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FDbEN4QjtBRHFDb0I7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUNuQ3hCO0FEd0N3QjtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUN0QzVCO0FENkNRO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0FDM0NaO0FEOENRO0VBQ0ksb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQzVDWjtBRGlEQTtFQUNJO0lBQU8sVUFBQTtFQzdDVDtFRDhDRTtJQUFLLFVBQUE7RUMzQ1A7QUFDRjtBRHdDQTtFQUNJO0lBQU8sVUFBQTtFQzdDVDtFRDhDRTtJQUFLLFVBQUE7RUMzQ1A7QUFDRjtBRDZDQTtFQUNJO0lBQU8sVUFBQTtFQzFDVDtFRDJDRTtJQUFLLFlBQUE7RUN4Q1A7QUFDRjtBRHFDQTtFQUNJO0lBQU8sVUFBQTtFQzFDVDtFRDJDRTtJQUFLLFlBQUE7RUN4Q1A7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0IHtcbiAgICB0b3A6IC00ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGU3ZmU7XG5cbiAgICAuZmVlZGJhY2stY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY1NjU2NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzc3MjQyYztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWNjZXNzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzM3MzgzNztcbiAgICAgICAgfVxuXG4gICAgICAgICYuc3VjY2VzcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGU0YzY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xuXG4gICAgICAgICAgICAuc3VjY2VzcyB7IFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmVycm9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2YWRiMjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNDkzOTk7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG5cbiAgICAgICAgICAgIC5lcnJvciB7IFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTA1JTtcbiAgICAgICAgYm90dG9tOiAtMWVtO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuaGFsZi1jaXJjbGUge1xuICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWQ1ZWU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwOyAgICAgICAgXG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTFlbTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiA4NXZ3O1xuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MnB4KXtcbiAgICAgICAgICAgICAgICAgICAgLnBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0OWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvdGVtcGxhdGUvYWJvdXQvYWtoaWwtcGFybWFyLWNvbnRhY3QuanBnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRlN2ZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3OWVtO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy90ZW1wbGF0ZS9hYm91dC9ha2hpbC1wYXJtYXItY29udGFjdC5qcGcnKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZTdmZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY0NmQ4ZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjQ2ZDhkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC53YXJuaW5ncyB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODQ4NDg0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBjNTc2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmM2MTJmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2OGJkNmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICYubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiA2O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICYuZmFkZSB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0IDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIGZyb20geyBvcGFjaXR5OiAxOyB9XG4gICAgdG8geyBvcGFjaXR5OiAwLjM7IH1cbn0iLCIjY29udGFjdCB7XG4gIHRvcDogLTRlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZTdmZTtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICBtYXJnaW46IDAgMWVtO1xufVxuI2NvbnRhY3QgLmZlZWRiYWNrLWNvbnRhaW5lciAuaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRvcDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIgLmljb246aG92ZXIge1xuICBjb2xvcjogIzY1NjU2NTtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI2NvbnRhY3QgLmZlZWRiYWNrLWNvbnRhaW5lciAuZXJyb3Ige1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogIzc3MjQyYztcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIgLnN1Y2Nlc3Mge1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogIzM3MzgzNztcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIuc3VjY2VzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRlNGM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xuICBhbmltYXRpb246IGZhZGVJbiAxcztcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIuc3VjY2VzcyAuc3VjY2VzcyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIuZXJyb3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2YWRiMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0OTM5OTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG59XG4jY29udGFjdCAuZmVlZGJhY2stY29udGFpbmVyLmVycm9yIC5lcnJvciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiNjb250YWN0IC5pbGx1c3RyYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTA1JTtcbiAgYm90dG9tOiAtMWVtO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbn1cbiNjb250YWN0IC5oYWxmLWNpcmNsZSB7XG4gIHdpZHRoOiA1NTBweDtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxZDVlZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFlbTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG4jY29udGFjdCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDg1dnc7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIHtcbiAgZmxleC1ncm93OiA0O1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICBwYWRkaW5nOiAxZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTJweCkge1xuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLnBpY3R1cmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNDllbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVtcGxhdGUvYWJvdXQvYWtoaWwtcGFybWFyLWNvbnRhY3QuanBnXCIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGU3ZmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAucGljdHVyZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDc5ZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZW1wbGF0ZS9hYm91dC9ha2hpbC1wYXJtYXItY29udGFjdC5qcGdcIik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGU3ZmU7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIC5pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY0NmQ4ZDtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyBwIHtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gIGNvbG9yOiAjNjQ2ZDhkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMjJmNWM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSAuZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIC5mb3JtLWdyb3VwIC53YXJuaW5ncyBzbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogcmVkO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXQge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBjb2xvcjogIzg0ODQ4NDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT10ZXh0XS5pcy1pbnZhbGlkLCAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXS5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwYzU3NjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9c3VibWl0XS5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgY29sb3I6ICMyYzYxMmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OGJkNmU7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSB0ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBjb2xvcjogIzg0ODQ4NDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybS5sb2FkaW5nIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtLm5nLWludmFsaWQgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAucmlnaHQtc2lkZSB7XG4gIGZsZXgtZ3JvdzogNjtcbn1cbiNjb250YWN0IC5jb250YWluZXIuZmFkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAxcztcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IDFzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn0iXX0= */", "@media screen and (max-width: 1400px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 3;\n        flex-grow: 3;\n  }\n}\n@media screen and (max-width: 1280px) {\n  #contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 0;\n        flex-grow: 0;\n  }\n}\n@media screen and (max-width: 600px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 0.7em;\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 420px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 370px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJUTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtFQ0ZWO0VES007SUFDSSxvQkFBQTtRQUFBLFlBQUE7RUNIVjtBQUNGO0FET0E7RUFJUTtJQUNHLGFBQUE7RUNSVDtFRFdNO0lBQ0ksYUFBQTtFQ1RWO0VEY1U7SUFDSSxvQkFBQTtRQUFBLFlBQUE7RUNaZDtFRGVVO0lBQ0ksb0JBQUE7UUFBQSxZQUFBO0VDYmQ7QUFDRjtBRG1CQTtFQU1ZO0lBQ0ksZUFBQTtFQ3RCZDtFRHlCVTtJQUNJLG1CQUFBO1FBQUEsZUFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtRQUFBLHVCQUFBO0VDdkJkO0VEeUJjO0lBQ0ksYUFBQTtFQ3ZCbEI7RUQ0QmtCO0lBQ0ksZUFBQTtFQzFCdEI7RUQ2QmtCO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDM0J0QjtFRGdDVTtJQUNJLGNBQUE7RUM5QmQ7RURrQ2tCO0lBQ0ksb0JBQUE7RUNoQ3RCO0VEbUNrQjtJQUNJLGVBQUE7RUNqQ3RCO0VEb0NrQjtJQUNJLGVBQUE7RUNsQ3RCO0VEb0NzQjtJQUNJLHFCQUFBO0VDbEMxQjtFRHNDa0I7SUFDSSxlQUFBO0VDcEN0QjtFRHNDc0I7SUFDSSxxQkFBQTtFQ3BDMUI7RUR3Q2tCO0lBQ0ksZUFBQTtFQ3RDdEI7QUFDRjtBRDhDQTtFQU1ZO0lBQ0ksY0FBQTtFQ2pEZDtFRHFEa0I7SUFDSSxlQUFBO0VDbkR0QjtFRHNEa0I7SUFDSSxlQUFBO0VDcER0QjtFRHlEVTtJQUNJLGNBQUE7RUN2RGQ7RUQyRGtCO0lBQ0ksb0JBQUE7RUN6RHRCO0VENERrQjtJQUNJLGVBQUE7RUMxRHRCO0VENkRrQjtJQUNJLGVBQUE7RUMzRHRCO0VEOERrQjtJQUNJLGVBQUE7RUM1RHRCO0VEK0RrQjtJQUNJLGVBQUE7RUM3RHRCO0FBQ0Y7QURvRUE7RUFVb0I7SUFDSSxlQUFBO0VDM0V0QjtFRDhFa0I7SUFDSSxlQUFBO0VDNUV0QjtFRGlGVTtJQUNJLGNBQUE7RUMvRWQ7RURrRmtCO0lBQ0ksZUFBQTtFQ2hGdEI7RURtRmtCO0lBQ0ksZUFBQTtFQ2pGdEI7RURvRmtCO0lBQ0ksZUFBQTtFQ2xGdEI7RURxRmtCO0lBQ0ksZUFBQTtFQ25GdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAgICNjb250YWN0IC5jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuXG4gICAgI2NvbnRhY3Qge1xuICAgIFxuICAgICAgICAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuaGFsZi1jaXJjbGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAjY29udGFjdCAuY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAgICAgICAgICAgICAucGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW07XG5cbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcblxuICAgICNjb250YWN0IC5jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuXG4gICAgI2NvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgICAgIFxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgIFxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgXG4gICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAucmlnaHQtc2lkZSB7XG4gICAgZmxleC1ncm93OiAzO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgI2NvbnRhY3QgLmlsbHVzdHJhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjY29udGFjdCAuaGFsZi1jaXJjbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAucmlnaHQtc2lkZSB7XG4gICAgZmxleC1ncm93OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5waWN0dXJlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIC5uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC43ZW07XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXRleHRdLmlzLWludmFsaWQsICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9ZW1haWxdLmlzLWludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0uaXMtaW52YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLmluZm8gLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9dGV4dF0sICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLmluZm8gLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-contact",
                templateUrl: "./contact.component.html",
                styleUrls: ["./contact.component.scss", "./contact.component.responsivity.scss"]
            }]
    }], function () { return [{ type: _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/*!********************************************!*\
  !*** ./src/app/contact/contact.service.ts ***!
  \********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class ContactService {
    constructor(database) {
        this.database = database;
    }
    createContact(contact) {
        return this.database.collection("contacts").add(contact);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _sorter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sorter.service */ "./src/app/core/sorter.service.ts");
/* harmony import */ var _pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");
/* harmony import */ var _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/on-viewport.directive */ "./src/app/core/directive/on-viewport.directive.ts");
/* harmony import */ var _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/ellipsis.pipe */ "./src/app/core/pipe/ellipsis.pipe.ts");










class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _sorter_service__WEBPACK_IMPORTED_MODULE_3__["SorterService"]], imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
                declarations: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _sorter_service__WEBPACK_IMPORTED_MODULE_3__["SorterService"]],
                exports: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "assets/data/";
    }
    getExperiences() {
        return this.http.get(this.baseUrl + "experiences.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getAbout() {
        return this.http.get(this.baseUrl + "about.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPosts() {
        return this.http.get(this.baseUrl + "posts.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getProjects() {
        return this.http.get(this.baseUrl + "projects.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error("server error:", error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || "backend server error");
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || "Node.js server error");
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/directive/internationalization.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/directive/internationalization.directive.ts ***!
  \******************************************************************/
/*! exports provided: InternationalizationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternationalizationDirective", function() { return InternationalizationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipe/ellipsis.pipe */ "./src/app/core/pipe/ellipsis.pipe.ts");




class InternationalizationDirective {
    constructor(el, locale) {
        this.el = el;
        this.locale = locale;
        this._data = [];
    }
    get data() {
        return this._data;
    }
    set data(value) {
        if (value) {
            this._data = value;
            this.el.nativeElement.innerHTML = this.retrievePropertyValueByLocation();
        }
    }
    ngOnInit() { }
    retrievePropertyValueByLocation() {
        if (this._data) {
            const value = this._data
                .filter(element => element.language === ("en"))
                .map(element => element[this.property]) || [""];
            return this.ellipsis > 0 ? new _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_1__["EllipsisPipe"]().transform(value[0], this.ellipsis) : value;
        }
    }
}
InternationalizationDirective.ɵfac = function InternationalizationDirective_Factory(t) { return new (t || InternationalizationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
InternationalizationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InternationalizationDirective, selectors: [["", "internationalization", ""]], inputs: { property: "property", data: "data", ellipsis: "ellipsis" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternationalizationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: "[internationalization]" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { property: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ellipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/directive/on-viewport.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/directive/on-viewport.directive.ts ***!
  \*********************************************************/
/*! exports provided: InViewportDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InViewportDirective", function() { return InViewportDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InViewportDirective {
    constructor(_el) {
        this._el = _el;
        this.inViewport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges() {
        this.check();
    }
    ngOnInit() { }
    check(partial = true) {
        const el = this._el.nativeElement;
        const elSize = (el.offsetWidth * el.offsetHeight);
        const rec = el.getBoundingClientRect();
        const vp = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const sectionMarging = 370;
        const tViz = rec.top >= 0 && rec.top < (vp.height - sectionMarging);
        const bViz = rec.bottom > 0 && rec.bottom <= (vp.height - sectionMarging);
        const vVisible = partial ? tViz || bViz : tViz && bViz;
        let event = {
            target: el,
            value: false
        };
        event["value"] = (elSize && vVisible);
        if (event["value"]) {
            this.inViewport.emit(event);
        }
    }
}
InViewportDirective.ɵfac = function InViewportDirective_Factory(t) { return new (t || InViewportDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
InViewportDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InViewportDirective, selectors: [["", "in-viewport", ""]], inputs: { pageYOffset: "pageYOffset" }, outputs: { inViewport: "inViewport" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InViewportDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[in-viewport]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { pageYOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["pageYOffset"]
        }], inViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["inViewport"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/pipe/ellipsis.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/core/pipe/ellipsis.pipe.ts ***!
  \********************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EllipsisPipe {
    transform(val, args = 60) {
        if (val.length > args) {
            return val.substring(0, args) + "...";
        }
        return val;
    }
}
EllipsisPipe.ɵfac = function EllipsisPipe_Factory(t) { return new (t || EllipsisPipe)(); };
EllipsisPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ellipsis", type: EllipsisPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EllipsisPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "ellipsis"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pipe/localized-date.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/core/pipe/localized-date.pipe.ts ***!
  \**************************************************/
/*! exports provided: LocalizedDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedDatePipe", function() { return LocalizedDatePipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class LocalizedDatePipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(value, pattern = "mediumDate") {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](this.locale);
        // For now, the translation will be manual, further on, the i18n service will be injected to provide such capability...
        // decide language. TODO fix language issue
        return datePipe.transform(value, pattern) || (this.locale === "en" ? "Currently" : "Currenly");
    }
}
LocalizedDatePipe.ɵfac = function LocalizedDatePipe_Factory(t) { return new (t || LocalizedDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
LocalizedDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "localizedDate", type: LocalizedDatePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalizedDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: "localizedDate",
                pure: false
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pipe/safari-date-formatter.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/pipe/safari-date-formatter.pipe.ts ***!
  \*********************************************************/
/*! exports provided: SafariDateFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafariDateFormatterPipe", function() { return SafariDateFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * In order to make the Safari and IE understand the date format to be used in the 'date' pipe it is
 * necessary to replace '-' by '/'.
*/


class SafariDateFormatterPipe {
    transform(value) {
        if (value) {
            return value.replace(/-/g, '/');
        }
        return value;
    }
}
SafariDateFormatterPipe.ɵfac = function SafariDateFormatterPipe_Factory(t) { return new (t || SafariDateFormatterPipe)(); };
SafariDateFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safariDateFormatter", type: SafariDateFormatterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafariDateFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: "safariDateFormatter" }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/sorter.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/sorter.service.ts ***!
  \****************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SorterService {
    constructor() {
        this.property = null;
        this.direction = 1;
    }
    sort(key, order = "asc") {
        return (a, b) => {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }
            const varA = (typeof a[key] === "string")
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === "string")
                ? b[key].toUpperCase() : b[key];
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            }
            else if (varA < varB) {
                comparison = -1;
            }
            return ((order === "desc") ? (comparison * -1) : comparison);
        };
    }
}
SorterService.ɵfac = function SorterService_Factory(t) { return new (t || SorterService)(); };
SorterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SorterService, factory: SorterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SorterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/utils.ts":
/*!*******************************!*\
  !*** ./src/app/core/utils.ts ***!
  \*******************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(delay = 300) {
    let interval;
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            clearTimeout(interval);
            interval = setTimeout(() => {
                interval = null;
                original.apply(this, args);
            }, delay);
        };
        return interval;
    };
}


/***/ }),

/***/ "./src/app/experience/experience-timeline/experience-timeline.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/experience/experience-timeline/experience-timeline.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ExperienceTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceTimelineComponent", function() { return ExperienceTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");




const _c0 = ["line"];
class ExperienceTimelineComponent {
    constructor(elRef, renderer, locale) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.locale = locale;
        this._experiences = [];
        this.onTimelineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get currentPosition() {
        return this._currentPosition;
    }
    set currentPosition(value) {
        if (value) {
            this._currentPosition = value;
            this.updateTimelineNavigation();
        }
    }
    get experiences() {
        return this._experiences;
    }
    set experiences(value) {
        if (value) {
            this._experiences = value;
            this.populateExperienceTimeline();
        }
    }
    ngOnInit() {
        this.offsetWidth = this.elRef.nativeElement.offsetWidth;
        this.removeEventListener = this.renderer.listen(this.elRef.nativeElement, "click", (event) => {
            if (event.target && event.target.getAttribute("id-position")) {
                const targetId = event.target.getAttribute("id-position");
                this.onTimelineChanged.emit(targetId);
            }
        });
    }
    // Cleanup by removing the event listener on destroy
    ngOnDestroy() {
        this.removeEventListener();
    }
    updateTimelineNavigation() {
        const activePreviousElem = this.line.nativeElement.querySelector(".milestone.active.current");
        this.renderer.removeClass(activePreviousElem, "current");
        const targetElem = this.line.nativeElement.querySelector(`div[id-position="${this.currentPosition}"]`);
        this.renderer.addClass(targetElem, "current");
    }
    daysBetween(startDate, endDate) {
        // The .replace() is necessary in order to avoid issues in the Firefox browser.
        const pointA = new Date(startDate.replace(/-/g, '/'));
        const pointB = new Date(endDate.replace(/-/g, '/'));
        return Math.round(Math.abs(+pointA - +pointB) / 8.64e7);
    }
    retrieveTodayDateAsString() {
        const today = new Date();
        return `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
    }
    populateExperienceTimeline() {
        let dates = this._experiences.map(experience => experience.startAt);
        // Adding the current day in order to complete the timeline.
        dates.push(this.retrieveTodayDateAsString());
        if (dates && dates.length < 2) {
            this.renderer.setStyle(this.elRef.nativeElement, "visibility", "hidden");
        }
        else if (dates.length >= 2) {
            const daysBetween = this.daysBetween(dates[0], dates[dates.length - 1]);
            const oneDayInPixels = this.offsetWidth / daysBetween;
            // Draw first date milestone      
            this.renderer.appendChild(this.line.nativeElement, this.createMilestone(1, 0, dates[0]));
            let i;
            const lastFrameLoop = dates.length - 1;
            // Draw the middle date milestones
            for (i = 1; i < lastFrameLoop; i++) {
                const periodInDays = this.daysBetween(dates[0], dates[i]);
                const periodWidth = periodInDays * oneDayInPixels;
                const milestoneElement = this.createMilestone((i + 1), periodWidth, dates[i]);
                if (i == lastFrameLoop - 1) {
                    this.renderer.addClass(milestoneElement, "current");
                }
                this.renderer.appendChild(this.line.nativeElement, milestoneElement);
            }
            // Draw last date milestone ( the current frame )
            const lastDataMilestone = this.createCurrentTriangle(i + 1);
            this.renderer.appendChild(this.line.nativeElement, lastDataMilestone);
        }
    }
    calculatePosition(leftPosition, offsetWidth) {
        return (leftPosition * 100) / offsetWidth;
    }
    createMilestone(index, left, date) {
        const milestoneElement = this.renderer.createElement("div");
        this.renderer.addClass(milestoneElement, "milestone");
        this.renderer.addClass(milestoneElement, "active");
        const leftPos = this.calculatePosition(left, this.offsetWidth);
        // Uses at most 95% instead of 100% in order to avoid collision to the arrow icon on the right side of the timeline.
        this.renderer.setStyle(milestoneElement, "left", `${Math.min(95, leftPos)}%`);
        this.renderer.setAttribute(milestoneElement, "id-position", index.toString());
        const labelElement = this.createLabelElement(date.toString());
        this.renderer.appendChild(milestoneElement, labelElement);
        return milestoneElement;
    }
    createCurrentTriangle(index) {
        const milestoneElement = this.renderer.createElement("div");
        this.renderer.addClass(milestoneElement, "milestone");
        this.renderer.addClass(milestoneElement, "active");
        this.renderer.addClass(milestoneElement, "future");
        this.renderer.setStyle(milestoneElement, "left", "100%");
        return milestoneElement;
    }
    // Update this function based on the desired date label formatting.
    createLabelElement(date) {
        const safariDateFormatterPipe = new _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_1__["SafariDateFormatterPipe"]();
        const safariDateFormatterPipeValue = safariDateFormatterPipe.transform(date);
        const localizedDatePipe = new _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_2__["LocalizedDatePipe"](this.locale);
        let month = localizedDatePipe.transform(safariDateFormatterPipeValue, "MMM");
        const labelElement = this.renderer.createElement("div");
        this.renderer.addClass(labelElement, "popupSpan");
        const monthSpan = this.renderer.createElement("span");
        this.renderer.addClass(monthSpan, "month");
        this.renderer.appendChild(monthSpan, this.renderer.createText(month));
        const year = localizedDatePipe.transform(safariDateFormatterPipeValue, "yyyy");
        const yearSpan = this.renderer.createElement("span");
        this.renderer.addClass(yearSpan, "year");
        this.renderer.appendChild(yearSpan, this.renderer.createText(year));
        this.renderer.appendChild(labelElement, monthSpan);
        this.renderer.appendChild(labelElement, yearSpan);
        return labelElement; // year, E.g: May. 2020
    }
}
ExperienceTimelineComponent.ɵfac = function ExperienceTimelineComponent_Factory(t) { return new (t || ExperienceTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
ExperienceTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceTimelineComponent, selectors: [["app-experience-timeline"]], viewQuery: function ExperienceTimelineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.line = _t.first);
    } }, inputs: { currentPosition: "currentPosition", experiences: "experiences" }, outputs: { onTimelineChanged: "onTimelineChanged" }, decls: 5, vars: 0, consts: [[1, "bottom-container"], [1, "lineCont"], [1, "line"], ["line", ""], [1, "mainCont"]], template: function ExperienceTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bottom-container[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: -75px;\n}\n\n.mainCont[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  position: relative;\n  color: white;\n  font-size: 62px;\n  text-align: center;\n  transition: all 0.2s ease-out;\n}\n\n.lineCont[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n}\n\n.lineCont[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 5px;\n  margin: auto;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n  position: relative;\n}\n\n.milestone[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  border-radius: 15px;\n  position: absolute;\n  top: -6px;\n  border: 3px solid white;\n  cursor: pointer;\n  transition: text-shadow 0.3s linear;\n}\n\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding: 10px;\n  white-space: nowrap;\n  color: white;\n  position: absolute;\n  top: 20px;\n  left: -35px;\n  transition: all 0.1s ease-out;\n  pointer-events: none;\n  \n}\n\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  text-transform: capitalize;\n}\n\n.milestone.current[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background: #414c73;\n  top: -8px;\n  font-size: 22px;\n  text-shadow: 0 0 15px white;\n}\n\n.milestone.active[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  top: -40px;\n  display: block;\n}\n\n.milestone.active.future[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 1px;\n  border-top: 7px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 13px solid white;\n  background: transparent;\n  border-radius: 0;\n  border-right: 0;\n  pointer-events: none;\n}\n\n.milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  left: -50px;\n  top: -50px;\n}\n\n@-webkit-keyframes grow {\n  0% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n  50% {\n    -ms-transform: scale(0.99);\n    transform: scale(0.99);\n  }\n  100% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n}\n\n@keyframes grow {\n  0% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n  50% {\n    -ms-transform: scale(0.99);\n    transform: scale(0.99);\n  }\n  100% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS10aW1lbGluZS9leHBlcmllbmNlLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UtdGltZWxpbmUvZXhwZXJpZW5jZS10aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7TUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFBc0IsNkRBQUE7QUNDMUI7O0FEQ0k7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FDQ047O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREVFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNBSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNBSjs7QURJQTtFQUNFO0lBSUUsMEJBQUE7SUFDQSxzQkFBQTtFQ0RGO0VESUE7SUFJQywwQkFBQTtJQUNBLHNCQUFBO0VDRkQ7RURLQTtJQUlHLDBCQUFBO0lBQ0Esc0JBQUE7RUNISDtBQUNGOztBRHBCQTtFQUNFO0lBSUUsMEJBQUE7SUFDQSxzQkFBQTtFQ0RGO0VESUE7SUFJQywwQkFBQTtJQUNBLHNCQUFBO0VDRkQ7RURLQTtJQUlHLDBCQUFBO0lBQ0Esc0JBQUE7RUNISDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNzVweDtcbn1cblxuLm1haW5Db250IHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA2MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4ubGluZUNvbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG5cbiAgLmxpbmUge1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5taWxlc3RvbmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG5cbiAgLnBvcHVwU3BhbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMzVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLW91dDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogT25seSB0aGUgQ2lyY2xlcyBpbiB0aGUgdGltZWxpbmUgYXJlIGxpc3RlbmVkIGJ5IGV2ZW50cy4gKi9cblxuICAgIC5tb250aCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxuICAmLmN1cnJlbnQge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDE0YzczO1xuICAgIHRvcDogLThweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICB9XG4gICYuYWN0aXZlIC5wb3B1cFNwYW4ge1xuICAgIHRvcDogLTQwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgJi5hY3RpdmUuZnV0dXJlIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDEzcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgJi5hY3RpdmUuY3VycmVudCAucG9wdXBTcGFuIHtcbiAgICBsZWZ0OiAtNTBweDtcbiAgICB0b3A6IC01MHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZ3JvdyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgICAgXG4gIH1cbiAgIFxuICA1MCUge1xuICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgfVxuICAgXG4gIDEwMCUge1xuICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cbn0iLCIuYm90dG9tLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNzVweDtcbn1cblxuLm1haW5Db250IHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA2MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4ubGluZUNvbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4ubGluZUNvbnQgLmxpbmUge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5taWxlc3RvbmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG59XG4ubWlsZXN0b25lIC5wb3B1cFNwYW4ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMzVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiBPbmx5IHRoZSBDaXJjbGVzIGluIHRoZSB0aW1lbGluZSBhcmUgbGlzdGVuZWQgYnkgZXZlbnRzLiAqL1xufVxuLm1pbGVzdG9uZSAucG9wdXBTcGFuIC5tb250aCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5taWxlc3RvbmUuY3VycmVudCB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICM0MTRjNzM7XG4gIHRvcDogLThweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG59XG4ubWlsZXN0b25lLmFjdGl2ZSAucG9wdXBTcGFuIHtcbiAgdG9wOiAtNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWlsZXN0b25lLmFjdGl2ZS5mdXR1cmUge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5taWxlc3RvbmUuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gIGxlZnQ6IC01MHB4O1xuICB0b3A6IC01MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGdyb3cge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxufSJdfQ== */", "@media screen and (max-width: 1024px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -90px;\n  }\n\n  .milestone[_ngcontent-%COMP%] {\n    width: 8px;\n    height: 8px;\n    top: -6px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -40px;\n    font-size: 15px;\n  }\n  .milestone.current[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    top: -8px;\n  }\n  .milestone.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    top: -45px;\n    left: -40px;\n  }\n}\n@media screen and (max-width: 880px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -60px;\n  }\n\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -20px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS10aW1lbGluZS9leHBlcmllbmNlLXRpbWVsaW5lLmNvbXBvbmVudC5yZXBvbnNpdml0eS5zY3NzIiwic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UtdGltZWxpbmUvZXhwZXJpZW5jZS10aW1lbGluZS5jb21wb25lbnQucmVwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksYUFBQTtFQ0FOOztFREdFO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VDQU47RURFTTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VDQVY7RURFTTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFQ0FWO0VERVU7SUFDSSxlQUFBO0VDQWQ7RURHTTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDRFY7QUFDRjtBREtBO0VBRUk7SUFDSSxhQUFBO0VDSk47O0VEUU07SUFDSSxXQUFBO0VDTFY7RURPVTtJQUNJLGFBQUE7RUNMZDtFRFFNO0lBQ0ksV0FBQTtFQ05WO0FBQ0Y7QURVQTtFQUNJO0lBQ0ksYUFBQTtFQ1JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UtdGltZWxpbmUvZXhwZXJpZW5jZS10aW1lbGluZS5jb21wb25lbnQucmVwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICBib3R0b206IC05MHB4O1xuICAgIH1cbiAgICAgIFxuICAgIC5taWxlc3RvbmUge1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICBcbiAgICAgICAgLnBvcHVwU3BhbiB7XG4gICAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAmLmN1cnJlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICB0b3A6IC04cHg7XG4gICAgXG4gICAgICAgICAgICAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUuY3VycmVudCAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgIHRvcDogLTQ1cHg7XG4gICAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcblxuICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgYm90dG9tOiAtNjBweDtcbiAgICB9XG4gICAgXG4gICAgLm1pbGVzdG9uZSB7ICAgICAgICBcbiAgICAgICAgLnBvcHVwU3BhbiB7XG4gICAgICAgICAgICBsZWZ0OiAtMjBweDtcblxuICAgICAgICAgICAgLm1vbnRoIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgYm90dG9tOiAtOTBweDtcbiAgfVxuXG4gIC5taWxlc3RvbmUge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgdG9wOiAtNnB4O1xuICB9XG4gIC5taWxlc3RvbmUgLnBvcHVwU3BhbiB7XG4gICAgbGVmdDogLTQwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5taWxlc3RvbmUuY3VycmVudCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHRvcDogLThweDtcbiAgfVxuICAubWlsZXN0b25lLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5taWxlc3RvbmUuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gICAgdG9wOiAtNDVweDtcbiAgICBsZWZ0OiAtNDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgLmJvdHRvbS1jb250YWluZXIge1xuICAgIGJvdHRvbTogLTYwcHg7XG4gIH1cblxuICAubWlsZXN0b25lIC5wb3B1cFNwYW4ge1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gIC5taWxlc3RvbmUgLnBvcHVwU3BhbiAubW9udGgge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1pbGVzdG9uZS5hY3RpdmUuY3VycmVudCAucG9wdXBTcGFuIHtcbiAgICBsZWZ0OiAtMjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmJvdHRvbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-experience-timeline",
                templateUrl: "./experience-timeline.component.html",
                styleUrls: ["./experience-timeline.component.scss", "experience-timeline.component.reponsivity.scss"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { onTimelineChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], line: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["line"]
        }], currentPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], experiences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _core_sorter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/sorter.service */ "./src/app/core/sorter.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience-timeline/experience-timeline.component */ "./src/app/experience/experience-timeline/experience-timeline.component.ts");
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");












const _c0 = ["orderedList"];
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_experiences$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_2 = goog.getMsg("Experiences");
    I18N_1 = MSG_EXTERNAL_experiences$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_2;
}
else {
    I18N_1 = $localize `:nav@@experiences␟e7e0306bc19b679cb5d1bf586d6bd02fffb8c78f␟1824510134640326733:Experiences`;
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_4 = goog.getMsg("Previous");
    I18N_3 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
const _c5 = ["title", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_7 = goog.getMsg("Previous");
    I18N_6 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_9 = goog.getMsg("Next");
    I18N_8 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_11 = goog.getMsg("Next");
    I18N_10 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_11;
}
else {
    I18N_10 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
const _c12 = ["title", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_14 = goog.getMsg("Previous");
    I18N_13 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_14;
}
else {
    I18N_13 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
const _c15 = ["title", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_17 = goog.getMsg("Next");
    I18N_16 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_17;
}
else {
    I18N_16 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
const _c18 = ["title", I18N_16];
function ExperienceComponent_li_43_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technology_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r24);
} }
const _c19 = function (a1) { return ["fab", a1]; };
function ExperienceComponent_li_43_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", media_r25.http, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", media_r25.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c19, media_r25.icon));
} }
const _c20 = function (a0) { return { "selected": a0 }; };
function ExperienceComponent_li_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ExperienceComponent_li_43_span_32_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ExperienceComponent_li_43_a_34_Template, 2, 5, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", exp_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c20, i_r21 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", exp_r20.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", exp_r20.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", exp_r20.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", exp_r20.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r20.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r20.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 18, exp_r20.startAt), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, exp_r20.endAt), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r20.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r20.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r20.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r20.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r20.medias);
} }
const _c21 = function (a0) { return { "disabled": a0 }; };
const _c22 = function () { return ["fas", "chevron-left"]; };
const _c23 = function () { return ["fas", "chevron-right"]; };
class ExperienceComponent {
    constructor(dataService, sortService, renderer, library) {
        this.dataService = dataService;
        this.sortService = sortService;
        this.renderer = renderer;
        this.library = library;
        this.SELECTED_CLASS = "selected";
        this.LEAVE_RIGHT_CLASS = "leave-right";
        this.ENTER_RIGHT_CLASS = "enter-right";
        this.LEAVE_LEFT_CLASS = "leave-left";
        this.ENTER_LEFT_CLASS = "enter-left";
        this.TRANSITION_TIME = 400;
        this.experiencesOrdered = [];
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["fab"]);
    }
    ngOnInit() {
        // Fetch the Experiences from the Data Service
        this.dataService.getExperiences()
            .subscribe((experiences) => {
            this.currentPosition = experiences.length;
            this.experiences = experiences;
            this.experiencesOrdered = [...experiences];
            this.experiencesOrdered.sort(this.sortService.sort("position", "desc"));
            this.backgroundUrl = this.retrieveBackgroundUrl();
            this.updateMobileNavigationView();
            this.preloadBounderyImages(experiences.map(xp => xp.backgroundUrl));
        });
    }
    // Preloads the boundaries images related to the current position in order to avoid the "blinking" of the background while navigating.
    preloadBounderyImages(images) {
        images.forEach(function (image, i) {
            const preloadImages = new Array();
            preloadImages[i] = new Image();
            preloadImages[i].src = image;
        });
    }
    createListSelector(position) {
        return `li[id="${position}"]`;
    }
    onClickPrevious(targetPos) {
        const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.removeClass(currElem, this.SELECTED_CLASS);
        this.renderer.addClass(currElem, this.LEAVE_RIGHT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(currElem, this.LEAVE_RIGHT_CLASS);
        }, this.TRANSITION_TIME);
        // Subtracts one to the current position in order to move backwards in the timeline.
        this.currentPosition = (targetPos ? +targetPos : this.currentPosition - 1);
        this.backgroundUrl = this.retrieveBackgroundUrl();
        const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.addClass(targetElem, this.SELECTED_CLASS);
        this.renderer.addClass(targetElem, this.ENTER_LEFT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(targetElem, this.ENTER_LEFT_CLASS);
        }, this.TRANSITION_TIME);
        this.updateMobileNavigationView();
    }
    onClickNext(targetPos) {
        const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.removeClass(currElem, this.SELECTED_CLASS);
        this.renderer.addClass(currElem, this.LEAVE_LEFT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(currElem, this.LEAVE_LEFT_CLASS);
        }, this.TRANSITION_TIME);
        // Sums one to the current position in order to move further in the timeline.
        this.currentPosition = (targetPos ? +targetPos : this.currentPosition + 1);
        this.backgroundUrl = this.retrieveBackgroundUrl();
        const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.addClass(targetElem, this.SELECTED_CLASS);
        this.renderer.addClass(targetElem, this.ENTER_RIGHT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(targetElem, this.ENTER_RIGHT_CLASS);
        }, this.TRANSITION_TIME);
        this.updateMobileNavigationView();
    }
    updateNavigation(targetPos) {
        // in case of == nothing to do here
        if (targetPos > this.currentPosition) {
            this.onClickNext(targetPos);
        }
        else if (targetPos < this.currentPosition) {
            this.onClickPrevious(targetPos);
        }
    }
    retrieveBackgroundUrl() {
        return this.experiences[this.currentPosition - 1].backgroundUrl;
    }
    updateMobileNavigationView() {
        var _a, _b;
        this.previousYear =
            ((_a = this.experiences[this.currentPosition - 2]) === null || _a === void 0 ? void 0 : _a.startAt) || this.experiences[this.currentPosition - 1].startAt;
        this.currentYear =
            this.experiences[this.currentPosition - 1].startAt;
        this.nextYear =
            ((_b = this.experiences[this.currentPosition]) === null || _b === void 0 ? void 0 : _b.startAt) || this.experiences[this.currentPosition - 1].startAt;
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_sorter_service__WEBPACK_IMPORTED_MODULE_4__["SorterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"])); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], viewQuery: function ExperienceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.orderedList = _t.first);
    } }, decls: 45, vars: 43, consts: [["id", "experience", 1, "landscape"], [1, "overlay"], [1, "container"], [1, "top-container"], [1, "title"], [1, "navigation"], ["href", "javascript:void(0)", 1, "previous", 3, "ngClass", "click"], [1, "icon", 3, "icon", 6, "title"], [1, "devider"], ["href", "javascript:void(0)", 1, "next", 3, "ngClass", "click"], [1, "navigation-mobile"], [1, "molding"], [3, "innerHtml"], [1, "current"], [1, "middle-container"], [1, "events-content"], ["orderedList", ""], [3, "ngClass", "id", 4, "ngFor", "ngForOf"], [3, "experiences", "currentPosition", "onTimelineChanged"], [3, "ngClass", "id"], [1, "header-block"], [1, "logo-block"], ["target", "_blank", 3, "href"], [3, "src", "alt"], [1, "info-block"], [1, "company-name"], ["internationalization", "", "property", "role", 1, "role", 3, "data"], [1, "period"], [1, "location"], ["internationalization", "", "property", "city", 1, "city", 3, "data"], ["internationalization", "", "property", "country", 1, "country", 3, "data"], ["internationalization", "", "property", "description", 1, "description", 3, "data"], [1, "technologies"], ["class", "hashtag", 4, "ngFor", "ngForOf"], [1, "social-media"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "hashtag"], [1, "icon", 3, "icon", "title"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_8_listener() { return ctx.onClickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_15_listener() { return ctx.onClickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](17, I18N_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](19, _c12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_21_listener() { return ctx.onClickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "localizedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "safariDateFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](27, _c15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "localizedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "safariDateFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_32_listener() { return ctx.onClickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](35, _c18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "localizedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "safariDateFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ol", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ExperienceComponent_li_43_Template, 35, 27, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-experience-timeline", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTimelineChanged", function ExperienceComponent_Template_app_experience_timeline_onTimelineChanged_44_listener($event) { return ctx.updateNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.backgroundUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c21, ctx.currentPosition == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c22));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c21, ctx.currentPosition == (ctx.experiencesOrdered == null ? null : ctx.experiencesOrdered.length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c21, ctx.currentPosition == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 19, ctx.previousYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c22));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 24, ctx.currentYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c21, ctx.currentPosition == (ctx.experiencesOrdered == null ? null : ctx.experiencesOrdered.length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 29, ctx.nextYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiencesOrdered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experiences", ctx.experiences)("currentPosition", ctx.currentPosition);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceTimelineComponent"], _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_8__["InternationalizationDirective"]], pipes: [_core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_9__["LocalizedDatePipe"], _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_10__["SafariDateFormatterPipe"]], styles: [".overlay[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  background: #020024;\n  background: linear-gradient(180deg, rgba(2, 0, 36, 0.6418942577) 0%, rgba(0, 0, 0, 0.7735469188) 25%, rgba(0, 0, 0, 0.9079726891) 75%, rgba(0, 0, 0, 0.9924264706) 100%);\n  width: 100%;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  padding-top: 4em;\n  padding-bottom: 8em;\n}\n\n.landscape[_ngcontent-%COMP%] {\n  background-size: cover;\n  top: -4em;\n  position: relative;\n  background-position-x: center;\n  background-position-y: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  transition: background-image 0.3s ease-in-out;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  max-width: 1400px;\n  -ms-flex-item-align: center;\n      align-self: center;\n  width: 85vw;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  color: #fff;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n}\n\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n  transition: text-shadow 0.3s linear;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.middle-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  text-align: right;\n  color: #fff;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  transition: height 0.4s;\n  min-height: 570px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: left;\n      justify-content: left;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  line-height: 50px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 300;\n  line-height: 20px;\n  margin-bottom: 1em;\n  font-style: italic;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-transform: capitalize;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  line-height: 1.5em;\n  font-size: 20px;\n  font-weight: normal;\n  text-align: left;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  -ms-transform: translateX(-100%);\n  transform: translateX(-100%);\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  opacity: 1;\n  -ms-transform: translateX(0);\n  transform: translateX(0);\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%] {\n  -webkit-animation-name: cd-enter-right;\n  animation-name: cd-enter-right;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-left[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  -webkit-animation-name: cd-enter-left;\n  animation-name: cd-enter-left;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 1em;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n  padding: 2px 5px 2px 5px;\n  background-color: #414c73;\n  border-radius: 5px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%]:before {\n  content: \"#\";\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 1em;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #fff;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n\n@-webkit-keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -ms-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n@-webkit-keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -ms-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBTEksb0JBQUE7RUFFQSxhQUFBO0VBTUEsbUJBQUE7RUFDQSx3S0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtNQUFBLHNCQUFBO0VBQ0Esb0JBQUE7TUFBQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUlJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFPQSw2Q0FBQTtBQ05KOztBRFNBO0VBeENJLG9CQUFBO0VBRUEsYUFBQTtFQXlDQSwwQkFBQTtNQUFBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtNQUFBLGtCQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRE1BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtBQ0hKOztBREtJO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0FDSFI7O0FES1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNIWjs7QURRSTtFQUNJLGFBQUE7QUNOUjs7QURRUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ05aOztBRFVJO0VBekVBLG9CQUFBO0VBRUEsYUFBQTtFQTBFSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMUjs7QURPUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0xaOztBRFFRO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBS0EsbUNBQUE7QUNOWjs7QURRWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNOaEI7O0FEU1k7RUFDSSwyQkFBQTtBQ1BoQjs7QURXUTtFQUNJLFlBQUE7QUNUWjs7QURZUTtFQUNJLG9CQUFBO01BQUEsWUFBQTtBQ1ZaOztBRGFRO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBS0EsbUNBQUE7QUNYWjs7QURhWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNYaEI7O0FEYVk7RUFDSSwyQkFBQTtBQ1hoQjs7QURpQkE7RUExSUksb0JBQUE7RUFFQSxhQUFBO0VBMklBLDBCQUFBO01BQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNYSjs7QURhSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBR0EsdUJBQUE7RUFDQSxpQkFBQTtBQ1hSOztBRGFRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7TUFBQSxlQUFBO0FDWFo7O0FEYVk7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0EsbUJBQUE7TUFBQSxxQkFBQTtBQ1hoQjs7QURhZ0I7RUFDSSxZQUFBO0FDWHBCOztBRGVZO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0FDYmhCOztBRGlCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZlo7O0FEaUJZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDZmhCOztBRG1CUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2pCWjs7QURvQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQlo7O0FEb0JZO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FDbEJoQjs7QURzQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNwQlo7O0FEdUJRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNyQlo7O0FEd0JRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3RCWjs7QUR3Qlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFHQSxnQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFFQSx3QkFBQTtFQUNBLDhDQUFBO0VBRUEsc0NBQUE7QUN0QmhCOztBRHlCWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFHQSw0QkFBQTtFQUVBLHdCQUFBO0FDdkJoQjs7QUQyQlk7RUFDSSxzQ0FBQTtFQUVBLDhCQUFBO0FDekJoQjs7QUQ0Qlk7RUFDSSxxQ0FBQTtFQUVBLDZCQUFBO0FDMUJoQjs7QUQ2Qlk7RUFDSSxvQ0FBQTtFQUVBLDRCQUFBO0FDM0JoQjs7QUQrQlE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EsbUJBQUE7TUFBQSxlQUFBO0VBQ0EsZUFBQTtBQzdCWjs7QUQrQlk7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDN0JoQjs7QUQrQmdCO0VBQ0ksWUFBQTtBQzdCcEI7O0FEa0NRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDaENaOztBRGtDWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ2hDaEI7O0FEa0NnQjtFQUNJLGVBQUE7QUNoQ3BCOztBRGtDZ0I7RUFDSSxjQUFBO0FDaENwQjs7QUR1Q0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxtQ0FBQTtFQ3BDTjtFRHNDRTtJQUNJLFVBQUE7SUFDQSxpQ0FBQTtFQ3BDTjtBQUNGOztBRDRCQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG1DQUFBO0VDcENOO0VEc0NFO0lBQ0ksVUFBQTtJQUNBLGlDQUFBO0VDcENOO0FBQ0Y7O0FEa0RBO0VBQ0k7SUFDSSxVQUFBO0lBR0EsK0JBQUE7SUFFQSwyQkFBQTtFQ3RDTjtFRHdDRTtJQUNJLFVBQUE7SUFHQSw2QkFBQTtJQUVBLHlCQUFBO0VDdENOO0FBQ0Y7O0FEeUNBO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7RUN2Q047RUR5Q0U7SUFDSSxVQUFBO0lBQ0EsaUNBQUE7RUN2Q047QUFDRjs7QUQrQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtFQ3ZDTjtFRHlDRTtJQUNJLFVBQUE7SUFDQSxpQ0FBQTtFQ3ZDTjtBQUNGOztBRHFEQTtFQUNJO0lBQ0ksVUFBQTtJQUdBLGdDQUFBO0lBRUEsNEJBQUE7RUN6Q047RUQyQ0U7SUFDSSxVQUFBO0lBR0EsNkJBQUE7SUFFQSx5QkFBQTtFQ3pDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5vdmVybGF5IHtcbiAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwgMCwgMzYpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMiwgMCwgMzYsIDAuNjQxODk0MjU3NzAzMDgxMykgMCUsIHJnYmEoMCwgMCwgMCwgMC43NzM1NDY5MTg3Njc1MDcpIDI1JSwgcmdiYSgwLCAwLCAwLCAwLjkwNzk3MjY4OTA3NTYzMDMpIDc1JSwgcmdiYSgwLCAwLCAwLCAwLjk5MjQyNjQ3MDU4ODIzNTMpIDEwMCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhlbTtcbn1cblxuLmxhbmRzY2FwZSB7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdG9wOiAtNGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1vcmlnaW46IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgXG4gICAgLy8gVGhpcyBpcyBzdXBwb3J0ZWQgbmF0aXZlbHkgYnkgQ2hyb21lLCBPcGVyYSBhbmQgU2FmYXJpLiBGaXJlZm94IGFuZCBJRSBoYXNuJ3QgaW1wbGVtZW50ZWQgaXQgeWV0IChidWd6aWwubGEpLlxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDg1dnc7XG59XG5cbi50b3AtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGZsZXgtZ3JvdzogNDtcblxuICAgICAgICAmIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlZCBmb3IgZGVza3RvcCByZXNvbHV0aW9ucyBvciBoaWdoZXIuXG4gICAgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xuXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnByZXZpb3VzIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgXG4gICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2aWRlciB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5taWRkbGUtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XG5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgLmV2ZW50cy1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDU3MHB4O1xuXG4gICAgICAgIC5oZWFkZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgLmxvZ28tYmxvY2sge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmluZm8tYmxvY2sge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucm9sZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cblxuICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBvbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gRGVmaW5lcyB0aGUgYW5pbWF0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBvcmRlcmVkIGxpc3QuXG4gICAgICAgICAgICBsaS5lbnRlci1yaWdodCwgbGkubGVhdmUtcmlnaHQge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkuZW50ZXItbGVmdCwgbGkubGVhdmUtbGVmdCB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItbGVmdDtcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1sZWZ0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1sZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaS5sZWF2ZS1yaWdodCwgbGkubGVhdmUtbGVmdCB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRlY2hub2xvZ2llcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgICAgICAgICAgc3Bhbi5oYXNodGFnIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNGM3MztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcjJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODdhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBjZC1lbnRlci1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59IiwiLm92ZXJsYXkge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICMwMjAwMjQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMiwgMCwgMzYsIDAuNjQxODk0MjU3NykgMCUsIHJnYmEoMCwgMCwgMCwgMC43NzM1NDY5MTg4KSAyNSUsIHJnYmEoMCwgMCwgMCwgMC45MDc5NzI2ODkxKSA3NSUsIHJnYmEoMCwgMCwgMCwgMC45OTI0MjY0NzA2KSAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDhlbTtcbn1cblxuLmxhbmRzY2FwZSB7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0b3A6IC00ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogODV2dztcbn1cblxuLnRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRvcC1jb250YWluZXIgLnRpdGxlIHtcbiAgZmxleC1ncm93OiA0O1xufVxuLnRvcC1jb250YWluZXIgLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4udG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91cyB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91cy5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbiAgb3BhY2l0eTogMC42O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91czpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHNwYW4ge1xuICBtYXJnaW46IDEwcHg7XG59XG4udG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAuZGV2aWRlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0IHtcbiAgZmxleC1ncm93OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0LmRpc2FibGVkIHtcbiAgY3Vyc29yOiBuby1kcm9wO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm5leHQ6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG59XG5cbi5taWRkbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbiAgbWluLWhlaWdodDogNTcwcHg7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmhlYWRlci1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuaGVhZGVyLWJsb2NrIC5sb2dvLWJsb2NrIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmhlYWRlci1ibG9jayAubG9nby1ibG9jayBpbWcge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmhlYWRlci1ibG9jayAuaW5mby1ibG9jayB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuY29tcGFueS1uYW1lIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5yb2xlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnBlcmlvZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAucGVyaW9kIHNwYW4ge1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgLnNlbGVjdGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IG9sIGxpLmVudGVyLXJpZ2h0LCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkubGVhdmUtcmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItcmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCBvbCBsaS5lbnRlci1sZWZ0LCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkubGVhdmUtbGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLWxlZnQ7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLWxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1sZWZ0O1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IG9sIGxpLmxlYXZlLXJpZ2h0LCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkubGVhdmUtbGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC50ZWNobm9sb2dpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAudGVjaG5vbG9naWVzIHNwYW4uaGFzaHRhZyB7XG4gIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNGM3MztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnRlY2hub2xvZ2llcyBzcGFuLmhhc2h0YWc6YmVmb3JlIHtcbiAgY29udGVudDogXCIjXCI7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSAuaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjODA4N2ExO1xufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBjZC1lbnRlci1yaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2QtZW50ZXItbGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2QtZW50ZXItbGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn0iXX0= */", "@media screen and (max-width: 1024px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  .landscape[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n  }\n}\n@media screen and (max-width: 880px) {\n  .top-container[_ngcontent-%COMP%] {\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0 0 30px 0;\n    text-align: center;\n  }\n\n  .middle-container[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .overlay[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n    padding-top: 6em;\n  }\n\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    text-align: center;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #fff;\n    display: inline-block;\n    padding: 10px 1em 10px 1em;\n    border-radius: 10px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    -ms-flex-item-align: center;\n        align-self: center;\n    font-size: 35px;\n    font-weight: 600;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 2em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    padding: 10px 5px 10px 6px;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS1jb21wb25lbnQucmVwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNvbXBvbmVudC5yZXBvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBSVE7SUFDSSxlQUFBO0VDVlY7RURhTTtJQUNJLGVBQUE7RUNYVjs7RURtQlU7SUFDSSxlQUFBO0VDaEJkO0VEbUJVO0lBQ0ksZUFBQTtFQ2pCZDtFRG9CVTtJQUNJLGVBQUE7RUNsQmQ7RURzQk07SUFDSSxlQUFBO0VDcEJWO0VEdUJNO0lBQ0ksZUFBQTtFQ3JCVjs7RUR5QkU7SUFDSSw2QkFBQTtFQ3RCTjtBQUNGO0FEeUJBO0VBRUk7SUFDSSwwQkFBQTtRQUFBLHNCQUFBO0VDeEJOO0VEMEJNO0lBQ0ksa0JBQUE7SUFDQSxrQkFBQTtFQ3hCVjs7RUQ0QkU7SUFDSSxnQkFBQTtFQ3pCTjtFRDJCTTtJQUNJLGVBQUE7RUN6QlY7QUFDRjtBRDZCQTtFQUVJO0lBQ0ksbUJBQUE7SUFDQSxnQkFBQTtFQzVCTjs7RURpQ007SUE5RUosb0JBQUE7SUFFQSxhQUFBO0lBK0VRLHVCQUFBO1FBQUEsbUJBQUE7SUFDQSxxQkFBQTtRQUFBLGlCQUFBO0lBQ0Esa0JBQUE7RUMzQlY7RUQ2QlU7SUFDSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsMEJBQUE7SUFDQSxtQkFBQTtFQzNCZDtFRDZCYztJQUNJLFdBQUE7RUMzQmxCO0VEK0JVO0lBQ0ksb0JBQUE7UUFBQSxZQUFBO0lBQ0EsZUFBQTtFQzdCZDtFRCtCYztJQUNJLGVBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7RUM3QmxCO0VEZ0NjO0lBQ0ksMkJBQUE7RUM5QmxCO0VEa0NVO0lBQ0ksb0JBQUE7UUFBQSxZQUFBO0lBQ0EsMkJBQUE7UUFBQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ2hDZDtFRG1DVTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtJQUNBLGVBQUE7RUNqQ2Q7RURtQ2M7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VDakNsQjtFRG1DYztJQUNJLDJCQUFBO0VDakNsQjtFRHVDTTtJQUNJLGFBQUE7RUNyQ1Y7O0VENkNVO0lBQ0ksZUFBQTtFQzFDZDtFRDZDVTtJQUNJLHFCQUFBO1FBQUEsdUJBQUE7RUMzQ2Q7RUQ4Q1U7SUFDSSxrQkFBQTtFQzVDZDtFRCtDVTtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtFQzdDZDtFRCtDYztJQUNJLGVBQUE7RUM3Q2xCO0FBQ0Y7QURtREE7RUFJUTtJQUNJLGVBQUE7RUNwRFY7RUR5RFU7SUFDSSxlQUFBO0VDdkRkO0VEMERVO0lBQ0ksMEJBQUE7RUN4RGQ7O0VEaUVVO0lBQ0ksWUFBQTtFQzlEZDtFRGlFVTtJQUNJLGVBQUE7RUMvRGQ7RURrRVU7SUFDSSxlQUFBO0VDaEVkO0VEbUVVO0lBQ0ksZUFBQTtFQ2pFZDtFRG1FYztJQUNJLGVBQUE7RUNqRWxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UtY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgXG4gICAgLnRvcC1jb250YWluZXIge1xuXG4gICAgICAgIC50aXRsZSBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICAgICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucm9sZSwgLnBlcmlvZCwgLmxvY2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRlY2hub2xvZ2llcyBzcGFuLmhhc2h0YWcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGFuZHNjYXBlIHtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuXG4gICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC50aXRsZSBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgLmV2ZW50cy1jb250ZW50IC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICBcbiAgICAub3ZlcmxheSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiA2ZW07XG4gICAgfVxuICAgIFxuICAgIC50b3AtY29udGFpbmVyIHtcblxuICAgICAgICAubmF2aWdhdGlvbi1tb2JpbGUge1xuICAgICAgICAgICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xuXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5tb2xkaW5nIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDFlbSAxMHB4IDFlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXZpb3VzIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY3VycmVudCB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBEaXNhYmxlZCBmb3IgbW9iaWxlIHJlc29sdXRpb25zLlxuICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICAgICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyLWJsb2NrIC5sb2dvLWJsb2NrIHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbXBhbnktbmFtZSwgLnJvbGUsIC5wZXJpb2QsIC5sb2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuXG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuXG4gICAgLnRvcC1jb250YWluZXIge1xuXG4gICAgICAgIC50aXRsZSBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbi1tb2JpbGUge1xuICAgIFxuICAgICAgICAgICAgLmN1cnJlbnQgeyAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4OyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAubW9sZGluZyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHggMTBweCA2cHg7ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcblxuICAgICAgICAuZXZlbnRzLWNvbnRlbnQge1xuXG4gICAgICAgICAgICAuaGVhZGVyLWJsb2NrIC5sb2dvLWJsb2NrIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRlY2hub2xvZ2llcyBzcGFuLmhhc2h0YWcge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuXG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAudG9wLWNvbnRhaW5lciAudGl0bGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG5cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5jb21wYW55LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnJvbGUsIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAucGVyaW9kLCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC50ZWNobm9sb2dpZXMgc3Bhbi5oYXNodGFnIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG5cbiAgLmxhbmRzY2FwZSB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG4gIC50b3AtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC50b3AtY29udGFpbmVyIC50aXRsZSBoMSB7XG4gICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5vdmVybGF5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgIHBhZGRpbmctdG9wOiA2ZW07XG4gIH1cblxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAubW9sZGluZyB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAxZW0gMTBweCAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLm1vbGRpbmcgc3BhbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5wcmV2aW91cyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLnByZXZpb3VzLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAucHJldmlvdXM6aG92ZXIge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLmN1cnJlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5uZXh0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAubmV4dC5kaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBuby1kcm9wO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLm5leHQ6aG92ZXIge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuY29tcGFueS1uYW1lIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5oZWFkZXItYmxvY2sgLmxvZ28tYmxvY2sge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuY29tcGFueS1uYW1lLCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnJvbGUsIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAucGVyaW9kLCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmxvY2F0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5zb2NpYWwtbWVkaWEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnRvcC1jb250YWluZXIgLnRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5jdXJyZW50IHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5tb2xkaW5nIHtcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDZweDtcbiAgfVxuXG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuaGVhZGVyLWJsb2NrIC5sb2dvLWJsb2NrIGltZyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnRlY2hub2xvZ2llcyBzcGFuLmhhc2h0YWcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-experience",
                templateUrl: "./experience.component.html",
                styleUrls: ["./experience.component.scss", "experience-component.reponsivity.scss"]
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _core_sorter_service__WEBPACK_IMPORTED_MODULE_4__["SorterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"] }]; }, { orderedList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["orderedList"]
        }] }); })();


/***/ }),

/***/ "./src/app/experience/experience.module.ts":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.module.ts ***!
  \*************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience-timeline/experience-timeline.component */ "./src/app/experience/experience-timeline/experience-timeline.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");







class ExperienceModule {
}
ExperienceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExperienceModule });
ExperienceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExperienceModule_Factory(t) { return new (t || ExperienceModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExperienceModule, { declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"], _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceTimelineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]], exports: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]],
                declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"], _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceTimelineComponent"]],
                exports: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class FooterComponent {
    constructor() {
    }
    ngOnInit() {
        this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithubSquare"];
        this.year = new Date();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 5, consts: [["itemscope", "", "itemtype", "https://schema.org/WPFooter"], [1, "fork-github"], ["href", "https://github.com/parmarakhil/parmarakhil.github.io", "target", "_blank"], [1, "icon", 3, "icon"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fork on GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithubSquare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 2, ctx.year, "yyyy"), " \u00A9 Copyright");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["footer[_ngcontent-%COMP%] {\n    background-color: #3a5f8e;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.fork-github[_ngcontent-%COMP%] {\n    text-align: left;\n    font-weight: 500;\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n}\n\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    text-decoration: none;\n}\n\n.fork-github[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 0.5em;\n}\n\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #fff;\n}\n\n.copyright[_ngcontent-%COMP%] {\n    text-align: right;\n    color: #fff;\n    font-weight: 600;\n}\n\np[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLG1CQUFlO1FBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQVk7UUFBWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ZjhlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9yay1naXRodWIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5mb3JrLWdpdGh1YiBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JrLWdpdGh1YiBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi5mb3JrLWdpdGh1YiBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbn0iXX0= */", "@media screen and (max-width: 500px) {\n\n    .copyright[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n}\n\n@media screen and (max-width: 370px) {\n\n    .fork-github[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    .copyright[_ngcontent-%COMP%] {\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksb0JBQVk7WUFBWixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuXG4gICAgLmZvcmstZ2l0aHViIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-footer",
                templateUrl: "./footer.component.html",
                styleUrls: ["./footer.component.css", "./footer.component.responsivity.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-navigator-share */ "./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






const _c0 = ["nav"];
const _c1 = ["shareBtn"];
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_aboutMe$$SRC_APP_HEADER_HEADER_COMPONENT_TS_3 = goog.getMsg("{$startTagSpan}About me{$closeTagSpan}", { "startTagSpan": "\uFFFD#12\uFFFD", "closeTagSpan": "\uFFFD/#12\uFFFD" });
    I18N_2 = MSG_EXTERNAL_aboutMe$$SRC_APP_HEADER_HEADER_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:nav@@aboutMe␟0c13ed142b2445758e753691dde293f1475c2f35␟4875492424371875416:${"\uFFFD#12\uFFFD"}:START_TAG_SPAN:About me${"\uFFFD/#12\uFFFD"}:CLOSE_TAG_SPAN:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_experiences$$SRC_APP_HEADER_HEADER_COMPONENT_TS_5 = goog.getMsg("{$startTagSpan}Experiences{$closeTagSpan}", { "startTagSpan": "\uFFFD#16\uFFFD", "closeTagSpan": "\uFFFD/#16\uFFFD" });
    I18N_4 = MSG_EXTERNAL_experiences$$SRC_APP_HEADER_HEADER_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize `:nav@@experiences␟5fd3cd5fdef1df646b693d8916ff67fbab463f1c␟4512657944717229643:${"\uFFFD#16\uFFFD"}:START_TAG_SPAN:Experiences${"\uFFFD/#16\uFFFD"}:CLOSE_TAG_SPAN:`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_projects$$SRC_APP_HEADER_HEADER_COMPONENT_TS_7 = goog.getMsg("{$startTagSpan}Projects{$closeTagSpan}", { "startTagSpan": "\uFFFD#20\uFFFD", "closeTagSpan": "\uFFFD/#20\uFFFD" });
    I18N_6 = MSG_EXTERNAL_projects$$SRC_APP_HEADER_HEADER_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize `:nav@@projects␟35c99d959ec2c482a1b2910228c6fbf93e9ae08f␟811077579287290632:${"\uFFFD#20\uFFFD"}:START_TAG_SPAN:Projects${"\uFFFD/#20\uFFFD"}:CLOSE_TAG_SPAN:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_contact$$SRC_APP_HEADER_HEADER_COMPONENT_TS_9 = goog.getMsg("{$startTagSpan}Contact{$closeTagSpan}", { "startTagSpan": "\uFFFD#24\uFFFD", "closeTagSpan": "\uFFFD/#24\uFFFD" });
    I18N_8 = MSG_EXTERNAL_contact$$SRC_APP_HEADER_HEADER_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize `:nav@@contact␟70b4f26e29bfeacd38974c054e3a4fe925da00ad␟886825848084977844:${"\uFFFD#24\uFFFD"}:START_TAG_SPAN:Contact${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_SPAN:`;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_open_as_pdf$$SRC_APP_HEADER_HEADER_COMPONENT_TS_11 = goog.getMsg("Open Resume as PDF");
    I18N_10 = MSG_EXTERNAL_open_as_pdf$$SRC_APP_HEADER_HEADER_COMPONENT_TS_11;
}
else {
    I18N_10 = $localize `:nav@@open.as.pdf␟b656b39704aa388939be18cf921da9cb3974279c␟7857151276634971709:Open Resume as PDF`;
}
const _c12 = ["title", I18N_10];
class HeaderComponent {
    constructor(locale, renderer, ngNavigatorShareService) {
        this.locale = locale;
        this.renderer = renderer;
        this.ngNavigatorShareService = ngNavigatorShareService;
    }
    // use getter setter to define the properties
    get activeSection() {
        return this._activeSection;
    }
    get pageXOffset() {
        return this._pageXOffset;
    }
    set pageXOffset(value) {
        this._pageXOffset = value;
        this.onDetectScreenSize();
    }
    set activeSection(value) {
        this._activeSection = value;
        this.updateNavigation();
    }
    ngAfterViewInit() {
        // Share button available only for browsers that do support it.
        if (this.ngNavigatorShareService.canShare()) {
            this.shareBtn.nativeElement.style.display = "block";
        }
    }
    ngOnInit() {
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.faShareAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShareAlt"];
        this.faCloudDownloadAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCloudDownloadAlt"];
    }
    updateNavigation() {
        if (this._activeSection && this.renderer) {
            // Remove any selected anchor
            const activePreviousElem = this.nav.nativeElement.querySelector("a.active");
            if (activePreviousElem) {
                this.renderer.removeClass(activePreviousElem, "active");
            }
            const targetElem = this.nav.nativeElement.querySelector(`a[href^="#${this._activeSection}"]`);
            if (targetElem) {
                this.renderer.addClass(targetElem, "active");
            }
        }
    }
    /*
     * For media types such as tablets and mobile devices, the nav-bar navigation should be
     * collapsed by default.
    */
    onDetectScreenSize() {
        this.hasMenuToggled = this.pageXOffset > 1024;
    }
    onToggleBar() {
        this.hasMenuToggled = !this.hasMenuToggled;
    }
    resetMenu() {
        this.hasMenuToggled = this.pageXOffset > 1024;
    }
    share() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.ngNavigatorShareService.share({
                    title: "Akhil Parmar",
                    text: "Hello, I'm a Full-stack Java Web Developer with 2 years of experience developing automation tools using java, angular and camunda",
                    url: "https://parmarakhil.github.io/parmarakhil.github.io/"
                });
            }
            catch (error) {
                console.log("You app is not shared, reason: ", error);
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__["NgNavigatorShareService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.shareBtn = _t.first);
    } }, inputs: { pageXOffset: "pageXOffset", activeSection: "activeSection" }, decls: 33, vars: 4, consts: [["itemscope", "", "itemtype", "https://schema.org/WPHeader"], [1, "child", "navbar-toggle"], [1, "bar-icon", 3, "icon", "click"], ["itemprop", "brand", "itemscope", "", "itemtype", "https://schema.org/Brand", 1, "child", "logo-container"], ["href", "#", "itemprop", "name", "itemprop", "logo", 1, "logo", 2, "font-family", "Pacifico, cursive", 3, "click"], ["itemscope", "", "itemtype", "https://schema.org/SiteNavigationElement", 1, "child", "nav-container", 3, "hidden"], ["nav", ""], ["href", "#about", "itemprop", "url", 3, "click"], ["itemprop", "name"], ["href", "#experience", "itemprop", "url", 3, "click"], ["href", "#projects", "itemprop", "url", 3, "click"], ["href", "#contact", "itemprop", "url", 3, "click"], ["href", "https://drive.google.com/file/d/1akYqION9rmqqH-6Ptj2xgV73a1AAwi58/view?usp=sharing", "target", "_blank", 3, "click", 6, "title"], [1, "bar-icon", 3, "icon"], [1, "child", "share-container"], ["shareBtn", ""], ["alt", "share", "itemprop", "share", 1, "icon", 3, "icon", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_2_listener() { return ctx.onToggleBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Akhil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](11, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](15, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](19, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](23, I18N_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](27, _c12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Hire Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_32_listener() { return ctx.share(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faBars);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.hasMenuToggled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faCloudDownloadAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faShareAlt);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["@charset \"UTF-8\";\nheader[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  background: transparent;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  max-width: 1400px;\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  text-align: left;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 125px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 35px;\n  font-weight: 700;\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n  -ms-flex-positive: 5;\n      flex-grow: 5;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  -ms-flex-align: center;\n      align-items: center;\n  height: 52px;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-right: 1em;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 600;\n  color: #222f5c;\n  padding: 14px;\n  border-radius: 15px;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: #fff;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #222f5c;\n  color: #fff;\n  font-weight: 600;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 52px;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: inline-block;\n  height: 25px;\n  margin: 14px 0 0 0;\n  border-right: 2px solid #bfbfbf3b;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 15px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 600;\n  color: #222f5c59;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before {\n  content: \"\u202F\u202D\";\n}\nheader[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: none;\n  -ms-flex-pack: center;\n      justify-content: center;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 10px;\n  background-color: #fff;\n  padding: 11px;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #4e5562;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #222f5c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FERUo7QUNBSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FERVI7QUNDSTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGdCQUFBO0FEQ1I7QUNDUTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRENaO0FDR0k7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxnQkFBQTtBRERSO0FDR1E7RUFDSSxrQkFBQTtNQUFBLHlCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLFlBQUE7QUREWjtBQ0dZO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBRERoQjtBQ0dnQjtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUREcEI7QUNHb0I7RUFDSSxzQkFBQTtFQUVBLCtDQUFBO0FERHhCO0FDS2dCO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURIcEI7QUNXUTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUVBLCtDQUFBO0FEVFo7QUNXWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBRFRoQjtBQ1dnQjtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QURUcEI7QUNXb0I7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRFR4QjtBQ1d3QjtFQUNJLGNBQUE7QURUNUI7QUNhb0I7RUFDSSxjQUFBO0FEWHhCO0FDY29CO0VBQ0ksa0JBQUE7QURaeEI7QUNnQmdCO0VBQ0ksYUFBQTtBRGRwQjtBQ29CSTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0VBQ0EsZUFBQTtBRGxCUjtBQ3FCSTtFQUVJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxlQUFBO0FEcEJSO0FDc0JRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QURwQlo7QUNzQlk7RUFDSSxjQUFBO0FEcEJoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaGVhZGVyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5oZWFkZXIgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcbiAgZmxleC1ncm93OiAyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuaGVhZGVyIC5jaGlsZC5sb2dvLWNvbnRhaW5lciBhIHtcbiAgd2lkdGg6IDEyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG5oZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5oZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUycHg7XG59XG5oZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGEge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGE6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG59XG5oZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjJmNWM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbn1cbmhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCB7XG4gIGhlaWdodDogNTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAxNHB4IDAgMCAwO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG59XG5oZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1YzU5O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbmhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSAuYWN0aXZlIHtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG5oZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGk6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCv4oCtXCI7XG59XG5oZWFkZXIgLmNoaWxkLm5hdmJhci10b2dnbGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5jaGlsZC5zaGFyZS1jb250YWluZXIgLmljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjNGU1NTYyO1xufVxuaGVhZGVyIC5jaGlsZC5zaGFyZS1jb250YWluZXIgLmljb246aG92ZXIge1xuICBjb2xvcjogIzIyMmY1Yztcbn0iLCJoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jaGlsZC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1ncm93OiA1O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmZyYW1lIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7IFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE0cHggMCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YzU5O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcMjAyZlxcMjAyZFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jaGlsZC5uYXZiYXItdG9nZ2xlIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xuICAgICAgICAvLyB2aXNpYmxlIG9ubHkgZm9yIG1vYmlsZSBicm93c2VycyB0aGF0IGFjY2VwdCBzaGFyZSBpbnRlbnQuXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAxMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGU1NTYyO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxufSJdfQ== */", "@charset \"UTF-8\";\n@media screen and (max-width: 1420px) {\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    margin-right: 1em;\n  }\n}\n@media screen and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 0 0 15px 15px;\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n    padding: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    -ms-flex-positive: 4;\n        flex-grow: 4;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n    -ms-flex-order: 5;\n        order: 5;\n    border-top: 2px solid #bfbfbf1a;\n    padding-top: 1em;\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    -ms-flex-flow: column;\n        flex-flow: column;\n    height: inherit;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    line-height: 35px;\n    padding-left: 1em;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #5e81abbd;\n    padding-left: 25px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #222f5c;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n    content: \"\u2022\";\n    font-size: 50px;\n    position: absolute;\n    color: #5e81abbd;\n    margin-top: -4px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 0;\n    -ms-flex-positive: initial;\n        flex-grow: initial;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n    background-color: transparent;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media screen and (max-width: 500px) {\n  header[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    border: 1px solid #b3b7c61f;\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 21px;\n    margin: 15px 0 0 0;\n    border-right: 2px solid #bfbfbf3b;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n}\n@media screen and (max-width: 460px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid #b3b7c61f;\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid #bfbfbf3b;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n}\n@media screen and (max-width: 380px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid #b3b7c61f;\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid #bfbfbf3b;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 0;\n    border-radius: 0;\n    margin-right: 5px;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCIvVXNlcnMvYWtoaWxzaW5naC9EZXNrdG9wL1Byb2plY3RzL1BvcnRmb2xpby9wYXJtYXJha2hpbC5naXRodWIuaW8vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFJUTtJQUNJLGtCQUFBO0VERFY7RUNJTTtJQUNJLGtCQUFBO0VERlY7RUNLTTtJQUNJLGlCQUFBO0VESFY7QUFDRjtBQ09BO0VBRUk7SUFDSSxnQkFBQTtJQUNBLDRCQUFBO0lBRUEsK0NBQUE7SUFDQSxhQUFBO0VETk47RUNRTTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtFRE5WO0VDU007SUFDSSxpQkFBQTtRQUFBLFFBQUE7SUFDQSwrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsNkJBQUE7UUFBQSxnQkFBQTtFRFBWO0VDU1U7SUFDSSxxQkFBQTtRQUFBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO1FBQUEsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VEUGQ7RUNXa0I7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFRFR0QjtFQ1dzQjtJQUNJLGNBQUE7SUFHQSxnQkFBQTtFRFQxQjtFQ1lzQjtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFRFYxQjtFQ2FzQjtJQUNJLGdCQUFBO0VEWDFCO0VDZWtCO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RURidEI7RUNla0I7SUFDSSxjQUFBO0VEYnRCO0VDbUJNO0lBQ0ksZUFBQTtJQUNBLDBCQUFBO1FBQUEsa0JBQUE7RURqQlY7RUNtQlU7SUFDSSw2QkFBQTtJQUdBLGdCQUFBO0VEakJkO0VDcUJNO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0Esc0JBQUE7UUFBQSxtQkFBQTtJQUNBLHFCQUFBO1FBQUEsdUJBQUE7RURuQlY7RUNxQlU7SUFDSSxlQUFBO0VEbkJkO0FBQ0Y7QUN3QkE7RUFFSTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHNCQUFBO1FBQUEsbUJBQUE7SUFDQSxxQkFBQTtRQUFBLHVCQUFBO0VEdkJOO0VDeUJNO0lBQ0ksZUFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7RUR2QlY7RUM0QlU7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQ0FBQTtFRDFCZDtFQzRCYztJQUNJLGVBQUE7SUFDQSxjQUFBO0VEMUJsQjtFQytCTTtJQUNJLFlBQUE7SUFDQSxtQkFBQTtFRDdCVjtFQytCVTtJQUNJLGVBQUE7RUQ3QmQ7QUFDRjtBQ21DQTtFQUlRO0lBQ0ksZUFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7RURwQ1Y7RUN1Q007SUFDSSxlQUFBO0VEckNWO0VDd0NNO0lBQ0ksZUFBQTtFRHRDVjtFQ3lDTTtJQUNJLFlBQUE7RUR2Q1Y7RUN5Q1U7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQ0FBQTtFRHZDZDtFQ3lDYztJQUNJLGVBQUE7SUFDQSxhQUFBO0VEdkNsQjtBQUNGO0FDOENBO0VBSVE7SUFDSSxlQUFBO0lBQ0EsMkJBQUE7SUFDQSwwQkFBQTtFRC9DVjtFQ2tETTtJQUNJLGVBQUE7RURoRFY7RUNtRE07SUFDSSxlQUFBO0VEakRWO0VDb0RNO0lBQ0ksWUFBQTtFRGxEVjtFQ29EVTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlDQUFBO0VEbERkO0VDb0RjO0lBQ0ksZUFBQTtJQUNBLGFBQUE7RURsRGxCO0VDdURNO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFRHJEVjtFQ3VEVTtJQUNJLGVBQUE7RURyRGQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQyMHB4KSB7XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sb2dvLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcbiAgICBmbGV4LWdyb3c6IDQ7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHtcbiAgICBvcmRlcjogNTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2JmYmZiZjFhO1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNWU4MWFiYmQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzIyMmY1YztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGEuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMjIyZjVjO1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKAolwiO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM1ZTgxYWJiZDtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaTpob3Zlcjo6YmVmb3JlIHtcbiAgICBjb2xvcjogIzIyMmY1YztcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGZsZXgtZ3JvdzogaW5pdGlhbDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdmJhci10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2YmFyLXRvZ2dsZSAuYmFyLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiN2M2MWY7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIHtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICBoZWFkZXIgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubG9nby1jb250YWluZXIgYSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMCAwIDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JmYmZiZjNiO1xuICB9XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSBhIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgaGVhZGVyIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2I3YzYxZjtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxvZ28tY29udGFpbmVyIGEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDAgMCAwO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIGhlYWRlciAuY2hpbGQuc2hhcmUtY29udGFpbmVyIC5pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcblxuICAgIGhlYWRlciB7XG5cbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpOyBcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG9yZGVyOiA1O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNiZmJmYmYxYTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuXG4gICAgICAgICAgICAgICAgbGkge1xuXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZTgxYWJiZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDsgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFwyMDIyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWU4MWFiYmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgZmxleC1ncm93OiBpbml0aWFsO1xuXG4gICAgICAgICAgICAuZnJhbWUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5uYXZiYXItdG9nZ2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5iYXItaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2I3YzYxZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG5cbiAgICAgICAgICAgIC5mcmFtZSB1bCBsaSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcblxuICAgIGhlYWRlciB7XG4gICAgICAgIFxuICAgICAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSAuYmFyLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubG9nby1jb250YWluZXIgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIHtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG4gICAgXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBcbiAgICAgICAgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2I3YzYxZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMCAwIDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JmYmZiZjNiO1xuICAgIFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-header",
                templateUrl: "./header.component.html",
                styleUrls: ["./header.component.scss", "./header.component.responsivity.scss"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__["NgNavigatorShareService"] }]; }, { nav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["nav"]
        }], shareBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["shareBtn"]
        }], pageXOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeSection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/posts/posts-carousel/posts-carousel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/posts/posts-carousel/posts-carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: PostsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsCarouselComponent", function() { return PostsCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc posts
     */ 
    const MSG_EXTERNAL_of$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_1 = goog.getMsg("of");
    I18N_0 = MSG_EXTERNAL_of$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:posts@@of␟169eed2bc3e08e1bea977bcc5d799379f6b8a758␟5881876145178332550:of`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_3 = goog.getMsg("posts");
    I18N_2 = MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:nav@@posts␟7197f051d479dbfe2fa9732db540041536d3bddc␟7470893660683726788:posts`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc posts
     */ 
    const MSG_EXTERNAL_readMore$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS__5 = goog.getMsg("Read more");
    I18N_4 = MSG_EXTERNAL_readMore$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:posts@@readMore␟10f056dd9fa3ce236f04efd38ed65b33a8492181␟2827984212740060090:Read more`;
}
function PostsCarouselComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "meta", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "meta", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "meta", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "meta", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "meta", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](19, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", post_r28.http, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + post_r28.thumbnail + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", post_r28.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", post_r28.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, post_r28.date), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", post_r28.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", post_r28.internationalizations);
} }
const _c6 = function (a0) { return { "partial": a0 }; };
class PostsCarouselComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this._posts = [];
        this._originalPosts = [];
        this.onResultsPerPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(value) {
        if (value) {
            this._currentPage = value;
            this.populateCarousel();
        }
    }
    get posts() {
        return this._posts;
    }
    set posts(value) {
        if (value) {
            this._originalPosts = value;
            this.onResizeElement();
        }
    }
    ngOnInit() { }
    onResize() {
        this.onResizeElement();
    }
    onResizeElement() {
        this.elWidth = this.elRef.nativeElement.clientWidth;
        this.resultsPerPage = Math.ceil(this.elWidth / 465);
        this.populateCarousel();
    }
    populateCarousel() {
        if (this._currentPage && this._posts) {
            this.start = (this._currentPage - 1) * this.resultsPerPage;
            this.end = this._currentPage * this.resultsPerPage;
            this._posts = this._originalPosts.slice(this.start, this.end);
            this._posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
            this.onResultsPerPageChanged.emit(this.resultsPerPage);
        }
    }
}
PostsCarouselComponent.ɵfac = function PostsCarouselComponent_Factory(t) { return new (t || PostsCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
PostsCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostsCarouselComponent, selectors: [["app-posts-carousel"]], hostBindings: function PostsCarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function PostsCarouselComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { currentPage: "currentPage", posts: "posts" }, outputs: { onResultsPerPageChanged: "onResultsPerPageChanged" }, decls: 19, vars: 7, consts: [["itemscope", "", "itemtype", "https://schema.org/Article", 1, "events-content"], ["itemprop", "publisher", "content", "Akhil Parmar"], ["itemprop", "author", "content", "Akhil Parmar"], [3, "ngClass"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle", 4, "ngFor", "ngForOf"], [1, "paginator"], [1, "range"], [1, "start"], [1, "devider"], [1, "end"], [1, "label"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle"], ["itemprop", "item", 1, "card"], ["rel", "nofollow", "target", "_blank", "itemprop", "url", 3, "href"], [1, "thumbnail"], ["itemprop", "thumbnailUrl", 3, "content"], ["itemprop", "image", 3, "content"], ["itemprop", "datePublished", 1, "date"], [1, "content"], ["itemprop", "creator", "content", "Akhil Parmar"], ["internationalization", "", "property", "title", "itemprop", "name", "itemprop", "headline", 1, "title", 3, "data"], ["internationalization", "", "property", "description", "ellipsis", "275", "itemprop", "description", 1, "description", 3, "data"], [1, "read-more"]], template: function PostsCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PostsCarouselComponent_li_4_Template, 20, 14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](18, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c6, ctx._posts.length < 3 && ctx.currentPage >= ctx._originalPosts.length / ctx.resultsPerPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.start + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.end > (ctx._originalPosts == null ? null : ctx._originalPosts.length) ? ctx._originalPosts == null ? null : ctx._originalPosts.length : ctx.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._originalPosts == null ? null : ctx._originalPosts.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__["InternationalizationDirective"]], pipes: [_core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocalizedDatePipe"], _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__["SafariDateFormatterPipe"]], styles: [".events-content[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n  position: relative;\n  width: 100%;\n  transition: height 0.4s;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  cursor: pointer;\n  background-color: #fff;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(240, 223, 223, 0.16);\n  border: 1px solid #c8cad547;\n  transition: all 0.2s ease-in-out;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 170px;\n  background-color: #c1c7dc;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  position: relative;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 5px 5px 0 5px;\n  border-radius: 10px 0 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #222f5c;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1em;\n  min-height: 245px;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #222f5c;\n  font-weight: 600;\n  font-size: 18px;\n  text-align: left;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  line-height: 1.5em;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #3d4870;\n  cursor: pointer;\n  margin: 0 15px 15px 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%]:hover {\n  background-color: #ededef;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  -ms-transform: scale(1.025);\n      transform: scale(1.025);\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%] {\n  -ms-flex-pack: start;\n      justify-content: start;\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 360px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #222f5c;\n  font-style: italic;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 5px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3Bvc3RzL3Bvc3RzLWNhcm91c2VsL3Bvc3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0cy1jYXJvdXNlbC9wb3N0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsNkJBQUE7QUNDUjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NaO0FEQ1k7RUFDSSxlQUFBO0FDQ2hCO0FER1E7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUNEWjtBREdZO0VBQ0kscUJBQUE7QUNEaEI7QURJWTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQ0ZoQjtBRElnQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRnBCO0FETVk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNKaEI7QURNZ0I7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSnBCO0FET2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMcEI7QURTWTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNQaEI7QURTZ0I7RUFDSSx5QkFBQTtBQ1BwQjtBRFdZO0VBQ0ksMkJBQUE7TUFBQSx1QkFBQTtBQ1RoQjtBRFlRO0VBQ0ksb0JBQUE7TUFBQSxzQkFBQTtBQ1ZaO0FEWVk7RUFDSSxnQkFBQTtBQ1ZoQjtBRGVJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNiUjtBRGVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDYlo7QURnQlE7RUFDSSxnQkFBQTtBQ2RaO0FEaUJRO0VBQ0kseUJBQUE7QUNmWiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWNhcm91c2VsL3Bvc3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50cy1jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuXG4gICAgb2wge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDI0MCwgMjIzLCAyMjMsIDAuMTYpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4Y2FkNTQ3O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2RjO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0NXB4O1xuXG4gICAgICAgICAgICAgICAgaDIudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWU2Nzg4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ucmVhZC1tb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Q0ODcwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYucGFydGlhbCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdpbmF0b3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmFuZ2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5ldmVudHMtY29udGVudCB7XG4gIGZsZXgtZ3JvdzogNDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5ldmVudHMtY29udGVudCBvbCBsaSB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5ldmVudHMtY29udGVudCBvbCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIHtcbiAgZmxleC1ncm93OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDI0MCwgMjIzLCAyMjMsIDAuMTYpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjYWQ1NDc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLnRodW1ibmFpbCB7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWM3ZGM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLnRodW1ibmFpbCAuZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4IDVweCAwIDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbi5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWluLWhlaWdodDogMjQ1cHg7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQgaDIudGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzIyMmY1YztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNWU2Nzg4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgYnV0dG9uLnJlYWQtbW9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzNkNDg3MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgYnV0dG9uLnJlYWQtbW9yZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWY7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbn1cbi5ldmVudHMtY29udGVudCBvbC5wYXJ0aWFsIHtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbi5ldmVudHMtY29udGVudCBvbC5wYXJ0aWFsIC5jYXJkIHtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbn1cbi5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmV2ZW50cy1jb250ZW50IC5wYWdpbmF0b3IgLnJhbmdlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIC5sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59Il19 */", "@media screen and (max-width: 1024px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    min-height: initial;\n  }\n}\n@media screen and (max-width: 670px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n    border-radius: 15px;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%], .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 450px) {\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3Bvc3RzL3Bvc3RzLWNhcm91c2VsL3Bvc3RzLWNhcm91c2VsLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvcG9zdHMtY2Fyb3VzZWwuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxtQkFBQTtFQ0FOO0FBQ0Y7QURHQTtFQVFnQjtJQUNJLGFBQUE7RUNSbEI7RURXYztJQUNJLGNBQUE7RUNUbEI7RURXa0I7SUFDSSxlQUFBO0VDVHRCO0VEWWtCO0lBQ0ksZUFBQTtFQ1Z0QjtFRGFrQjtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFQ1h0QjtBQUNGO0FEa0JBO0VBUWdCO0lBQ0ksYUFBQTtFQ3ZCbEI7RUQ0QmtCO0lBQ0ksZUFBQTtFQzFCdEI7RUQ2QmtCO0lBQ0ksZUFBQTtFQzNCdEI7RURvQ2M7SUFDSSxhQUFBO0VDbENsQjtBQUNGO0FEd0NBO0VBSVE7SUFDSSxrQkFBQTtFQ3pDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvcG9zdHMtY2Fyb3VzZWwuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQge1xuICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG4gICAgXG4gICAgICAgIG9sIHtcbiAgICBcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICBcbiAgICAgICAgICAgICAgICAudGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaDIudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZWFkLW1vcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgb2wge1xuICAgIFxuICAgICAgICAgICAgLmNhcmQge1xuICAgIFxuICAgICAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGgyLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBwLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdpbmF0b3Ige1xuXG4gICAgICAgICAgICAucmFuZ2Uge1xuICAgICAgICAgICAgICAgIC5zdGFydCwgLmRldmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgLnBhZ2luYXRvciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCB7XG4gICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwge1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQgaDIudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQgcC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCBidXR0b24ucmVhZC1tb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwge1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IGgyLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciAucmFuZ2UgLnN0YXJ0LCAuZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciAucmFuZ2UgLmRldmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOut", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void <=> *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)),
            ])
        ] } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["debounce"])(25)
], PostsCarouselComponent.prototype, "onResize", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostsCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-posts-carousel",
                templateUrl: "./posts-carousel.component.html",
                styleUrls: ["./posts-carousel.component.scss", "./posts-carousel.component.responsivity.scss"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOut", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void <=> *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)),
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { onResultsPerPageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], posts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:resize"]
        }] }); })();


/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-carousel/posts-carousel.component */ "./src/app/posts/posts-carousel/posts-carousel.component.ts");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_COMPONENT_TS_1 = goog.getMsg("Posts");
    I18N_0 = MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:nav@@posts␟d5c73b3cf7fe880e38c987940cc2aff67a845280␟1199882264645870301:Posts`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS_3 = goog.getMsg("Previous");
    I18N_2 = MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
const _c4 = ["title", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS_6 = goog.getMsg("Previous");
    I18N_5 = MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS_6;
}
else {
    I18N_5 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS_8 = goog.getMsg("Next");
    I18N_7 = MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS_8;
}
else {
    I18N_7 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS_10 = goog.getMsg("Next");
    I18N_9 = MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS_10;
}
else {
    I18N_9 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
const _c11 = ["title", I18N_9];
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc posts
     */ 
    const MSG_EXTERNAL_synopsis$$SRC_APP_POSTS_POSTS_COMPONENT_TS_13 = goog.getMsg("some synopsis");
    I18N_12 = MSG_EXTERNAL_synopsis$$SRC_APP_POSTS_POSTS_COMPONENT_TS_13;
}
else {
    I18N_12 = $localize `:posts@@synopsis␟f8d26d627dfcfccc1f702a1b2754369ee28f94d6␟7451533422088822185:some synopsis`;
}
const _c14 = function (a0) { return { "disabled": a0 }; };
class PostsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.currentPage = 1;
        this.posts = [];
    }
    ngOnInit() {
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronLeft"];
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronRight"];
        // Fetch the Posts from the Data Service
        this.dataService.getPosts()
            .subscribe((posts) => {
            this.posts = posts;
        });
    }
    ceil(val) {
        return Math.ceil(val);
    }
    onClickPrevious() {
        this.currentPage--;
    }
    onClickNext() {
        this.currentPage++;
    }
    updateNavigation(resultsPerPage) {
        this.resultsPerPage = resultsPerPage;
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 25, vars: 10, consts: [["id", "posts"], [1, "container"], [1, "top-container"], [1, "title"], [1, "navigation"], ["href", "javascript:void(0)", 1, "previous", 3, "ngClass", "click"], [1, "molding"], [1, "icon", 3, "icon", 6, "title"], [1, "divider"], ["href", "javascript:void(0)", 1, "next", 3, "ngClass", "click"], [1, "synopsis"], [1, "middle-container"], [3, "posts", "currentPage", "onResultsPerPageChanged"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_Template_a_click_7_listener() { return ctx.onClickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_Template_a_click_15_listener() { return ctx.onClickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](18, I18N_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](20, _c11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, I18N_12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-posts-carousel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onResultsPerPageChanged", function PostsComponent_Template_app_posts_carousel_onResultsPerPageChanged_24_listener($event) { return ctx.updateNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c14, ctx.currentPage === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c14, ctx.currentPage === ctx.ceil((ctx.posts == null ? null : ctx.posts.length) / ctx.resultsPerPage)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.posts)("currentPage", ctx.currentPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_5__["PostsCarouselComponent"]], styles: ["#posts[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #fbfafa;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 85vw;\n  max-width: 1400px;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  margin-top: 0;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  color: #fff;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%]   app-posts-carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NSOztBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0FSOztBREdJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtBQ0RSOztBREdRO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0FDRFo7O0FESVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRlo7O0FESVk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNGaEI7O0FES1k7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ0hoQjs7QURLZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDSHBCOztBRE9ZO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0FDTGhCOztBRFFZO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTmhCOztBRFFnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNOcEI7O0FEUWdCO0VBQ0ksMkJBQUE7QUNOcEI7O0FEVVk7RUFDSSxZQUFBO0FDUmhCOztBRGFJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNYUjs7QURhUTtFQUNJLFdBQUE7QUNYWiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bvc3RzIHtcbiAgICB0b3A6IC00ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZhZmE7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogODV2dztcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcblxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICB9XG5cbiAgICBwLnN5bm9wc2lzIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzVlNjc4ODtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gICAgXG4gICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJldmlvdXMge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjsgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMmVtOyAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgYXBwLXBvc3RzLWNhcm91c2VsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSIsIiNwb3N0cyB7XG4gIHRvcDogLTRlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmFmYTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4NXZ3O1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbn1cbi5jb250YWluZXIgaDEge1xuICBmb250LXNpemU6IDQycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyZjVjO1xufVxuLmNvbnRhaW5lciBwLnN5bm9wc2lzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzVlNjc4ODtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAudGl0bGUge1xuICBmbGV4LWdyb3c6IDQ7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjIyZjVjO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAucHJldmlvdXMge1xuICBmbGV4LWdyb3c6IDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91cy5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbiAgb3BhY2l0eTogMC42O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLmRpdmlkZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0IHtcbiAgZmxleC1ncm93OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAubmV4dC5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbiAgb3BhY2l0eTogMC42O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm5leHQ6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHNwYW4ge1xuICBtYXJnaW46IDEwcHg7XG59XG4uY29udGFpbmVyIC5taWRkbGUtY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXIgLm1pZGRsZS1jb250YWluZXIgYXBwLXBvc3RzLWNhcm91c2VsIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */", "@media screen and (max-width: 670px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n  }\n}\n@media screen and (max-width: 450px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0.65em 0;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #414c73;\n    display: inline-block;\n    padding: 0 5px 5px 5px;\n    border-radius: 10px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVE7SUFDSSxlQUFBO0VDRlY7RURLTTtJQUNJLGVBQUE7RUNIVjtFRFFVO0lBQ0ksZUFBQTtFQ05kO0FBQ0Y7QURXQTtFQUlRO0lBQ0ksZUFBQTtFQ1pWO0VEZU07SUFDSSxlQUFBO0VDYlY7RURrQlU7SUFDSSxlQUFBO0VDaEJkO0VEa0JjO0lBQ0ksV0FBQTtFQ2hCbEI7RURxQk07SUFDSSxtQkFBQTtFQ25CVjtBQUNGO0FEdUJBO0VBSVE7SUFDSSxnQkFBQTtFQ3hCVjtFRDJCTTtJQUNJLGFBQUE7RUN6QlY7RUQ4QlU7SUFDSSxlQUFBO0VDNUJkO0VEOEJjO0lBQ0ksV0FBQTtFQzVCbEI7RUQrQmM7SUFDSSxhQUFBO0VDN0JsQjtFRGdDYztJQUNJLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VDOUJsQjtFRGdDa0I7SUFDSSxlQUFBO0VDOUJ0QjtFRGlDa0I7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQy9CdEI7QUFDRjtBRHNDQTtFQUVJO0lBQ0ksYUFBQTtFQ3JDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwLnN5bm9wc2lzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG5cbiAgICAuY29udGFpbmVyIHtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcC5zeW5vcHNpcyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgXG4gICAgICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICAuY29udGFpbmVyIHtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNjVlbSAwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHAuc3lub3BzaXMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubW9sZGluZyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0MTRjNzM7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHggNXB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuXG4gICAgLmNvbnRhaW5lciBwLnN5bm9wc2lzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLmNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG4gIC5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICB9XG4gIC5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHNwYW4ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5jb250YWluZXIgLm1pZGRsZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIgaDEge1xuICAgIG1hcmdpbjogMC42NWVtIDA7XG4gIH1cbiAgLmNvbnRhaW5lciBwLnN5bm9wc2lzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHNwYW4ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAubW9sZGluZyB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzQxNGM3MztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCA1cHggNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm1vbGRpbmcgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5tb2xkaW5nIHNwYW4ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmNvbnRhaW5lciBwLnN5bm9wc2lzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-posts",
                templateUrl: "./posts.component.html",
                styleUrls: ["./posts.component.scss", "./posts.component.responsivity.scss"]
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/posts/posts.molule.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.molule.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts-carousel/posts-carousel.component */ "./src/app/posts/posts-carousel/posts-carousel.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");








class PostsModule {
}
PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostsModule });
PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostsModule_Factory(t) { return new (t || PostsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, { declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"], _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_3__["PostsCarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]], exports: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]],
                declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"], _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_3__["PostsCarouselComponent"]],
                exports: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/projects/projects-carousel/projects-carousel.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/projects/projects-carousel/projects-carousel.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsCarouselComponent", function() { return ProjectsCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc projects
     */ 
    const MSG_EXTERNAL_of$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS_1 = goog.getMsg("of");
    I18N_0 = MSG_EXTERNAL_of$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:projects@@of␟169eed2bc3e08e1bea977bcc5d799379f6b8a758␟5881876145178332550:of`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_projects$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS_3 = goog.getMsg("projects");
    I18N_2 = MSG_EXTERNAL_projects$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:nav@@projects␟aea5e5ca7572f826234e136490a87fbf81d529bd␟3836000317327860441:projects`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc projects
     */ 
    const MSG_EXTERNAL_readMore$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS__5 = goog.getMsg("Read more");
    I18N_4 = MSG_EXTERNAL_readMore$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:projects@@readMore␟10f056dd9fa3ce236f04efd38ed65b33a8492181␟2827984212740060090:Read more`;
}
function ProjectsCarouselComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "meta", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "meta", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "meta", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "meta", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "meta", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](19, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r30.http, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + project_r30.thumbnail + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", project_r30.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", project_r30.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, project_r30.date), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", project_r30.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", project_r30.internationalizations);
} }
const _c6 = function (a0) { return { "partial": a0 }; };
class ProjectsCarouselComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this._projects = [];
        this._originalprojects = [];
        this.onResultsPerPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(value) {
        if (value) {
            this._currentPage = value;
            this.populateCarousel();
        }
    }
    get projects() {
        return this._projects;
    }
    set projects(value) {
        if (value) {
            this._originalprojects = value;
            this.onResizeElement();
        }
    }
    ngOnInit() { }
    onResize() {
        this.onResizeElement();
    }
    onResizeElement() {
        this.elWidth = this.elRef.nativeElement.clientWidth;
        this.resultsPerPage = Math.ceil(this.elWidth / 465);
        this.populateCarousel();
    }
    populateCarousel() {
        if (this._currentPage && this._projects) {
            this.start = (this._currentPage - 1) * this.resultsPerPage;
            this.end = this._currentPage * this.resultsPerPage;
            this._projects = this._originalprojects.slice(this.start, this.end);
            this._projects.sort((a, b) => +new Date(b.date) - +new Date(a.date));
            this.onResultsPerPageChanged.emit(this.resultsPerPage);
        }
    }
}
ProjectsCarouselComponent.ɵfac = function ProjectsCarouselComponent_Factory(t) { return new (t || ProjectsCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ProjectsCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsCarouselComponent, selectors: [["app-projects-carousel"]], hostBindings: function ProjectsCarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ProjectsCarouselComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { currentPage: "currentPage", projects: "projects" }, outputs: { onResultsPerPageChanged: "onResultsPerPageChanged" }, decls: 19, vars: 7, consts: [["itemscope", "", "itemtype", "https://schema.org/Article", 1, "events-content"], ["itemprop", "publisher", "content", "Akhil Parmar"], ["itemprop", "author", "content", "Akhil Parmar"], [3, "ngClass"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle", 4, "ngFor", "ngForOf"], [1, "paginator"], [1, "range"], [1, "start"], [1, "devider"], [1, "end"], [1, "label"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle"], ["itemprop", "item", 1, "card"], ["rel", "nofollow", "target", "_blank", "itemprop", "url", 3, "href"], [1, "thumbnail"], ["itemprop", "thumbnailUrl", 3, "content"], ["itemprop", "image", 3, "content"], ["itemprop", "datePublished", 1, "date"], [1, "content"], ["itemprop", "creator", "content", "Akhil Parmar"], ["internationalization", "", "property", "title", "itemprop", "name", "itemprop", "headline", 1, "title", 3, "data"], ["internationalization", "", "property", "description", "ellipsis", "275", "itemprop", "description", 1, "description", 3, "data"], [1, "read-more"]], template: function ProjectsCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectsCarouselComponent_li_4_Template, 20, 14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](18, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c6, ctx._projects.length < 3 && ctx.currentPage >= ctx._originalprojects.length / ctx.resultsPerPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.start + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.end > (ctx._originalprojects == null ? null : ctx._originalprojects.length) ? ctx._originalprojects == null ? null : ctx._originalprojects.length : ctx.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._originalprojects == null ? null : ctx._originalprojects.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__["InternationalizationDirective"]], pipes: [_core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocalizedDatePipe"], _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__["SafariDateFormatterPipe"]], styles: [".events-content[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n  position: relative;\n  width: 100%;\n  transition: height 0.4s;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  cursor: pointer;\n  background-color: #fff;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(240, 223, 223, 0.16);\n  border: 1px solid #c8cad547;\n  transition: all 0.2s ease-in-out;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 170px;\n  background-color: #c1c7dc;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  position: relative;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 5px 5px 0 5px;\n  border-radius: 10px 0 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #222f5c;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1em;\n  min-height: 245px;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #222f5c;\n  font-weight: 600;\n  font-size: 18px;\n  text-align: left;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  line-height: 1.5em;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #3d4870;\n  cursor: pointer;\n  margin: 0 15px 15px 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%]:hover {\n  background-color: #ededef;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  -ms-transform: scale(1.025);\n      transform: scale(1.025);\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%] {\n  -ms-flex-pack: start;\n      justify-content: start;\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 360px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #222f5c;\n  font-style: italic;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 5px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWNhcm91c2VsL3Byb2plY3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy1jYXJvdXNlbC9wcm9qZWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQUo7QURFSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsNkJBQUE7QUNBUjtBREVRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0FaO0FERVk7RUFDSSxlQUFBO0FDQWhCO0FESVE7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUNGWjtBRElZO0VBQ0kscUJBQUE7QUNGaEI7QURLWTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQ0hoQjtBREtnQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSHBCO0FET1k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNMaEI7QURPZ0I7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTHBCO0FEUWdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNOcEI7QURVWTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNSaEI7QURVZ0I7RUFDSSx5QkFBQTtBQ1JwQjtBRFlZO0VBQ0ksMkJBQUE7TUFBQSx1QkFBQTtBQ1ZoQjtBRGFRO0VBQ0ksb0JBQUE7TUFBQSxzQkFBQTtBQ1haO0FEYVk7RUFDSSxnQkFBQTtBQ1hoQjtBRGdCSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZFI7QURnQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNkWjtBRGlCUTtFQUNJLGdCQUFBO0FDZlo7QURrQlE7RUFDSSx5QkFBQTtBQ2hCWiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWNhcm91c2VsL3Byb2plY3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50cy1jb250ZW50IHtcbiAgICBcbiAgICBmbGV4LWdyb3c6IDQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuXG4gICAgb2wge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDI0MCwgMjIzLCAyMjMsIDAuMTYpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4Y2FkNTQ3O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2RjO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0NXB4O1xuXG4gICAgICAgICAgICAgICAgaDIudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWU2Nzg4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ucmVhZC1tb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Q0ODcwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYucGFydGlhbCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdpbmF0b3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmFuZ2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5ldmVudHMtY29udGVudCB7XG4gIGZsZXgtZ3JvdzogNDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5ldmVudHMtY29udGVudCBvbCBsaSB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5ldmVudHMtY29udGVudCBvbCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIHtcbiAgZmxleC1ncm93OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDI0MCwgMjIzLCAyMjMsIDAuMTYpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjYWQ1NDc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLnRodW1ibmFpbCB7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWM3ZGM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLnRodW1ibmFpbCAuZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4IDVweCAwIDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbi5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWluLWhlaWdodDogMjQ1cHg7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQgaDIudGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzIyMmY1YztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNWU2Nzg4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgYnV0dG9uLnJlYWQtbW9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzNkNDg3MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgYnV0dG9uLnJlYWQtbW9yZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWY7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbn1cbi5ldmVudHMtY29udGVudCBvbC5wYXJ0aWFsIHtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbi5ldmVudHMtY29udGVudCBvbC5wYXJ0aWFsIC5jYXJkIHtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbn1cbi5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmV2ZW50cy1jb250ZW50IC5wYWdpbmF0b3IgLnJhbmdlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIC5sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59Il19 */", "@media screen and (max-width: 1024px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    min-height: initial;\n  }\n}\n@media screen and (max-width: 670px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n    border-radius: 15px;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%], .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 450px) {\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWNhcm91c2VsL3Byb2plY3RzLWNhcm91c2VsLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMtY2Fyb3VzZWwvcHJvamVjdHMtY2Fyb3VzZWwuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxtQkFBQTtFQ0FOO0FBQ0Y7QURHQTtFQVFnQjtJQUNJLGFBQUE7RUNSbEI7RURXYztJQUNJLGNBQUE7RUNUbEI7RURXa0I7SUFDSSxlQUFBO0VDVHRCO0VEWWtCO0lBQ0ksZUFBQTtFQ1Z0QjtFRGFrQjtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFQ1h0QjtBQUNGO0FEa0JBO0VBUWdCO0lBQ0ksYUFBQTtFQ3ZCbEI7RUQ0QmtCO0lBQ0ksZUFBQTtFQzFCdEI7RUQ2QmtCO0lBQ0ksZUFBQTtFQzNCdEI7RURvQ2M7SUFDSSxhQUFBO0VDbENsQjtBQUNGO0FEd0NBO0VBSVE7SUFDSSxrQkFBQTtFQ3pDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMtY2Fyb3VzZWwvcHJvamVjdHMtY2Fyb3VzZWwuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQge1xuICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG4gICAgXG4gICAgICAgIG9sIHtcbiAgICBcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICBcbiAgICAgICAgICAgICAgICAudGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaDIudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZWFkLW1vcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgb2wge1xuICAgIFxuICAgICAgICAgICAgLmNhcmQge1xuICAgIFxuICAgICAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGgyLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBwLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdpbmF0b3Ige1xuXG4gICAgICAgICAgICAucmFuZ2Uge1xuICAgICAgICAgICAgICAgIC5zdGFydCwgLmRldmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgLnBhZ2luYXRvciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCB7XG4gICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwge1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQgaDIudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQgcC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCBidXR0b24ucmVhZC1tb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwge1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IGgyLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciAucmFuZ2UgLnN0YXJ0LCAuZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciAucmFuZ2UgLmRldmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOut", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void <=> *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)),
            ])
        ] } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["debounce"])(25)
], ProjectsCarouselComponent.prototype, "onResize", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-projects-carousel",
                templateUrl: "./projects-carousel.component.html",
                styleUrls: ["./projects-carousel.component.scss", "./projects-carousel.component.responsivity.scss"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOut", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void <=> *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)),
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { onResultsPerPageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], projects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:resize"]
        }] }); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-carousel/projects-carousel.component */ "./src/app/projects/projects-carousel/projects-carousel.component.ts");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_projects$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_1 = goog.getMsg("Projects");
    I18N_0 = MSG_EXTERNAL_projects$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:nav@@projects␟d2a7deb7096cada2c3177157652680fe7e6de0ed␟7091571651222742304:Projects`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_3 = goog.getMsg("Previous");
    I18N_2 = MSG_EXTERNAL_previous$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
const _c4 = ["title", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_6 = goog.getMsg("Previous");
    I18N_5 = MSG_EXTERNAL_previous$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_6;
}
else {
    I18N_5 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_8 = goog.getMsg("Next");
    I18N_7 = MSG_EXTERNAL_next$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_8;
}
else {
    I18N_7 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_10 = goog.getMsg("Next");
    I18N_9 = MSG_EXTERNAL_next$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_10;
}
else {
    I18N_9 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
const _c11 = ["title", I18N_9];
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc projects
     */ 
    const MSG_EXTERNAL_synopsis$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_13 = goog.getMsg("A Synopsis of project I created");
    I18N_12 = MSG_EXTERNAL_synopsis$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_13;
}
else {
    I18N_12 = $localize `:projects@@synopsis␟1f89ae0314dcb65f54ad14bc4905e3d243764d20␟8279674296747498576:A Synopsis of project I created`;
}
const _c14 = function (a0) { return { "disabled": a0 }; };
class ProjectsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.currentPage = 1;
        this.projects = [];
    }
    ngOnInit() {
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronLeft"];
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronRight"];
        // Fetch the Projects from the Data Service
        this.dataService.getProjects()
            .subscribe((projects) => {
            this.projects = projects;
        });
    }
    ceil(val) {
        return Math.ceil(val);
    }
    onClickPrevious() {
        this.currentPage--;
    }
    onClickNext() {
        this.currentPage++;
    }
    updateNavigation(resultsPerPage) {
        this.resultsPerPage = resultsPerPage;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 25, vars: 10, consts: [["id", "projects"], [1, "container"], [1, "top-container"], [1, "title"], [1, "navigation"], ["href", "javascript:void(0)", 1, "previous", 3, "ngClass", "click"], [1, "molding"], [1, "icon", 3, "icon", 6, "title"], [1, "divider"], ["href", "javascript:void(0)", 1, "next", 3, "ngClass", "click"], [1, "synopsis"], [1, "middle-container"], [3, "projects", "currentPage", "onResultsPerPageChanged"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_7_listener() { return ctx.onClickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_15_listener() { return ctx.onClickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](18, I18N_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](20, _c11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, I18N_12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-projects-carousel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onResultsPerPageChanged", function ProjectsComponent_Template_app_projects_carousel_onResultsPerPageChanged_24_listener($event) { return ctx.updateNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c14, ctx.currentPage === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c14, ctx.currentPage === ctx.ceil((ctx.projects == null ? null : ctx.projects.length) / ctx.resultsPerPage)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projects", ctx.projects)("currentPage", ctx.currentPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsCarouselComponent"]], styles: ["#projects[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #e6e6eb;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 85vw;\n  max-width: 1400px;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  margin-top: 0;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  color: #fff;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%]   app-projects-carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RSOztBRElJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtBQ0ZSOztBRElRO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0FDRlo7O0FES1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSFo7O0FES1k7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNIaEI7O0FETVk7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ0poQjs7QURNZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDSnBCOztBRFFZO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0FDTmhCOztBRFNZO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUGhCOztBRFNnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNQcEI7O0FEU2dCO0VBQ0ksMkJBQUE7QUNQcEI7O0FEV1k7RUFDSSxZQUFBO0FDVGhCOztBRGNJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNaUjs7QURjUTtFQUNJLFdBQUE7QUNaWiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2plY3RzIHtcbiAgICB0b3A6IC00ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZWI7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM5OWZmOTksICNmZmZmZmYpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgfVxuXG4gICAgcC5zeW5vcHNpcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICM1ZTY3ODg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICAgIFxuICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXZpb3VzIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTsgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGFwcC1wcm9qZWN0cy1jYXJvdXNlbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIjcHJvamVjdHMge1xuICB0b3A6IC00ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZWI7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODV2dztcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG59XG4uY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbi5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM1ZTY3ODg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmY7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLnRpdGxlIHtcbiAgZmxleC1ncm93OiA0O1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjIyZjVjO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLnByZXZpb3VzIHtcbiAgZmxleC1ncm93OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAucHJldmlvdXMuZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5kaXZpZGVyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAubmV4dCB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm5leHQuZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0OmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBzcGFuIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRhaW5lciAubWlkZGxlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5taWRkbGUtY29udGFpbmVyIGFwcC1wcm9qZWN0cy1jYXJvdXNlbCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */", "@media screen and (max-width: 670px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n  }\n}\n@media screen and (max-width: 450px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0.65em 0;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #414c73;\n    display: inline-block;\n    padding: 0 5px 5px 5px;\n    border-radius: 10px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVE7SUFDSSxlQUFBO0VDRlY7RURLTTtJQUNJLGVBQUE7RUNIVjtFRFFVO0lBQ0ksZUFBQTtFQ05kO0FBQ0Y7QURXQTtFQUlRO0lBQ0ksZUFBQTtFQ1pWO0VEZU07SUFDSSxlQUFBO0VDYlY7RURrQlU7SUFDSSxlQUFBO0VDaEJkO0VEa0JjO0lBQ0ksV0FBQTtFQ2hCbEI7RURxQk07SUFDSSxtQkFBQTtFQ25CVjtBQUNGO0FEdUJBO0VBSVE7SUFDSSxnQkFBQTtFQ3hCVjtFRDJCTTtJQUNJLGFBQUE7RUN6QlY7RUQ4QlU7SUFDSSxlQUFBO0VDNUJkO0VEOEJjO0lBQ0ksV0FBQTtFQzVCbEI7RUQrQmM7SUFDSSxhQUFBO0VDN0JsQjtFRGdDYztJQUNJLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VDOUJsQjtFRGdDa0I7SUFDSSxlQUFBO0VDOUJ0QjtFRGlDa0I7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQy9CdEI7QUFDRjtBRHNDQTtFQUVJO0lBQ0ksYUFBQTtFQ3JDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwLnN5bm9wc2lzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG5cbiAgICAuY29udGFpbmVyIHtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcC5zeW5vcHNpcyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgXG4gICAgICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICAuY29udGFpbmVyIHtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNjVlbSAwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHAuc3lub3BzaXMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubW9sZGluZyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0MTRjNzM7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHggNXB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuXG4gICAgLmNvbnRhaW5lciBwLnN5bm9wc2lzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLmNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG4gIC5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICB9XG4gIC5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHNwYW4ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5jb250YWluZXIgLm1pZGRsZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIgaDEge1xuICAgIG1hcmdpbjogMC42NWVtIDA7XG4gIH1cbiAgLmNvbnRhaW5lciBwLnN5bm9wc2lzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHNwYW4ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAubW9sZGluZyB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzQxNGM3MztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCA1cHggNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm1vbGRpbmcgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5tb2xkaW5nIHNwYW4ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmNvbnRhaW5lciBwLnN5bm9wc2lzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ["./projects.component.scss", "./projects.component.responsivity.scss"]
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.molule.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.molule.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-carousel/projects-carousel.component */ "./src/app/projects/projects-carousel/projects-carousel.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");








class ProjectsModule {
}
ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsCarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]], exports: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]],
                declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsCarouselComponent"]],
                exports: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _core_directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/directive/on-viewport.directive */ "./src/app/core/directive/on-viewport.directive.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");













const _c0 = function (a0) { return { "sticky": a0 }; };
class ResumeComponent {
    constructor() {
        this.isSticky = false;
        this.pageYOffset = 0;
        this.checkResize();
    }
    checkScroll() {
        this.pageYOffset = window.pageYOffset;
        this.isSticky = pageYOffset >= 250;
    }
    checkResize() {
        this.pageXOffset = window.innerWidth;
    }
    ngOnInit() { }
    onViewport(isOnViewPort, element) {
        this.activeSection = element;
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], hostBindings: function ResumeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ResumeComponent_scroll_HostBindingHandler() { return ctx.checkScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("resize", function ResumeComponent_resize_HostBindingHandler() { return ctx.checkResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 10, consts: [[3, "activeSection", "pageXOffset", "ngClass"], ["in-viewport", "", 3, "pageYOffset", "inViewport"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-welcome", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_welcome_inViewport_1_listener($event) { return ctx.onViewport($event.value, "welcome"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-about", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_about_inViewport_2_listener($event) { return ctx.onViewport($event.value, "about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-experience", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_experience_inViewport_3_listener($event) { return ctx.onViewport($event.value, "experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-projects", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_projects_inViewport_4_listener($event) { return ctx.onViewport($event.value, "projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-contact", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_contact_inViewport_5_listener($event) { return ctx.onViewport($event.value, "contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeSection", ctx.activeSection)("pageXOffset", ctx.pageXOffset)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.isSticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"], _core_directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_6__["InViewportDirective"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: ["app-header[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    position: absolute;\n    z-index: 1001;\n    width: 100%;\n    padding: 1em 0;\n    transition: 0.3s;\n}\n\n.sticky[_ngcontent-%COMP%] {\n    position: fixed;\n    background-color: #fff;\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.43);\n}\n\napp-footer[_ngcontent-%COMP%] {\n    position: relative;\n    top: -3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXVCO1FBQXZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjQzKTtcbn1cblxuYXBwLWZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTNlbTtcbn0iXX0= */", "@media screen and (max-width: 1024px) {\n\n    app-header[_ngcontent-%COMP%] { padding: 0; }\n\n    .sticky[_ngcontent-%COMP%] {\n        background-color: transparent;\n        box-shadow: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhLFVBQVUsRUFBRTs7SUFFekI7UUFDSSw2QkFBNkI7UUFDN0IsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICBhcHAtaGVhZGVyIHsgcGFkZGluZzogMDsgfVxuXG4gICAgLnN0aWNreSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn0iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])()
], ResumeComponent.prototype, "checkScroll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(25)
], ResumeComponent.prototype, "checkResize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(150)
], ResumeComponent.prototype, "onViewport", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-resume",
                templateUrl: "./resume.component.html",
                styleUrls: ["./resume.component.css", "./resume.component.responsivity.css"]
            }]
    }], function () { return []; }, { checkScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:scroll"]
        }], checkResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:resize"]
        }], onViewport: [] }); })();


/***/ }),

/***/ "./src/app/resume/resume.module.ts":
/*!*****************************************!*\
  !*** ./src/app/resume/resume.module.ts ***!
  \*****************************************/
/*! exports provided: ResumeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeModule", function() { return ResumeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../welcome/welcome.molule */ "./src/app/welcome/welcome.molule.ts");
/* harmony import */ var _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../experience/experience.module */ "./src/app/experience/experience.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _posts_posts_molule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../posts/posts.molule */ "./src/app/posts/posts.molule.ts");
/* harmony import */ var _projects_projects_molule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../projects/projects.molule */ "./src/app/projects/projects.molule.ts");
/* harmony import */ var _contact_contact_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../contact/contact.service */ "./src/app/contact/contact.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
















class ResumeModule {
}
ResumeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResumeModule });
ResumeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResumeModule_Factory(t) { return new (t || ResumeModule)(); }, providers: [_contact_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__["WelcomeModule"],
            _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__["ExperienceModule"],
            _posts_posts_molule__WEBPACK_IMPORTED_MODULE_11__["PostsModule"],
            _projects_projects_molule__WEBPACK_IMPORTED_MODULE_12__["ProjectsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumeModule, { declarations: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__["WelcomeModule"],
        _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__["ExperienceModule"],
        _posts_posts_molule__WEBPACK_IMPORTED_MODULE_11__["PostsModule"],
        _projects_projects_molule__WEBPACK_IMPORTED_MODULE_12__["ProjectsModule"]], exports: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__["WelcomeModule"],
                    _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__["ExperienceModule"],
                    _posts_posts_molule__WEBPACK_IMPORTED_MODULE_11__["PostsModule"],
                    _projects_projects_molule__WEBPACK_IMPORTED_MODULE_12__["ProjectsModule"]
                ],
                declarations: [
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
                ],
                exports: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]],
                providers: [_contact_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome-background/welcome-background.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/welcome/welcome-background/welcome-background.component.ts ***!
  \****************************************************************************/
/*! exports provided: WelcomeBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeBackgroundComponent", function() { return WelcomeBackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WelcomeBackgroundComponent {
    constructor() {
    }
    ngOnInit() { }
}
WelcomeBackgroundComponent.ɵfac = function WelcomeBackgroundComponent_Factory(t) { return new (t || WelcomeBackgroundComponent)(); };
WelcomeBackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeBackgroundComponent, selectors: [["app-welcome-background"]], decls: 15, vars: 0, consts: [[1, "skills"], ["loading", "lazy", "src", "/assets/template/welcome/illustration-back.png", "alt", "Background circle", 1, "background"], ["loading", "lazy", "src", "/assets/template/welcome/icons/jenkins.svg", "alt", "Jenkins", 1, "skill-icon", "first"], ["loading", "lazy", "src", "/assets/template/welcome/icons/apache_tomcat.svg", "alt", "Apache Tomcat", 1, "skill-icon", "second"], ["loading", "lazy", "src", "/assets/template/welcome/icons/git.svg", "alt", "Git", 1, "skill-icon", "third"], ["loading", "lazy", "src", "/assets/template/welcome/icons/postgresql.svg", "alt", "PostgreSQL", 1, "skill-icon", "fourth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/mysql.svg", "alt", "MySQL", 1, "skill-icon", "fifth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/AWS.svg", "alt", "AWS", 1, "skill-icon", "sixth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/springio.svg", "alt", "Spring", 1, "skill-icon", "seventh"], ["loading", "lazy", "src", "/assets/template/welcome/icons/java.svg", "alt", "JAVA", 1, "skill-icon", "eighth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/python.svg", "alt", "Python", 1, "skill-icon", "ninth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/camunda.svg", "alt", "Camunda", 1, "skill-icon", "tenth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/javascript.svg", "alt", "JavaScript", 1, "skill-icon", "eleventh"], ["loading", "lazy", "src", "/assets/template/welcome/icons/angular.svg", "alt", "Angular", 1, "skill-icon", "tweleth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/html5.svg", "alt", "HTML5", 1, "skill-icon", "thirteenth"]], template: function WelcomeBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".skills[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 5px;\n  z-index: 0;\n}\n.skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n  width: 535px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px;\n  animation-name: floating-icons;\n  -webkit-animation-name: floating-icons;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%]:nth-child(2n+3) {\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n  top: 385px;\n  left: -35px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n  top: 340px;\n  left: -55px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n  top: 300px;\n  left: -65px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n  top: 240px;\n  left: -70px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n  top: 200px;\n  left: -75px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n  top: 145px;\n  left: -55px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n  top: 90px;\n  right: 520px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n  top: 35px;\n  right: 490px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n  top: 0px;\n  right: 450px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.tenth[_ngcontent-%COMP%] {\n  top: -35px;\n  right: 400px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.eleventh[_ngcontent-%COMP%] {\n  top: -60px;\n  right: 340px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.tweleth[_ngcontent-%COMP%] {\n  top: -65px;\n  right: 290px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.thirteenth[_ngcontent-%COMP%] {\n  top: -55px;\n  right: 240px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fourteenth[_ngcontent-%COMP%] {\n  bottom: 380px;\n  right: -70px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fifteenth[_ngcontent-%COMP%] {\n  bottom: 420px;\n  right: -60px;\n}\n@-webkit-keyframes floating-icons {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(5%, 15%);\n  }\n  50% {\n    transform: translate(10%, 5%);\n  }\n  75% {\n    transform: translate(0%, 15%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n@keyframes floating-icons {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(5%, 15%);\n  }\n  50% {\n    transform: translate(10%, 5%);\n  }\n  75% {\n    transform: translate(0%, 15%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS1iYWNrZ3JvdW5kL3dlbGNvbWUtYmFja2dyb3VuZC5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUtYmFja2dyb3VuZC93ZWxjb21lLWJhY2tncm91bmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDSCxVQUFBO0FDQ0Q7QURDQztFQUNDLFlBQUE7QUNDRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBR0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0ZGO0FES0U7RUFDQyw4QkFBQTtVQUFBLHNCQUFBO0FDSEg7QURPRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDTEg7QURRRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDTkg7QURTRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDUEg7QURVRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDUkg7QURXRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDVEg7QURZRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDVkg7QURhRTtFQUNDLFNBQUE7RUFDQSxZQUFBO0FDWEg7QURjRTtFQUNDLFNBQUE7RUFDQSxZQUFBO0FDWkg7QURlRTtFQUNDLFFBQUE7RUFDQSxZQUFBO0FDYkg7QURnQkU7RUFDQyxVQUFBO0VBQ0EsWUFBQTtBQ2RIO0FEZ0JFO0VBQ0MsVUFBQTtFQUNBLFlBQUE7QUNkSDtBRGdCRTtFQUNDLFVBQUE7RUFDQSxZQUFBO0FDZEg7QURnQkU7RUFDQyxVQUFBO0VBQ0EsWUFBQTtBQ2RIO0FEZ0JFO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUNkSDtBRGdCRTtFQUNDLGFBQUE7RUFDQSxZQUFBO0FDZEg7QURtQkE7RUFDQztJQUFLLDRCQUFBO0VDZko7RURnQkQ7SUFBTSw2QkFBQTtFQ2JMO0VEY0Q7SUFBTSw2QkFBQTtFQ1hMO0VEWUQ7SUFBTSw2QkFBQTtFQ1RMO0VEVUQ7SUFBTyw0QkFBQTtFQ1BOO0FBQ0Y7QURDQTtFQUNDO0lBQUssNEJBQUE7RUNmSjtFRGdCRDtJQUFNLDZCQUFBO0VDYkw7RURjRDtJQUFNLDZCQUFBO0VDWEw7RURZRDtJQUFNLDZCQUFBO0VDVEw7RURVRDtJQUFPLDRCQUFBO0VDUE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS1iYWNrZ3JvdW5kL3dlbGNvbWUtYmFja2dyb3VuZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxscyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUwcHg7XG4gICAgbGVmdDogNXB4O1xuXHR6LWluZGV4OiAwO1xuXHRcblx0aW1nLmJhY2tncm91bmQge1xuXHRcdHdpZHRoOiA1MzVweDtcblx0fVxuXG5cdC5za2lsbC1pY29uIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0d2lkdGg6IDUwcHg7XG5cblx0XHQvLyBEZWZpbmUgdGhlIGFuaW1hdGlvbnMgZm9yIHRoZSBpY29uc1xuXHRcdGFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZy1pY29ucztcblx0XHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZy1pY29ucztcblx0XHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuXHRcdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXHRcdC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcblxuXHRcdC8vIE9kZCBpY29ucyBoYXZlIGRpZmZlcmVudCBhbmltYXRpb24gZnJhbWUuXG5cdFx0JjpudGgtY2hpbGQoMm4rMykge1xuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcblx0XHR9XG5cblx0XHQvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nXG5cdFx0Ji5maXJzdCB7XG5cdFx0XHR0b3A6IDM4NXB4O1xuXHRcdFx0bGVmdDogLTM1cHg7XG5cdFx0fVxuXG5cdFx0Ji5zZWNvbmQge1xuXHRcdFx0dG9wOiAzNDBweDtcblx0XHRcdGxlZnQ6IC01NXB4O1xuXHRcdH1cblxuXHRcdCYudGhpcmQge1xuXHRcdFx0dG9wOiAzMDBweDtcblx0XHRcdGxlZnQ6IC02NXB4O1xuXHRcdH1cblxuXHRcdCYuZm91cnRoIHtcblx0XHRcdHRvcDogMjQwcHg7XG5cdFx0XHRsZWZ0OiAtNzBweDtcblx0XHR9XG5cblx0XHQmLmZpZnRoIHtcblx0XHRcdHRvcDogMjAwcHg7XG5cdFx0XHRsZWZ0OiAtNzVweDtcblx0XHR9XG5cblx0XHQmLnNpeHRoIHtcblx0XHRcdHRvcDogMTQ1cHg7XG5cdFx0XHRsZWZ0OiAtNTVweDtcblx0XHR9XG5cblx0XHQmLnNldmVudGgge1xuXHRcdFx0dG9wOiA5MHB4O1xuXHRcdFx0cmlnaHQ6IDUyMHB4O1xuXHRcdH1cblxuXHRcdCYuZWlnaHRoIHtcblx0XHRcdHRvcDogMzVweDtcblx0XHRcdHJpZ2h0OiA0OTBweDtcblx0XHR9XG5cblx0XHQmLm5pbnRoIHtcblx0XHRcdHRvcDogMHB4O1xuXHRcdFx0cmlnaHQ6IDQ1MHB4O1xuXHRcdH1cblxuXHRcdCYudGVudGgge1xuXHRcdFx0dG9wOiAtMzVweDtcblx0XHRcdHJpZ2h0OiA0MDBweDtcblx0XHR9XG5cdFx0Ji5lbGV2ZW50aCB7XG5cdFx0XHR0b3A6IC02MHB4O1xuXHRcdFx0cmlnaHQ6IDM0MHB4O1xuXHRcdH1cblx0XHQmLnR3ZWxldGgge1xuXHRcdFx0dG9wOiAtNjVweDtcblx0XHRcdHJpZ2h0OiAyOTBweDtcblx0XHR9XG5cdFx0Ji50aGlydGVlbnRoIHtcblx0XHRcdHRvcDogLTU1cHg7XG5cdFx0XHRyaWdodDogMjQwcHg7XG5cdFx0fVxuXHRcdCYuZm91cnRlZW50aCB7XG5cdFx0XHRib3R0b206IDM4MHB4O1xuXHRcdFx0cmlnaHQ6IC03MHB4O1xuXHRcdH1cblx0XHQmLmZpZnRlZW50aCB7XG5cdFx0XHRib3R0b206IDQyMHB4O1xuXHRcdFx0cmlnaHQ6IC02MHB4O1xuXHRcdH1cblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nLWljb25zIHtcblx0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpOyB9XG5cdDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAxNSUpOyB9XHRcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAlLCA1JSk7IH1cdFxuXHQ3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMTUlKTsgfVx0XG5cdDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpOyB9XHRcdFx0XG59IiwiLnNraWxscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogNXB4O1xuICB6LWluZGV4OiAwO1xufVxuLnNraWxscyBpbWcuYmFja2dyb3VuZCB7XG4gIHdpZHRoOiA1MzVweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBhbmltYXRpb24tbmFtZTogZmxvYXRpbmctaWNvbnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nLWljb25zO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uOm50aC1jaGlsZCgybiszKSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLmZpcnN0IHtcbiAgdG9wOiAzODVweDtcbiAgbGVmdDogLTM1cHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLnNlY29uZCB7XG4gIHRvcDogMzQwcHg7XG4gIGxlZnQ6IC01NXB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbi50aGlyZCB7XG4gIHRvcDogMzAwcHg7XG4gIGxlZnQ6IC02NXB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbi5mb3VydGgge1xuICB0b3A6IDI0MHB4O1xuICBsZWZ0OiAtNzBweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24uZmlmdGgge1xuICB0b3A6IDIwMHB4O1xuICBsZWZ0OiAtNzVweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24uc2l4dGgge1xuICB0b3A6IDE0NXB4O1xuICBsZWZ0OiAtNTVweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24uc2V2ZW50aCB7XG4gIHRvcDogOTBweDtcbiAgcmlnaHQ6IDUyMHB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbi5laWdodGgge1xuICB0b3A6IDM1cHg7XG4gIHJpZ2h0OiA0OTBweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24ubmludGgge1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDQ1MHB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbi50ZW50aCB7XG4gIHRvcDogLTM1cHg7XG4gIHJpZ2h0OiA0MDBweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24uZWxldmVudGgge1xuICB0b3A6IC02MHB4O1xuICByaWdodDogMzQwcHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLnR3ZWxldGgge1xuICB0b3A6IC02NXB4O1xuICByaWdodDogMjkwcHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLnRoaXJ0ZWVudGgge1xuICB0b3A6IC01NXB4O1xuICByaWdodDogMjQwcHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLmZvdXJ0ZWVudGgge1xuICBib3R0b206IDM4MHB4O1xuICByaWdodDogLTcwcHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLmZpZnRlZW50aCB7XG4gIGJvdHRvbTogNDIwcHg7XG4gIHJpZ2h0OiAtNjBweDtcbn1cblxuQGtleWZyYW1lcyBmbG9hdGluZy1pY29ucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDE1JSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUsIDUlKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNSUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIH1cbn0iXX0= */", "@media screen and (max-width: 1024px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 140px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 390px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 310px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 250px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 175px;\n    left: -60px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 100px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -10px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -20px;\n    right: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 80px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 30px;\n    right: 0;\n  }\n}\n@media screen and (max-width: 880px) {\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 220px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 170px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 60px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -30px;\n    left: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -30px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 45px;\n    right: -15px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 27px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 165px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 130px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 90px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 50px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: -5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: 0;\n    right: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 50px;\n    right: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 22px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 135px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 105px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 70px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 35px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: -3px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 70px;\n    right: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 40px;\n    right: -20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 70px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 18px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -10px;\n    right: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 55px;\n    right: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 30px;\n    right: -10px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 50px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 16px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 110px;\n    left: -13px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 35px;\n    right: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbHNpbmdoL0Rlc2t0b3AvUHJvamVjdHMvUG9ydGZvbGlvL3Bhcm1hcmFraGlsLmdpdGh1Yi5pby9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS1iYWNrZ3JvdW5kL3dlbGNvbWUtYmFja2dyb3VuZC5yZXBvbnNpdml0eS5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUtYmFja2dyb3VuZC93ZWxjb21lLWJhY2tncm91bmQucmVwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksVUFBQTtFQ0FOO0VERU07SUFDSSxZQUFBO0VDQVY7RURHTTtJQUNJLFdBQUE7RUNEVjtFRElVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNGZDtFREtVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNIZDtFRE1VO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNKZDtFRE9VO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNMZDtFRFFVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNOZDtFRFNVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUNQZDtFRFVVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNSZDtFRFdVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUNUZDtFRFlVO0lBQ0ksWUFBQTtJQUNBLFFBQUE7RUNWZDtBQUNGO0FEZUE7RUFJUTtJQUNJLFlBQUE7RUNoQlY7RURtQk07SUFDSSxXQUFBO0VDakJWO0VEb0JVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNsQmQ7RURxQlU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ25CZDtFRHNCVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDcEJkO0VEdUJVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNyQmQ7RUR3QlU7SUFDSSxTQUFBO0lBQ0EsT0FBQTtFQ3RCZDtFRHlCVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VDdkJkO0VEMEJVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUN4QmQ7RUQyQlU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ3pCZDtFRDRCVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDMUJkO0FBQ0Y7QUQrQkE7RUFJUTtJQUNJLFlBQUE7RUNoQ1Y7RURtQ007SUFDSSxXQUFBO0VDakNWO0VEb0NVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNsQ2Q7RURxQ1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ25DZDtFRHNDVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDcENkO0VEdUNVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNyQ2Q7RUR3Q1U7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFQ3RDZDtFRHlDVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VDdkNkO0VEMENVO0lBQ0ksTUFBQTtJQUNBLFFBQUE7RUN4Q2Q7RUQyQ1U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ3pDZDtFRDRDVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDMUNkO0FBQ0Y7QUQrQ0E7RUFFSTtJQUNJLFVBQUE7RUM5Q047RURnRE07SUFDSSxZQUFBO0VDOUNWO0VEaURNO0lBQ0ksV0FBQTtFQy9DVjtFRGtEVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDaERkO0VEbURVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNqRGQ7RURvRFU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ2xEZDtFRHFEVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDbkRkO0VEc0RVO0lBQ0ksUUFBQTtJQUNBLFVBQUE7RUNwRGQ7RUR1RFU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQ3JEZDtFRHdEVTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VDdERkO0VEeURVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUN2RGQ7RUQwRFU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ3hEZDtBQUNGO0FENkRBO0VBRUk7SUFDSSxTQUFBO0VDNUROO0VEOERNO0lBQ0ksWUFBQTtFQzVEVjtFRCtETTtJQUNJLFdBQUE7RUM3RFY7RURnRVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQzlEZDtFRGlFVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDL0RkO0VEa0VVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNoRWQ7RURtRVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ2pFZDtFRG9FVTtJQUNJLFFBQUE7SUFDQSxPQUFBO0VDbEVkO0VEcUVVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUNuRWQ7RURzRVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ3BFZDtFRHVFVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDckVkO0VEd0VVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUN0RWQ7QUFDRjtBRDJFQTtFQUVJO0lBQ0ksU0FBQTtFQzFFTjtFRDRFTTtJQUNJLFlBQUE7RUMxRVY7RUQ2RU07SUFDSSxXQUFBO0VDM0VWO0VEOEVVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUM1RWQ7RUQrRVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQzdFZDtFRGdGVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDOUVkO0VEaUZVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUMvRWQ7RURrRlU7SUFDSSxRQUFBO0lBQ0EsT0FBQTtFQ2hGZDtFRG1GVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VDakZkO0VEb0ZVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNsRmQ7RURxRlU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ25GZDtFRHNGVTtJQUNJLFlBQUE7SUFDQSxRQUFBO0VDcEZkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUtYmFja2dyb3VuZC93ZWxjb21lLWJhY2tncm91bmQucmVwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gICAgLnNraWxscyB7XG4gICAgICAgIHRvcDogMTQwcHg7XG5cbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDM5MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDMxMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAyNTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxNzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTQ1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZmlmdGgge1xuICAgICAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDgwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG5cbiAgICAuc2tpbGxzIHtcblxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMjIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICB0b3A6IDE3MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC00NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRoaXJkIHtcbiAgICAgICAgICAgICAgICB0b3A6IDExNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC01MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDg1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDQ1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuXG4gICAgLnNraWxscyB7XG5cbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDI3cHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDE2NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA5MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogODVweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAuc2tpbGxzIHtcbiAgICAgICAgdG9wOiAxMDBweDtcblxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjJweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMTM1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRoaXJkIHtcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZm91cnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZmlmdGgge1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZXZlbnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNzBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cbiAgICAuc2tpbGxzIHtcbiAgICAgICAgdG9wOiA3MHB4O1xuXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMTVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogODVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNpeHRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2V2ZW50aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNTVweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gXG4gICAgLnNraWxscyB7XG4gICAgICAgIHRvcDogNTBweDtcblxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMTEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTEzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogODVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLnRoaXJkIHtcbiAgICAgICAgICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAzNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5za2lsbHMge1xuICAgIHRvcDogMTQwcHg7XG4gIH1cbiAgLnNraWxscyBpbWcuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDM5MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlyc3Qge1xuICAgIHRvcDogMzEwcHg7XG4gICAgbGVmdDogLTE1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZWNvbmQge1xuICAgIHRvcDogMjUwcHg7XG4gICAgbGVmdDogLTUwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi50aGlyZCB7XG4gICAgdG9wOiAxNzVweDtcbiAgICBsZWZ0OiAtNjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZvdXJ0aCB7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAtNDVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpZnRoIHtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogLTEwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zaXh0aCB7XG4gICAgdG9wOiAtMjBweDtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2V2ZW50aCB7XG4gICAgdG9wOiAtMjBweDtcbiAgICByaWdodDogNDBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmVpZ2h0aCB7XG4gICAgYm90dG9tOiA4MHB4O1xuICAgIHJpZ2h0OiAtNDBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLm5pbnRoIHtcbiAgICBib3R0b206IDMwcHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG4gIC5za2lsbHMgaW1nLmJhY2tncm91bmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uIHtcbiAgICB3aWR0aDogMzVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpcnN0IHtcbiAgICB0b3A6IDIyMHB4O1xuICAgIGxlZnQ6IC0yNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2Vjb25kIHtcbiAgICB0b3A6IDE3MHB4O1xuICAgIGxlZnQ6IC00NXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24udGhpcmQge1xuICAgIHRvcDogMTE1cHg7XG4gICAgbGVmdDogLTUwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5mb3VydGgge1xuICAgIHRvcDogNjBweDtcbiAgICBsZWZ0OiAtMzVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpZnRoIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNpeHRoIHtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IDQwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZXZlbnRoIHtcbiAgICB0b3A6IC0zMHB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZWlnaHRoIHtcbiAgICBib3R0b206IDg1cHg7XG4gICAgcmlnaHQ6IC00MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ubmludGgge1xuICAgIGJvdHRvbTogNDVweDtcbiAgICByaWdodDogLTE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5za2lsbHMgaW1nLmJhY2tncm91bmQge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uIHtcbiAgICB3aWR0aDogMjdweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpcnN0IHtcbiAgICB0b3A6IDE2NXB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2Vjb25kIHtcbiAgICB0b3A6IDEzMHB4O1xuICAgIGxlZnQ6IC0zNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24udGhpcmQge1xuICAgIHRvcDogOTBweDtcbiAgICBsZWZ0OiAtMzVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZvdXJ0aCB7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlmdGgge1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAtNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2l4dGgge1xuICAgIHRvcDogLTIwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNldmVudGgge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmVpZ2h0aCB7XG4gICAgYm90dG9tOiA4NXB4O1xuICAgIHJpZ2h0OiAtMzVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLm5pbnRoIHtcbiAgICBib3R0b206IDUwcHg7XG4gICAgcmlnaHQ6IC0yNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2tpbGxzIHtcbiAgICB0b3A6IDEwMHB4O1xuICB9XG4gIC5za2lsbHMgaW1nLmJhY2tncm91bmQge1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uIHtcbiAgICB3aWR0aDogMjJweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpcnN0IHtcbiAgICB0b3A6IDEzNXB4O1xuICAgIGxlZnQ6IC0xNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2Vjb25kIHtcbiAgICB0b3A6IDEwNXB4O1xuICAgIGxlZnQ6IC0yNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24udGhpcmQge1xuICAgIHRvcDogNzBweDtcbiAgICBsZWZ0OiAtMzBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZvdXJ0aCB7XG4gICAgdG9wOiAzNXB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlmdGgge1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IC0zcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zaXh0aCB7XG4gICAgdG9wOiAtMjBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2V2ZW50aCB7XG4gICAgdG9wOiAtNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5laWdodGgge1xuICAgIGJvdHRvbTogNzBweDtcbiAgICByaWdodDogLTMwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5uaW50aCB7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnNraWxscyB7XG4gICAgdG9wOiA3MHB4O1xuICB9XG4gIC5za2lsbHMgaW1nLmJhY2tncm91bmQge1xuICAgIHdpZHRoOiAxNzBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uIHtcbiAgICB3aWR0aDogMThweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpcnN0IHtcbiAgICB0b3A6IDExNXB4O1xuICAgIGxlZnQ6IC0xNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2Vjb25kIHtcbiAgICB0b3A6IDg1cHg7XG4gICAgbGVmdDogLTI1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi50aGlyZCB7XG4gICAgdG9wOiA1NXB4O1xuICAgIGxlZnQ6IC0yNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZm91cnRoIHtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogLTE1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maWZ0aCB7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogMDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNpeHRoIHtcbiAgICB0b3A6IC0xMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZXZlbnRoIHtcbiAgICB0b3A6IC0xMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZWlnaHRoIHtcbiAgICBib3R0b206IDU1cHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ubmludGgge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICByaWdodDogLTEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5za2lsbHMge1xuICAgIHRvcDogNTBweDtcbiAgfVxuICAuc2tpbGxzIGltZy5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbiB7XG4gICAgd2lkdGg6IDE2cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maXJzdCB7XG4gICAgdG9wOiAxMTBweDtcbiAgICBsZWZ0OiAtMTNweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNlY29uZCB7XG4gICAgdG9wOiA4NXB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24udGhpcmQge1xuICAgIHRvcDogNTVweDtcbiAgICBsZWZ0OiAtMjVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZvdXJ0aCB7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IC0xNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlmdGgge1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zaXh0aCB7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2V2ZW50aCB7XG4gICAgdG9wOiAtNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZWlnaHRoIHtcbiAgICBib3R0b206IDM1cHg7XG4gICAgcmlnaHQ6IC0xNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ubmludGgge1xuICAgIGJvdHRvbTogMTVweDtcbiAgICByaWdodDogMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeBackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-welcome-background",
                templateUrl: "./welcome-background.component.html",
                styleUrls: ["./welcome-background.scss", "./welcome-background.reponsivity.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts":
/*!***********************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts ***!
  \***********************************************************************/
/*! exports provided: Typed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typed", function() { return Typed; });
class Typed {
    constructor(element, options, phrases) {
        const defaults = {
            typeSpeed: 250,
            startDelay: 2000,
            phrasePeriod: 200
        };
        this.text = "";
        this.isDeleting = false;
        this.loopNum = 0;
        this.element = element;
        this.options = Object.assign(Object.assign({}, defaults), options);
        this.phrases = phrases;
        this.appendAnimationCss();
    }
    begin() {
        this.timeout = setTimeout(() => {
            this.typewrite();
        }, this.options.startDelay);
    }
    insertSpan(text) {
        this.element.innerHTML = `<span class="wrap">${text}</span>`;
    }
    typewrite() {
        let i = this.loopNum % this.phrases.length;
        let fullTxt = this.phrases[i];
        if (this.isDeleting) {
            this.text = fullTxt.substring(0, this.text.length - 1);
        }
        else {
            this.text = fullTxt.substring(0, this.text.length + 1);
        }
        this.insertSpan(this.text);
        let that = this;
        let delta = this.options.typeSpeed - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.text === fullTxt) {
            delta = this.options.phrasePeriod;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.text === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.typewrite();
        }, delta);
    }
    appendAnimationCss() {
        let css = document.createElement("style");
        css.type = "text/css";
        css.id = "typing";
        const innerCss = `
            .txt-rotate > .wrap::after {
                content: "|";
                opacity: 1;
                animation: typedBlink 0.7s infinite;
                -webkit-animation: typedBlink 0.7s infinite;
                animation: typedBlink 0.7s infinite;
            }
            @keyframes typedBlink{
                50% { opacity: 0.0; }
            }
            @-webkit-keyframes typedBlink{
                0% { opacity: 1; }
                50% { opacity: 0.0; }
                100% { opacity: 1; }
            }
        `;
        css.innerHTML = innerCss;
        document.head.appendChild(css);
    }
}


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts ***!
  \********************************************************************************************/
/*! exports provided: TypingAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingAnimationDirective", function() { return TypingAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _typed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typed */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts");



class TypingAnimationDirective {
    constructor(elRef, locale) {
        this.elRef = elRef;
        this.locale = locale;
        this.phrases = [];
        this._flatMap = (f, xs) => xs.reduce((acc, x) => acc.concat(f(x)), []);
    }
    ngOnInit() {
        const nestedArr = this.data.filter(el => el.language === ("en"));
        this.phrases = this._flatMap(el => el.phrases, nestedArr);
        if (this.checkContent()) {
            this.createTyped();
        }
    }
    checkContent() {
        return this.phrases.length > 0;
    }
    createTyped() {
        this.typed = new _typed__WEBPACK_IMPORTED_MODULE_1__["Typed"](this.elRef.nativeElement, {
            typeSpeed: this.typeSpeed,
            startDelay: this.startDelay,
            phrasePeriod: this.phrasePeriod
        }, this.phrases);
        this.typed.begin();
    }
}
TypingAnimationDirective.ɵfac = function TypingAnimationDirective_Factory(t) { return new (t || TypingAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
TypingAnimationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TypingAnimationDirective, selectors: [["", "typingAnimation", ""]], inputs: { phrasePeriod: "phrasePeriod", typeSpeed: "typeSpeed", startDelay: "startDelay", data: "data" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypingAnimationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[typingAnimation]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { phrasePeriod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["phrasePeriod"]
        }], typeSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["typeSpeed"]
        }], startDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["startDelay"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["data"]
        }] }); })();


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TypingAnimationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingAnimationModule", function() { return TypingAnimationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typing-animation.directive */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts");



class TypingAnimationModule {
}
TypingAnimationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TypingAnimationModule });
TypingAnimationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TypingAnimationModule_Factory(t) { return new (t || TypingAnimationModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypingAnimationModule, { declarations: [_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]], exports: [_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypingAnimationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]
                ],
                exports: [
                    _typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: WelcomeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDialogComponent", function() { return WelcomeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_dialog_typing_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-dialog-typing/typing-animation.directive */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts");



var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc dialog
     */ 
    const MSG_EXTERNAL_hello$$SRC_APP_WELCOME_WELCOME_DIALOG_WELCOME_DIALOG_COMPONENT_TS_1 = goog.getMsg("Hello !");
    I18N_0 = MSG_EXTERNAL_hello$$SRC_APP_WELCOME_WELCOME_DIALOG_WELCOME_DIALOG_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:dialog@@hello␟055f1db3345092eb8a1f7908f06753afe8941af3␟1880568737035736953:Hello !`;
}
const _c2 = function () { return ["Meu nome \u00E9 Akhil.", "Bem vindo ao meu portf\u00F3lio", "L\u00E1 embaixo voc\u00EA vai me conhecer melhor ... :)"]; };
const _c3 = function (a1) { return { "language": "pt", "phrases": a1 }; };
const _c4 = function () { return ["My name is Akhil.", "Welcome to my portfolio", "Down below, you will know me better... :)"]; };
const _c5 = function (a1) { return { "language": "en", "phrases": a1 }; };
const _c6 = function (a0, a1) { return [a0, a1]; };
class WelcomeDialogComponent {
    constructor() {
    }
    ngOnInit() { }
}
WelcomeDialogComponent.ɵfac = function WelcomeDialogComponent_Factory(t) { return new (t || WelcomeDialogComponent)(); };
WelcomeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeDialogComponent, selectors: [["app-welcome-dialog"]], decls: 6, vars: 13, consts: [[1, "dialog-container"], ["loading", "lazy", "src", "./assets/template/welcome/bubble-frame.png", "alt", "Welcome Speech Bobble"], [1, "console"], [1, "hello"], ["typingAnimation", "", 1, "txt-rotate", 3, "phrasePeriod", "startDelay", "typeSpeed", "data"]], template: function WelcomeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phrasePeriod", 2000)("startDelay", 1500)("typeSpeed", 200)("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4))));
    } }, directives: [_welcome_dialog_typing_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n\tz-index: 2;\n\tmargin-top: 5em;\n\t-webkit-animation: float-dialog 6s ease-in-out infinite;\n\t        animation: float-dialog 6s ease-in-out infinite;\n}\n.dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 580px;\n    margin-left: -7em;\n}\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n\tposition: absolute;\n    top: 7em;\n    left: -5px;\n    width: 380px;\n\ttext-align: center;\n}\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tmargin: 0;\n    padding: 0;\n    text-align: center;\n}\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n\tfont-size: 60px;\n    font-weight: 600;\n    color: #222f5c;\n}\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n\tfont-size: 40px;\n    color: #576183;\n\tfont-weight: 600;\n\tmargin-top: 10px;\n}\n\n@-webkit-keyframes float-dialog {\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(-20px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n}\n@keyframes float-dialog {\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(-20px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUFxQjtBQUNyQjtDQUNDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsdURBQStDO1NBQS9DLCtDQUErQztBQUNoRDtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUVBO0NBQ0Msa0JBQWtCO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxTQUFTO0lBQ04sVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUVBO0NBQ0MsZUFBZTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7Q0FDQyxlQUFlO0lBQ1osY0FBYztDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCO0FBRUEsK0JBQStCO0FBQy9CO0NBQ0M7RUFDQywwQkFBMEI7Q0FDM0I7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0FBQ0Q7QUFWQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDBCQUEwQjtDQUMzQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIERpYWxvZyBjb250YWluZXIgKi9cbi5kaWFsb2ctY29udGFpbmVyIHtcblx0ei1pbmRleDogMjtcblx0bWFyZ2luLXRvcDogNWVtO1xuXHRhbmltYXRpb246IGZsb2F0LWRpYWxvZyA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogNTgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC03ZW07XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogN2VtO1xuICAgIGxlZnQ6IC01cHg7XG4gICAgd2lkdGg6IDM4MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHAge1xuXHRtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG5cdGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMjIyZjVjO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG5cdGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogIzU3NjE4Mztcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cblxuLyogRGlhbG9nIGNvbnRhaW5lciBhbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgZmxvYXQtZGlhbG9nIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xuXHR9XG5cdDUwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0yMHB4KTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTtcblx0fVxufSJdfQ== */", "@media screen and (max-width: 1024px) {\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 435px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 6em;\n        width: 280px;\n        left: -2em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 40px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 25px;\n    }\n\n}\n\n@media screen and (max-width: 880px) {\n    \n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 325px;\n        margin-left: -5em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 4em;\n        width: 210px;\n        left: -1em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (max-width: 720px) {\n        \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 2em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 310px;\n        margin-left: -4em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 4em;\n        width: 210px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (max-width: 600px) {\n        \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 2em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 220px;\n        margin-left: -3em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 40px;\n        width: 130px;\n        left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n\n@media screen and (max-width: 500px) {\n         \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 3em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 160px;\n        margin-left: -45px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 30px;\n        width: 120px;\n        left: -25px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 11px;\n        line-height: 15px;\n        display: inline-block;\n        margin-top: 5px;\n    }\n}\n\n@media screen and (max-width: 320px) {\n       \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 3em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 160px;\n        margin-left: -45px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 30px;\n        width: 120px;\n        left: -25px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 12px;\n        line-height: 15px;\n        display: inline-block;\n        margin-top: 5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogNDM1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDZlbTtcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICBsZWZ0OiAtMmVtO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogMzI1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiA0ZW07XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgbGVmdDogLTFlbTtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTRlbTtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XG4gICAgICAgIHRvcDogNGVtO1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zZW07XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00NXB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-welcome-dialog",
                templateUrl: "./welcome-dialog.component.html",
                styleUrls: ["./welcome-dialog.css", "./welcome-dialog.responsivity.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-background/welcome-background.component */ "./src/app/welcome/welcome-background/welcome-background.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ "./src/app/welcome/welcome-dialog/welcome-dialog.component.ts");




class WelcomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 6, vars: 0, consts: [["id", "welcome"], [1, "layer_one"], [1, "avatar-container"], ["loading", "lazy", "src", "../../../assets/template/welcome/akhil.png", "alt", "Akhil Parmar", 1, "illustration"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-welcome-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-welcome-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeBackgroundComponent"], _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeDialogComponent"]], styles: ["#welcome[_ngcontent-%COMP%] {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    height: 780px;\n    padding-top: 5em;\n}\n\n.layer_one[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    height: 780px;\n    z-index: 1;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBc0I7UUFBdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix1QkFBbUI7UUFBbkIsbUJBQW1CO0lBQ25CLHFCQUFpQjtRQUFqQixpQkFBaUI7SUFDakIscUJBQXVCO1FBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VsY29tZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDc4MHB4O1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG59XG5cbi5sYXllcl9vbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgIGhlaWdodDogNzgwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */", "@media screen and (max-width: 1024px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 585px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 585px;\n    }\n}\n\n@media screen and (max-width: 880px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 465px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 465px;\n    }\n}\n\n@media screen and (max-width: 720px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 385px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 385px;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 290px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 290px;\n    } \n}\n\n@media screen and (max-width: 500px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 250px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 250px;\n    } \n}\n\n@media screen and (max-width: 320px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 220px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 220px;\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS1jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDU4NXB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDU4NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgICAjd2VsY29tZSB7XG4gICAgICAgIGhlaWdodDogNDY1cHg7XG4gICAgfVxuICAgIFxuICAgIC5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XG4gICAgICAgIGhlaWdodDogNDY1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICN3ZWxjb21lIHtcbiAgICAgICAgaGVpZ2h0OiAzODVweDtcbiAgICB9XG4gICAgXG4gICAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAzODVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIH0gXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH0gXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH0gXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-welcome",
                templateUrl: "./welcome.component.html",
                styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.molule.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.molule.ts ***!
  \*******************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-background/welcome-background.component */ "./src/app/welcome/welcome-background/welcome-background.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ "./src/app/welcome/welcome-dialog/welcome-dialog.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog-typing/typing-animation.module */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts");






class WelcomeModule {
}
WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); }, imports: [[_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__["TypingAnimationModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"], _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeBackgroundComponent"], _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeDialogComponent"]], imports: [_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__["TypingAnimationModule"]], exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__["TypingAnimationModule"]],
                declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"], _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeBackgroundComponent"], _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeDialogComponent"]],
                exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyCzqPQ1qcM6U5rSggr6Ok84mTBpJttQGWo",
        authDomain: "parmarakhil-cd124.firebaseapp.com",
        databaseURL: "https://parmarakhil-cd124.firebaseio.com",
        projectId: "parmarakhil-cd124",
        storageBucket: "parmarakhil-cd124.appspot.com",
        messagingSenderId: "1067564090435",
        appId: "1:1067564090435:web:a5b41f154d2d1c68c340f6",
        measurementId: "G-STCVTNXQ2P"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akhilsingh/Desktop/Projects/Portfolio/parmarakhil.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map