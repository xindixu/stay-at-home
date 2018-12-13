(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_result_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/result/result.component */ "./src/app/pages/result/result.component.ts");
/* harmony import */ var _pages_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/recipe/recipe.component */ "./src/app/pages/recipe/recipe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// guards

// components







var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'result', component: _pages_result_result_component__WEBPACK_IMPORTED_MODULE_8__["ResultComponent"] },
    { path: 'recipe', component: _pages_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_9__["RecipeComponent"] },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-navbar></app-navbar>\n  <flash-messages></flash-messages>\n  <div class=\"container\">\n    <router-outlet id=\"main\"></router-outlet>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  height: 100%;\n  background-size: cover; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'stay-at-home';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-flash-messages/module */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_ingredient_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/ingredient.service */ "./src/app/services/ingredient.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_keepsearch_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/keepsearch.service */ "./src/app/services/keepsearch.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ "./src/app/layouts/navbar/navbar.component.ts");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_result_result_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/result/result.component */ "./src/app/pages/result/result.component.ts");
/* harmony import */ var _pages_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/recipe/recipe.component */ "./src/app/pages/recipe/recipe.component.ts");
/* harmony import */ var _components_video_search_video_search_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/video-search/video-search.component */ "./src/app/components/video-search/video-search.component.ts");
/* harmony import */ var _components_ingredient_search_ingredient_search_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/ingredient-search/ingredient-search.component */ "./src/app/components/ingredient-search/ingredient-search.component.ts");
/* harmony import */ var _components_bypass_security_bypass_security_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/bypass-security/bypass-security.component */ "./src/app/components/bypass-security/bypass-security.component.ts");
/* harmony import */ var _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/chatbot/chatbot.component */ "./src/app/components/chatbot/chatbot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import Angular Material modules below










// 3rd-party modlules

//services





// guards

// components














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
                _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__["NavbarComponent"],
                _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
                _pages_result_result_component__WEBPACK_IMPORTED_MODULE_32__["ResultComponent"],
                _pages_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_33__["RecipeComponent"],
                _components_video_search_video_search_component__WEBPACK_IMPORTED_MODULE_34__["VideoSearchComponent"],
                _components_ingredient_search_ingredient_search_component__WEBPACK_IMPORTED_MODULE_35__["IngredientSearchComponent"],
                _components_bypass_security_bypass_security_component__WEBPACK_IMPORTED_MODULE_36__["BypassSecurityComponent"],
                _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_37__["ChatbotComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                //3rd-party modules
                angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"].forRoot(),
                // import Angular Material below
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"]
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_18__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
                _services_ingredient_service__WEBPACK_IMPORTED_MODULE_20__["IngredientService"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_21__["ApiService"],
                _services_keepsearch_service__WEBPACK_IMPORTED_MODULE_22__["KeepsearchService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basket.ts":
/*!***************************!*\
  !*** ./src/app/basket.ts ***!
  \***************************/
/*! exports provided: Basket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return Basket; });
var Basket = /** @class */ (function () {
    function Basket(meat, vegetable, dairy, grain, fruit) {
        this.meat = meat;
        this.vegetable = vegetable;
        this.dairy = dairy;
        this.grain = grain;
        this.fruit = fruit;
        this.basket = [meat, vegetable, dairy, grain, fruit];
    }
    Basket.prototype.stringify = function () {
        // angery not working SAD so sleeeeeeeeeeeepppppppppyyyyyy
        // so try that npm checklist thingy, we don't need this probably
        //{Chicken: false, Ground Beef: true}
        var result = [];
        //console.log(this.basket);
        for (var category in this.basket) {
            for (var item in this.basket[category]) {
                if (this.basket[category][item])
                    result.push(item.toLowerCase());
            }
        }
        return result.join(",");
    };
    return Basket;
}());



/***/ }),

/***/ "./src/app/components/bypass-security/bypass-security.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/bypass-security/bypass-security.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Resource URL:</h4>\n<p>Showing: {{dangerousVideoUrl}}</p>\n<p>Trusted:</p>\n<iframe class=\"e2e-iframe-trusted-src\" width=\"640\" height=\"390\" [src]=\"videoUrl\"></iframe>\n"

/***/ }),

