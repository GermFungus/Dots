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

/***/ "./src/app/Services/apiparser/apiparser.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/apiparser/apiparser.service.ts ***!
  \*********************************************************/
/*! exports provided: ApiparserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiparserService", function() { return ApiparserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ApiparserService {
    constructor(httpClient, Router) {
        this.httpClient = httpClient;
        this.Router = Router;
    }
    hit(url, method, data, needRaw = false, headers = false) {
        url = "https://algofocus-assignment.herokuapp.com" + url;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.parse(this.httpClient[method](url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(60000)), needRaw, headers);
    }
    hitImage(url, method, data, needRaw = false, headers = false) {
        url = "https://algofocus-assignment.herokuapp.com" + url;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.parse(this.httpClient[method](url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(60000)), needRaw, headers);
    }
    parse(reqPromise, needRaw, headers) {
        return new Promise((resolve, reject) => {
            reqPromise.subscribe(function (res) {
                let response = res ? (res.data || res) : res;
                resolve(response);
            }, (res) => {
                if (res && res.status === 401) {
                    this.Router.navigate(['/']);
                }
                reject(res.error);
            });
        });
    }
}
ApiparserService.ɵfac = function ApiparserService_Factory(t) { return new (t || ApiparserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ApiparserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiparserService, factory: ApiparserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiparserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/registration/registration.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/Services/registration/registration.service.ts ***!
  \***************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apiparser/apiparser.service */ "./src/app/Services/apiparser/apiparser.service.ts");



class RegistrationService {
    constructor(parser) {
        this.parser = parser;
    }
    register(params) {
        return this.parser.hit('/user/register', 'post', { params: params });
    }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_1__["ApiparserService"])); };
RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_1__["ApiparserService"] }]; }, null); })();


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




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/common/header/header.component */ "./src/app/views/common/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/common/footer/footer.component */ "./src/app/views/common/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'frontEnd';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_views_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-module/main-module.module */ "./src/app/main-module/main-module.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/common/header/header.component */ "./src/app/views/common/header/header.component.ts");
/* harmony import */ var _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/common/footer/footer.component */ "./src/app/views/common/footer/footer.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__["MainModuleModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__["MainModuleModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__["MainModuleModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main-module/main-module.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-module/main-module.component.ts ***!
  \******************************************************/
/*! exports provided: MainModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModuleComponent", function() { return MainModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_registration_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/registration/registration.service */ "./src/app/Services/registration/registration.service.ts");
/* harmony import */ var _Services_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/apiparser/apiparser.service */ "./src/app/Services/apiparser/apiparser.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");









