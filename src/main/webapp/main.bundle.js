webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('valid')) {
            // logged in so return true
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n     padding-top: 0px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__population_population_service__ = __webpack_require__("../../../../../src/app/population/population.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["b" /* routingComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__population_population_service__["a" /* PopulationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_index__["a" /* AuthGuard */]] },
    {
        path: 'app', component: __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
    },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]];


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n  }\r\n.logouticon\r\n  {\r\n      float: right;\r\n      padding-right: 23px;\r\n      padding-top: 5px;\r\n      color: white;\r\n      text-decoration: none;\r\n  }\r\n  \r\n\r\n\r\n  .navbar-inverse .navbar-nav>li>.logouticon {\r\n    color: #9d9d9d;\r\n}\r\n\r\n.navbar-nav>li>.logouticon {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    line-height: 20px;\r\n}\r\n.nav>li>.logouticon {\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n}\r\n.logouticon {\r\n  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <!-- <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button> -->\r\n        <a class=\"navbar-brand\">AmdocsProject</a>\r\n        <ul class=\"nav navbar-nav navbar-right logouticon\">\r\n            <li (click)=\"logMeOut()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</li>\r\n          </ul>\r\n      </div>\r\n    \r\n        \r\n       \r\n     \r\n    </div>\r\n  </nav>\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n      <div class=\"col-md-10 col-md-offset-2\">\r\n          <div id=\"chart-div\">efefwfwefwe</div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__("../../../../highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__population_population_service__ = __webpack_require__("../../../../../src/app/population/population.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_drilldown_src__ = __webpack_require__("../../../../highcharts/modules/drilldown.src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_drilldown_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_drilldown_src__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//var Highcharts = require('highcharts');
// Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);

var HomeComponent = (function () {
    function HomeComponent(populationService, router) {
        this.populationService = populationService;
        this.router = router;
        // Create the chart
        __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_drilldown_src__(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    HomeComponent.prototype.convertData = function () {
        var _this = this;
        // this.population_result= [{"year":2010,"total":579,"male":613,"female":1192},{"year":2011,"total":588,"male":623,"female":1211},{"year":2012,"total":599,"male":634,"female":1233},{"year":2013,"total":607,"male":643,"female":1250},{"year":2014,"total":616,"male":650,"female":1266},{"year":2015,"total":624,"male":658,"female":1282},{"year":2017,"total":640,"male":676,"female":1316},{"year":2018,"total":648,"male":686,"female":1334}];
        this.series = {
            name: 'Population',
            data: []
        };
        this.drillSeries = [];
        this.population_result.forEach(function (element) {
            var sElement = {
                name: element.year + "",
                y: element.total,
                drilldown: element.year + ""
            };
            _this.series.data.push(sElement);
            var dElement = {
                name: element.year + "",
                id: element.year + "",
                "data": [
                    [
                        "Male",
                        element.male
                    ],
                    [
                        "Female",
                        element.female
                    ]
                ]
            };
            _this.drillSeries.push(dElement);
        });
        this.allSeries = [];
        this.allSeries.push(this.series);
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        console.log("HOME COMP");
        this.populationService.getPopulation().
            subscribe(function (data) {
            _this.population_result = data;
            console.log("DATA===33=3", _this.population_result);
            _this.convertData();
            _this.loadChart();
        }, function (error) {
            _this.errorMsg = error;
            // now redirect to login
            _this.router.navigateByUrl('/home');
            console.log("ERROR ", _this.errorMsg);
        });
    };
    HomeComponent.prototype.loadChart = function () {
        __WEBPACK_IMPORTED_MODULE_1_highcharts__["chart"]('chart-div', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Population'
            },
            subtitle: {
                text: 'Yearly'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Count'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
            },
            "series": this.allSeries,
            "drilldown": {
                "series": this.drillSeries
            }
        });
    };
    HomeComponent.prototype.logMeOut = function () {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__population_population_service__["a" /* PopulationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container{\r\n    padding-top: 90px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-6 col-md-offset-3\">\r\n          <div class=\"panel panel-login\">\r\n              <div class=\"panel-heading\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                          <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                          <a href=\"#\" id=\"register-form-link\">Register</a>\r\n                      </div>\r\n                  </div>\r\n                  <hr>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-lg-12\">\r\n                          <form id=\"login-form\" style=\"display: block;\">\r\n\r\n                              <div class=\"form-group\">\r\n                                  <input [(ngModel)]=\"user.email\" type=\"text\" placeholder=\"Email Address\" name=\"emailId\" class=\"form-control\" id=\"emailId\">\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                  <input [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"Password\" name=\"password\" class=\"form-control\" id=\"password\">\r\n                              </div>\r\n\r\n                              <div class=\"form-group\">\r\n                                  <div class=\"row\">\r\n                                      <div class=\"col-sm-6 col-sm-offset-3\">\r\n                                          <button tabindex=\"4\" name=\"login-submit\" id=\"login-submit\" class=\"form-control btn btn-register\" (click)=\"loginUser()\">Login</button>\r\n\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n\r\n                          </form>\r\n                          <form id=\"register-form\" style=\"display: none;\">\r\n                              <div class=\"form-group\">\r\n                                  <input [(ngModel)]=\"user.name\" type=\"text\" placeholder=\"Username\" name=\"username\" class=\"form-control\" id=\"username\">\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                  <input [(ngModel)]=\"user.email\" type=\"text\" placeholder=\"Email Address\" name=\"emailId\" class=\"form-control\" id=\"emailId\">\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                  <input [(ngModel)]=\"user.password\" type=\"text\" placeholder=\"Password\" name=\"password\" class=\"form-control\" id=\"password\">\r\n                              </div>\r\n\r\n                              <div class=\"form-group\">\r\n                                  <div class=\"row\">\r\n                                      <div class=\"col-sm-6 col-sm-offset-3\">\r\n                                          <button tabindex=\"4\" name=\"register-submit\" id=\"register-submit\" class=\"form-control btn btn-register\" (click)=\"registerUser()\">Register Now</button>\r\n\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </form>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.title = 'User App';
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]();
        this.btnClick = function () {
            this.router.navigate(['/add']);
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkForlogged();
    };
    LoginComponent.prototype.checkForlogged = function () {
        if (localStorage.getItem('valid') == 'true')
            this.router.navigate(['/home']);
    };
    LoginComponent.prototype.registerUser = function () {
        console.log(this.user.name);
        console.log(this.user.email);
        console.log(this.user.password);
        if (this.user.email && this.user.password && this.user.name && this.user.name.trim() && this.user.email.trim() && this.user.password.trim())
            this.userService.registerUser(this.user)
                .subscribe(function (data) {
                alert("User created successfully.");
                console.log('success');
            });
        this.user.email = "";
        this.user.password = "";
        this.user.name = "";
    };
    ;
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.router.navigateByUrl('/home');
        console.log(this.user.email);
        console.log(this.user.password);
        this.user.name = "user";
        if (this.user.email && this.user.password && this.user.email.trim() && this.user.password.trim())
            this.userService.loginUser(this.user)
                .subscribe(function (data) {
                console.log("Welcome" + data);
                if (data.email != null && data.password != null) {
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('password', data.password);
                    localStorage.setItem('valid', 'true');
                    alert("User logged in successfully.");
                }
                _this.router.navigateByUrl('/home');
            }, function (error) {
            });
        else
            alert('Please provide info');
        this.user.email = "";
        this.user.password = "";
        this.user.name = "";
    };
    ;
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/population/population.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var PopulationService = (function () {
    function PopulationService(http) {
        this.http = http;
        this.populationUrl = 'api';
    }
    PopulationService.prototype.getPopulation = function () {
        var email = localStorage.getItem('email');
        var pass = localStorage.getItem('password');
        return this.http.get(this.populationUrl + "/populations?email=" + email + "&password=" + pass);
    };
    PopulationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PopulationService);
    return PopulationService;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        //private userUrl = 'http://localhost:8080/user-portal/user';
        this.userUrl = 'api';
        this.fake = false;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.userUrl);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete(this.userUrl + "/" + user.id);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.userUrl, user);
    };
    UserService.prototype.registerUser = function (user) {
        console.log('USER-req ', user);
        if (this.fake)
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                observer.next("NEXT");
                observer.complete();
            });
        return this.http.post(this.userUrl + "/users", user);
    };
    UserService.prototype.loginUser = function (user) {
        if (this.fake)
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                observer.next("NEXT");
                observer.complete();
            });
        else
            return this.http.post(this.userUrl + "/users/check", user);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

/*
login: http://localhost:4200/api/users/check

email :"getakash.verma19@gmail.com"
name
:
"user"
password
:
"12345678"

Response : {"name":"Akash","email":"getakash.verma19@gmail.com","password":"12345678"}


.................


http://localhost:4200/api/population

Res
[{"year":2010,"total":579,"male":613,"female":1192},{"year":2011,"total":588,"male":623,"female":1211},{"year":2012,"total":599,"male":634,"female":1233},{"year":2013,"total":607,"male":643,"female":1250},{"year":2014,"total":616,"male":650,"female":1266},{"year":2015,"total":624,"male":658,"female":1282},{"year":2017,"total":640,"male":676,"female":1316},{"year":2018,"total":648,"male":686,"female":1334}]


......... user creation
http://localhost:4200/api/users
{name: "sumit", email: "sumit@test.com", password: "12345"}

res
{"name":"sumit","email":"sumit@test.com","password":"12345"}

*/ 


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map