/***/ "./src/app/components/bypass-security/bypass-security.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/bypass-security/bypass-security.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bypass-security/bypass-security.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/bypass-security/bypass-security.component.ts ***!
  \*************************************************************************/
/*! exports provided: BypassSecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BypassSecurityComponent", function() { return BypassSecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BypassSecurityComponent = /** @class */ (function () {
    function BypassSecurityComponent(sanitizer) {
        this.sanitizer = sanitizer;
        // javascript: URLs are dangerous if attacker controlled.
        // Angular sanitizes them in data binding, but you can
        // explicitly tell Angular to trust this value:
        this.dangerousUrl = 'javascript:alert("Hi there")';
        this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
        this.updateVideoUrl('PUBnlbjZFAI');
    }
    BypassSecurityComponent.prototype.updateVideoUrl = function (id) {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data so
        // that it's easier to check if the value is safe.
        this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
        this.videoUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    };
    BypassSecurityComponent.prototype.ngOnInit = function () {
    };
    BypassSecurityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bypass-security',
            template: __webpack_require__(/*! ./bypass-security.component.html */ "./src/app/components/bypass-security/bypass-security.component.html"),
            styles: [__webpack_require__(/*! ./bypass-security.component.scss */ "./src/app/components/bypass-security/bypass-security.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], BypassSecurityComponent);
    return BypassSecurityComponent;
}());



/***/ }),

/***/ "./src/app/components/chatbot/chatbot.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar\">\n  <h2>Nutruition Chatbot</h2>\n  <mat-icon color=\"white\" class=\"material-icons\">search</mat-icon>\n  <mat-form-field>\n    <input matInput type=\"text\" placeholder=\"Ask me any question about food...\" [(ngModel)]=\"value\">\n    <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" (click)=\"ask()\">Ask!</button>\n\n  <p *ngIf=\"data\">{{data.answer}}</p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/chatbot/chatbot.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  margin-top: 5vh; }\n  .search-bar .mat-icon {\n    font-size: 16px; }\n  .search-bar .mat-form-field {\n    width: 500px;\n    color: black; }\n  .search-bar button {\n    margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/components/chatbot/chatbot.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.ts ***!
  \*********************************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent(apiService) {
        this.apiService = apiService;
        this.value = "";
    }
    ChatbotComponent.prototype.ngOnInit = function () {
    };
    ChatbotComponent.prototype.getAnswerByQuestion = function (question) {
        var _this = this;
        this.apiService.getAnswerByQuestion(question).subscribe(function (data) {
            _this.data = data;
            console.log("Answer is here", data);
        }, function (error) { return console.log("Error", error); });
    };
    ChatbotComponent.prototype.ask = function () {
        this.getAnswerByQuestion(this.value);
    };
    ChatbotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-chatbot",
            template: __webpack_require__(/*! ./chatbot.component.html */ "./src/app/components/chatbot/chatbot.component.html"),
            styles: [__webpack_require__(/*! ./chatbot.component.scss */ "./src/app/components/chatbot/chatbot.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ChatbotComponent);
    return ChatbotComponent;
}());



/***/ }),