function MainModuleComponent_div_3_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First Name is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid Name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_14_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_3_div_27_p_14_span_2_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.errors.pattern);
} }
function MainModuleComponent_div_3_div_27_p_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Last Name is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid last name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_20_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_3_div_27_p_20_span_2_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r10.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r10.errors.pattern);
} }
function MainModuleComponent_div_3_div_27_p_26_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_26_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_26_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_3_div_27_p_26_span_2_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r12.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r12.errors.pattern);
} }
function MainModuleComponent_div_3_div_27_p_36_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date of Birth is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_36_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r15.errors.required);
} }
function MainModuleComponent_div_3_div_27_p_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "For further proceeding age should be above 18 years !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_43_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Phone Number is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_p_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_43_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r18.errors.required);
} }
function MainModuleComponent_div_3_div_27_p_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Phone Number is required with 10 digits only no spaces!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainModuleComponent_div_3_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Fill Your Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MainModuleComponent_div_3_div_27_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.register(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MainModuleComponent_div_3_div_27_p_14_Template, 3, 2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MainModuleComponent_div_3_div_27_p_20_Template, 3, 2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MainModuleComponent_div_3_div_27_p_26_Template, 3, 2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Date Of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainModuleComponent_div_3_div_27_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return _r14.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, MainModuleComponent_div_3_div_27_p_36_Template, 2, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, MainModuleComponent_div_3_div_27_p_37_Template, 3, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, MainModuleComponent_div_3_div_27_p_43_Template, 2, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, MainModuleComponent_div_3_div_27_p_44_Template, 3, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Profile Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MainModuleComponent_div_3_div_27_Template_input_change_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.picUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "You\u2019ll love Offorms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " for developers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Your data is safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Build better understanding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Showcase all your skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r8.valid && _r7.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r10.valid && _r7.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r12.valid && _r7.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r15.valid && _r7.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.ageRes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r18.valid && _r7.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.phoneState);
} }
function MainModuleComponent_div_3_div_28_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r35.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r35.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r35.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r35.dp.day + "-" + data_r35.dp.month + "-" + data_r35.dp.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r35.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", data_r35.picUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MainModuleComponent_div_3_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Profile Pic URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MainModuleComponent_div_3_div_28_div_15_Template, 18, 6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.completeData);
} }
function MainModuleComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Join Offorms - Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Submit your details for evaluation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MainModuleComponent_div_3_li_10_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MainModuleComponent_div_3_li_11_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Step 1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Complete the form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MainModuleComponent_div_3_li_20_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MainModuleComponent_div_3_li_21_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Step 2: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Save and Veiw Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MainModuleComponent_div_3_div_27_Template, 74, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MainModuleComponent_div_3_div_28_Template, 16, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.step == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.step == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.step == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.step == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.step == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.step == 2);
} }
class MainModuleComponent {
    constructor(router, route, RegistrationService, ApiParser) {
        this.router = router;
        this.route = route;
        this.RegistrationService = RegistrationService;
        this.ApiParser = ApiParser;
        this.step = 1;
        this.looper = [1];
        this.counter = 1;
        this.phoneState = true;
        this.ageRes = false;
        this.picUpload = (event) => {
            this.pic = event.target.files[0];
            console.log("Yes");
            console.log(this.pic);
        };
    }
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = yield this.ApiParser.hit('/user/data', 'get', {});
            return data;
        });
    }
    uploadImage(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resp = yield this.ApiParser.hitImage('/user/register', 'post', data);
            return resp;
        });
    }
    register(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!user || !user.valid)
                return;
            var userToSend = {
                user: user.form.value
            };
            var dob = new Date(user.form.value.dp.year, user.form.value.dp.month, user.form.value.dp.day);
            var today = new Date();
            var age = today.getFullYear() - dob.getFullYear();
            var month = today.getMonth();
            -dob.getMonth();
            if (month < 0 || (month === 0 && (today.getDate() < dob.getDate()))) {
                --age;
            }
            if (age < 18) {
                this.ageRes = true;
                return 0;
            }
            else {
                this.ageRes = false;
                console.log(userToSend);
                this.RegistrationService.register(userToSend).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (result[0] === 'sucess') {
                        let image = new FormData();
                        image.append('file', this.pic, user.form.value.email);
                        let upload = yield this.uploadImage(image);
                        if (upload === 'sucsess') {
                            console.log('done');
                        }
                        this.userDetails = userToSend;
                        console.log(this.userDetails);
                        this.step = 2;
                        this.completeData = yield this.fetchData();
                    }
                    if (result[0] === 'Incomplete') {
                        this.phoneState = false;
                    }
                })).catch((err) => {
                    err = err || new Object();
                });
            }
        });
    }
    continue() {
        this.step = this.step + 1;
    }
    adder() {
        this.counter = this.counter + 1;
        this.looper.push(this.counter);
    }
    ngOnInit() { }
}
MainModuleComponent.ɵfac = function MainModuleComponent_Factory(t) { return new (t || MainModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_registration_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_4__["ApiparserService"])); };
MainModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainModuleComponent, selectors: [["app-main-module"]], decls: 4, vars: 1, consts: [[1, "home-main-container"], [1, "developer_registartion"], [1, "container"], ["class", "main-registration-part", 4, "ngIf"], [1, "main-registration-part"], [1, "heading-11"], [1, "tab-section"], [1, "Coloumn-gap"], [1, "steps-details"], [4, "ngIf"], [2, "margin-top", "4px !important"], ["src", "assets/images/Head-Icon.png", "alt", ""], ["src", "assets/images/HeadGrey.png", "alt", ""], ["src", "assets/images/link_icon_grey.png", "alt", ""], ["src", "assets/images/link_icon_blue.png", "alt", ""], [1, "step-1-section"], [1, "step-form-information"], [1, "row"], [1, "col-md-6", "col-sm-6"], [1, "w_60", 3, "ngSubmit"], ["user", "ngForm"], [1, "form-group"], ["ngModel", "", "required", "", "type", "text", "name", "firstName", "placeholder", "First Name", "pattern", "[a-zA-Z][a-zA-Z ]+", 1, "form-control"], ["firstName", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["ngModel", "", "required", "", "type", "text", "name", "lastName", "placeholder", "Last Name", "pattern", "[a-zA-Z][a-zA-Z ]+", 1, "form-control"], ["lastName", "ngModel"], ["ngModel", "", "required", "", "type", "email", "name", "email", "placeholder", "Email", "pattern", "^[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$", 1, "form-control"], ["email", "ngModel"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngModel", "", "ngbDatepicker", "", "required", "", 1, "form-control"], ["d", "ngbDatepicker", "dp", "ngModel"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["ngModel", "", "required", "", "type", "text", "name", "phone", "placeholder", "Number", "required", "", 1, "form-control"], ["phone", "ngModel"], ["ngModel", "", "type", "file", "name", "pic", 1, "form-control", 3, "change"], ["pic", "ngModel"], ["type", "submit", 1, "button", "btn-steps"], [1, "free-points"], [1, "free"], [1, "list"], [1, "text-danger"], ["class", "d-block text-left mt-1 ml-1 small text-danger", 4, "ngIf"], [1, "d-block", "text-left", "mt-1", "ml-1", "small", "text-danger"], [1, "step-2-section"], [1, "tableRow"], [1, "tableCell"], ["class", "tableRow", 4, "ngFor", "ngForOf"], [1, "imgContainer", 3, "src"]], template: function MainModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainModuleComponent_div_3_Template, 29, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step != 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: Lato-Light;\n  src: url(/assets/font/Lato-Light.ttf);\n}\n@font-face {\n  font-family: Lato-Regular;\n  src: url(/assets/font/Lato-Regular.ttf);\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  font-family: Lato-Light;\n}\n.home-main-container[_ngcontent-%COMP%] {\n  margin-bottom: 170px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n  background-color: #232633;\n  width: 100%;\n  padding: 23px 55px 56px 104px;\n  position: relative;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: -28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .dotted-img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  bottom: -62px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 4px;\n  padding: 20px;\n  width: 375px;\n  box-shadow: 0px 6px 9px -1px #4a4a4a;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-image: url(/assets/images/down-arrow.png);\n  background-repeat: no-repeat;\n  background-position: right 15px bottom 7px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #707070;\n  font-size: 16px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .opp-text[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #707070;\n  font-size: 14px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .pad-2[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   .main_title[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 82%;\n  font-size: 36px;\n  font-weight: bold;\n  line-height: 45px;\n  margin-bottom: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 40px;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 5px 0px;\n  font-size: 20px;\n  font-style: italic;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 15px 0px;\n  font-size: 17px;\n  letter-spacing: 2px;\n  line-height: 25px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  padding: 50px 115px;\n  overflow: hidden;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 36px;\n  letter-spacing: 2px;\n  font-weight: 600;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mar-bot-25[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  margin-left: 13px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  color: #949494;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7777;\n  font-size: 18px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #595959;\n  margin-top: 9px;\n  height: 83px;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 29px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n  padding: 50px 115px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 37px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  color: #727272;\n  margin-bottom: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #727272;\n  margin-bottom: 20px;\n  font-size: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding: 50px 115px;\n  overflow: hidden;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 37px;\n  margin-bottom: 45px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  display: flex;\n  flex: 1 1 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 28px 20px;\n  text-align: center;\n  box-shadow: -3px 2px 13px 0px #c0cdce;\n  width: 100%;\n  position: relative;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  height: 80px;\n  font-size: 28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1px solid #ff6b81;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #707070;\n  font-size: 18px;\n  margin: 30px 0px 90px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .icon-tab[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #ff6b81;\n  border-radius: 50px;\n  display: inline-block;\n  margin: 15px 4px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%] {\n  padding: 22px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .btn-steps[_ngcontent-%COMP%] {\n  width: 217px;\n  height: 47px;\n  background: #7365a8;\n  color: #fff;\n  border: 0px;\n  font-size: 20px;\n  font-family: Lato-Regular;\n  border-radius: 4px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%] {\n  padding: 0px 50px;\n  margin-bottom: 30px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .heading-11[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .heading-11[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 40px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  padding: 7px 20px;\n  margin: 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 6px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-family: Lato-Regular;\n  margin-left: 30px;\n  display: block;\n  font-weight: 600;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #595959;\n  font-weight: normal;\n  display: block;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .Coloumn-gap[_ngcontent-%COMP%] {\n  width: 33%;\n  display: inline-block;\n  float: left;\n  border: 1px solid #a6a6a6;\n  margin-right: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%] {\n  padding: 34px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .w_60[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: Lato-Regular;\n  color: #595959;\n  font-weight: 100;\n  margin-bottom: 8px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .custom-idea[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  border-radius: 6px;\n  border: 1px solid #a6a6a6;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 320px;\n  float: right;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  padding: 20px 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .free[_ngcontent-%COMP%] {\n  padding: 0px 35px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .free[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  padding: 20px 35px;\n  list-style: none;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #32d039;\n  margin-right: 10px;\n  font-weight: bold;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n  margin: 15px 0 20px 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  top: -2px;\n  float: right;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-color: #abaaaa;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\u2713\";\n  position: absolute;\n  display: none;\n  color: #32d039;\n  top: 0;\n  left: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  background-color: #f8204f;\n  border-width: 2px;\n  border-color: #f8204f;\n  color: #fff;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f8204f;\n  background-color: #fff;\n  color: #f8204f;\n  border-radius: 20px;\n  transform-style: 2s;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n  width: 300px;\n  float: right;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n  margin: 15px 0 20px 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ff6b81;\n  font-size: 24px;\n  margin: 0px 27px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-custom.form-btn[_ngcontent-%COMP%] {\n  width: 300px;\n  float: right;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-add.skip-details[_ngcontent-%COMP%] {\n  clear: both;\n  float: right;\n  margin: 6px 0px;\n  color: #404040;\n  background: transparent;\n  font-size: 24px;\n}\n@media screen and (max-width: 1200px) {\n  .home-main-container[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mar-bot-25[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: 94px;\n    font-size: 21px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%] {\n    height: 84px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n    padding: 0px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #ff6b81;\n    border-radius: 50px;\n    display: inline-block;\n    margin: 15px 1px 0px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 0px 25px 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 50px 25px 12px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .mar-right[_ngcontent-%COMP%] {\n    border-right: 0px;\n    border-bottom: 1px solid #DCDCDC;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%] {\n    margin: 60px 0px 38px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 336px;\n    margin: 0 auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 17px;\n    margin-bottom: 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%] {\n    box-shadow: 0px 2px 13px 0px #c0cdce !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: 50px !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 4px 25px 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n    margin-top: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .dotted-img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 640px) {\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%] {\n    padding: 5px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .btn-steps[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 27px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n    margin-bottom: 10px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .Coloumn-gap[_ngcontent-%COMP%] {\n    display: block;\n    float: none;\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .w_60[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    border: 1px solid #ccc;\n    width: 100%;\n    float: none;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    padding-left: 25px;\n    margin-bottom: 12px;\n    top: -2px;\n    float: right;\n    cursor: pointer;\n    font-size: 15px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n    position: relative;\n    top: 3px;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    background-color: #fff;\n    border-color: #abaaaa;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n    background-color: #fff;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n    content: \"\u2713\";\n    position: absolute;\n    display: none;\n    color: #32d039;\n    top: 0;\n    left: 2px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    background-color: #f8204f;\n    border-width: 2px;\n    border-color: #f8204f;\n    color: #fff;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%]:hover {\n    border-color: #f8204f;\n    background-color: #fff;\n    color: #f8204f;\n    border-radius: 20px;\n    transform-style: 2s;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 14px;\n    height: 60px;\n    background: #7365a8;\n    color: #fff;\n    font-size: 24px;\n    font-family: Lato-Light;\n    letter-spacing: 1px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    color: #000;\n    font-family: Lato-Regular;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #979696;\n    font-size: 16px;\n    margin: 15px 0 20px 0;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #b7b7b7;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n    background: transparent;\n    color: #ff6b81;\n    font-size: 24px;\n    margin: 0px 27px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-custom.form-btn[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 14px;\n    height: 60px;\n    background: #7365a8;\n    color: #fff;\n    font-size: 24px;\n    font-family: Lato-Light;\n    letter-spacing: 1px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-add.skip-details[_ngcontent-%COMP%] {\n    clear: both;\n    float: right;\n    margin: 6px 0px;\n    color: #404040;\n    background: transparent;\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 4px 7px 77px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n    height: 42px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n    height: 58px;\n    font-size: 20px;\n    margin-top: 15px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 21px 7px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%] {\n    margin: 0px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%] {\n    margin: 30px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n    padding: 25px 14px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n    padding: 25px 7px;\n  }\n}\n.apllied[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-left: 20%;\n  text-align: center;\n  padding: 50px;\n  border: #595959 solid 1px;\n}\n.ha[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  margin: 15px;\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.pa[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n  margin: 15px;\n  text-decoration: none;\n  font-size: 16px;\n  color: #595959;\n  font-family: Lato-Regular;\n  display: block;\n  font-weight: 600;\n}\n.allData[_ngcontent-%COMP%] {\n  border: 1px solid #595959;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 5px;\n}\n.tableRow[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.tableCell[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 16%;\n  box-sizing: border-box;\n  font-size: 14px;\n  overflow: auto;\n  border: 1px solid black;\n  margin-bottom: 1px;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2px;\n}\n.tableCell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  margin: 0 !important;\n  overflow-wrap: break-word;\n}\n.imgContainer[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tb2R1bGUvbWFpbi1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4tbW9kdWxlL0Q6XFxXZWIgRGV2ZWxvcG1lbnRcXEFsZ29Gb2N1c1xcZnJvbnRFbmQvc3JjXFxhcHBcXG1haW4tbW9kdWxlXFxtYWluLW1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSx1QkFBQTtFQUNBLHFDQUFBO0FERUo7QUNBRTtFQUNFLHlCQUFBO0VBQ0EsdUNBQUE7QURFSjtBQ0FFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FERUo7QUNBRTtFQUNFLG9CQUFBO0FER0o7QUNGSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QURJTjtBQ0hNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURLUjtBQ0pRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRE1WO0FDSlE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBRE1WO0FDTFU7RUFDRSxtQkFBQTtBRE9aO0FDTlk7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7QURRZDtBQ05ZO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRFFkO0FDTlk7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEUWQ7QUNOWTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEUWQ7QUNMVTtFQUNFLFlBQUE7QURPWjtBQ0ZVO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FESVo7QUNGVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VB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QURsSE47QUNxSEk7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FEbEhOO0FDb0hJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGpITjtBQ29ISTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBRGpITjtBQ29ISTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FEakhOIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1tb2R1bGUvbWFpbi1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udC9MYXRvLUxpZ2h0LnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tUmVndWxhci50dGYpO1xufVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbn1cblxuLmhvbWUtbWFpbi1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNzBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNjMzO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjNweCA1NXB4IDU2cHggMTA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMjhweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmRvdHRlZC1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICBib3R0b206IC02MnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMzc1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggOXB4IC0xcHggIzRhNGE0YTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmZvcm0tYmFja2dyb3VuZCAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9kb3duLWFycm93LnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDE1cHggYm90dG9tIDdweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmZvcm0tYmFja2dyb3VuZCAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5mb3JtLWdyb3VwIC5vcHAtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5mb3JtLWdyb3VwIC5mb3JtLWN1c3RvbSB7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5wYWQtMiB7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmhlYWRpbmctdGV4dCAubWFpbl90aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogODIlO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmhlYWRpbmctdGV4dCBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmhlYWRpbmctdGV4dCBoNCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDE1cHggMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuYnRuLWN1c3RvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIge1xuICBwYWRkaW5nOiA1MHB4IDExNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuaGVhZGluZy10ZXh0LTIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5oZWFkaW5nLXRleHQtMiBoMiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5tYXItYm90LTI1IHtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCB7XG4gIHBhZGRpbmc6IDVweCA5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudXNlci1ib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5maXJzdC1ib3ggLnRleHQtYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5maXJzdC1ib3ggLnRleHQtYm94IGgzIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgY29sb3I6ICM5NDk0OTQ7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5maXJzdC1ib3ggLnRleHQtYm94IHAge1xuICBjb2xvcjogIzdhNzc3NztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5ib3gtdGV4dCBoMiB7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGhlaWdodDogODNweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IHAge1xuICBjb2xvcjogIzk3OTY5NjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAudXNlci1ib3gtY29ubmVjdCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAudXNlci1ib3gtY29ubmVjdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDUwcHggMTE1cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmhlYWRpbmctdGV4dC0yIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM3cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmZhcS1xdWVzdGlvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIC5mYXEtcXVlc3Rpb25zIC5mYXEtMSB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmZhcS1xdWVzdGlvbnMgLmZhcS0xIGgzIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgY29sb3I6ICM3MjcyNzI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmZhcS1xdWVzdGlvbnMgLmZhcS0xIHAge1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgY29sb3I6ICM3MjcyNzI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDUwcHggMTE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC5oZWFkaW5nLXRleHQtMiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzN3B4O1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgMDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLnNhbWUtYm94IC53b3JrLWJveC0xIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjhweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IC0zcHggMnB4IDEzcHggMHB4ICNjMGNkY2U7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGhlaWdodDogODBweDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3ggLndvcmstYm94LTEgaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY2YjgxO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3ggLndvcmstYm94LTEgcCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMzBweCAwcHggOTBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLnNhbWUtYm94IC53b3JrLWJveC0xIC5pY29uLXRhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3ggLndvcmstYm94LTEgLmNpcmNsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjZiODE7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxNXB4IDRweCAwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiB7XG4gIHBhZGRpbmc6IDIycHggMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLmJ0bi1zdGVwcyB7XG4gIHdpZHRoOiAyMTdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQge1xuICBwYWRkaW5nOiAwcHggNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5oZWFkaW5nLTExIGgyIHtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuaGVhZGluZy0xMSBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC50YWItc2VjdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogNDBweCAwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24gLnN0ZXBzLWRldGFpbHMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24gLnN0ZXBzLWRldGFpbHMgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIC5zdGVwcy1kZXRhaWxzIHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC50YWItc2VjdGlvbiAuc3RlcHMtZGV0YWlscyB1bCBsaSBhIHNwYW4ge1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24gLkNvbG91bW4tZ2FwIHtcbiAgd2lkdGg6IDMzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5zdGVwLWZvcm0taW5mb3JtYXRpb24ge1xuICBwYWRkaW5nOiAzNHB4IDBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIC53XzYwIHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5zdGVwLWZvcm0taW5mb3JtYXRpb24gLmN1c3RvbS1pZGVhIHtcbiAgcGFkZGluZzogMjBweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLmZyZWUtcG9pbnRzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDMyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLmZyZWUtcG9pbnRzIGgyIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyAuZnJlZSB7XG4gIHBhZGRpbmc6IDBweCAzNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLmZyZWUtcG9pbnRzIC5mcmVlIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyAubGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMzVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMgLmxpc3QgbGkge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLmZyZWUtcG9pbnRzIC5saXN0IGxpIHNwYW4ge1xuICBjb2xvcjogIzMyZDAzOTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gcCB7XG4gIGNvbG9yOiAjOTc5Njk2O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMTVweCAwIDIwcHggMDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiBoNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmZvcm0tY3VzdG9tIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgdG9wOiAtMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVja21hcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNhYmFhYWE7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCLinJNcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogIzMyZDAzOTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAycHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmN1c3QtYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MjA0ZjtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgY29sb3I6ICNmZmY7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmN1c3QtYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI2Y4MjA0ZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiAycztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuYnRuLWN1c3RvbSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gcCB7XG4gIGNvbG9yOiAjOTc5Njk2O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMTVweCAwIDIwcHggMDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gZm9ybSAuZm9ybS1jdXN0b20ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gZm9ybSAuYnRuLWFkZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmNmI4MTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDBweCAyN3B4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSAuYnRuLWN1c3RvbS5mb3JtLWJ0biB7XG4gIHdpZHRoOiAzMDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSAuYnRuLWFkZC5za2lwLWRldGFpbHMge1xuICBjbGVhcjogYm90aDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDZweCAwcHg7XG4gIGNvbG9yOiAjNDA0MDQwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmZvcm0tYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIHtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAubWFyLWJvdC0yNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveCBpbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQgaDIge1xuICAgIGhlaWdodDogOTRweDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQgcCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3ggcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLnVzZXItYm94LWNvbm5lY3Qge1xuICAgIGhlaWdodDogODRweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuaGVhZGluZy10ZXh0LTIge1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCB7XG4gICAgcGFkZGluZzogNTBweCAyNXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAud29yay1ib3gtMSBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLndvcmstYm94LTEgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLndvcmstYm94LTEgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZjZiODE7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4IDFweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDBweCAyNXB4IDUwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIHtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHggMTJweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYXItcmlnaHQge1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0RDO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24ge1xuICAgIG1hcmdpbjogNjBweCAwcHggMzhweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5maXJzdC1ib3gge1xuICAgIHdpZHRoOiAzMzZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5ib3gtdGV4dCBoMiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLnVzZXItYm94LWNvbm5lY3QgaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmZhcS1xdWVzdGlvbnMgLmZhcS0xIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIC5mYXEtcXVlc3Rpb25zIC5mYXEtMSBwIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLndvcmstYm94LTEge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTNweCAwcHggI2MwY2RjZSAhaW1wb3J0YW50O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLndvcmstYm94LTEgaDIge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLnNhbWUtYm94IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA0cHggMjVweCA1MHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZG90dGVkLWltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24ge1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLmJ0bi1zdGVwcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC50YWItc2VjdGlvbiAuQ29sb3Vtbi1nYXAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIC53XzYwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLmZyZWUtcG9pbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB0b3A6IC0ycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2FiYWFhYTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIuKck1wiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbG9yOiAjMzJkMDM5O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAycHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jdXN0LWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgyMDRmO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmN1c3QtYnRuOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNmODIwNGY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogI2Y4MjA0ZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybS1zdHlsZTogMnM7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmJ0bi1jdXN0b20ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gcCB7XG4gICAgY29sb3I6ICM5Nzk2OTY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMTVweCAwIDIwcHggMDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIGZvcm0gLmZvcm0tY3VzdG9tIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSBmb3JtIC5idG4tYWRkIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmNmI4MTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiAwcHggMjdweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIC5idG4tY3VzdG9tLmZvcm0tYnRuIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSAuYnRuLWFkZC5za2lwLWRldGFpbHMge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDZweCAwcHg7XG4gICAgY29sb3I6ICM0MDQwNDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA0cHggN3B4IDc3cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5mb3JtLWN1c3RvbSB7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmZvcm0tYmFja2dyb3VuZCAuYnRuLWN1c3RvbSB7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIge1xuICAgIHBhZGRpbmc6IDIxcHggN3B4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmhlYWRpbmctdGV4dC0yIGgyIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyB7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMzBweCAwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5ib3gtdGV4dCBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDI1cHggMTRweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IHtcbiAgICBwYWRkaW5nOiAyNXB4IDdweDtcbiAgfVxufVxuLmFwbGxpZWQge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJvcmRlcjogIzU5NTk1OSBzb2xpZCAxcHg7XG59XG5cbi5oYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG5cbi5wYSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hbGxEYXRhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NTk1OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLnRhYmxlUm93IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRhYmxlQ2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE2JTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udGFibGVDZWxsIHAge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5pbWdDb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iLCJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tTGlnaHQudHRmKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tUmVndWxhci50dGYpO1xyXG4gIH1cclxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwe1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcclxuICB9XHJcbiAgLmhvbWUtbWFpbi1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNzBweDtcclxuICAgIC5tYWluLXNlY3Rpb257XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDIzcHggNTVweCA1NnB4IDEwNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC5pbmZvcm1hdGlvbi1mb3JtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTI4cHg7XHJcbiAgICAgICAgLmRvdHRlZC1pbWd7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICAgIGJvdHRvbTogLTYycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMzc1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDlweCAtMXB4ICM0YTRhNGE7XHJcbiAgICAgICAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgc2VsZWN0e1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvZG93bi1hcnJvdy5wbmcpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTVweCBib3R0b20gN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHAtdGV4dHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcclxuICAgICAgICAgICAgICBjb2xvcjojNzA3MDcwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1jdXN0b217XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFkLTJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAubWFpbl90aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWN1c3RvbXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLy8gaGVpZ2h0OiA2N3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tMntcclxuICAgICAgcGFkZGluZzo1MHB4IDExNXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuaGVhZGluZy10ZXh0LTJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm1hci1ib3QtMjV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgICAgfVxyXG4gICAgICAuam9pbi1zZWN0aW9ucyB7XHJcbiAgICAgICAgLm1haW4tYm94LXNlY3Rpb257XHJcbiAgICAgICAgICAuZmlyc3QtYm94e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggOXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC51c2VyLWJveHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtYm94e1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM5NDk0OTQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdhNzc3NztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtdGV4dHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4M3B4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgY29sb3I6Izk3OTY5NjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLWJveC1jb25uZWN0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmFxLXNlY3Rpb257XHJcbiAgICAgIC5oZWFkaW5nLXRleHQtMntcclxuICBcclxuICAgICAgICBoMntcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGFkZGluZzo1MHB4IDExNXB4O1xyXG4gICAgICAuZmFxLXF1ZXN0aW9uc3tcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgLmZhcS0xe1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgICAgICAgICBjb2xvcjojNzI3MjcyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzI3MjcyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi00e1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIC5oZWFkaW5nLXRleHQtMntcclxuICAgICAgICBoMntcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBhZGRpbmc6NTBweCAxMTVweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLndvcmstc3RlcHN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIC5zYW1lLWJveHtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXg6IDEgMSAwO1xyXG4gICAgICAgICAgLndvcmstYm94LTF7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MjhweCAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggMnB4IDEzcHggMHB4ICNjMGNkY2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgIC8vIGNvbG9yOiNmZjZiODE7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjZiODE7XHJcbiAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweCA5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29uLXRhYntcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNpcmNsZXtcclxuICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmNmI4MTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IDE1cHggNHB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldmVsb3Blcl9yZWdpc3RhcnRpb257XHJcbiAgICAgIHBhZGRpbmc6IDIycHggMHB4O1xyXG4gICAgICAuYnRuLXN0ZXBze1xyXG4gICAgICAgIHdpZHRoOiAyMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQge1xyXG4gICAgICAgIC5oZWFkaW5nLTExIHtcclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAudGFiLXNlY3Rpb24ge1xyXG4gICAgICAgICAgLnN0ZXBzLWRldGFpbHMge1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBtYXJnaW46IDQwcHggMHB4O1xyXG4gICAgICAgICAgLkNvbG91bW4tZ2FwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdGVwLTEtc2VjdGlvbiB7XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzRweCAwcHg7XHJcbiAgICAgICAgICAgIC53XzYwe1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jdXN0b20taWRlYSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZnJlZS1wb2ludHMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mcmVle1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpc3R7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzNXB4O1xyXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzMyZDAzOTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0ZXAtMi1zZWN0aW9ue1xyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzk3OTY5NjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWN1c3RvbXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pyTXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICMzMmQwMzk7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrIHtcclxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAvLyAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgLy8gICB0b3A6IDFweDtcclxuICAgICAgICAgICAgLy8gICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAvLyAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgLy8gICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICAvLyAgIGJvcmRlci1jb2xvcjogI2FiYWFhYTtcclxuICAgICAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgICAgICAgICAvLyAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAvLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3VzdC1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmODIwNGY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IDJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1jdXN0b217XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RlcC0zLXNlY3Rpb257XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzk3OTY5NjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVjb21tZW5kX2Zvcm17XHJcbiAgICAgICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgICAgLmZvcm0tY3VzdG9te1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJ0bi1hZGR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY2YjgxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMjdweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1jdXN0b20uZm9ybS1idG57XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tYWRkLnNraXAtZGV0YWlsc3tcclxuICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5ob21lLW1haW4tY29udGFpbmVye1xyXG4gICAgICAuZm9ybS1iYWNrZ3JvdW5kIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uLTIge1xyXG4gICAgICAgIHBhZGRpbmc6NTBweCAyNXB4O1xyXG4gICAgICAgIC5tYXItYm90LTI1e1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmpvaW4tc2VjdGlvbnMge1xyXG4gICAgICAgICAgLm1haW4tYm94LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAudXNlci1ib3h7XHJcbiAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LXRleHR7XHJcbiAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5NHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpcnN0LWJveHtcclxuICAgICAgICAgICAgICAudGV4dC1ib3h7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1ib3gtY29ubmVjdHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6ODRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZmFxLXNlY3Rpb257XHJcbiAgICAgICAgLmhlYWRpbmctdGV4dC0ye1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZzowcHggMjVweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc2VjdGlvbi00IHtcclxuICAgICAgICBwYWRkaW5nOjUwcHggMjVweDtcclxuICAgICAgICAud29yay1zdGVwcyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgLndvcmstYm94LTF7XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY2YjgxO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAxcHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcclxuICAgICAgLm1haW4tc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDI1cHggNTBweDtcclxuICAgICAgICAuaW5mb3JtYXRpb24tZm9ybSB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24tMntcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDI1cHggMTJweDtcclxuICAgICAgICAuam9pbi1zZWN0aW9uc3tcclxuICAgICAgICAgIC5tYXItcmlnaHR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENEQztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWJveC1zZWN0aW9ue1xyXG4gICAgICAgICAgICAuZmlyc3QtYm94e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMzZweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJnaW46IDYwcHggMHB4IDM4cHg7XHJcbiAgICAgICAgICAgIC5ib3gtdGV4dCB7XHJcbiAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1ib3gtY29ubmVjdHtcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mYXEtc2VjdGlvbntcclxuICAgICAgICAuZmFxLXF1ZXN0aW9uc3tcclxuICAgICAgICAgIC5mYXEtMXtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uLTR7XHJcbiAgICAgICAgLndvcmstc3RlcHMge1xyXG4gICAgICAgICAgLndvcmstYm94LTF7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTNweCAwcHggI2MwY2RjZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAuc2FtZS1ib3gge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmhvbWUtbWFpbi1jb250YWluZXJ7XHJcbiAgICAgIC5tYWluLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAyNXB4IDUwcHg7XHJcbiAgICAgICAgLmluZm9ybWF0aW9uLWZvcm0ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgICAgICAgIC5kb3R0ZWQtaW1ne1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcclxuICAgIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9ue1xyXG4gICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICAuYnRuLXN0ZXBze1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgfVxyXG4gICAgICAubWFpbi1yZWdpc3RyYXRpb24tcGFydCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAudGFiLXNlY3Rpb24ge1xyXG4gICAgICAgICAgLkNvbG91bW4tZ2FwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0ZXAtMS1zZWN0aW9uIHtcclxuICAgICAgICAgIC5zdGVwLWZvcm0taW5mb3JtYXRpb24ge1xyXG4gICAgICAgICAgICAud182MHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZyZWUtcG9pbnRzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RlcC0yLXNlY3Rpb257XHJcbiAgICAgICAgICAuY2hlY2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pyTXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICMzMmQwMzk7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrIHtcclxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAvLyAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgLy8gICB0b3A6IDFweDtcclxuICAgICAgICAgICAgLy8gICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAvLyAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgLy8gICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICAvLyAgIGJvcmRlci1jb2xvcjogI2FiYWFhYTtcclxuICAgICAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgICAgICAgICAvLyAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAvLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3VzdC1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmODIwNGY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IDJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1jdXN0b217XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RlcC0zLXNlY3Rpb257XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzk3OTY5NjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVjb21tZW5kX2Zvcm17XHJcbiAgICAgICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgICAgLmZvcm0tY3VzdG9te1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJ0bi1hZGR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY2YjgxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMjdweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1jdXN0b20uZm9ybS1idG57XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tYWRkLnNraXAtZGV0YWlsc3tcclxuICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5ob21lLW1haW4tY29udGFpbmVye1xyXG4gICAgICAubWFpbi1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA0cHggN3B4IDc3cHg7XHJcbiAgICAgICAgLmluZm9ybWF0aW9uLWZvcm17XHJcbiAgICAgICAgICAuaGVhZGluZy10ZXh0e1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1iYWNrZ3JvdW5ke1xyXG4gICAgICAgICAgICAuZm9ybS1jdXN0b20ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLWN1c3RvbSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uLTIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIxcHggN3B4O1xyXG4gICAgICAgIC5oZWFkaW5nLXRleHQtMntcclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuam9pbi1zZWN0aW9ucyB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICAgICAgICAubWFpbi1ib3gtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC5maXJzdC1ib3h7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgICAgICAgICAuYm94LXRleHR7XHJcbiAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZhcS1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24tNCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCA3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmFwbGxpZWR7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBib3JkZXI6ICM1OTU5NTkgc29saWQgMXB4O1xyXG4gIH1cclxuICAgIC5oYXtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICBjb2xvcjogIzU5NTk1OTtcclxuICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgIH1cclxuICAgIC5wYXtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjNTk1OTU5O1xyXG4gICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAuYWxsRGF0YXtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU5NTk1OTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW4gOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlUm93e1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlQ2VsbHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTYlO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlQ2VsbCBwe1xyXG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiAwIWltcG9ydGFudDtcclxuICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nQ29udGFpbmVye1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main-module',
                templateUrl: './main-module.component.html',
                styleUrls: ['./main-module.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _Services_registration_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"] }, { type: _Services_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_4__["ApiparserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-module/main-module.module.ts":
/*!***************************************************!*\
  !*** ./src/app/main-module/main-module.module.ts ***!
  \***************************************************/
/*! exports provided: MainModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModuleModule", function() { return MainModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _main_module_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-module.routing */ "./src/app/main-module/main-module.routing.ts");
/* harmony import */ var _main_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-module.component */ "./src/app/main-module/main-module.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







class MainModuleModule {
}
MainModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModuleModule });
MainModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModuleModule_Factory(t) { return new (t || MainModuleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _main_module_routing__WEBPACK_IMPORTED_MODULE_3__["MainModuleRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModuleModule, { declarations: [_main_module_component__WEBPACK_IMPORTED_MODULE_4__["MainModuleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _main_module_routing__WEBPACK_IMPORTED_MODULE_3__["MainModuleRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_module_component__WEBPACK_IMPORTED_MODULE_4__["MainModuleComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _main_module_routing__WEBPACK_IMPORTED_MODULE_3__["MainModuleRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main-module/main-module.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/main-module/main-module.routing.ts ***!
  \****************************************************/
/*! exports provided: MainModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModuleRoutingModule", function() { return MainModuleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-module.component */ "./src/app/main-module/main-module.component.ts");





const routes = [
    { path: '', component: _main_module_component__WEBPACK_IMPORTED_MODULE_2__["MainModuleComponent"] }
];
class MainModuleRoutingModule {
}
MainModuleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModuleRoutingModule });
MainModuleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModuleRoutingModule_Factory(t) { return new (t || MainModuleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModuleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModuleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/common/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/common/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "footer-class"], [1, "footer-logo"], ["href", "#"], ["src", "assets/images/logo-new.png"], [1, "copy-text"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A9 Copyright 2020, Offorms. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-class[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 50px 115px;\n  color: #fff;\n  background-color: #232633;\n}\n.footer-class[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 175px;\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 767px) {\n  .footer-class[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tbW9uL2Zvb3Rlci9EOlxcV2ViIERldmVsb3BtZW50XFxBbGdvRm9jdXNcXGZyb250RW5kL3NyY1xcYXBwXFx2aWV3c1xcY29tbW9uXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNBRjtBRENFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNFO0lBQ0Usa0JBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNsYXNze1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWFyZ2luLXRvcDogMTcwcHg7XG4gIHBhZGRpbmc6IDUwcHggMTE1cHg7XG4gIGNvbG9yOiNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XG4gIC5mb290ZXItbG9nbyBpbWd7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXItY2xhc3N7XG4gICAgcGFkZGluZzogNTBweCAxNXB4O1xuICB9XG59XG4iLCIuZm9vdGVyLWNsYXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUwcHggMTE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNjMzO1xufVxuLmZvb3Rlci1jbGFzcyAuZm9vdGVyLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDE3NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9vdGVyLWNsYXNzIHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/common/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/common/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.loggedIn = false;
    }
    home() {
        this.router.navigate(['']);
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "header-class"], [1, "header-logo"], [3, "click"], ["src", "assets/images/logo-new.png"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: Lato-Light;\n  src: url(/assets/font/Lato-Light.ttf);\n}\n@font-face {\n  font-family: Lato-Regular;\n  src: url(/assets/font/Lato-Regular.ttf);\n}\n.header-class[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #232633;\n  padding: 16px 25px;\n  font-family: Lato-Light;\n}\n.header-class[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 175px;\n  cursor: pointer;\n}\n.header-class[_ngcontent-%COMP%]   .logout-div[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -40px;\n  color: white;\n  font-weight: bold;\n  padding: 12px;\n  font-size: 18px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tbW9uL2hlYWRlci9EOlxcV2ViIERldmVsb3BtZW50XFxBbGdvRm9jdXNcXGZyb250RW5kL3NyY1xcYXBwXFx2aWV3c1xcY29tbW9uXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0EsdUNBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0FGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnQvTGF0by1MaWdodC50dGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udC9MYXRvLVJlZ3VsYXIudHRmKTtcbn1cblxuLmhlYWRlci1jbGFzc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XG4gIHBhZGRpbmc6IDE2cHggMjVweDtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIC5oZWFkZXItbG9nbyBpbWd7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubG9nb3V0LWRpdntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnQvTGF0by1MaWdodC50dGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udC9MYXRvLVJlZ3VsYXIudHRmKTtcbn1cbi5oZWFkZXItY2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjYzMztcbiAgcGFkZGluZzogMTZweCAyNXB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbn1cbi5oZWFkZXItY2xhc3MgLmhlYWRlci1sb2dvIGltZyB7XG4gIHdpZHRoOiAxNzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlci1jbGFzcyAubG9nb3V0LWRpdiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web Development\AlgoFocus\frontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map