/***/ "./src/app/components/ingredient-search/ingredient-search.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/ingredient-search/ingredient-search.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Search by Ingredients</h2>\n<form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <mat-grid-list cols=\"6\" rowHeight=\"80px\" (window:resize)=\"onResize($event)\">\n      <mat-grid-tile rowspan=\"4\" [colspan]=\"cols_breakpoint\">\n        <mat-card class=\"inside_card\">\n          <mat-card-content>\n              <h4>Select ingredients in your fridge and see which recipes you can make!</h4>\n            </mat-card-content>\n        </mat-card>\n      </mat-grid-tile>\n\n      <mat-grid-tile *ngFor=\"let i of tiles\" [colspan]=\"cols_breakpoint\" [rowspan]=\"i.rows\" [style.background]=\"i.color\" >\n        <mat-card class=\"inside_card\">\n          <mat-card-content>\n            <h2>{{i.header}}</h2>\n            <div *ngFor=\"let j of i.ingredients\" [ngModelGroup]=i.header>\n              <mat-checkbox [name]=j [(ngModel)]=basketModel[i.header][j]>{{j}}</mat-checkbox>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </mat-grid-tile>\n\n  </mat-grid-list>\n  <button type=\"submit\" mat-raised-button color=\"primary\" style=\"width: 99%\">Submit</button>\n</form>\n\n<!--   <mat-card>\n    <mat-card-content>\n      <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n        <section class=\"\">\n          <div *ngFor=\"let i of ingredientKeys\">\n            <div class=\"col\">\n            <h2>{{i}}</h2>\n            <div *ngFor=\"let j of ingredient[i]\" [ngModelGroup]=i>\n              <mat-checkbox class=\"example-margin\" [name]=\"j\" [(ngModel)]=basketModel[i][j]>{{j}}</mat-checkbox>\n            </div>\n          </div>\n        </div>\n        </section>\n        <button type=\"submit\" mat-raised-button color=\"primary\">Submdfgdfgit</button>\n      </form>\n    </mat-card-content>\n  </mat-card> -->\n"

/***/ }),

/***/ "./src/app/components/ingredient-search/ingredient-search.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/ingredient-search/ingredient-search.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside_card {\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  width: 95%;\n  height: 95%; }\n\n#handle {\n  background-color: #FFF;\n  width: 2vw;\n  height: 30vh;\n  border-radius: 10px;\n  box-shadow: 5px 10px 10px #596362; }\n"

/***/ }),

/***/ "./src/app/components/ingredient-search/ingredient-search.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ingredient-search/ingredient-search.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IngredientSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientSearchComponent", function() { return IngredientSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ingredient.service */ "./src/app/services/ingredient.service.ts");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basket */ "./src/app/basket.ts");
/* harmony import */ var _services_keepsearch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/keepsearch.service */ "./src/app/services/keepsearch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IngredientSearchComponent = /** @class */ (function () {
    function IngredientSearchComponent(ingredientService, checkoutService, keepsearchService, router) {
        this.ingredientService = ingredientService;
        this.checkoutService = checkoutService;
        this.keepsearchService = keepsearchService;
        this.router = router;
        this.basketModel = new _basket__WEBPACK_IMPORTED_MODULE_3__["Basket"]({}, {}, {}, {}, {});
        this.tiles = [
        // {header: 'One', cols: 2, rows: 1, color: 'lightblue', ingredients: ['ah','dhdfh']},
        // {header: 'Two', cols: 2, rows: 1, color: 'lightgreen', ingredients: ['ah']},
        // {header: 'Three', cols: 2, rows: 1, color: 'lightpink', ingredients: ['ah']},
        // {header: 'Four', cols: 2, rows: 1, color: '#DDBDF1', ingredients: ['ah']},
        ];
        this.ingredient = {};
        this.ingredientKeys = [];
    }
    IngredientSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth >= 1200) {
            this.cols_breakpoint = 1;
        }
        else if (window.innerWidth >= 600) {
            this.cols_breakpoint = 2;
        }
        else {
            this.cols_breakpoint = 3;
        }
        this.ingredientService.getIngredients()
            .subscribe(function (data) {
            _this.ingredient = data;
            //console.log(this.ingredient[0]);
            _this.ingredientKeys = Object.keys(_this.ingredient);
            for (var i = 0; i < _this.ingredientKeys.length; i++) {
                console.log(_this.ingredient[_this.ingredientKeys[i]]);
                var newTile = { header: _this.ingredientKeys[i],
                    cols: 5, rows: 4, color: 'rgba(143,225,9,0)',
                    ingredients: _this.ingredient[_this.ingredientKeys[i]] };
                _this.tiles.push(newTile);
            }
            //console.log(this.ingredientKeys);
        });
    };
    IngredientSearchComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth >= 1200) {
            this.cols_breakpoint = 1;
        }
        else if (event.target.innerWidth >= 600) {
            this.cols_breakpoint = 2;
        }
        else {
            this.cols_breakpoint = 3;
        }
    };
    // is it possible to connect to the user, and recorc the search that was just sent in?
    // just import the this.basketModel to array, and then make a dictionary where the key is the ingredient and value is the number of times searched
    IngredientSearchComponent.prototype.onSubmit = function () {
        var _this = this;
        // .subscribe looks at the checkout event, wait until it is sucessful, then executes the code underneath
        this.checkoutService.checkout(this.basketModel)
            .subscribe(function (data) {
            //console.log('Success!', data);
            _this.keepsearchService.updateSearch(_this.basketModel.stringify());
            //this.keepsearchService.updateSearch(JSON.stringify(this.basketModel));
            _this.router.navigate(['/result']);
        }, function (error) { return console.error('Error!', error); });
    };
    IngredientSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingredient-search',
            template: __webpack_require__(/*! ./ingredient-search.component.html */ "./src/app/components/ingredient-search/ingredient-search.component.html"),
            styles: [__webpack_require__(/*! ./ingredient-search.component.scss */ "./src/app/components/ingredient-search/ingredient-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"],
            _services_checkout_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutService"],
            _services_keepsearch_service__WEBPACK_IMPORTED_MODULE_4__["KeepsearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], IngredientSearchComponent);
    return IngredientSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/video-search/video-search.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/video-search/video-search.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar\">\n  <h2>Search for Videos</h2>\n  <mat-icon color=\"white\" class=\"material-icons\">search</mat-icon>\n  <mat-form-field>\n    <input matInput type=\"text\" placeholder=\"Fill in any ingredient name for cooking videos\" [(ngModel)]=\"value\">\n    <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" (click)=\"search()\">Search</button>\n\n  <div *ngIf=\"videos\">\n    <div *ngFor=\"let v of videos; let i = index\" [attr.data-index]=\"i\">\n      <div>\n        <iframe class=\"e2e-iframe-trusted-src\" width=\"640\" height=\"390\" [src]=\"safeVideoUrls[i]\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/video-search/video-search.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/video-search/video-search.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  margin-top: 5vh; }\n  .search-bar .mat-icon {\n    font-size: 16px; }\n  .search-bar .mat-form-field {\n    width: 500px;\n    color: black; }\n  .search-bar button {\n    margin-left: 10px; }\n  .search-bar iframe {\n    border: 0px;\n    width: 50%; }\n"

/***/ }),

/***/ "./src/app/components/video-search/video-search.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/video-search/video-search.component.ts ***!
  \*******************************************************************/
/*! exports provided: VideoSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSearchComponent", function() { return VideoSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoSearchComponent = /** @class */ (function () {
    function VideoSearchComponent(apiService, sanitizer) {
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.value = "";
        // disable this to safe me money from paying api co :(
        // dist: this.videos = [];
        this.safeVideoUrls = [];
    }
    // async in ts / angular
    // https://medium.com/@balramchavan/using-async-await-feature-in-angular-587dd56fdc77
    VideoSearchComponent.prototype.ngOnInit = function () {
        //this.getVideoByIngredients();
    };
    VideoSearchComponent.prototype.getVideoByIngredients = function (query) {
        var _this = this;
        this.apiService.getVideoByIngredients(query).subscribe(function (data) {
            _this.data = data;
            _this.videos = data.videos;
            console.log("Video is here", data);
            _this.changeAllVideoUrls();
        }, function (error) { return console.log("Error", error); });
    };
    VideoSearchComponent.prototype.search = function () {
        this.getVideoByIngredients(this.value);
    };
    VideoSearchComponent.prototype.updateVideoUrl = function (id) {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data so
        // that it's easier to check if the value is safe.
        var dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
        var safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
        return safeVideoUrl;
    };
    VideoSearchComponent.prototype.changeAllVideoUrls = function () {
        console.log("start changing all videos to safe ones");
        for (var _i = 0, _a = this.videos; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
            var url = this.updateVideoUrl(i.youTubeId);
            this.safeVideoUrls.push(url);
            console.log(this.safeVideoUrls);
        }
    };
    VideoSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-video-search",
            template: __webpack_require__(/*! ./video-search.component.html */ "./src/app/components/video-search/video-search.component.html"),
            styles: [__webpack_require__(/*! ./video-search.component.scss */ "./src/app/components/video-search/video-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideoSearchComponent);
    return VideoSearchComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Developed by Justin Liu & Xindi Xu</span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"spacer\"></span>\n  <a href=\"mailto:xindixu@utexas.edu\"><i class=\"fas fa-envelope\"></i></a>\n  <a href=\"https://github.com/xindixu/stay-at-home\"><i class=\"fab fa-github\"></i></a>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 40px;\n  position: fixed;\n  bottom: 0px;\n  font-size: 12px; }\n  .mat-toolbar .spacer {\n    flex: 1 1 auto; }\n  .mat-toolbar .icon {\n    padding: 0 14px; }\n  .mat-toolbar span, .mat-toolbar a {\n    color: white;\n    text-decoration: none;\n    padding: 0 20px; }\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layouts/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layouts/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <a routerLink=\"/home\" id=\"logoText\"><img src=\"assets/images/logo.svg\" width=\"25\" height=\"25\"> StayAtHome</a>\n  <span class=\"spacer\"></span>\n  <span><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></span>\n  <span *ngIf=\"authService.loggedIn()\"><a routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a></span>\n  <span *ngIf=\"authService.loggedIn()\"><a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a></span>\n  <span class=\"spacer\"></span>\n  <span *ngIf=\"!authService.loggedIn()\"><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></span>\n  <span *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Log out</a></span>\n  <span *ngIf=\"!authService.loggedIn()\"><a routerLink=\"/register\" routerLinkActive=\"active\">Register</a></span>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  height: 40px;\n  z-index: 100; }\n  .mat-toolbar .spacer {\n    flex: 1 1 auto; }\n  .mat-toolbar a {\n    color: rgba(0, 0, 0, 0.5);\n    text-decoration: none;\n    padding: 0 20px; }\n  .mat-toolbar #logoText,\n  .mat-toolbar .active {\n    color: black; }\n"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, flashMessagesService, router) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show("Your are logged out", { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layouts/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/layouts/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Dashboard</h2>\n<p>Welcome to your dashboard</p>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n  <div class=\"header\">\n    <h1 id=\"header_title\">{{ title }}&nbsp;&nbsp;</h1>\n  </div>\n  <app-chatbot></app-chatbot>\n  <br>\n  <app-ingredient-search></app-ingredient-search>\n  <br>\n  <app-video-search></app-video-search>\n\n  <br><br>\n\n\n  <!--   <br><br><br> -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\n  background-image: linear-gradient(to bottom, #FFF, #DDD);\n  border-radius: 25px;\n  border-style: solid;\n  border-width: 5px;\n  border-color: #EEE;\n  box-shadow: inset 0 0 100px #BBB;\n  padding: 10px; }\n  #home .header {\n    text-align: center; }\n  #header_title {\n  float: right; }\n  .mat-checkbox-label {\n  color: black; }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basket */ "./src/app/basket.ts");
/* harmony import */ var _services_keepsearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/keepsearch.service */ "./src/app/services/keepsearch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, keepsearchService) {
        this.router = router;
        this.keepsearchService = keepsearchService;
        this.value = "";
        this.title = "stay at home";
        this.basketModel = new _basket__WEBPACK_IMPORTED_MODULE_1__["Basket"]({}, {}, {}, {}, {});
        this.ingredient = {};
        this.ingredientKeys = [];
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_keepsearch_service__WEBPACK_IMPORTED_MODULE_2__["KeepsearchService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <h1>Login to cook more</h1>\n\n  <mat-card>\n    <form (submit)=\"onLoginSubmit()\">\n      <mat-form-field>\n        <input matInput type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" required>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Login\">Login</button>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  display: flex;\n  flex-direction: column; }\n  .form * {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessagesService, router) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessagesService.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/recipe/recipe.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/recipe/recipe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"recipe\">\n\t<h1>{{data.title}}</h1>\n\t<div><img class=\"recipe_image\" [src]=\"data.image\" alt=\"\"></div>\n\t<div class=\"time\">\n\t  <p>Total Time: {{data.readyInMinutes}} min</p>\n\t  <p>Prep Time: {{data.preparationMinutes}} min</p>\n\t  <p>Cooking Time: {{data.cookingMinutes}} min</p>\n\t  <p>Servings: {{data.servings}}</p>\n\t  <p>Likes: {{data.aggregateLikes}}</p>\n\t</div>\n\t<h3>Instructions</h3>\n\t<div *ngFor=\"let step of data.analyzedInstructions[0].steps\">\n\t<p><span>{{step.number}}. </span>{{step.step}}</p>\n\t</div>\n\t<br>\n</div>"

/***/ }),

/***/ "./src/app/pages/recipe/recipe.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/recipe/recipe.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#recipe {\n  background-image: linear-gradient(to bottom, #FFF, #DDD);\n  border-radius: 25px;\n  border-style: solid;\n  border-width: 5px;\n  border-color: #EEE;\n  box-shadow: inset 0 0 100px #BBB;\n  padding: 20px; }\n\n.recipe_image {\n  float: right;\n  width: 400px;\n  padding: 20px;\n  border-radius: 30px; }\n\n.time {\n  line-height: 0.7; }\n"

/***/ }),

/***/ "./src/app/pages/recipe/recipe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/recipe/recipe.component.ts ***!
  \**************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_keepsearch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/keepsearch.service */ "./src/app/services/keepsearch.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(keepsearchService, apiService) {
        this.keepsearchService = keepsearchService;
        this.apiService = apiService;
    }
    RecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the search result from keepsearchService
        this.keepsearchService.currentSearch
            .subscribe(function (search) {
            _this.id = search;
        });
        this.getRecipeDetail();
    };
    RecipeComponent.prototype.getRecipeDetail = function () {
        var _this = this;
        /*{vegetarian: false, vegan: false, glutenFree: false, dairyFree: true, veryHealthy: false, …}aggregateLikes: 225analyzedInstructions: [{…}]cheap: falsecookingMinutes: 10creditText: "Feed Me Phoebe"creditsText: "Feed Me Phoebe"cuisines: []dairyFree: truediets: ["dairy free"]dishTypes: ["side dish"]extendedIngredients: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]gaps: "no"glutenFree: falsehealthScore: 46id: 479101image: "https://spoonacular.com/recipeImages/479101-556x370.jpg"imageType: "jpg"instructions: "Cut the florets off the stems and and then chop them into tiny florets. You can also chop up the stems into tiny pieces if you want. You should have about 6 cups of chopped cauliflower. In a large skillet heat 2 tablespoons of olive oil over medium-high heat. Add the cauliflower, 1 teaspoon of salt, rosemary, and sumac. Sauté until cauliflower is tender and starts to brown a bit, stirring as necessary, about 15 minutes. You can also add a bit of olive oil if the pan starts to get too dry or the cauliflower is starting to stick. Meanwhile, in a small skillet, toast the pinenuts over medium heat until golden brown. Set aside. Heat the remaining 2 tablespoons of olive oil in the same pan. Once oil is shimmering, toss in the breadcrumbs and stir, toasting the breadcrumbs. Season with a pinch of kosher salt and a few turns of freshly ground black pepper. Remove from the heat and toss in half of the chopped parsley. When cauliflower is done, remove from the heat and season to taste with freshly ground black pepper and a pinch or so of salt if necessary. Toss in the toasted pine nuts, the chopped raisins, and the remaining parsley. When ready to serve, sprinkle the top with the toasted breadcrumbs and some pecorino."ketogenic: falselowFodmap: falseoccasions: []preparationMinutes: 10pricePerServing: 199.25readyInMinutes: 20servings: 4sourceName: "Feed Me Phoebe"sourceUrl: "http://feedmephoebe.com/2013/11/job-food52s-pan-roasted-cauliflower/"spoonacularScore: 97spoonacularSourceUrl: "https://spoonacular.com/on-the-job-pan-roasted-cauliflower-from-food52-479101"sustainable: falsetitle: "On the Job: Pan Roasted Cauliflower From Food52"vegan: falsevegetarian: falseveryHealthy: falseveryPopular: falseweightWatcherSmartPoints: 9whole30: falsewinePairing: {pairedWines: Array(0), pairingText: "", productMatches: Array(0)}__proto__: Object
        */
        this.apiService.getRecipeById(this.id)
            .subscribe(function (data) {
            _this.data = data;
            console.log('Recipe detail with id', data);
        }, function (error) { return console.log('Error!', error); });
    };
    RecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/pages/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.scss */ "./src/app/pages/recipe/recipe.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_keepsearch_service__WEBPACK_IMPORTED_MODULE_1__["KeepsearchService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <h1>Register to cook more</h1>\n\n  <mat-card>\n    <form (submit)=\"onRegisterSubmit()\">\n      <mat-form-field>\n        <input matInput type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" required>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Login\">Register</button>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  display: flex;\n  flex-direction: column; }\n  .form * {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, flashMessagesService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        event.preventDefault();
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // validate fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // register users
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('You are now registered', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                console.log("no");
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/result/result.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/result/result.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"result\">\n  <h1> Result for {{query}}</h1>\n  <br>\n  <mat-grid-list cols=\"6\" rowHeight=\"80px\" (window:resize)=\"onResize($event)\">\n    <mat-grid-tile rowspan=\"5\" *ngFor=\"let i of data\" [colspan]=\"cols_breakpoint\">\n      <mat-card class=\"result_card\"  (click)=\"getRecipeDetail(i.id)\">\n        <mat-card-title>\n          <h4>{{i.title}}</h4>\n        </mat-card-title>\n        <mat-card-subtitle>\n          Likes: {{i.likes}}\n          Used ingredients: {{i.usedIngredientCount}}\n        </mat-card-subtitle>\n        \n        <mat-card-content>\n          <div class=\"result_image\">\n            <img mat-card-image [src]=\"i.image\" alt=\"\">\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/pages/result/result.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/result/result.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  margin-bottom: 20px; }\n\n#result {\n  background-image: linear-gradient(to bottom, #FFF, #DDD);\n  border-radius: 25px;\n  border-style: solid;\n  border-width: 5px;\n  border-color: #EEE;\n  box-shadow: inset 0 0 100px #BBB;\n  padding: 20px; }\n\n#result .header {\n    text-align: center; }\n\n#result .result_image {\n    float: left;\n    border-radius: 10px;\n    margin-top: 20px;\n    padding-left: 20px;\n    padding-right: 20px; }\n\n.result_card {\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  cursor: pointer;\n  width: 95%;\n  height: 95%; }\n"

/***/ }),

/***/ "./src/app/pages/result/result.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/result/result.component.ts ***!
  \**************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_keepsearch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/keepsearch.service */ "./src/app/services/keepsearch.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = /** @class */ (function () {
    function ResultComponent(keepsearchService, apiService, router) {
        this.keepsearchService = keepsearchService;
        this.apiService = apiService;
        this.router = router;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth >= 1000) {
            this.cols_breakpoint = 2;
        }
        else if (window.innerWidth >= 600) {
            this.cols_breakpoint = 3;
        }
        else {
            this.cols_breakpoint = 6;
        }
        this.keepsearchService.currentSearch
            .subscribe(function (search) {
            _this.query = search;
        });
        this.getRecipeSearchResult();
    };
    ResultComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth >= 1000) {
            this.cols_breakpoint = 2;
        }
        else if (event.target.innerWidth >= 600) {
            this.cols_breakpoint = 3;
        }
        else {
            this.cols_breakpoint = 6;
        }
    };
    ResultComponent.prototype.getRecipeSearchResult = function () {
        // test if api is working with hard code
        var _this = this;
        // [{},{},{}] length depends on option passed to apiin backend
        /* 0:
        id: 1047288
        image: "https://spoonacular.com/recipeImages/1047288-312x231.jpg"
        imageType: "jpg"
        likes: 1
        missedIngredientCount: 5
        title: "How to Make Crispy Air Fryer French Fries"
        usedIngredientCount: 2
        */
        this.apiService.getRecipeByIngredients(this.query)
            .subscribe(function (data) {
            _this.data = data;
            console.log('Recipe with ingredients', data);
        }, function (error) { return console.log('Error!', error); });
    };
    ResultComponent.prototype.getRecipeDetail = function (id) {
        this.keepsearchService.updateSearch(id);
        this.router.navigate(['/recipe']);
    };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/pages/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/pages/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_keepsearch_service__WEBPACK_IMPORTED_MODULE_1__["KeepsearchService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// example: https://malcoded.com/posts/angular-backend-express


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getRecipeByIngredients = function (ingredient) {
        // local: http://localhost:8080/api/findByIngredients
        return this.http.get('/api/findByIngredients/' + ingredient);
    };
    ApiService.prototype.getRecipeById = function (id) {
        // local: http://localhost:8080/api/getRecipeById
        return this.http.get('/api/getRecipeById/' + id);
    };
    ApiService.prototype.getVideoByIngredients = function (ingredient) {
        // local: http://localhost:8080/api/findByIngredients
        return this.http.get('/api/getVideoByIngredients/' + ingredient);
    };
    ApiService.prototype.getAnswerByQuestion = function (text) {
        return this.http.get('/api/chatbot/' + text);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //local: http://localhost:8080/users/register
        // dist: user/register
        return this.http.post('/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        //local: http://localhost:8080/users/authenticate
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //local: http://localhost:8080/users/profile
        return this.http.get('/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        // localStorage only stores stings
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/checkout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutService = /** @class */ (function () {
    function CheckoutService(_http) {
        this._http = _http;
        //_url = '/checkout';
        this._url = '/checkout';
    }
    CheckoutService.prototype.checkout = function (basket) {
        return this._http.post(this._url, basket);
    };
    CheckoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/services/ingredient.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ingredient.service.ts ***!
  \************************************************/
/*! exports provided: IngredientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientService", function() { return IngredientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IngredientService = /** @class */ (function () {
    function IngredientService(_http) {
        this._http = _http;
        this._url = "/assets/data/ingredients.json";
        this.getIngredients().subscribe(function (data) {
            //console.log(data)
        });
    }
    IngredientService.prototype.getIngredients = function () {
        // 	return  [
        //   {"meat": ["Fish", "Chicken", "Ground Beef", "Beef", "Pork"]},
        //   {"vegetable": ["Onion", "Lettuce", "Broccoli", "Spinach", "Bok Choy", "Carrot"]}
        // ];
        return this._http.get(this._url);
    };
    IngredientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IngredientService);
    return IngredientService;
}());



/***/ }),

/***/ "./src/app/services/keepsearch.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/keepsearch.service.ts ***!
  \************************************************/
/*! exports provided: KeepsearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepsearchService", function() { return KeepsearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeepsearchService = /** @class */ (function () {
    function KeepsearchService() {
        // observable string source
        this.searchSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default');
        // observable string stream
        this.currentSearch = this.searchSource.asObservable();
    }
    KeepsearchService.prototype.updateSearch = function (search) {
        this.searchSource.next(search);
    };
    KeepsearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], KeepsearchService);
    return KeepsearchService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name.length == 0 || user.email.length == 0 || user.username.length == 0 || user.password.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xindixu/Sites/stay-at-home/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map