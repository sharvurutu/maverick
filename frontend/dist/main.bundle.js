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

/***/ "../../../../../src/app/LoginAuth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_auth_service__ = __webpack_require__("../../../../../src/app/LoginAuth/login-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn
            .take(1)
            .map(function (isLoggedIn) {
            if (isLoggedIn) {
                return true;
            }
            else {
                _this.router.navigate(['']);
                return false;
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_auth_service__["a" /* LoginAuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/LoginAuth/login-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_model__ = __webpack_require__("../../../../../src/app/authentication.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginAuthService = /** @class */ (function () {
    function LoginAuthService(router, userService) {
        this.router = router;
        this.userService = userService;
        this.authenticationModel = new __WEBPACK_IMPORTED_MODULE_3__authentication_model__["a" /* AuthenticationModel */]();
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    Object.defineProperty(LoginAuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginAuthService.prototype.login = function (user) {
        console.log("inside if chk admin==> " + this.authenticationModel.email + " " + this.authenticationModel.userId);
        console.log("useid in loginauth==" + user.userId + "  " + user.location);
        if (user.email !== '' && user.password != '') {
            // this.loggedIn.next(true);
            // this.router.navigate(['/home']);
            console.log("inside if chk admin==> " + this.authenticationModel.email + " " + this.authenticationModel.userId);
            this.userEmail = user.email;
            if (user.email == "admin@mail.com" && user.password == "admin123") {
                this.loggedIn.next(true);
                this.router.navigate(['/admin']);
                // alert("admin loged in successfully");
            }
            else {
                this.loggedIn.next(true);
                this.userService.produceUserId(user.userId);
                this.router.navigate(['/home', user.userId]);
                // alert("user loged in successfully");
            }
        }
    };
    LoginAuthService.prototype.socialLogin = function (user) {
        if (this.authenticationModel.email !== '' && this.authenticationModel.password != '') {
            this.loggedIn.next(true);
            this.router.navigate(['/home']);
        }
    };
    LoginAuthService.prototype.logout = function () {
        // console.log("inside logout service==============");
        // console.log("usernaem in logout "+this.userEmail);
        this.loggedIn.next(false);
        this.router.navigate(['/maverick']);
        this.userService.logoutUser(this.userEmail)
            .subscribe(function (data) {
            // console.log("data log " + data);
        });
    };
    LoginAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], LoginAuthService);
    return LoginAuthService;
}());



/***/ }),

/***/ "../../../../../src/app/UserProfile/reporting/adaptive/adaptive.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  adaptive works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/UserProfile/reporting/adaptive/adaptive.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/UserProfile/reporting/adaptive/adaptive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reporting_adaptive_service__ = __webpack_require__("../../../../../src/app/services/reporting-adaptive.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdaptiveComponent = /** @class */ (function () {
    function AdaptiveComponent(router, route, httpclient, adaptiveService) {
        this.router = router;
        this.route = route;
        this.httpclient = httpclient;
        this.adaptiveService = adaptiveService;
    }
    AdaptiveComponent.prototype.ngOnInit = function () {
        this.getAdaptiveReports();
    };
    AdaptiveComponent.prototype.getAdaptiveReports = function () {
        var _this = this;
        this.adaptiveService.showAdaptiveGameReports().subscribe(function (adaptive) {
            _this.adaptive = adaptive;
            console.log("adaptive data ======>", adaptive);
        });
    };
    AdaptiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-adaptive",
            template: __webpack_require__("../../../../../src/app/UserProfile/reporting/adaptive/adaptive.component.html"),
            styles: [__webpack_require__("../../../../../src/app/UserProfile/reporting/adaptive/adaptive.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__services_reporting_adaptive_service__["a" /* AdaptiveService */]])
    ], AdaptiveComponent);
    return AdaptiveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/UserProfile/reporting/multi/multi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-group\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a data-toggle=\"collapse\" href=\"#multicollapse\">Recent Multi Games Played</a>\n      </h4>\n\n      <div id=\"multicollapse\" class=\"panel-collapse collapse\">\n        <div class=\"panel-body\">\n\n          <div class=\"panel-group\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <div *ngFor=\"let a of multireports,let i=index;\">\n                  <!-- Trigger the modal with a button -->\n                  <a data-toggle=\"modal\" href=\"#mymultiModal{{i}}\">\n                    <b>GameName</b>\n                  </a>\n\n                  <!-- Modal -->\n                  <div id=\"mymultiModal{{i}}\" class=\"modal fade\" role=\"dialog\">\n                    <div class=\"modal-dialog\">\n\n                      <!-- Modal content-->\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                          <h4 class=\"modal-title\">\n                            <b>Game Details</b>\n                          </h4>\n                        </div>\n                        <div class=\"modal-body\" *ngFor=\"let b of multireports[i].reportQuestions,let j=index;\">\n\n                          <ul class=\"collection\">\n                            <a href=\"#!\" class=\"collection-item\">\n                              <span class=\"badge\"></span>\n                              <b>\n                                <i class=\"material-icons\">question_answer</i>\n                              </b>\n                            </a>\n                            <br/>\n\n\n                            <a href=\"#!\" class=\"collection-item\">\n                              <span class=\"badge\"></span>\n                              <b>Question : {{multireports[i].reportQuestions[j].questionName}}</b>\n                            </a>\n                            <br/>\n\n                            <a href=\"#!\" class=\"collection-item\">\n                              <span class=\"badge\"></span>\n                              <b>Correct Answer:{{multireports[i].reportQuestions[j].correctAnswer}}</b>\n                            </a>\n                            <br/>\n                            <a href=\"#!\" class=\"collection-item\">\n                              <span class=\"badge\"></span>\n                              <b>Selected Answer:{{multireports[i].reportQuestions[j].selectedAnswered}}</b>\n                            </a>\n                            <br/>\n                          </ul>\n\n                        </div>\n                        <div class=\"modal-footer\">\n                          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/UserProfile/reporting/multi/multi.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/UserProfile/reporting/multi/multi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reporting_multi_service__ = __webpack_require__("../../../../../src/app/services/reporting-multi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MultiComponent = /** @class */ (function () {
    function MultiComponent(router, route, httpclient, multiService) {
        this.router = router;
        this.route = route;
        this.httpclient = httpclient;
        this.multiService = multiService;
    }
    MultiComponent.prototype.ngOnInit = function () {
        this.getMultiGameReports();
    };
    MultiComponent.prototype.getMultiGameReports = function () {
        var _this = this;
        this.multiService.showMultiGameReports().subscribe(function (multireports) {
            _this.multireports = multireports;
            console.log("multi data ===>", multireports);
        });
    };
    MultiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "app-multi",
            template: __webpack_require__("../../../../../src/app/UserProfile/reporting/multi/multi.component.html"),
            styles: [__webpack_require__("../../../../../src/app/UserProfile/reporting/multi/multi.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__services_reporting_multi_service__["a" /* MultiService */]])
    ], MultiComponent);
    return MultiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/UserProfile/reporting/single/single.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-group\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a data-toggle=\"collapse\" href=\"#singlecollapse\">Recent Single Games</a>\n      </h4>\n    </div>\n    <div id=\"singlecollapse\" class=\"panel-collapse collapse\">\n      <div class=\"panel-body\">\n        <!--some comments-->\n        <div *ngFor=\"let w of reports,let i=index;\">\n          <a data-toggle=\"modal\" href=\"#mySModal{{i}}\">Open Modal</a>\n          <!-- Modal -->\n          <div id=\"mySModal{{i}}\" class=\"modal fade\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n              <!-- Modal content-->\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                  <h4 class=\"modal-title\">GameName:{{reports[i].gameSessionDetails.sessionActivity.gameName}}</h4>\n                </div>\n                <div class=\"modal-body\" *ngFor=\"let rep of reports[i].gameSessionDetails.sessionActivity.question,let j=index;\">\n                  <p>{{j}}\n                    <i class=\"material-icons\">question_answer</i>\n                  </p>\n                  <div class=\"collection\">\n                    <a href=\"#!\" class=\"collection-item\">Question:{{reports[i].gameSessionDetails.sessionActivity.question[j].question}}</a>\n                    <div *ngFor=\"let rep of reports[i].gameSessionDetails.sessionActivity.question[j].options,let k=index;\">\n                      <a href=\"#!\" class=\"collection-item\">Option {{k}}:{{reports[i].gameSessionDetails.sessionActivity.question[j].options[k]}}</a>\n                    </div>\n                    <a href=\"#!\" class=\"collection-item\"> Correct Answer :{{reports[i].gameSessionDetails.sessionActivity.question[j].correctAnswer}}</a>\n                    <a href=\"#!\" class=\"collection-item\">Selected Answer:{{reports[i].gameSessionDetails.sessionActivity.question[j].selectedAnswer}}</a>\n                  </div>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/UserProfile/reporting/single/single.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/UserProfile/reporting/single/single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reporting_single_service___ = __webpack_require__("../../../../../src/app/services/reporting-single.service..ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleComponent = /** @class */ (function () {
    function SingleComponent(router, route, httpclient, singleService) {
        this.router = router;
        this.route = route;
        this.httpclient = httpclient;
        this.singleService = singleService;
        this.now = new Date();
    }
    SingleComponent.prototype.ngOnInit = function () {
        this.getReports();
    };
    SingleComponent.prototype.getReports = function () {
        var _this = this;
        this.singleService.showGameReports().subscribe(function (reports) {
            _this.reports = reports;
            console.log("data======>>>>", reports);
            for (var index = 0; index < reports.length; index++) {
                var element = reports[index];
                console.log("element==>", element);
                console.log("gamedetails==>", element.gameSessionDetails);
                var element1 = element.gameSessionDetails;
                console.log("multiSessionActivity==>", element1.sessionActivity);
                console.log("question==>", element1.sessionActivity.question);
                for (var index_1 = 0; index_1 < element1.sessionActivity.question.length; index_1++) {
                    var element2 = element1.sessionActivity.question[index_1];
                    console.log("element2===>", element2.question);
                }
            }
        });
    };
    SingleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-single",
            template: __webpack_require__("../../../../../src/app/UserProfile/reporting/single/single.component.html"),
            styles: [__webpack_require__("../../../../../src/app/UserProfile/reporting/single/single.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__services_reporting_single_service___["a" /* SingleService */]])
    ], SingleComponent);
    return SingleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/UserProfile/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12\">\n    <div class=\"profile clearfix\" *ngIf='testUser'>\n      <div>\n        <div class=\"image\">\n          <!-- <img src=\"http://www.hdfbcover.com/randomcovers/covers/be-happy-it-drives-people-crazy-fb-cover.jpg\" class=\"img-cover\"> -->\n          <img src='{{testUser.coverImage}}' class=\"img-cover\">\n        </div>\n        <div class=\"user clearfix\">\n          <a data-target=\"#myModal\" data-toggle=\"modal\">\n            <div class=\"avatar\">\n              <img src='{{testUser.image}}' class=\"img-thumbnail img-profile\">\n            </div>\n          </a>\n          <h2>{{testUser.userName}}</h2>\n          <div class=\"actions\">\n            <div class=\"btn-group\">\n              <button class=\"btn btn-default btn-sm tip btn-responsive\" [routerLink]=\"['/form',testUser.email]\">\n                <span class=\"glyphicon glyphicon-share-alt glyphicon glyphicon-white\"></span>\n                <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n                Update Profile</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"info\">\n          <p>\n            <i class=\"fa fa-globe\" aria-hidden=\"true\" style=\"color:#4a148c\"></i>\n            <span class=\"title\">\n              <b>Location</b> : </span>{{testUser.location}}</p>\n          <p>\n            <i class=\"fa fa-gift\" aria-hidden=\"true\" style=\"color:#d32248\"></i>\n            <span class=\"title\">\n              <b>Date Of Birth</b> : </span>{{testUser.age| slice:0:10}}</p>\n          <p>\n            <i style=\"color:#33b5e5\" class=\"fa fa-life-ring\" aria-hidden=\"true\"></i>\n            <span class=\"title\">\n              <b>About Me</b> : </span>{{testUser.aboutMe}}</p>\n          <p>\n            <i style=\"color:#1bf80f\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n            <span class=\"title\">\n              <b>Status</b> : </span>{{testUser.status}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- *************************** U P D A T E  P R O F I L E   D A T A *************************** -->\n  <div class=\"container-fluid\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-2 col-4\">\n        <div class=\"progressBar\">\n          <circle-progress percent={{percent}} [radius]=\"50\" [outerStrokeWidth]=\"16\" [innerStrokeWidth]=\"0\" [outerStrokeColor]=\"'#33b5e5'\"\n            [innerStrokeColor]=\"'#C7E596'\" [animation]=\"true\" [animationDuration]=\"2000\" [subtitleColor]=\"'#00aabf'\" [unitsColor]=\"'#00aabf'\"\n            [titleColor]=\"'#00aabf'\">\n          </circle-progress>\n        </div>\n      </div>\n      <!-- *************************** T O T A L  P L A Y E D  H I S T O R Y   *************************** -->\n      <div class=\"col-lg-6 col-md-6 col-sm-9 col-xs-4 col-12\">\n        <div class=\"container\">\n          <div class=\"column justify-content-center\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-2 col-12\">\n              <table>\n                <thead>\n                  <tr>\n                    <th class=\"neutral\">Total Played</th>\n                    <th id=\"win\">Won</th>\n                    <th id=\"draw\">Draw</th>\n                    <th id=\"defeat\">Defeat</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"neutral\">0</td>\n                    <td id=\"win\">0</td>\n                    <td id=\"draw\">0</td>\n                    <td id=\"defeat\">0</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <!-- *************************** R E C E N T   P L A Y E D   G A M E *************************** -->\n            <!-- <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-2 col-12\">\n              <p id=center class=\"gameHeader md-body-2\">Favorite Games</p>\n              <mat-tab-group>\n                <mat-tab label=\"Game 1\">\n                  <div class=\"container\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-2 col-12\">\n                        <img src=\"https://lh3.googleusercontent.com/A7fn0UEbGKNDMx8Uedl9k9YNVORLsfrlqqfo9z6h7quCbl_w2H6pkKEHbfNYMn3up70=s180-rw\"\n                          class=\"img-fluid\">\n                      </div>\n                      <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-10 col-12\">\n                        <div class=\"likeContent\">\n                          The very famous \"Fastest Finger First\" quiz game, now on your finger tips. - Test your general knowledge. - Questions are\n                          in Hindi. - Think Fast Do Fast.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </mat-tab>\n                <mat-tab label=\"Game 2\">\n                  <div class=\"container\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-2 col-12\">\n                        <img class=\"image\" src=\"https://lh3.ggpht.com/cDanO7DuSF96V4N66b9unk5M_rFbJ6XoQryFXHcWC7S0UYMoqmJZVistkKhRCue_Pqg=s180-rw\">\n                      </div>\n                      <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-10 col-12\">\n                        <div class=\"likeContent\">\n                          The very famous \"Fastest Finger First\" quiz game, now on your finger tips. - Test your general knowledge. - Questions are\n                          in Hindi. - Think Fast Act Fast.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </mat-tab>\n                <mat-tab label=\"Game 3\">\n                  <div class=\"container\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-2 col-12\">\n                        <img class=\"image\" src=\"https://lh3.ggpht.com/9oBSutZgzHofQbgepZ82k4L1nA6V-j-H9msX5f99EMDcZcBMv8INQLloGr-W68h0a7U5=s180-rw\">\n                      </div>\n                      <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-10 col-12\">\n                        <div class=\"likeContent\">\n                          The very famous \"Fastest Finger First\" quiz game, now on your finger tips. - Test your general knowledge. - Questions are\n                          in Hindi. - Think Fast Work Fast.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </mat-tab>\n                <mat-tab label=\"Game 4\">\n                  <div class=\"container\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-2 col-12\">\n                        <img class=\"image\" src=\"https://lh3.ggpht.com/FTkmcJsMs4IXpgB6W-CwJZo42N7v3AAEMYkQk67FpCO3ezIvOYWjLHOJ9n5o6W0SgWc=s180-rw\">\n                      </div>\n                      <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-10 col-12\">\n                        <div class=\"likeContent\">\n                          The very famous \"Fastest Finger First\" quiz game, now on your finger tips. - Test your general knowledge. - Questions are\n                          in Hindi. - Think Fast Play Fast.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </mat-tab>\n                <mat-tab label=\"Game 5\">\n                  <div class=\"container\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-2 col-12\">\n                        <img class=\"image\" src=\"https://lh3.ggpht.com/REt6RtbfYQB7ZWkvqm-NO8ytZSZEmRmwxvNyQeFVSBLkY_M680nYPzbDfMO9D1hOsnI=s180-rw\">\n                      </div>\n                      <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-10 col-12\">\n                        <div class=\"likeContent\">\n                          The very famous \"Fastest Finger First\" quiz game, now on your finger tips. - Test your general knowledge. - Questions are\n                          in Hindi. - Think Fast Process Fast.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </mat-tab>\n              </mat-tab-group>\n            </div>\n          </div>\n        </div>\n      </div> -->\n\n\n\n\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-2 col-12\">\n              <p id=center class=\"gameHeader md-body-2\">Favorite Games</p>\n              <div>\n                <mat-tab-group>\n                  <mat-tab *ngFor=\"let game of likeGames\" label={{game.name}}>\n                    <div class=\"container\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-2 col-12\">\n                          <img src='{{game.img}}' class=\"img-fluid\">\n                        </div>\n                        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-10 col-12\">\n                          <div class=\"likeContent\">\n                            <div class=\"container\"></div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </mat-tab>\n                </mat-tab-group>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- ***************************  G A M E   D A T A  *************************** -->\n      <div class=\"col-lg-4 col-md-4 col-sm-10 col-xs-12 col-12\">\n        <!-- <div class=\"recent\">\n          <p id=center class=\"gameHeader md-body-2\">Recently Played Games</p>\n          <div>\n            <ul class=\"collection\">\n              <li class=\"collection-item avatar\">\n                <i class=\"material-icons circle blue\">timer_10</i>\n                <span class=\"title\">Game 1</span>\n                <p>First Line\n                  <br> Last Played : 1 min 20 s ago\n                </p>\n              </li>\n              <li class=\"collection-item avatar\">\n                <i class=\"material-icons circle blue\">child_friendly</i>\n                <span class=\"title\">Game 2</span>\n                <p>First Line\n                  <br> Last Played : 50 min ago\n                </p>\n              </li>\n              <li class=\"collection-item avatar\">\n                <i class=\"material-icons circle green\">nature_people</i>\n                <span class=\"title\">Game 3</span>\n                <p>First Line\n                  <br> Last Played : 14 hrs ago\n                </p>\n              </li>\n              <li class=\"collection-item avatar\">\n                <i class=\"material-icons circle red\">toys</i>\n                <span class=\"title\">Game 4</span>\n                <p>First Line\n                  <br> Last Played : 3 days ago\n                </p>\n              </li>\n            </ul>\n          </div> -->\n\n        <div class=\"recent\">\n          <p id=center class=\"gameHeader md-body-2\">Recently Played Games</p>\n          <div class=\"recentGame container\">\n            <ul class=\"collection\">\n              <!-- <li class=\"collection-item avatar\">\n                <button mat-raised-button [routerLink]=\"['single']\">Single data</button>\n                \n              </li>\n              <li class=\"collection-item avatar\">\n                <button [routerLink]=\"['multi']\">Multi data</button>\n              </li>\n              <li class=\"collection-item avatar\">\n                <button [routerLink]=\"['adaptive']\">Adaptive data</button>\n              </li> -->\n              <li class=\"list-group-item list-group-item-info\" [routerLink]=\"['/single',testUser.usserId]\">\n                <div class=\"row justify-content-center\">\n                  Single Player Games\n                </div>\n              </li>\n              <br>\n              <li class=\"list-group-item list-group-item-warning\" [routerLink]=\"['/multi',testUser.usserId]\">\n                <div class=\"row justify-content-center\">\n                  Multi Player Games\n                </div>\n              </li>\n              <br>\n              <li class=\"list-group-item list-group-item-danger\" [routerLink]=\"['/adaptive',testUser.usserId]\">\n                <div class=\"row justify-content-center\">\n                  Adaptive Games\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/UserProfile/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile {\n  width: 100%;\n  position: relative;\n  background: #fff;\n  border: 1px solid #d5d5d5;\n  padding-bottom: 5px;\n  margin-bottom: 20px; }\n\n.profile .image {\n  display: block;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  text-align: center;\n  border: 5px solid #fff; }\n\n.profile .user {\n  position: relative;\n  padding: 0px 5px 5px; }\n\n.profile .user .avatar {\n  position: absolute;\n  left: 20px;\n  top: -85px;\n  z-index: 2;\n  -webkit-box-shadow: 8px 10px 11px 0px #2bbca1 !important;\n          box-shadow: 8px 10px 11px 0px #2bbca1 !important; }\n\n.profile .user h2 {\n  font-size: 16px;\n  line-height: 20px;\n  display: block;\n  float: left;\n  margin: 4px 0px 0px 135px;\n  font-weight: bold; }\n\n.profile .user .actions {\n  float: right; }\n\n.profile .user .actions .btn {\n  margin-bottom: 0px; }\n\n.profile .info {\n  float: left;\n  margin-left: 20px; }\n\n.img-profile {\n  height: 100px;\n  width: 100px; }\n\n.img-cover {\n  width: 100%;\n  height: 300px; }\n\n@media (max-width: 768px) {\n  .btn-responsive {\n    padding: 2px 4px;\n    font-size: 80%;\n    line-height: 1;\n    border-radius: 3px; } }\n\n@media (min-width: 769px) and (max-width: 992px) {\n  .btn-responsive {\n    padding: 4px 9px;\n    font-size: 90%;\n    line-height: 1.2; } }\n\n.progressBar {\n  position: relative;\n  padding: 50% 50% 50% 0%; }\n\n.progressBar circle-progress {\n  cursor: pointer; }\n\n@media screen and (max-width: 395px) {\n  .progressBar {\n    padding: 71% 0% 0% 0% !important;\n    margin: 57% -58% 0%; } }\n\n@media screen and (max-width: 310px) {\n  .progressBar {\n    padding: 71% 0% 0% 0% !important;\n    margin: 131% -62% 3%; } }\n\n@media screen and (max-width: 290px) {\n  .progressBar {\n    padding: 105% 0% 0% 0% !important;\n    margin: 101% -62% 3%; } }\n\n#percentComplete {\n  font-weight: bolder;\n  letter-spacing: 3px;\n  font-size: 20px; }\n\n.gameHeader {\n  font-weight: bolder;\n  letter-spacing: 3px;\n  text-align: center;\n  font-size: 18px; }\n\n.img-fluid {\n  min-height: 225px;\n  min-width: 225px;\n  width: auto !important;\n  height: auto !important;\n  border-radius: 25px; }\n\n.list-group-item {\n  cursor: pointer; }\n\nul {\n  border-radius: 2%; }\n\nli {\n  height: 50px !important;\n  letter-spacing: 5px; }\n\nli:hover {\n  zoom: 120%;\n  font-size: 110%;\n  font-weight: bolder; }\n\n#neutral {\n  color: grey;\n  font-weight: bolder; }\n\n#win {\n  color: greenyellow;\n  font-weight: bolder; }\n\n#draw {\n  color: blue;\n  font-weight: bolder; }\n\n#defeat {\n  color: red;\n  font-weight: bolder; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/UserProfile/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_profile_service__ = __webpack_require__("../../../../../src/app/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recommendation_service__ = __webpack_require__("../../../../../src/app/recommendation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = /** @class */ (function () {
    //As the constructor is initialised by the JavaScript engine, and TypeScript allows us
    //to tell Angular what dependencies we require to be mapped against a specific property
    function UserProfileComponent(router, route, http, userService, recommendationService) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.userService = userService;
        this.recommendationService = recommendationService;
        //sessionStorage properties allow to save key/value pairs in a web browser
        this.email = sessionStorage.getItem("userEmail");
        this.totalDataNumber = 0;
        this.u = this.userService.getById;
    }
    //as user profile page loads, it fetches data with respect to that email (Unique ID here).
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getUserByEmail(this.email);
        this.showFavorites();
        this.getProfilePercent(this.email);
    };
    UserProfileComponent.prototype.showFavorites = function () {
        var _this = this;
        this.recommendationService.getAll1().subscribe(function (data) {
            _this.likeGames = data;
        });
    };
    //functionality of fetching user data with respect to that email (Unique ID here).
    UserProfileComponent.prototype.getUserByEmail = function (email) {
        var _this = this;
        this.userService.getById(email).subscribe(function (data) {
            _this.user = Array.of(data);
            _this.testUser = data;
            console.log("User data = = = = = == = = = = = = ", _this.testUser);
            console.log("test data===" + _this.testUser.password);
        });
    };
    UserProfileComponent.prototype.getProfilePercent = function (email) {
        var _this = this;
        this.userService.profilePercent(email).subscribe(function (incoming) {
            console.log("Itna percent pahuncha h -----------> > >  > > ", incoming);
            return (_this.percent = 100 - incoming);
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "sn-user-profile",
            template: __webpack_require__("../../../../../src/app/UserProfile/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/UserProfile/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_profile_service__["a" /* UserProfileService */],
            __WEBPACK_IMPORTED_MODULE_3__recommendation_service__["a" /* RecommendationService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/UserProfile/userupdateprofile/userupdateprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--************************************* Updating user profile form ************************************* -->\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12\">\n      <mat-card class=\"card2\" id=\"card2\">\n        <font>\n          <mat-card-subtitle>\n            <h3 style=\"letter-spacing: 4px\">Update User Form </h3>\n          </mat-card-subtitle>\n          <!-- The *ngFor in the <li> element is the Angular \"repeater\" directive. \n      It marks that <li> element (and its children) as the \"repeater template\": -->\n          <table *ngFor=\"let u of user\">\n            <td>\n              <!--************ [(ngModel)] binds database data to show before updation on Form **************** -->\n              <input type=\"hidden\" [(ngModel)]=\"u.userId\" placeholder=\"userId\" />\n            </td>\n            <tr>\n              <td>\n                <b>\n                  <td>\n                    <i style=\"color:#ee1eb3fd\" class=\"fa fa-user fa\" aria-hidden=\"true\"></i>\n                  </td>\n                  <td> User Name</td>\n                </b>\n              </td>\n              <td>\n                <input type=\"text\" [(ngModel)]=\"u.userName\" placeholder=\"People will see you\" />\n              </td>\n            </tr>\n            <input type=\"hidden\" [(ngModel)]=\"u.password\" />\n            <tr>\n              <td>\n                <b>\n                  <td>\n                    <i style=\"color:#d32248;\" class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i>\n                  </td>\n                  <td>E- Mail</td>\n                </b>\n              </td>\n              <td>\n                <input type=\"text\" [(ngModel)]=\"u.email\" placeholder=\"Keep you up-to-date\" />\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <b>\n                  <td>\n                    <i style=\"color:#5f6d65;\" class=\"fa fa-grav fa\" aria-hidden=\"true\"></i>\n                  </td>\n                  <td> Age</td>\n                </b>\n              </td>\n              <td>\n                <!--******* onfocus(HTML property) to change look of form inpput as user clicks****** -->\n                <input type=\"text\" [(ngModel)]=\"u.age\" placeholder=\"date\" onfocus=\"(this.type='date')\">\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <b>\n                  <td>\n                    <i style=\"color:#00f2bd\" class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n                  </td>\n                  <td>Profile picture</td>\n                </b>\n              </td>\n              <td>\n                <input type=\"text\" [(ngModel)]=\"u.image\" placeholder=\"Lets make it look better\" />\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <b>\n                  <td>\n                    <i style=\"color:#f8fc19\" class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n                  </td>\n                  <td> Cover image</td>\n                </b>\n              </td>\n              <td>\n                <input type=\"text\" [(ngModel)]=\"u.coverImage\" placeholder=\"60% look of your profile\" />\n              </td>\n            </tr>\n            <input type=\"hidden\" [(ngModel)]=\"u.gender\" />\n            <tr>\n              <td>\n                <b>\n                  <td>\n                    <i style=\"color:#bf22c7\" class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                  </td>\n                  <td> Location</td>\n                </b>\n              </td>\n              <td>\n                <input type=\"text\" [(ngModel)]=\"u.location\" placeholder=\"find who's playing nearby\" />\n              </td>\n            </tr>\n            <input type=\"hidden\" [(ngModel)]=\"u.level\" />\n            <input type=\"hidden\" [(ngModel)]=\"u.levelName\" />\n            <tr>\n              <td>\n                <b>\n                  <td>\n                    <i style=\"color:#0de4cf\" class=\"fa fa-life-ring\" aria-hidden=\"true\"></i>\n                  </td>\n                  <td> About Me</td>\n                </b>\n              </td>\n              <td>\n                <input type=\"text\" [(ngModel)]=\"u.aboutMe\" />\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <b>\n                  <td>\n                    <i style=\"color:#1bf80f\" class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                  </td>\n                  <td> Status</td>\n                </b>\n              </td>\n              <td>\n                <input type=\"text\" [(ngModel)]=\"u.status\" />\n              </td>\n            </tr>\n            <input type=\"hidden\" [(ngModel)]=\"u.gameCount\" />\n            <tr class=\"justify-content-center\">\n              <!-- <button style=\"margin-left: 120%\" type=\"submit\" class=\"btn btn-success\" (click)=\"updateUser(u)\" (click)=\"goBack()\">Update</button> -->\n              <button style=\"margin-left: 83%\" type=\"submit\" class=\"btn btn-default btn-sm tip btn-responsive\" (click)=\"updateUser(u)\" (click)=\"showSnackBar()\" (click)=\"goBack()\">\n                <span class=\"glyphicon glyphicon-share-alt glyphicon glyphicon-white\"></span>\n                Update\n                <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n              </button>\n            </tr>\n          </table>\n        </font>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/UserProfile/userupdateprofile/userupdateprofile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  text-align: center;\n  font-weight: bolder; }\n\nb {\n  zoom: 130% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/UserProfile/userupdateprofile/userupdateprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserupdateprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_profile_service__ = __webpack_require__("../../../../../src/app/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//component to initialise update user profile request.
var UserupdateprofileComponent = /** @class */ (function () {
    //As the constructor is initialised by the JavaScript engine, and TypeScript allows us
    //to tell Angular what dependencies we require to be mapped against a specific property
    function UserupdateprofileComponent(route, location, router, userService, snackBar) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.userService = userService;
        this.snackBar = snackBar;
    }
    //as soon as page loads, it fetches initial data from database that is preset, over which updations
    //can be implemented.
    UserupdateprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params["id"];
            if (id) {
                _this.userService.getById(id).subscribe(function (data) {
                    _this.user = Array.of(data);
                });
            }
        });
    };
    //Actual function of updating a user profile
    UserupdateprofileComponent.prototype.updateUser = function (user) {
        this.userService.updateUser(user).subscribe(function (data) {
            console.log("ID   >>>>>>>>>", data);
        });
    };
    UserupdateprofileComponent.prototype.showSnackBar = function () {
        this.snackBar.open('Data Successfully Updated', 'X', { duration: 5000 });
    };
    UserupdateprofileComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserupdateprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "sn-userupdateprofile",
            template: __webpack_require__("../../../../../src/app/UserProfile/userupdateprofile/userupdateprofile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/UserProfile/userupdateprofile/userupdateprofile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_profile_service__["a" /* UserProfileService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSnackBar */]])
    ], UserupdateprofileComponent);
    return UserupdateprofileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/adaptive-play-board/adaptive-play-board.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<h5 style=\"text-align: center\">Adaptive Quiz !</h5>\n<hr>\n<br>\n<br>\n<div id=\"main-content\" class=\"container\">\n <div class=\"row\">\n    <div class=\"col m12 c1\" *ngIf=\"i1==0\" >\n     \n <!-- <form class=\"form-inline\">\n       <div class=\"form-group\"> -->\n         \n         \n         <div class=\"col m12\" >\n             <div class=\"card\">\n               <div class=\"card-content\">\n                   \n                 \n                 <strong>Rules:</strong>\n                 <br>\n                 <p>\n                   The each question given is based on your previous answered questions.\n                   There is no time limit for any question as this quiz is intended to make you understand of your knowledge in a particular topic.\n                 </p>\n                 <br>\n                 <br>\n                 <strong>Description :</strong>\n                 <br>\n                 <p>\n                     The Adaptive Quiz provide you a way to enhance your knowledge through fun and increase your basic I.Q .\n                   </p>\n                   <br>\n                   <button id=\"send\" class=\"btn btn-default\" type=\"button\" (click)=\"sendResponse()\">Start Game</button>\n         <button id=\"send\" class=\"btn btn-default\" type=\"button\" (click)=\"BackClicked()\">back</button>\n               </div>\n             </div>\n           </div>\n       <!-- </div>\n     </form> -->\n     \n    </div>\n     <div *ngIf=\"i1==1\">\n         <div class=\"col m12\" >\n           <div class=\"card\">\n             <div class=\"card-content\">\n                 Question Level : {{questionLevel}}\n                 <br>\n               <label for=\"questionStamp\" >{{questionId}}</label>\n               <strong>{{questionStamp}} </strong>\n             \n             </div>\n           </div>\n         </div>\n         <div class=\"col m12\">\n           <div class=\"card\">\n            <a (click)='sendAnswer(op1)'>\n              <div class=\"card-action\">\n               <label >1) : {{op1}}</label>\n             </div>\n           </a>\n           </div>\n         </div>\n         <div class=\"col m12\">\n           <div class=\"card\">\n               <a (click)='sendAnswer(op2)'>\n                   <div class=\"card-action\">\n                    <label >2) : {{op2}}</label>\n                  </div>\n                </a>\n           </div>\n         </div>\n         <div class=\"col m12\">\n           <div class=\"card\">\n               <a (click)='sendAnswer(op3)'>\n                   <div class=\"card-action\">\n                    <label >3) : {{op3}}</label>\n                  </div>\n                </a>\n           </div>\n         </div>\n         <div class=\"col m12\">\n           <div class=\"card\">\n               <a (click)='sendAnswer(op4)'>\n                   <div class=\"card-action\">\n                    <label >4) : {{op4}}</label>\n                  </div>\n                </a>\n           </div>\n         </div>\n     </div>\n     \n   </div>\n   </div>"

/***/ }),

/***/ "../../../../../src/app/adaptive-play-board/adaptive-play-board.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  max-width: 1340px;\n  width: 90%;\n  margin: 0px auto; }\n\ncircle {\n  border-radius: 50%; }\n\na:hover {\n  background-color: #5d8399; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adaptive-play-board/adaptive-play-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptivePlayBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stompjs__ = __webpack_require__("../../../../stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sockjs_client__ = __webpack_require__("../../../../sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sockjs_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdaptivePlayBoardComponent = /** @class */ (function () {
    //jsonData: ResponseData
    function AdaptivePlayBoardComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.data = [];
        this.options = [];
        this.showConversation = false;
        this.i = 1;
        this.i1 = 0;
    }
    AdaptivePlayBoardComponent.prototype.connect = function () {
        var socket = new __WEBPACK_IMPORTED_MODULE_4_sockjs_client__("http://maverick.stackroute.in:9094/greeting");
        this.ws = __WEBPACK_IMPORTED_MODULE_3_stompjs__["over"](socket);
        var that = this;
        this.ws.connect({}, function (frame) {
            that.ws.subscribe("/errors", function (message) {
                alert("Error " + message.body);
            });
            that.ws.subscribe("/topic/reply", function (message) {
                console.log(message);
                that.showGreeting(message.body);
            });
            that.disabled = true;
        });
    };
    AdaptivePlayBoardComponent.prototype.disconnect = function () {
        if (this.ws != null) {
            this.ws.ws.close();
        }
        this.setConnected(false);
        console.log("Disconnected");
    };
    AdaptivePlayBoardComponent.prototype.sendResponse = function () {
        this.i1 = 1;
        console.log("Data Send ==========>");
        var data = JSON.stringify({
            questionId: "11",
            selectedResponse: "any",
        });
        console.log("edelwksamdkmsdasmk==============>" + data);
        this.ws.send("/app/message", {}, data);
    };
    AdaptivePlayBoardComponent.prototype.sendAnswer = function (answer) {
        this.selectedAnswer = answer;
        var ans = JSON.stringify({
            questionId: this.questionId,
            selectedResponse: this.selectedAnswer,
        });
        console.log("selected data ==============>" + ans);
        this.ws.send("/app/message", {}, ans);
    };
    AdaptivePlayBoardComponent.prototype.showGreeting = function (message) {
        this.showConversation = true;
        this.message = message;
        console.log("===>" + message);
        console.log("Type of Data =====> " + typeof message);
        var rep = message.replace("{", "").replace("}", "").replace(/"/g, '');
        var quest = rep.split(",");
        console.log(quest);
        // let question = quest.split(":");
        for (var j = 0; j <= quest.length; j++) {
            this.data[j] = quest[j];
        }
        console.log("Hello");
        this.questionId = this.i++;
        console.log(this.questionId);
        this.questionLevel = +this.data[1].split(':')[1];
        this.questionStamp = this.data[2].split(':')[1];
        console.log("kkkk=" + this.questionStamp);
        this.op1 = this.data[3].split(":")[1];
        this.op2 = this.data[4].split(":")[1];
        this.op3 = this.data[5].split(":")[1];
        this.op4 = this.data[6].split(":")[1];
        console.log(this.op1);
        console.log("sjewrur=========================================>" + this.options);
        console.log("splited data=====>" + this.data);
        this.data.push();
        console.log("Response Data : " + this.data);
        if (this.i > 11) {
            this.disconnect();
            console.log("done");
            this.router.navigate(['/adaptiveresult']);
        }
    };
    AdaptivePlayBoardComponent.prototype.setConnected = function (connected) {
        this.disabled = connected;
        this.showConversation = connected;
        this.data = [];
    };
    AdaptivePlayBoardComponent.prototype.ngOnInit = function () {
        this.i = 1;
        this.connect();
    };
    AdaptivePlayBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'sn-adaptive-play-board',
            template: __webpack_require__("../../../../../src/app/adaptive-play-board/adaptive-play-board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/adaptive-play-board/adaptive-play-board.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdaptivePlayBoardComponent);
    return AdaptivePlayBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/adaptive-result/adaptive-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-lg-6 col-md-8 col-sm-12 col-xs-12 col-12 aa\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-9 col-12 aa\">\n                        <div class=\"card horizontal\">\n                            <div class=\"card-image\">\n                                <img src=\"https://png.pngtree.com/element_origin_min_pic/16/08/25/1757beb73c8dec3.jpg\" style=\"\n                                margin-left: 334px;\n                                height: 260px;\">\n                            </div>\n                            <!-- <a class=\"btn-floating halfway-fab waves-effect waves-light red\" (click)=\"restart()\">\n                                <i class=\"material-icons\">replay</i>\n                            </a> -->\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div> \n<!-- <button (click)=\"getResult()\">Get Result</button> -->\n<br>\n<h3>Game Result</h3>\n<ng-container *ngFor=\"let qn of question;let i=index\">\n    <div class=\"card blue-grey darken-1\">\n        <div class=\"card-content white-text\">\n            <span class=\"card-title\">{{i+1}}</span>\n            <p>{{qn.questionStem}}</p>\n            <br>\n            Question Level : {{qn.questionLevel}}\n            \n        </div>\n        <div class=\"card-action\">\n            <ul class=\"collection\">\n                <ng-container>\n                    <li class=\"collection-item\">\n                        {{qn.option1}}\n                        <span class=\"badge\" *ngIf=\"qn.option1==qn.correctAnswer\">\n                            <i class=\"material-icons green-text\">check_circle</i>\n                        </span>\n                        <span class=\"badge red-text\" *ngIf=\"qn.option1!=qn.correctAnswer && qn.option1==qn.userAnswered\">Incorrect</span>\n                    </li>\n                </ng-container>\n            </ul>\n       \n                <ul class=\"collection\">\n                    <ng-container>\n                        <li class=\"collection-item\">\n                            {{qn.option2}}\n                            <span class=\"badge\" *ngIf=\"qn.option2==qn.correctAnswer\">\n                                <i class=\"material-icons green-text\">check_circle</i>\n                            </span>\n                            <span class=\"badge red-text\" *ngIf=\"qn.option2!=qn.correctAnswer && qn.option2==qn.userAnswered\">Incorrect</span>\n                        </li>\n                    </ng-container>\n                </ul>\n            \n                    <ul class=\"collection\">\n                        <ng-container>\n                            <li class=\"collection-item\">\n                                {{qn.option3}}\n                                <span class=\"badge\" *ngIf=\"qn.option3==qn.correctAnswer\">\n                                    <i class=\"material-icons green-text\">check_circle</i>\n                                </span>\n                                <span class=\"badge red-text\" *ngIf=\"qn.option3!=qn.correctAnswer && qn.option3==qn.userAnswered\">Incorrect</span>\n                            </li>\n                        </ng-container>\n                    </ul>\n                \n                        <ul class=\"collection\">\n                            <ng-container>\n                                <li class=\"collection-item\">\n                                    {{qn.option4}}\n                                    <span class=\"badge\" *ngIf=\"qn.option4==qn.correctAnswer\">\n                                        <i class=\"material-icons green-text\">check_circle</i>\n                                    </span>\n                                    <span class=\"badge red-text\" *ngIf=\"qn.option4!=qn.correctAnswer && qn.option4==qn.userAnswered\">Incorrect</span>\n                                </li>\n                            </ng-container>\n                        </ul>\n                    </div>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/adaptive-result/adaptive-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adaptive-result/adaptive-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptiveResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_adaptive_service__ = __webpack_require__("../../../../../src/app/services/adaptive.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdaptiveResultComponent = /** @class */ (function () {
    function AdaptiveResultComponent(router, servic) {
        this.router = router;
        this.servic = servic;
    }
    AdaptiveResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servic.getResult().subscribe(function (data) {
            console.log("test=" + data);
            _this.data = data;
            _this.question = data.response;
            console.log(_this.question);
        });
    };
    AdaptiveResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-adaptive-result',
            template: __webpack_require__("../../../../../src/app/adaptive-result/adaptive-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/adaptive-result/adaptive-result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_adaptive_service__["a" /* AdaptiveService */]])
    ], AdaptiveResultComponent);
    return AdaptiveResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/administration/administration.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\">\n  <div class=\"container-fostrap\">\n    <div>\n      <img src=\"https://qph.ec.quoracdn.net/main-qimg-5ca1d9a557ecf62e1eefc8ad3360b2e1.webp\" class=\"fostrap-logo\" />\n      <h1 class=\"heading\">\n        ADMIN Portal\n      </h1>\n    </div>\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-5 col-md-6 col-xs-10 col-sm-10 col-12\" routerLink=\"/question\">\n            <div class=\"card\">\n              <a class=\"img-card\">\n                <img src=\"https://res.cloudinary.com/dreamworth-in/image/upload/v1495696214/growing-business_czddwn.jpg\" />\n              </a>\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">\n                  Add Category\n                </h4>\n              </div>\n              <div class=\"card-read-more\">\n                <a routerLink=\"/question\" class=\"btn btn-link btn-block\">\n                  Go &emsp;&emsp;>>>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-1\"></div>\n          <div class=\"col-lg-5 col-md-6 col-xs-10 col-sm-10 col-12\" (click)=\"grafna()\">\n            <div class=\"card\">\n              <a class=\"img-card\">\n                <img src=\"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5410310.jpg\" />\n              </a>\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">\n                  Grafana\n                </h4>\n              </div>\n              <div class=\"card-read-more\">\n                <a href (click)=\"grafna()\" class=\"btn btn-link btn-block\">\n                  Go &emsp;&emsp;>>>\n                </a>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"col-xs-12 col-sm-4\">\n            <div class=\"card\">\n              <a class=\"img-card\">\n                <img src=\"https://siteber.com/mysitebercontent/uploads/2013/12/htaccess-ip-block.jpg\" />\n              </a>\n              <div class=\"card-content\">\n                <h4 class=\"card-title\">\n                  Block a user\n                </h4>\n\n              </div>\n              <div class=\"card-read-more\">\n                <a href=\"\" class=\"btn btn-link btn-block\">\n                  Go &emsp;&emsp;>>>\n                </a>\n              </div>\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/administration/administration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);\n.card:hover {\n  cursor: pointer; }\nhtml,\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  background: #FFF;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400; }\n.wrapper {\n  display: table;\n  height: 100%;\n  width: 100%; }\n.container-fostrap {\n  display: table-cell;\n  padding: 1em;\n  text-align: center;\n  vertical-align: middle; }\n.fostrap-logo {\n  width: 100px;\n  margin-bottom: 15px; }\nh1.heading {\n  color: #fff;\n  font-size: 1.15em;\n  font-weight: 900;\n  margin: 0 0 0.5em;\n  color: #505050; }\n@media (min-width: 450px) {\n  h1.heading {\n    font-size: 3.55em; } }\n@media (min-width: 760px) {\n  h1.heading {\n    font-size: 3.05em; } }\n@media (min-width: 900px) {\n  h1.heading {\n    font-size: 3.25em;\n    margin: 0 0 0.3em; } }\n.card {\n  display: block;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  -webkit-transition: -webkit-box-shadow .25s;\n  transition: -webkit-box-shadow .25s;\n  transition: box-shadow .25s;\n  transition: box-shadow .25s, -webkit-box-shadow .25s; }\n.card:hover {\n  -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n.img-card {\n  width: 100%;\n  height: 200px;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  display: block;\n  overflow: hidden; }\n.img-card img {\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: all .25s ease;\n  transition: all .25s ease; }\n.card-content {\n  padding: 15px;\n  text-align: left; }\n.card-title {\n  margin-top: 0px;\n  font-weight: 700;\n  font-size: 1.65em; }\n.card-title a {\n  color: #000;\n  text-decoration: none !important; }\n.card-read-more {\n  border-top: 1px solid #D4D4D4; }\n.card-read-more a {\n  text-decoration: none !important;\n  padding: 10px;\n  font-weight: 600;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/administration/administration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent(quizService, userService, router) {
        this.quizService = quizService;
        this.userService = userService;
        this.router = router;
    }
    AdministrationComponent.prototype.ngOnInit = function () {
    };
    AdministrationComponent.prototype.grafna = function () {
        window.open("http://maverick.stackroute.in:3000/?orgId=1", "_blank");
    };
    AdministrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-administration',
            template: __webpack_require__("../../../../../src/app/administration/administration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/administration/administration.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdministrationComponent);
    return AdministrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/advanced-mode/advanced-mode.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/advanced-mode/advanced-mode.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Advanced Game Mode</mat-card-title>\n        </mat-card-header>\n        \n        <mat-card-content>\n          <p>\n            This game mode is for decreasing the time alotted to every set of questions by a specific\n            percentage. You can select the percentage from the below option to reduce the time per question by the selected percentage.\n\n            </p>\n        </mat-card-content>\n        <mat-radio-group>\n                <mat-radio-button value=\"1\">Reduce By 25%</mat-radio-button><br><br>\n                <mat-radio-button value=\"2\">Reduce By 50%</mat-radio-button><br><br>\n                <mat-radio-button value=\"3\">Reduce By 75%</mat-radio-button>\n        </mat-radio-group>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/advanced-mode/advanced-mode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedModeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AdvancedModeComponent = /** @class */ (function () {
    function AdvancedModeComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AdvancedModeComponent.prototype.ngOnInit = function () {
    };
    AdvancedModeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-advanced-mode',
            template: __webpack_require__("../../../../../src/app/advanced-mode/advanced-mode.component.html"),
            styles: [__webpack_require__("../../../../../src/app/advanced-mode/advanced-mode.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], Object])
    ], AdvancedModeComponent);
    return AdvancedModeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/all-games-inside-topic/all-games-inside-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1 class=\"margin\">List of Games</h1> -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4 col-6 aa\" *ngFor=\"let g of game\">\n            <a routerLink=\"/game-details\" [queryParams]=\" {topicName: g.topicName,categoryId:categoryId}\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <mat-card-title>{{ g.gameName | uppercase }} </mat-card-title>\n                    </mat-card-header>\n                    <img mat-card-image src=\"{{ g.gameImage }}\" alt=\"Photo of a {{ g.gameName }}\">\n                    <a routerLink=\"/showgame\" [queryParams]=\" {topicName: g.topicName,categoryId:categoryId}\">\n                        <i style=\"margin-bottom:4px; \" class=\"material-icons\" matTooltip=\"Show Games\">Show_games</i>\n                    </a>\n                    <!-- <button mat-raised-button color=\"primary\"  (click)=\"save(g)\" (click)=\"goBack()\" >Edit</button>  -->\n                    <button mat-raised-button color=\"accent\" (click)=\"delete(g.gameId)\">Delete</button>\n                </mat-card>\n            </a>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <button mat-raised-button color=\"accent\" (click)=\"goBack()\">Back</button>\n</div>\n<div style=\"margin-right:40px; margin-bottom: 100px;\" class=\"row\">\n    <div class=\"col-md-12\">\n        <a routerLink=\"/create-game\" [queryParams]=\" {topicName:game.topicName, yId:categoryId}\">\n            <button style=\"float: right\" mat-fab color=\"primary\">\n                <span style=\"font-size: 30px\">+</span>\n            </button>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/all-games-inside-topic/all-games-inside-topic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card-title {\n  font-weight: bolder; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-games-inside-topic/all-games-inside-topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllGamesInsideTopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllGamesInsideTopicComponent = /** @class */ (function () {
    //game: any[];
    function AllGamesInsideTopicComponent(route, location, router, gameService) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.gameService = gameService;
    }
    AllGamesInsideTopicComponent.prototype.ngOnInit = function () {
        this.getTopicGames();
    };
    AllGamesInsideTopicComponent.prototype.getTopicGames = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = +params.categoryId;
            _this.topicName = params.topicName;
        });
        this.gameService.getGames(this.categoryId, this.topicName)
            .subscribe(function (data) {
            _this.game = data;
        });
        console.log('games...' + this.game);
    };
    AllGamesInsideTopicComponent.prototype.goBack = function () {
        this.location.back();
    };
    AllGamesInsideTopicComponent.prototype.delete = function (id) {
        this.gameService.deleteGame(id).subscribe();
    };
    AllGamesInsideTopicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-all-games-inside-topic',
            template: __webpack_require__("../../../../../src/app/all-games-inside-topic/all-games-inside-topic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-games-inside-topic/all-games-inside-topic.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_game_service__["a" /* GameService */]])
    ], AllGamesInsideTopicComponent);
    return AllGamesInsideTopicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/all-topics-in-category/all-topics-in-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .example-card {\n  width: 300px;\n  margin-top: 96px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n  margin-top: -3px;\n}\n\na {\n  text-decoration: none;\n}\n\nmat-card-title {\n  color: brown;\n  font-size: 25px !important;\n  padding-left: 5px;\n}\n\n.container {\n  margin-left: 156px;\n  margin-top: -23px;\n}\n\n.margin{\n  margin-bottom: -60px;\n  margin-left: 0;\n  color: rebeccapurple;\n} */\n\n.background {\n  z-index: -1;\n}\n\n.gridCentered .static {\n  position: absolute;\n  visibility: hidden;\n}\n\n.gridCentered {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.example-card {\n  max-width: 198px;\n  max-height: 236px;\n}\n\nmat-card-title {\n  letter-spacing: 2px;\n}\n\n.center {\n  margin: 0 auto;\n}\n\n.mat-card-title {\n  font-weight: bolder;\n}\n\n.right {\n  -ms-flex-line-pack: right;\n      align-content: right;\n}\n\n.aa {\n  margin-top: 20px !important;\n}\n\nmat-card {\n  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22) !important;\n          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22) !important;\n}\n\n.container {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nmat-card {\n  margin-bottom: 10px;\n}\n\n.header {\n  font-weight: bolder;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.mat-card-image {\n  height: 120px;\n}\n\nmat-checkbox {\n  position: absolute;\n  bottom: -2px;\n  right: 5px;\n}\n\ni{\n  position:absolute;\n  right:1%;\n  bottom:1%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-topics-in-category/all-topics-in-category.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"margin\">List of Topics</h1>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4 col-6 aa\" *ngFor=\"let question of questionGen\">\n            <a routerLink=\"/topic-details\" [queryParams]=\" {topicName: question.topicName,categoryId:categoryId}\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <mat-card-title>{{ question.topicName | uppercase }} </mat-card-title>\n                    </mat-card-header>\n                    <img mat-card-image src=\"{{ question.topicImage }}\" alt=\"Photo of a {{ question.topicName }}\">\n                    <a routerLink=\"/showgame\" [queryParams]=\" {topicName: question.topicName,categoryId:categoryId}\">\n                        <i style=\"margin-bottom:4px; \" class=\"material-icons\" matTooltip=\"Create Game\">create</i>\n                    </a>\n                </mat-card>\n            </a>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <button mat-raised-button color=\"accent\" (click)=\"goBack()\">Back</button>\n</div>\n<div style=\"margin-right:40px; margin-bottom: 100px;\" class=\"row\">\n    <div class=\"col-md-12\">\n    <a routerLink=\"/add-topic\" [queryParams]=\" {categoryId:categoryId}\">\n        <button style=\"float: right\" mat-fab color=\"primary\">\n            <span style=\"font-size: 30px\">+</span>\n        </button>\n    </a>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/all-topics-in-category/all-topics-in-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTopicsInCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_questionservice_service__ = __webpack_require__("../../../../../src/app/services/questionservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllTopicsInCategoryComponent = /** @class */ (function () {
    function AllTopicsInCategoryComponent(route, location, router, questionService) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.questionService = questionService;
    }
    AllTopicsInCategoryComponent.prototype.ngOnInit = function () {
        this.getTopics();
    };
    AllTopicsInCategoryComponent.prototype.getTopics = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = +params.categoryId;
        });
        this.questionService.getTopics(this.categoryId).subscribe(function (questionGen) {
            _this.questionGen = questionGen;
        });
    };
    AllTopicsInCategoryComponent.prototype.goBack = function () {
        this.location.back();
    };
    AllTopicsInCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-all-topics-in-category",
            template: __webpack_require__("../../../../../src/app/all-topics-in-category/all-topics-in-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-topics-in-category/all-topics-in-category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_questionservice_service__["a" /* QuestionService */]])
    ], AllTopicsInCategoryComponent);
    return AllTopicsInCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-side-nav></app-side-nav>\n</div>\n<div class= \"content\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 1235px) {\n  .content {\n    padding-top: 1%;\n    padding-bottom: 1%; } }\n\n@media screen and (max-width: 1089px) {\n  .content {\n    padding-top: 1%;\n    padding-bottom: 1%; } }\n\n@media screen and (max-width: 990px) {\n  .content {\n    padding-top: 1.5%;\n    padding-bottom: 1.5%; } }\n\n@media screen and (max-width: 886px) {\n  .content {\n    padding-top: 2%;\n    padding-bottom: 2%; } }\n\n@media screen and (max-width: 814px) {\n  .content {\n    padding-top: 2.5%;\n    padding-bottom: 2.5%; } }\n\n@media screen and (max-width: 753px) {\n  .content {\n    padding-top: 4%;\n    padding-bottom: 4%; } }\n\n@media screen and (max-width: 653px) {\n  .content {\n    padding-top: 5%;\n    padding-bottom: 5%; } }\n\n@media screen and (max-width: 510px) {\n  .content {\n    padding-top: 6%;\n    padding-bottom: 6%; } }\n\n@media screen and (max-width: 456px) {\n  .content {\n    padding-top: 8%;\n    padding-bottom: 8%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthServiceConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__masonry_masonry_module__ = __webpack_require__("../../../../../src/app/masonry/masonry.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masonry_masonry_token__ = __webpack_require__("../../../../../src/app/masonry/masonry-token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_urls_service__ = __webpack_require__("../../../../../src/app/category-urls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_card_game_card_component__ = __webpack_require__("../../../../../src/app/game-card/game-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__advanced_mode_advanced_mode_component__ = __webpack_require__("../../../../../src/app/advanced-mode/advanced-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_searchService__ = __webpack_require__("../../../../../src/app/services/searchService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__carousel_ngu_carousel_module__ = __webpack_require__("../../../../../src/app/carousel/ngu-carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__carousel_card_carousel_card_component__ = __webpack_require__("../../../../../src/app/carousel-card/carousel-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__recommendation_service__ = __webpack_require__("../../../../../src/app/recommendation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mat_module__ = __webpack_require__("../../../../../src/app/mat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_dialog_login_dialog_component__ = __webpack_require__("../../../../../src/app/login-dialog/login-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__reg_dialog_reg_dialog_component__ = __webpack_require__("../../../../../src/app/reg-dialog/reg-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_login_user_service__ = __webpack_require__("../../../../../src/app/services/login-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__multiplayer_popup_multiplayer_popup_component__ = __webpack_require__("../../../../../src/app/multiplayer-popup/multiplayer-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__all_topics_in_category_all_topics_in_category_component__ = __webpack_require__("../../../../../src/app/all-topics-in-category/all-topics-in-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_questionservice_service__ = __webpack_require__("../../../../../src/app/services/questionservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__question_category_question_category_component__ = __webpack_require__("../../../../../src/app/question-category/question-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__side_nav_side_nav_component__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__game_manager_popup_game_manager_popup_component__ = __webpack_require__("../../../../../src/app/game-manager-popup/game-manager-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng_circle_progress__ = __webpack_require__("../../../../ng-circle-progress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__recent_game_recent_game_component__ = __webpack_require__("../../../../../src/app/recent-game/recent-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_user_profile_service__ = __webpack_require__("../../../../../src/app/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__category_suggetions_category_suggetions_component__ = __webpack_require__("../../../../../src/app/category-suggetions/category-suggetions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__LoginAuth_login_auth_service__ = __webpack_require__("../../../../../src/app/LoginAuth/login-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__LoginAuth_auth_guard__ = __webpack_require__("../../../../../src/app/LoginAuth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__topic_dialog_topic_dialog_component__ = __webpack_require__("../../../../../src/app/topic-dialog/topic-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__question_dialog_question_dialog_component__ = __webpack_require__("../../../../../src/app/question-dialog/question-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__question_detail_question_detail_component__ = __webpack_require__("../../../../../src/app/question-detail/question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__dialogbox_dialogbox_component__ = __webpack_require__("../../../../../src/app/dialogbox/dialogbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__UserProfile_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/UserProfile/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__UserProfile_userupdateprofile_userupdateprofile_component__ = __webpack_require__("../../../../../src/app/UserProfile/userupdateprofile/userupdateprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__game_create_game_create_component__ = __webpack_require__("../../../../../src/app/game-create/game-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__administration_administration_component__ = __webpack_require__("../../../../../src/app/administration/administration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__services_matching_user_service__ = __webpack_require__("../../../../../src/app/services/matching-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__services_multi_player_service__ = __webpack_require__("../../../../../src/app/services/multi-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__multi_player_game_multi_player_game_component__ = __webpack_require__("../../../../../src/app/multi-player-game/multi-player-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__multi_player_rules_multi_player_rules_component__ = __webpack_require__("../../../../../src/app/multi-player-rules/multi-player-rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__multi_player_result_multi_player_result_component__ = __webpack_require__("../../../../../src/app/multi-player-result/multi-player-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__adaptive_play_board_adaptive_play_board_component__ = __webpack_require__("../../../../../src/app/adaptive-play-board/adaptive-play-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__adaptive_result_adaptive_result_component__ = __webpack_require__("../../../../../src/app/adaptive-result/adaptive-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__all_games_inside_topic_all_games_inside_topic_component__ = __webpack_require__("../../../../../src/app/all-games-inside-topic/all-games-inside-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__update_delete_game_update_delete_game_component__ = __webpack_require__("../../../../../src/app/update-delete-game/update-delete-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__UserProfile_reporting_single_single_component__ = __webpack_require__("../../../../../src/app/UserProfile/reporting/single/single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__UserProfile_reporting_multi_multi_component__ = __webpack_require__("../../../../../src/app/UserProfile/reporting/multi/multi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__UserProfile_reporting_adaptive_adaptive_component__ = __webpack_require__("../../../../../src/app/UserProfile/reporting/adaptive/adaptive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__services_reporting_single_service___ = __webpack_require__("../../../../../src/app/services/reporting-single.service..ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__services_reporting_multi_service__ = __webpack_require__("../../../../../src/app/services/reporting-multi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__services_adaptive_service__ = __webpack_require__("../../../../../src/app/services/adaptive.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// import { GameManagerService } from '../services/game-manager.service';














//import { UpdateProfileComponent } from './update-profile/update-profile.component';

//import { UserComponent } from './profile-user/profile-user.component';

//import { ProfileGameCardComponent } from './profile-game-card/profile-game-card.component';



























var masonryProviders = [
    { provide: __WEBPACK_IMPORTED_MODULE_4__masonry_masonry_token__["a" /* Masonry */], useFactory: function () { return window["Masonry"]; } }
];
function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["FacebookLoginProvider"]("Your-Facebook-app-id")
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["GoogleLoginProvider"]("1053365211731-eaftr0lsg378ut9sn33fb00u11is59mn.apps.googleusercontent.com")
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                // UserComponent,
                __WEBPACK_IMPORTED_MODULE_44__recent_game_recent_game_component__["a" /* RecentGameComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__game_card_game_card_component__["a" /* GameCardComponent */],
                __WEBPACK_IMPORTED_MODULE_39__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_40__side_nav_side_nav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_25__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__advanced_mode_advanced_mode_component__["a" /* AdvancedModeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__reg_dialog_reg_dialog_component__["a" /* RegDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__play_play_component__["a" /* PlayComponent */],
                __WEBPACK_IMPORTED_MODULE_34__all_topics_in_category_all_topics_in_category_component__["a" /* AllTopicsInCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_35__questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_37__question_category_question_category_component__["a" /* QuestionCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__quiz_quiz_component__["a" /* QuizComponent */],
                __WEBPACK_IMPORTED_MODULE_12__result_result_component__["a" /* ResultComponent */],
                __WEBPACK_IMPORTED_MODULE_22__carousel_card_carousel_card_component__["a" /* CarouselCardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__multiplayer_popup_multiplayer_popup_component__["a" /* MultiplayerPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_41__game_manager_popup_game_manager_popup_component__["a" /* GameManagerPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_42__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_46__category_suggetions_category_suggetions_component__["a" /* CategorySuggetionsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__topic_dialog_topic_dialog_component__["a" /* TopicDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_50__question_dialog_question_dialog_component__["a" /* QuestionDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_51__question_detail_question_detail_component__["a" /* QuestionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_52__dialogbox_dialogbox_component__["a" /* DialogboxComponent */],
                __WEBPACK_IMPORTED_MODULE_53__UserProfile_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_54__UserProfile_userupdateprofile_userupdateprofile_component__["a" /* UserupdateprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_55__game_create_game_create_component__["a" /* GameCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_56__administration_administration_component__["a" /* AdministrationComponent */],
                __WEBPACK_IMPORTED_MODULE_57__search_result_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_60__multi_player_game_multi_player_game_component__["a" /* MultiPlayerGameComponent */],
                __WEBPACK_IMPORTED_MODULE_61__multi_player_rules_multi_player_rules_component__["a" /* MultiPlayerRulesComponent */],
                __WEBPACK_IMPORTED_MODULE_62__multi_player_result_multi_player_result_component__["a" /* MultiPlayerResultComponent */],
                __WEBPACK_IMPORTED_MODULE_63__adaptive_play_board_adaptive_play_board_component__["a" /* AdaptivePlayBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_64__adaptive_result_adaptive_result_component__["a" /* AdaptiveResultComponent */],
                __WEBPACK_IMPORTED_MODULE_65__all_games_inside_topic_all_games_inside_topic_component__["a" /* AllGamesInsideTopicComponent */],
                __WEBPACK_IMPORTED_MODULE_66__update_delete_game_update_delete_game_component__["a" /* UpdateDeleteGameComponent */],
                __WEBPACK_IMPORTED_MODULE_67__UserProfile_reporting_single_single_component__["a" /* SingleComponent */],
                __WEBPACK_IMPORTED_MODULE_68__UserProfile_reporting_multi_multi_component__["a" /* MultiComponent */],
                __WEBPACK_IMPORTED_MODULE_69__UserProfile_reporting_adaptive_adaptive_component__["a" /* AdaptiveComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["k" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__masonry_masonry_module__["a" /* MasonryModule */].forRoot(masonryProviders),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_13__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_21__carousel_ngu_carousel_module__["a" /* NguCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_24__mat_module__["a" /* MatModule */],
                __WEBPACK_IMPORTED_MODULE_43_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300
                })
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_27__reg_dialog_reg_dialog_component__["a" /* RegDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_52__dialogbox_dialogbox_component__["a" /* DialogboxComponent */],
                __WEBPACK_IMPORTED_MODULE_15__advanced_mode_advanced_mode_component__["a" /* AdvancedModeComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__category_urls_service__["a" /* CategoryUrlsService */],
                __WEBPACK_IMPORTED_MODULE_23__recommendation_service__["a" /* RecommendationService */],
                __WEBPACK_IMPORTED_MODULE_30__services_game_service__["a" /* GameService */],
                __WEBPACK_IMPORTED_MODULE_38__services_quiz_service__["a" /* QuizService */],
                __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["AuthService"],
                __WEBPACK_IMPORTED_MODULE_28__services_login_user_service__["a" /* LoginUserService */],
                __WEBPACK_IMPORTED_MODULE_32__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_45__services_user_profile_service__["a" /* UserProfileService */],
                __WEBPACK_IMPORTED_MODULE_36__services_questionservice_service__["a" /* QuestionService */],
                __WEBPACK_IMPORTED_MODULE_16__services_searchService__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_59__services_multi_player_service__["a" /* MultiPlayerService */],
                __WEBPACK_IMPORTED_MODULE_58__services_matching_user_service__["a" /* MatchingUserService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                __WEBPACK_IMPORTED_MODULE_47__LoginAuth_login_auth_service__["a" /* LoginAuthService */],
                __WEBPACK_IMPORTED_MODULE_48__LoginAuth_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_72__services_adaptive_service__["a" /* AdaptiveService */],
                __WEBPACK_IMPORTED_MODULE_70__services_reporting_single_service___["a" /* SingleService */],
                __WEBPACK_IMPORTED_MODULE_71__services_reporting_multi_service__["a" /* MultiService */],
                __WEBPACK_IMPORTED_MODULE_72__services_adaptive_service__["a" /* AdaptiveService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModel; });
var AuthenticationModel = /** @class */ (function () {
    function AuthenticationModel() {
    }
    return AuthenticationModel;
}());



/***/ }),

/***/ "../../../../../src/app/carousel-card/carousel-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"separator\">Categories</div>\n<br>\n<div class=\"container\">\n  <ngu-carousel #myCarousels1 [inputs]=\"carouselTileOne\" (carouselLoad)=\"carouselTileOneLoad()\" (onMove)=\"onMoveData($event)\"\n    [reset]=\"rsts\" (initData)=\"getCarouselData($event)\">\n    <ngu-tile NguCarouselItem *ngFor=\"let tile of categories; let i = index;\">\n      <div class=\"wBg\">\n        <a (click)=\"onClick(tile.name,tile.category_id,id)\">\n          <img src='{{tile.img}}'>\n          <h4>{{tile.name}}</h4>\n        </a>\n        <button class = \"likeButton\" mat-icon-button color=\"warn\" (click)=\"changeColor(tile.id)\" [color]=\"cc\">\n          <mat-icon mat-icon-button aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n        </button>\n        <mat-icon class=\"ff\" (click)=\"openDialog()\">more_vert</mat-icon>\n      </div>\n    </ngu-tile>\n    <button class=\"leftRs\" NguCarouselPrev>&lt;</button>\n    <button class=\"rightRs\" NguCarouselNext>&gt;</button>\n  </ngu-carousel>\n  <br>\n  <div class=\"separator\">{{recommendations}}</div>\n  <div *ngIf=\"showRecommendations\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/carousel-card/carousel-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  height: 120px;\n  width: 270px !important;\n  overflow: hidden !important;\n  margin: 0 auto;\n  background-size: cover !important;\n  border-radius: 30px; }\n\n.tile h1 {\n  text-align: center;\n  line-height: 200px;\n  background: rgba(0, 0, 0, 0.32);\n  color: white;\n  margin: 0; }\n\nhr {\n  background-color: white; }\n\n.separator {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  font-size: 20px;\n  color: black; }\n\n.separator::before,\n.separator::after {\n  content: \"\";\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-bottom: 1px solid #000; }\n\n.separator::before {\n  margin-right: 0.25em; }\n\n.separator::after {\n  margin-left: 0.25em; }\n\nh4 {\n  margin: 0;\n  padding: 10px 15px;\n  text-align: left; }\n\np {\n  margin: 0;\n  padding: 0 15px 10px;\n  text-align: left; }\n\n.wBg {\n  background: white;\n  width: auto; }\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n          box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  left: 0; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n          box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  right: 0; }\n\na {\n  text-decoration: none;\n  color: #000; }\n\n.ff {\n  text-decoration: none;\n  color: inherit;\n  float: right; }\n\n.likeButton {\n  z-index: -10; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel-card/carousel-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel__ = __webpack_require__("../../../../../src/app/carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommendation_service__ = __webpack_require__("../../../../../src/app/recommendation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogbox_dialogbox_component__ = __webpack_require__("../../../../../src/app/dialogbox/dialogbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarouselCardComponent = /** @class */ (function () {
    function CarouselCardComponent(recommendationService, router, dialog) {
        this.recommendationService = recommendationService;
        this.router = router;
        this.dialog = dialog;
        this.showRecommendations = true;
        this.recommendations = "Recommendations";
        this.categories = [];
        this.carouselBannerItems = [];
        this.carouselTileItems = [];
        this.carouselTileOneItems = [];
        this.carouselTileTwoItems = [];
        this.indexr = 0;
        this.cc = 'warn';
        this.userId = this.recommendationService.getUserId();
        console.log("data in userid =" + this.userId);
    }
    CarouselCardComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogbox_dialogbox_component__["a" /* DialogboxComponent */], {
            width: '350px',
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    CarouselCardComponent.prototype.changeColor = function (id) {
        // if (this.categories[0].id === id) {
        //   if (this.cc === 'warn') {
        //     this.cc = 'primary';
        //   }
        //   else {
        //     this.cc = 'warn';
        //   }
        // } else {
        //   alert("Id not correct")
        // }
        this.recommendationService.favCategory(id);
        ;
    };
    ;
    CarouselCardComponent.prototype.onClick = function (name, id, userId) {
        this.showRecommendations = false;
        this.recommendations = name;
        this.userId = this.recommendationService.getUserId();
        console.log("in ca :" + this.userId);
        this.recommendationService.setUserId(this.userId);
        this.recommendationService.sendCar(id);
        //this.router.navigate(['/game-by-categoryId', id, this.userId])
    };
    CarouselCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgags = [
            "assets/bg.jpg",
            "assets/holi.jpg"
        ];
        this.carouselTileOne = {
            grid: { xs: 2, sm: 3, md: 4, lg: 4, all: 0 },
            speed: 600,
            point: {
                visible: true,
                pointStyles: "\n          .ngucarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngucarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            background: #6b6b6b;\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s;\n          }\n          .ngucarouselPoint li.active {\n              border: 2px solid rgba(0, 0, 0, 0.55);\n              transform: scale(1.2);\n              background: transparent;\n            }\n        "
            },
            load: 2,
            loop: true,
            touch: true,
            easing: "ease",
            animation: "lazy"
        };
        this.carouselTileOneLoad();
        this.carouselTileTwoLoad();
        this.recommendationService.getAll().subscribe(function (data) {
            _this.categories = data;
        });
    };
    CarouselCardComponent.prototype.onMoveData = function (data) {
    };
    CarouselCardComponent.prototype.getCarouselData = function (ent) {
        this.storeCarouselData = ent;
    };
    CarouselCardComponent.prototype.filterStates = function (name) {
        return this.categories.filter(function (category) { return category.name.toLowerCase().indexOf(name.toLowerCase()) === 0; });
    };
    CarouselCardComponent.prototype.carouselTileOneLoad = function () {
        var len = this.carouselTileOneItems.length;
        if (len <= 30) {
            for (var i = len; i < len + 15; i++) {
                this.carouselTileOneItems.push(this.imgags[Math.floor(Math.random() * this.imgags.length)]);
            }
        }
    };
    CarouselCardComponent.prototype.carouselTileTwoLoad = function () {
        var len = this.carouselTileTwoItems.length;
        if (len <= 30) {
            for (var i = len; i < len + 15; i++) {
                this.carouselTileTwoItems.push(this.imgags[Math.floor(Math.random() * this.imgags.length)]);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mybanners"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__carousel__["a" /* NguCarousel */])
    ], CarouselCardComponent.prototype, "mybanners", void 0);
    CarouselCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: "app-carousel-card",
            template: __webpack_require__("../../../../../src/app/carousel-card/carousel-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel-card/carousel-card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__recommendation_service__["a" /* RecommendationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialog */]])
    ], CarouselCardComponent);
    return CarouselCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_ngu_carousel__ = __webpack_require__("../../../../../src/app/carousel/ngu-carousel/ngu-carousel.ts");
/* unused harmony reexport NguCarouselConfig */
/* unused harmony reexport NguCarouselStore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngu_carousel_ngu_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/ngu-carousel/ngu-carousel.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__ngu_carousel_ngu_carousel_component__["a"]; });





/***/ }),

/***/ "../../../../../src/app/carousel/ngu-carousel.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguCarouselItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NguCarouselNextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NguCarouselPrevDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NguCarouselPointDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NguCarouselItemDirective = /** @class */ (function () {
    function NguCarouselItemDirective() {
    }
    NguCarouselItemDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[NguCarouselItem]'
        })
    ], NguCarouselItemDirective);
    return NguCarouselItemDirective;
}());

var NguCarouselNextDirective = /** @class */ (function () {
    function NguCarouselNextDirective() {
    }
    NguCarouselNextDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[NguCarouselNext]'
        })
    ], NguCarouselNextDirective);
    return NguCarouselNextDirective;
}());

var NguCarouselPrevDirective = /** @class */ (function () {
    function NguCarouselPrevDirective() {
    }
    NguCarouselPrevDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[NguCarouselPrev]'
        })
    ], NguCarouselPrevDirective);
    return NguCarouselPrevDirective;
}());

var NguCarouselPointDirective = /** @class */ (function () {
    function NguCarouselPointDirective() {
    }
    NguCarouselPointDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[NguCarouselPoint]'
        })
    ], NguCarouselPointDirective);
    return NguCarouselPointDirective;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/ngu-carousel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguCarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_directive__ = __webpack_require__("../../../../../src/app/carousel/ngu-carousel.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngu_item_ngu_item_component__ = __webpack_require__("../../../../../src/app/carousel/ngu-item/ngu-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngu_carousel_ngu_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/ngu-carousel/ngu-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngu_tile_ngu_tile_component__ = __webpack_require__("../../../../../src/app/carousel/ngu-tile/ngu-tile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NguCarouselModule = /** @class */ (function () {
    function NguCarouselModule() {
    }
    NguCarouselModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__ngu_carousel_ngu_carousel_component__["a" /* NguCarousel */],
                __WEBPACK_IMPORTED_MODULE_1__ngu_item_ngu_item_component__["a" /* NguItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ngu_tile_ngu_tile_component__["a" /* NguTileComponent */],
                __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_directive__["c" /* NguCarouselPointDirective */],
                __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_directive__["a" /* NguCarouselItemDirective */],
                __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_directive__["b" /* NguCarouselNextDirective */],
                __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_directive__["d" /* NguCarouselPrevDirective */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__ngu_carousel_ngu_carousel_component__["a" /* NguCarousel */],
                __WEBPACK_IMPORTED_MODULE_1__ngu_item_ngu_item_component__["a" /* NguItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ngu_tile_ngu_tile_component__["a" /* NguTileComponent */],
                __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_directive__["c" /* NguCarouselPointDirective */],
                __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_directive__["a" /* NguCarouselItemDirective */],
                __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_directive__["b" /* NguCarouselNextDirective */],
                __WEBPACK_IMPORTED_MODULE_0__ngu_carousel_directive__["d" /* NguCarouselPrevDirective */]
            ]
        })
    ], NguCarouselModule);
    return NguCarouselModule;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/ngu-carousel/ngu-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div #ngucarousel class=\"ngucarousel\">\n  <div #forTouch class=\"ngucarousel-inner\">\n    <div #nguitems class=\"ngucarousel-items\">\n      <ng-content select=\"[NguCarouselItem]\"></ng-content>\n    </div>\n    <div style=\"clear: both\"></div>\n  </div>\n  <ng-content select=\"[NguCarouselPrev]\"></ng-content>\n  <ng-content select=\"[NguCarouselNext]\"></ng-content>\n</div>\n<div #points *ngIf=\"data.point\">\n  <ng-content select=\"[NguCarouselPoint]\"></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/carousel/ngu-carousel/ngu-carousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: relative; }\n  :host.ngurtl {\n    direction: rtl; }\n  .ngucarousel .ngucarousel-inner {\n  position: relative;\n  overflow: hidden; }\n  .ngucarousel .ngucarousel-inner .ngucarousel-items {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .nguvertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/ngu-carousel/ngu-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguCarousel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngu_carousel_directive__ = __webpack_require__("../../../../../src/app/carousel/ngu-carousel.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NguCarousel = /** @class */ (function () {
    function NguCarousel(el, renderer, platformId) {
        this.el = el;
        this.renderer = renderer;
        this.platformId = platformId;
        this.carouselLoad = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.initData = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.pauseCarousel = false;
        this.Arr1 = Array;
        this.pointNumbers = [];
        this.data = {
            type: "fixed",
            token: "",
            deviceType: "lg",
            items: 0,
            load: 0,
            deviceWidth: 0,
            carouselWidth: 0,
            itemWidth: 0,
            visibleItems: { start: 0, end: 0 },
            slideItems: 0,
            itemWidthPer: 0,
            itemLength: 0,
            currentSlide: 0,
            easing: "cubic-bezier(0, 0, 0.2, 1)",
            speed: 400,
            transform: { xs: 0, sm: 0, md: 0, lg: 0, all: 0 },
            loop: false,
            dexVal: 0,
            touchTransform: 0,
            touch: { active: false, swipe: "", velocity: 0 },
            isEnd: false,
            isFirst: true,
            isLast: false,
            RTL: false,
            button: { visibility: "disabled" },
            point: true,
            vertical: { enabled: false, height: 400 }
        };
    }
    NguCarousel.prototype.ngOnInit = function () {
        this.carousel = this.el.nativeElement;
        this.carouselMain = this.carouselMain1.nativeElement;
        this.carouselInner = this.carouselInner1.nativeElement;
        this.rightBtn = this.next.nativeElement;
        this.leftBtn = this.prev.nativeElement;
        this.data.type = this.userData.grid.all !== 0 ? "fixed" : "responsive";
        this.data.loop = this.userData.loop || false;
        this.userData.easing = this.userData.easing || "cubic-bezier(0, 0, 0.2, 1)";
        this.data.touch.active = this.userData.touch || false;
        this.data.RTL = this.userData.RTL ? true : false;
        if (this.userData.vertical && this.userData.vertical.enabled) {
            this.data.vertical.enabled = this.userData.vertical.enabled;
            this.data.vertical.height = this.userData.vertical.height;
            // this.data.vertical.numHeight = +this.userData.vertical.height
            //   .match(/[0-9]/g)
            //   .join('');
        }
        this.directionSym = this.data.RTL ? "" : "-";
        this.data.point =
            this.userData.point && typeof this.userData.point.visible !== "undefined"
                ? this.userData.point.visible
                : true;
        this.withAnim = true;
        this.carouselSize();
    };
    NguCarousel.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listener1 = this.renderer.listen(this.leftBtn, "click", function () {
            return _this.carouselScrollOne(0);
        });
        this.listener2 = this.renderer.listen(this.rightBtn, "click", function () {
            return _this.carouselScrollOne(1);
        });
        this.carouselCssNode = this.createStyleElem();
        this.storeCarouselData();
        this.buttonControl();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_common__["isPlatformBrowser"])(this.platformId)) {
            this.carouselInterval();
            this.onWindowScrolling();
            if (!this.data.vertical.enabled) {
                this.touch();
            }
            this.listener3 = this.renderer.listen("window", "resize", function (event) {
                _this.onResizing(event);
            });
        }
        this.items.changes.subscribe(function (val) {
            _this.data.isLast = false;
            _this.carouselPoint();
            _this.buttonControl();
        });
    };
    NguCarousel.prototype.ngAfterViewInit = function () {
        if (this.userData.point.pointStyles) {
            var datas = this.userData.point.pointStyles.replace(/.ngucarouselPoint/g, "." + this.data.token + " .ngucarouselPoint");
            this.createStyleElem(datas);
        }
        else if (this.userData.point && this.userData.point.visible) {
            this.renderer.addClass(this.pointMain.nativeElement, "ngucarouselPointDefault");
        }
    };
    NguCarousel.prototype.ngOnDestroy = function () {
        clearInterval(this.carouselInt);
        this.carouselLoad.complete();
        // remove listeners
        for (var i = 1; i <= 8; i++) {
            this["listener" + i] && this["listener" + i]();
        }
    };
    NguCarousel.prototype.onResizing = function (event) {
        var _this = this;
        clearTimeout(this.onResize);
        this.onResize = setTimeout(function () {
            if (_this.data.deviceWidth !== event.target.outerWidth) {
                _this.setStyle(_this.carouselInner, "transition", "");
                _this.storeCarouselData();
            }
        }, 500);
    };
    /** Get Touch input */
    NguCarousel.prototype.touch = function () {
        var _this = this;
        if (this.userData.touch) {
            var hammertime = new Hammer(this.carouselInner);
            hammertime.get("pan").set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on("panstart", function (ev) {
                _this.data.carouselWidth = _this.carouselInner.offsetWidth;
                _this.data.touchTransform = _this.data.transform[_this.data.deviceType];
                _this.data.dexVal = 0;
                _this.setStyle(_this.carouselInner, "transition", "");
            });
            if (this.data.vertical.enabled) {
                hammertime.on("panup", function (ev) {
                    _this.touchHandling("panleft", ev);
                });
                hammertime.on("pandown", function (ev) {
                    _this.touchHandling("panright", ev);
                });
            }
            else {
                hammertime.on("panleft", function (ev) {
                    _this.touchHandling("panleft", ev);
                });
                hammertime.on("panright", function (ev) {
                    _this.touchHandling("panright", ev);
                });
            }
            hammertime.on("panend", function (ev) {
                // this.data.touch.velocity = ev.velocity;
                // if (this.data.shouldSlide) {
                if (Math.abs(ev.velocity) > 1) {
                    _this.data.touch.velocity = ev.velocity;
                    // this.data.touch.swipe === 'panright'
                    //   ? this.carouselScrollOne(0)
                    //   : this.carouselScrollOne(1);
                    var direc = 0;
                    if (!_this.data.RTL) {
                        direc = _this.data.touch.swipe === "panright" ? 0 : 1;
                    }
                    else {
                        direc = _this.data.touch.swipe === "panright" ? 1 : 0;
                    }
                    // this.data.touchTransform = this.data.transform[this.data.deviceType];
                    _this.carouselScrollOne(direc);
                }
                else {
                    _this.data.dexVal = 0;
                    _this.setStyle(_this.carouselInner, "transition", "transform 324ms cubic-bezier(0, 0, 0.2, 1)");
                    // const tran = this.data.touchTransform * +`${this.directionSym}1`;
                    _this.setStyle(_this.carouselInner, "transform", "");
                }
                // this.carouselScrollOne(direc);
            });
            hammertime.on("hammer.input", function (ev) {
                // allow nested touch events to no propagate, this may have other side affects but works for now.
                // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                ev.srcEvent.stopPropagation();
            });
        }
    };
    /** handle touch input */
    NguCarousel.prototype.touchHandling = function (e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.data.vertical.enabled ? ev.deltaY : ev.deltaX);
        var valt = ev - this.data.dexVal;
        valt =
            this.data.type === "responsive"
                ? Math.abs(ev - this.data.dexVal) /
                    (this.data.vertical.enabled
                        ? this.data.vertical.height
                        : this.data.carouselWidth) *
                    100
                : valt;
        this.data.dexVal = ev;
        this.data.touch.swipe = e;
        if (!this.data.RTL) {
            this.data.touchTransform =
                e === "panleft"
                    ? valt + this.data.touchTransform
                    : this.data.touchTransform - valt;
        }
        else {
            this.data.touchTransform =
                e === "panright"
                    ? valt + this.data.touchTransform
                    : this.data.touchTransform - valt;
        }
        if (this.data.touchTransform > 0) {
            if (this.data.type === "responsive") {
                this.setStyle(this.carouselInner, "transform", this.data.vertical.enabled
                    ? "translate3d(0, " + this.directionSym + this.data.touchTransform + "%, 0)"
                    : "translate3d(" + this.directionSym + this.data.touchTransform + "%, 0, 0)");
            }
            else {
                this.setStyle(this.carouselInner, "transform", this.data.vertical.enabled
                    ? "translate3d(0, " + this.directionSym + this.data.touchTransform + "px, 0)"
                    : "translate3d(" + this.directionSym + this.data.touchTransform + "px, 0px, 0px)");
            }
        }
        else {
            this.data.touchTransform = 0;
        }
    };
    /** this used to disable the scroll when it is not on the display */
    NguCarousel.prototype.onWindowScrolling = function () {
        var top = this.carousel.offsetTop;
        var scrollY = window.scrollY;
        var heightt = window.innerHeight;
        var carouselHeight = this.carousel.offsetHeight;
        if (top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY) {
            this.carouselIntervalEvent(0);
        }
        else {
            this.carouselIntervalEvent(1);
        }
    };
    /** store data based on width of the screen for the carousel */
    NguCarousel.prototype.storeCarouselData = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_common__["isPlatformBrowser"])(this.platformId)) {
            this.data.deviceWidth = window.innerWidth;
        }
        else {
            this.data.deviceWidth = 1200;
        }
        this.data.carouselWidth = this.carouselMain.offsetWidth;
        if (this.data.type === "responsive") {
            this.data.deviceType =
                this.data.deviceWidth >= 1200
                    ? "lg"
                    : this.data.deviceWidth >= 992
                        ? "md"
                        : this.data.deviceWidth >= 768
                            ? "sm"
                            : "xs";
            this.data.items = this.userData.grid[this.data.deviceType];
            this.data.itemWidth = this.data.carouselWidth / this.data.items;
        }
        else {
            this.data.items = Math.trunc(this.data.carouselWidth / this.userData.grid.all);
            this.data.itemWidth = this.userData.grid.all;
            this.data.deviceType = "all";
        }
        this.data.slideItems = +(this.userData.slide < this.data.items
            ? this.userData.slide
            : this.data.items);
        this.data.load =
            this.userData.load >= this.data.slideItems
                ? this.userData.load
                : this.data.slideItems;
        this.userData.speed =
            this.userData.speed || this.userData.speed > -1
                ? this.userData.speed
                : 400;
        this.initData.emit(this.data);
        this.carouselPoint();
    };
    /** Used to reset the carousel */
    NguCarousel.prototype.reset = function () {
        this.carouselCssNode.innerHTML = "";
        this.moveTo(0);
        this.carouselPoint();
    };
    /** Init carousel point */
    NguCarousel.prototype.carouselPoint = function () {
        // if (this.userData.point.visible === true) {
        var Nos = this.items.length - (this.data.items - this.data.slideItems);
        this.pointIndex = Math.ceil(Nos / this.data.slideItems);
        var pointers = [];
        if (this.pointIndex > 1 || !this.userData.point.hideOnSingleSlide) {
            for (var i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
            }
        }
        this.pointNumbers = pointers;
        this.carouselPointActiver();
        if (this.pointIndex <= 1) {
            this.btnBoolean(1, 1);
        }
        else {
            if (this.data.currentSlide === 0 && !this.data.loop) {
                this.btnBoolean(1, 0);
            }
            else {
                this.btnBoolean(0, 0);
            }
        }
        this.buttonControl();
        // }
    };
    /** change the active point in carousel */
    NguCarousel.prototype.carouselPointActiver = function () {
        var i = Math.ceil(this.data.currentSlide / this.data.slideItems);
        this.pointers = i;
    };
    /** this function is used to scoll the carousel when point is clicked */
    NguCarousel.prototype.moveTo = function (index) {
        if (this.pointers !== index && index < this.pointIndex) {
            var slideremains = 0;
            var btns = this.data.currentSlide < index ? 1 : 0;
            if (index === 0) {
                this.btnBoolean(1, 0);
                slideremains = index * this.data.slideItems;
            }
            else if (index === this.pointIndex - 1) {
                this.btnBoolean(0, 1);
                slideremains = this.items.length - this.data.items;
            }
            else {
                this.btnBoolean(0, 0);
                slideremains = index * this.data.slideItems;
            }
            this.carouselScrollTwo(btns, slideremains, this.data.speed);
        }
    };
    /** set the style of the carousel based the inputs data */
    NguCarousel.prototype.carouselSize = function () {
        this.data.token = this.generateID();
        var dism = "";
        this.styleid = "." + this.data.token + " > .ngucarousel > .ngucarousel-inner > .ngucarousel-items";
        if (this.userData.custom === "banner") {
            this.renderer.addClass(this.carousel, "banner");
        }
        if (this.userData.animation === "lazy") {
            dism += this.styleid + " > .item {transition: transform .6s ease;}";
        }
        var itemStyle = "";
        if (this.data.vertical.enabled) {
            var itemWidth_xs = this.styleid + " > .item {height: " + this.data
                .vertical.height / +this.userData.grid.xs + "px}";
            var itemWidth_sm = this.styleid + " > .item {height: " + this.data
                .vertical.height / +this.userData.grid.sm + "px}";
            var itemWidth_md = this.styleid + " > .item {height: " + this.data
                .vertical.height / +this.userData.grid.md + "px}";
            var itemWidth_lg = this.styleid + " > .item {height: " + this.data
                .vertical.height / +this.userData.grid.lg + "px}";
            itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
        }
        else if (this.data.type === "responsive") {
            var itemWidth_xs = this.userData.type === "mobile"
                ? this.styleid + " .item {flex: 0 0 " + 95 / +this.userData.grid.xs + "%}"
                : this.styleid + " .item {flex: 0 0 " + 100 /
                    +this.userData.grid.xs + "%}";
            var itemWidth_sm = this.styleid + " > .item {flex: 0 0 " + 100 /
                +this.userData.grid.sm + "%}";
            var itemWidth_md = this.styleid + " > .item {flex: 0 0 " + 100 /
                +this.userData.grid.md + "%}";
            var itemWidth_lg = this.styleid + " > .item {flex: 0 0 " + 100 /
                +this.userData.grid.lg + "%}";
            itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
        }
        else {
            itemStyle = this.styleid + " .item {flex: 0 0 " + this.userData.grid.all + "px}";
        }
        this.renderer.addClass(this.carousel, this.data.token);
        if (this.data.vertical.enabled) {
            this.renderer.addClass(this.carouselInner, "nguvertical");
            this.renderer.setStyle(this.forTouch.nativeElement, "height", this.data.vertical.height + "px");
        }
        // tslint:disable-next-line:no-unused-expression
        this.data.RTL &&
            !this.data.vertical.enabled &&
            this.renderer.addClass(this.carousel, "ngurtl");
        this.createStyleElem(dism + " " + itemStyle);
    };
    /** logic to scroll the carousel step 1 */
    NguCarousel.prototype.carouselScrollOne = function (Btn) {
        var itemSpeed = this.data.speed;
        var translateXval, currentSlide = 0;
        var touchMove = Math.ceil(this.data.dexVal / this.data.itemWidth);
        this.setStyle(this.carouselInner, "transform", "");
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 &&
            ((!this.data.loop && !this.data.isFirst) || this.data.loop)) {
            var slide = this.data.slideItems * this.pointIndex;
            var currentSlideD = this.data.currentSlide - this.data.slideItems;
            var MoveSlide = currentSlideD + this.data.slideItems;
            this.btnBoolean(0, 1);
            if (this.data.currentSlide === 0) {
                currentSlide = this.items.length - this.data.items;
                itemSpeed = 400;
                this.btnBoolean(0, 1);
            }
            else if (this.data.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;
                this.btnBoolean(1, 0);
            }
            else {
                this.btnBoolean(0, 0);
                if (touchMove > this.data.slideItems) {
                    currentSlide = this.data.currentSlide - touchMove;
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.data.currentSlide - this.data.slideItems;
                }
            }
            this.carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        else if (Btn === 1 &&
            ((!this.data.loop && !this.data.isLast) || this.data.loop)) {
            if (this.items.length <=
                this.data.currentSlide + this.data.items + this.data.slideItems &&
                !this.data.isLast) {
                currentSlide = this.items.length - this.data.items;
                this.btnBoolean(0, 1);
            }
            else if (this.data.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;
                this.btnBoolean(1, 0);
            }
            else {
                this.btnBoolean(0, 0);
                if (touchMove > this.data.slideItems) {
                    currentSlide =
                        this.data.currentSlide +
                            this.data.slideItems +
                            (touchMove - this.data.slideItems);
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.data.currentSlide + this.data.slideItems;
                }
            }
            this.carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        // cubic-bezier(0.15, 1.04, 0.54, 1.13)
    };
    /** logic to scroll the carousel step 2 */
    NguCarousel.prototype.carouselScrollTwo = function (Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        if (this.data.dexVal !== 0) {
            var val = Math.abs(this.data.touch.velocity);
            var somt = Math.floor(this.data.dexVal /
                val /
                this.data.dexVal *
                (this.data.deviceWidth - this.data.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.data.dexVal = 0;
        }
        if (this.withAnim) {
            this.setStyle(this.carouselInner, "transition", "transform " + itemSpeed + "ms " + this.userData.easing);
            this.userData.animation &&
                this.carouselAnimator(Btn, currentSlide + 1, currentSlide + this.data.items, itemSpeed, Math.abs(this.data.currentSlide - currentSlide));
        }
        else {
            this.setStyle(this.carouselInner, "transition", "");
        }
        this.data.itemLength = this.items.length;
        this.transformStyle(currentSlide);
        this.data.currentSlide = currentSlide;
        this.onMove.emit(this.data);
        this.carouselPointActiver();
        this.carouselLoadTrigger();
        this.buttonControl();
        this.withAnim = true;
    };
    /** boolean function for making isFirst and isLast */
    NguCarousel.prototype.btnBoolean = function (first, last) {
        // if (this.data.direction === 'rtl') {
        //   this.data.isFirst = first ? false : true;
        //   this.data.isLast = last ? false : true;
        // } else {
        this.data.isFirst = first ? true : false;
        this.data.isLast = last ? true : false;
        // }
    };
    NguCarousel.prototype.transformString = function (grid, slide) {
        var collect = "";
        collect += this.styleid + " { transform: translate3d(";
        if (this.data.vertical.enabled) {
            this.data.transform[grid] =
                this.data.vertical.height / this.userData.grid[grid] * slide;
            collect += "0, -" + this.data.transform[grid] + "px, 0";
        }
        else {
            this.data.transform[grid] = 100 / this.userData.grid[grid] * slide;
            collect += "" + this.directionSym + this.data.transform[grid] + "%, 0, 0";
        }
        collect += "); }";
        return collect;
    };
    /** set the transform style to scroll the carousel  */
    NguCarousel.prototype.transformStyle = function (slide) {
        var slideCss = "";
        if (this.data.type === "responsive") {
            // this.data.transform.xs = 100 / this.userData.grid.xs * slide;
            // this.data.transform.sm = 100 / this.userData.grid.sm * slide;
            // this.data.transform.md = 100 / this.userData.grid.md * slide;
            // this.data.transform.lg = 100 / this.userData.grid.lg * slide;
            slideCss = "@media (max-width: 767px) {" + this.transformString("xs", slide) + "}\n      @media (min-width: 768px) {" + this.transformString("sm", slide) + " }\n      @media (min-width: 992px) {" + this.transformString("md", slide) + " }\n      @media (min-width: 1200px) {" + this.transformString("lg", slide) + " }";
        }
        else {
            this.data.transform.all = this.userData.grid.all * slide;
            slideCss = this.styleid + " { transform: translate3d(" + this.directionSym + this.data.transform.all + "px, 0, 0);";
        }
        // this.renderer.createText(this.carouselCssNode, slideCss);
        this.carouselCssNode.innerHTML = slideCss;
    };
    /** this will trigger the carousel to load the items */
    NguCarousel.prototype.carouselLoadTrigger = function () {
        if (typeof this.userData.load === "number") {
            // tslint:disable-next-line:no-unused-expression
            this.items.length - this.data.load <=
                this.data.currentSlide + this.data.items &&
                this.carouselLoad.emit(this.data.currentSlide);
        }
    };
    /** generate Class for each carousel to set specific style */
    NguCarousel.prototype.generateID = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return "ngucarousel" + text;
    };
    /** handle the auto slide */
    NguCarousel.prototype.carouselInterval = function () {
        var _this = this;
        if (typeof this.userData.interval === "number" && this.data.loop) {
            this.listener4 = this.renderer.listen(this.carouselMain, "touchstart", function () {
                _this.carouselIntervalEvent(1);
            });
            this.listener5 = this.renderer.listen(this.carouselMain, "touchend", function () {
                _this.carouselIntervalEvent(0);
            });
            this.listener6 = this.renderer.listen(this.carouselMain, "mouseenter", function () {
                _this.carouselIntervalEvent(1);
            });
            this.listener7 = this.renderer.listen(this.carouselMain, "mouseleave", function () {
                _this.carouselIntervalEvent(0);
            });
            this.listener8 = this.renderer.listen("window", "scroll", function () {
                clearTimeout(_this.onScrolling);
                _this.onScrolling = setTimeout(function () {
                    _this.onWindowScrolling();
                }, 600);
            });
            this.carouselInt = setInterval(function () {
                // tslint:disable-next-line:no-unused-expression
                !_this.pauseCarousel && _this.carouselScrollOne(1);
            }, this.userData.interval);
        }
    };
    /** pause interval for specific time */
    NguCarousel.prototype.carouselIntervalEvent = function (ev) {
        var _this = this;
        this.evtValue = ev;
        if (this.evtValue === 0) {
            clearTimeout(this.pauseInterval);
            this.pauseInterval = setTimeout(function () {
                // tslint:disable-next-line:no-unused-expression
                _this.evtValue === 0 && (_this.pauseCarousel = false);
            }, this.userData.interval);
        }
        else {
            this.pauseCarousel = true;
        }
    };
    /** animate the carousel items */
    NguCarousel.prototype.carouselAnimator = function (direction, start, end, speed, length) {
        var _this = this;
        var val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        var itemList = this.items.toArray();
        if (direction === 1) {
            for (var i = start - 1; i < end; i++) {
                val = val * 2;
                itemList[i] &&
                    this.setStyle(itemList[i].nativeElement, "transform", "translate3d(" + val + "px, 0, 0)");
            }
        }
        else {
            for (var i = end - 1; i >= start - 1; i--) {
                val = val * 2;
                itemList[i] &&
                    this.setStyle(itemList[i].nativeElement, "transform", "translate3d(-" + val + "px, 0, 0)");
            }
        }
        setTimeout(function () {
            _this.items.forEach(function (elem) {
                return _this.setStyle(elem.nativeElement, "transform", "translate3d(0, 0, 0)");
            });
        }, speed * 0.7);
    };
    /** control button for loop */
    NguCarousel.prototype.buttonControl = function () {
        var arr = [];
        if (!this.data.loop || (this.data.isFirst && this.data.isLast)) {
            arr = [
                this.data.isFirst ? "none" : "block",
                this.data.isLast ? "none" : "block"
            ];
        }
        else {
            arr = ["block", "block"];
        }
        this.setStyle(this.leftBtn, "display", arr[0]);
        this.setStyle(this.rightBtn, "display", arr[1]);
    };
    /** Short form for setElementStyle */
    NguCarousel.prototype.setStyle = function (el, prop, val) {
        this.renderer.setStyle(el, prop, val);
    };
    /** For generating style tag */
    NguCarousel.prototype.createStyleElem = function (datas) {
        var styleItem = this.renderer.createElement("style");
        if (datas) {
            var styleText = this.renderer.createText(datas);
            this.renderer.appendChild(styleItem, styleText);
        }
        this.renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("inputs"),
        __metadata("design:type", Object)
    ], NguCarousel.prototype, "userData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("reset"),
        __metadata("design:type", Boolean)
    ], NguCarousel.prototype, "reseter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("carouselLoad"),
        __metadata("design:type", Object)
    ], NguCarousel.prototype, "carouselLoad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("onMove"),
        __metadata("design:type", Object)
    ], NguCarousel.prototype, "onMove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("initData"),
        __metadata("design:type", Object)
    ], NguCarousel.prototype, "initData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_2__ngu_carousel_directive__["a" /* NguCarouselItemDirective */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["QueryList"])
    ], NguCarousel.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChildren"])("pointInner", { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["QueryList"])
    ], NguCarousel.prototype, "points", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_2__ngu_carousel_directive__["b" /* NguCarouselNextDirective */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], NguCarousel.prototype, "next", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_2__ngu_carousel_directive__["d" /* NguCarouselPrevDirective */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], NguCarousel.prototype, "prev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("ngucarousel", { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], NguCarousel.prototype, "carouselMain1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("nguitems", { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], NguCarousel.prototype, "carouselInner1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("main", { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], NguCarousel.prototype, "carousel1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("points", { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], NguCarousel.prototype, "pointMain", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("forTouch", { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], NguCarousel.prototype, "forTouch", void 0);
    NguCarousel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "ngu-carousel",
            template: __webpack_require__("../../../../../src/app/carousel/ngu-carousel/ngu-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/ngu-carousel/ngu-carousel.component.scss")]
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"],
            Object])
    ], NguCarousel);
    return NguCarousel;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/ngu-carousel/ngu-carousel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NguCarouselStore */
/* unused harmony export ItemsControl */
/* unused harmony export Vertical */
/* unused harmony export NguButton */
/* unused harmony export Touch */
/* unused harmony export Transfrom */
/* unused harmony export NguCarouselConfig */
var NguCarouselStore = /** @class */ (function () {
    function NguCarouselStore() {
    }
    return NguCarouselStore;
}());

var ItemsControl = /** @class */ (function () {
    function ItemsControl() {
    }
    return ItemsControl;
}());

var Vertical = /** @class */ (function () {
    function Vertical() {
    }
    return Vertical;
}());

var NguButton = /** @class */ (function () {
    function NguButton() {
    }
    return NguButton;
}());

var Touch = /** @class */ (function () {
    function Touch() {
    }
    return Touch;
}());

var Transfrom = /** @class */ (function () {
    function Transfrom() {
    }
    return Transfrom;
}());

var NguCarouselConfig = /** @class */ (function () {
    function NguCarouselConfig() {
    }
    return NguCarouselConfig;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/ngu-item/ngu-item.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "../../../../../src/app/carousel/ngu-item/ngu-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/ngu-item/ngu-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NguItemComponent = /** @class */ (function () {
    function NguItemComponent() {
        this.classes = true;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.item'),
        __metadata("design:type", Object)
    ], NguItemComponent.prototype, "classes", void 0);
    NguItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'ngu-item',
            template: __webpack_require__("../../../../../src/app/carousel/ngu-item/ngu-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/ngu-item/ngu-item.component.scss")]
        })
    ], NguItemComponent);
    return NguItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/ngu-tile/ngu-tile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tile\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/carousel/ngu-tile/ngu-tile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  padding: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tile {\n  -webkit-box-shadow: 0 10px 5px 5px rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 10px 5px 5px rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/ngu-tile/ngu-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NguTileComponent = /** @class */ (function () {
    function NguTileComponent() {
        this.classes = true;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.item'),
        __metadata("design:type", Object)
    ], NguTileComponent.prototype, "classes", void 0);
    NguTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'ngu-tile',
            template: __webpack_require__("../../../../../src/app/carousel/ngu-tile/ngu-tile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/ngu-tile/ngu-tile.component.scss")]
        })
    ], NguTileComponent);
    return NguTileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/category-suggetions/category-suggetions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-4 col-6 aa\" *ngFor=\"let option1 of allCategoriesList;let i = index\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <mat-card-title>{{option1.categoryName | uppercase}} </mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src={{option1.categoryImage}} alt=\"{{option1.categoryName}}\">\n        <mat-card-actions>\n          <mat-checkbox name=\"options\" value=\"{{option}}\" (change)=\"updateCheckedOptions(option1, $event)\">\n          </mat-checkbox>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>\n<button class=\"continue\" mat-raised-button color=\"primary\" (click)=\"selectedCategories()\" (click)=\"openSnackBar()\" routerLink=\"/home\" style=\"float: right; margin-right: 78px;\">Continue</button>"

/***/ }),

/***/ "../../../../../src/app/category-suggetions/category-suggetions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  z-index: -1; }\n\n.gridCentered .static {\n  position: absolute;\n  visibility: hidden; }\n\n.gridCentered {\n  margin-left: auto;\n  margin-right: auto; }\n\n.example-card {\n  max-width: 198px;\n  max-height: 236px; }\n\nmat-card-title {\n  letter-spacing: 2px; }\n\n.center {\n  margin: 0 auto; }\n\n.mat-card-title {\n  font-weight: bolder; }\n\n.right {\n  -ms-flex-line-pack: right;\n      align-content: right; }\n\n.aa {\n  margin-top: 20px !important; }\n\nmat-card {\n  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22) !important;\n          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22) !important; }\n\n.container {\n  margin-top: 0;\n  margin-bottom: 0; }\n\nmat-card {\n  margin-bottom: 10px; }\n\n.header {\n  font-weight: bolder;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n\n.mat-card-image {\n  height: 120px; }\n\nmat-checkbox {\n  position: absolute;\n  bottom: -2px;\n  right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-suggetions/category-suggetions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorySuggetionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategorySuggetionsComponent = /** @class */ (function () {
    function CategorySuggetionsComponent(route, router, userService, snackBar) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.snackBar = snackBar;
        this.selectedCategoriesList = [];
        this.i = 0;
        this.options = ['OptionA', 'OptionB', 'OptionC'];
        this.optionsChecked = [];
        this.i = 0;
    }
    CategorySuggetionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params["id"];
        });
        this.getAllCategories();
    };
    CategorySuggetionsComponent.prototype.updateCheckedOptions = function (option1, event) {
        this.selectedCategoriesList[this.i++] = option1; //storing all the selected casategories
    };
    CategorySuggetionsComponent.prototype.sendCategories = function () {
        var _this = this;
        var resultArray = []; //empty array which we are going to push our selected items, always define types 
        console.log("catlist----->" + this.selectedCategoriesList);
        this.userService.sendSelectedCategories(this.id, this.selectedCategoriesList)
            .subscribe(function (data) {
            _this.allCategoriesList = data;
            console.log("selected categories-->" + data);
        });
    };
    CategorySuggetionsComponent.prototype.selectedCategories = function () {
        // alert("selected categories are stored..please login to continue");
        this.sendCategories();
        this.router.navigate(['/maverick']);
    };
    CategorySuggetionsComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.userService.getAllCategories()
            .subscribe(function (data) {
            _this.allCategoriesList = data;
        });
    };
    CategorySuggetionsComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Topic Added", "", {
            duration: 2000,
        });
    };
    CategorySuggetionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-category-suggetions',
            template: __webpack_require__("../../../../../src/app/category-suggetions/category-suggetions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category-suggetions/category-suggetions.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSnackBar */]])
    ], CategorySuggetionsComponent);
    return CategorySuggetionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/category-urls.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryUrlsService; });
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


var CategoryUrlsService = /** @class */ (function () {
    function CategoryUrlsService(http) {
        this.http = http;
        this.API = 'http://maverick.stackroute.in:9095/api/v1/recommendation/categories';
    }
    CategoryUrlsService.prototype.getAll = function () {
        return this.http.get(this.API);
    };
    CategoryUrlsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CategoryUrlsService);
    return CategoryUrlsService;
}());



/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<app-carousel-card></app-carousel-card>\n<game-card></game-card>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommendation_service__ = __webpack_require__("../../../../../src/app/recommendation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserId = 1;
var ContentComponent = /** @class */ (function () {
    function ContentComponent(route, recommendationService) {
        this.route = route;
        this.recommendationService = recommendationService;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userId = params["userId"];
            console.log(_this.userId);
            //this.UserId=this.userId;
            _this.recommendationService.setUserId(_this.userId);
            console.log("capital U" + UserId);
        });
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__recommendation_service__["a" /* RecommendationService */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogbox/dialogbox.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  This is a ----- Kind of Game, we provide many sort of Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,\n  dolorem. Illum nihil totam aliquid esse natus voluptatibus maxime assumenda voluptatem iusto aliquam quod, ea iste earum\n  magnam vero quia hic? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque repudiandae possimus inventore, saepe\n  autem vero beatae quae reiciendis itaque dolor officia quod. Earum vel assumenda dolorum aliquam perspiciatis. Tempore,\n  nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae cumque, iure, obcaecati dolores explicabo\n  nostrum autem iste modi voluptatibus in, rem voluptate quisquam ipsa.\n</p>"

/***/ }),

/***/ "../../../../../src/app/dialogbox/dialogbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogbox/dialogbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogboxComponent = /** @class */ (function () {
    function DialogboxComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogboxComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-dialogbox',
            template: __webpack_require__("../../../../../src/app/dialogbox/dialogbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogbox/dialogbox.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], Object])
    ], DialogboxComponent);
    return DialogboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game-card/game-card.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4 col-6 aa\" *ngFor=\"let card of cards\">\n      <mat-card>\n        <mat-card-title>\n          <span class=\"gameName\">{{ card.name }}</span>\n        </mat-card-title>\n        <img src=\"{{card.gameImage}}\" alt=\"{{card.name}}\" style=\"width:100%\">\n        <p class=\"ques\">          {{card.recommendation}}\n        </p>\n        <button class=\"play\" mat-icon-button>\n          <mat-icon color=\"primary\" (click)=\"routeToQuiz(card.game_id,card.game_type,card.game_type_id,card.topic_id)\" aria-label=\"Example icon-button with a heart icon\">play_circle_outline</mat-icon>\n        </button>\n      </mat-card>\n    </div>\n  </div>\n</div> -->\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4 col-6 aa\" *ngFor=\"let card of cards\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <mat-card-title>\n            <span class=\"gameName\">{{ card.name }}</span>\n            <p style=\"font-size: 10px;  color: red;\">{{ card.game_type}}</p>\n          </mat-card-title>\n        </mat-card-header>\n        <img src=\"{{card.gameImage}}\" alt=\"{{card.name}}\" style=\"width:100%\">\n        <p class=\"ques\"> {{card.recommendation}}\n        </p>\n        <mat-card-actions>\n          <button class=\"play\" mat-icon-button>\n            <mat-icon color=\"primary\" (click)=\"routeToQuiz(card.game_id,card.game_type,card.game_type_id,card.topic_id,card.category_id,card.name)\" aria-label=\"Example icon-button with a heart icon\">play_circle_outline</mat-icon>\n          </button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/game-card/game-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n  margin: 0 auto; }\n\n.mat-card-title {\n  font-size: 21px !important;\n  font-weight: 400;\n  font-weight: bolder; }\n\n.right {\n  -ms-flex-line-pack: right;\n      align-content: right; }\n\n.aa {\n  margin-top: 3% !important; }\n\nmat-card {\n  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22) !important;\n          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22) !important;\n  min-width: 130px !important;\n  margin-right: 2%; }\n\n.container {\n  margin-top: 0;\n  margin-bottom: 0; }\n\nmat-card {\n  margin-bottom: 10px; }\n\n.play {\n  position: absolute;\n  right: 0px;\n  bottom: 0px; }\n\nmat-icon {\n  zoom: 130% !important;\n  margin-bottom: 1%; }\n\n.gameName {\n  margin: 0 auto; }\n\n.ques {\n  font-size: 15px; }\n\np {\n  right: 0; }\n\nimg {\n  max-height: 145px; }\n\n@media screen and (max-width: 1200px) {\n  mat-card-title > span {\n    font-size: 15px !important;\n    letter-spacing: 1px; }\n  p {\n    font-size: 13px !important; } }\n\n@media screen and (max-width: 1000px) {\n  mat-card-title > span {\n    -ms-flex-line-pack: center;\n        align-content: center;\n    font-size: 10px !important;\n    max-height: 31px; } }\n\n@media screen and (max-width: 575px) {\n  mat-card-title > span {\n    -ms-flex-line-pack: center;\n        align-content: center;\n    font-size: 9px !important;\n    max-height: 31px; }\n  p {\n    font-size: 8px !important; } }\n\n@media screen and (max-width: 351px) {\n  mat-card-title > span {\n    -ms-flex-line-pack: center;\n        align-content: center;\n    font-size: 7px !important;\n    max-height: 31px;\n    font-color: white; }\n  p {\n    font-size: 8px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-card/game-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masonry_masonry_token__ = __webpack_require__("../../../../../src/app/masonry/masonry-token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_urls_service__ = __webpack_require__("../../../../../src/app/category-urls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommendation_service__ = __webpack_require__("../../../../../src/app/recommendation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogbox_dialogbox_component__ = __webpack_require__("../../../../../src/app/dialogbox/dialogbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var GameCardComponent = /** @class */ (function () {
    function GameCardComponent(route, router, recommendationService, masonry, categoryService, dialog) {
        this.route = route;
        this.router = router;
        this.recommendationService = recommendationService;
        this.masonry = masonry;
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.show = false;
        this.limit = 10;
    }
    GameCardComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogbox_dialogbox_component__["a" /* DialogboxComponent */], {
            width: "350px",
            height: "350px"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
        });
    };
    GameCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params["id"];
            if (id) {
                _this.recommendationService.get(id).subscribe(function (data) {
                    _this.cards = null;
                    _this.cards = data;
                    console.log("ngOnInit: data from if block ", _this.cards);
                    console.log("1" + data);
                    _this.show = true;
                });
            }
            else {
                _this.recommendationService.getAllGames().subscribe(function (data) {
                    _this.cards = null;
                    _this.cards = data;
                    console.log("ngOnInit: data from else block ", _this.cards);
                    console.log("2" + data);
                    _this.show = false;
                });
            }
        });
    };
    GameCardComponent.prototype.ngAfterViewInit = function () {
        var options = {
            itemSelector: ".card",
            columnWidth: ".card",
            gutter: 20,
            fitWidth: true
        };
    };
    GameCardComponent.prototype.layout = function () {
        this.masonryInstance.layout();
    };
    GameCardComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    GameCardComponent.prototype.showMoreImages = function () {
        this.limit += 15;
    };
    GameCardComponent.prototype.routeToQuiz = function (id, game_type, game_type_id, topic_id, category_id, name) {
        console.log(typeof game_type_id);
        if (game_type_id == 1) {
            this.recommendationService
                .sendGameIdToSingleplayerEngine(id, game_type, game_type_id, topic_id)
                .subscribe(function (data) {
                console.log("done");
            });
            this.router.navigate(["/quiz"]);
        }
        if (game_type_id == 2) {
            this.recommendationService
                .sendGameIdToMultiplayerEngine(id, game_type, game_type_id, topic_id)
                .subscribe(function (data) {
                console.log("done");
            });
            this.router.navigate(["/multiquiz"]);
        }
        if (game_type_id == 3) {
            this.recommendationService
                .sendGameIdToAdaptiveEngine(id, topic_id, category_id, name)
                .subscribe(function (data) {
                console.log("done");
            });
            this.router.navigate(["/adaptivequiz"]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("grid"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], GameCardComponent.prototype, "grid", void 0);
    GameCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "game-card",
            template: __webpack_require__("../../../../../src/app/game-card/game-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-card/game-card.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__masonry_masonry_token__["a" /* Masonry */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__recommendation_service__["a" /* RecommendationService */], Object, __WEBPACK_IMPORTED_MODULE_3__category_urls_service__["a" /* CategoryUrlsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialog */]])
    ], GameCardComponent);
    return GameCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game-create/game-create.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between start\">\n  <div class=\"caption\">Create a Game</div>\n  <br>\n  <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\n    <mat-form-field>\n      <input matInput placeholder=\"Game Name\" required [(ngModel)]=\"gameName\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Game Image\" required [(ngModel)]=\"gameImage\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Game Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" #gameRules\n        required></textarea>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"date\" placeholder=\"Created On \" required [(ngModel)]=\"createdOn\">\n    </mat-form-field>\n  </div>\n  <div id=\"Game\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\" fxFlex=\"70%\" fxFlexFill>\n    <mat-form-field>\n      <mat-select placeholder=\"Select Game Type\" [(ngModel)]=\"gameTypeName\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"-15px\">\n          <mat-option value=\"Single Player Timer Based Game\" (click)=\"setSingleType()\">Single Player Timer Based Game</mat-option>\n          <mat-option value=\"Single Player Adaptive Game\" (click)=\"setSingleType()\">Single Player Adaptive Game</mat-option>\n          <mat-option value=\"MultiPlayer Fastest Finger Game\" (click)=\"setGameType()\">MultiPlayer Fastest-Finger Game</mat-option>\n        </div>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <mat-accordion fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n    <div fxFlex=\"40%\" fxFlexFill>\n      <mat-expansion-panel [disabled]=\"singlePlayerIsDisabled\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Set the Properties for Single Player Game\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-list role=\"list\">\n          <div class=\"gm-question-level\">\n            <mat-list-item role=\"listitem\">Easy Level Questions</mat-list-item>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"Number of Questions \" [(ngModel)]=\"easyLevel\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"Total Score\" [(ngModel)]=\"easyQuestionsScore\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"Time (sec)\" [(ngModel)]=\"easyQuestionsTime\">\n            </mat-form-field>\n          </div>\n          <br>\n          <br>\n          <div class=\"gm-question-level\">\n            <mat-list-item role=\"listitem\">Medium Level Questions</mat-list-item>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"Number of Questions\" [(ngModel)]=\"mediumLevel\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"Total Score\" [(ngModel)]=\"mediumQuestionsScore\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"Time (sec)\" [(ngModel)]=\"mediumQuestionsTime\">\n            </mat-form-field>\n          </div>\n          <br>\n          <br>\n          <div class=\"gm-question-level\">\n            <mat-list-item role=\"listitem\">Hard Level Questions</mat-list-item>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"Number of Questions \" [(ngModel)]=\"advancedLevel\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"Total Score \" [(ngModel)]=\"advanceQuestionsScore\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"Time (sec)\" [(ngModel)]=\"advanceQuestionsTime\">\n            </mat-form-field>\n          </div>\n        </mat-list>\n        <div>\n          <mat-list-item role=\"listitem\"> Total</mat-list-item>\n          <mat-form-field>\n            <input matInput type=\"number\" [(ngModel)]=\"easyLevel + mediumLevel + advancedLevel\" placeholder=\"Total Number of Questions \"\n              readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput type=\"number\" [(ngModel)]=\"easyQuestionsScore + mediumQuestionsScore + advanceQuestionsScore\" placeholder=\"Total Score \"\n              readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput type=\"number\" [(ngModel)]=\"easyQuestionsTime + mediumQuestionsTime + advanceQuestionsScore\" placeholder=\"Duration of Game\"\n              readonly>\n          </mat-form-field>\n        </div>\n        <br>\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <textarea matInput placeholder=\"Rules\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" #gameRules required></textarea>\n          </mat-form-field>\n        </div>\n        <br>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n          <mat-checkbox>Advanced Game Mode</mat-checkbox>\n          <mat-icon (click)=\"openInfoDialog()\">help</mat-icon>\n        </div>\n        <br>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n          <button mat-raised-button color=\"primary\" style=\"align-content: center\" (click)=\"goBack()\" (click)=\"add()\" (click)=\"openSnackBar()\">Create Single Player Game</button>\n        </div>\n      </mat-expansion-panel>\n    </div>\n    <div fxFlex=\"40%\" fxFlexFill>\n      <mat-expansion-panel [disabled]=\"multiPlayerIsDisabled\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Set Multiplayer Game Properties\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Number of Players\" [(ngModel)]=\"numberOfPlayers\" #numberofPlayers required>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Number of Questions \" [(ngModel)]=\"numberOfQuestions\">\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Time per Question (sec)\" [(ngModel)]=\"timePerQuestion\">\n        </mat-form-field>\n        <br>\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <textarea matInput placeholder=\"Rules\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" #gameRules required></textarea>\n          </mat-form-field>\n        </div>\n        <br>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n          <mat-checkbox>Advanced Game Mode</mat-checkbox>\n          <mat-icon (click)=\"openInfoDialog()\">help</mat-icon>\n        </div>\n        <br>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n          <button mat-raised-button color=\"primary\" style=\"align-content: center\" (click)=\"goBack()\" (click)=\"addMultiGame()\" (click)=\"openSnackBar()\">Create Multiplayer Game</button>\n        </div>\n      </mat-expansion-panel>\n    </div>\n  </mat-accordion>\n  <br>\n  <br>\n  <br>\n</div> -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title class=\"game-title\">Create a new Game</mat-card-title>\n    </mat-card-header>\n    <br>\n    <div class=\"fields\">\n      <table>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Game Name\" required [(ngModel)]=\"gameName\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <br>\n  \n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Game Image\" required [(ngModel)]=\"gameImage\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <br>\n        <tr>\n          <td>\n            <mat-form-field>\n              <textarea matInput placeholder=\"Game Description\" required [(ngModel)]=\"gameDescription\"></textarea>\n            </mat-form-field>\n          </td>\n        </tr>\n        <br>\n        <tr>\n          <td>\n            <mat-form-field>\n              <mat-select placeholder=\"Select Game Type\" required [(ngModel)]=\"gameTypeName\">\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"-15px\">\n                  <mat-option value=\"Single Player Timer Based Game\" (click)=\"setSingleType()\">Single Player Timer Based Game</mat-option>\n                  <mat-option value=\"Single Player Adaptive Game\" (click)=\"setSingleType()\">Single Player Adaptive Game</mat-option>\n                  <mat-option value=\"MultiPlayer Fastest Finger Game\" (click)=\"setGameType()\">MultiPlayer Fastest-Finger Game</mat-option>\n                </div>\n              </mat-select>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <br>\n    <br>\n    <mat-accordion fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n      <div fxFlex=\"40%\" fxFlexFill>\n        <mat-expansion-panel [disabled]=\"singlePlayerIsDisabled\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Set the Properties for Single Player Game\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-list role=\"list\">\n            <div class=\"gm-question-level\">\n              <mat-list-item role=\"listitem\">Easy Level Questions</mat-list-item>\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Number of Questions \" [(ngModel)]=\"easyLevel\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Total Score\" [(ngModel)]=\"easyQuestionsScore\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Time (sec)\" [(ngModel)]=\"easyQuestionsTime\">\n              </mat-form-field>\n            </div>\n            <br>\n            <br>\n            <div class=\"gm-question-level\">\n              <mat-list-item role=\"listitem\">Medium Level Questions</mat-list-item>\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Number of Questions\" [(ngModel)]=\"mediumLevel\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Total Score\" [(ngModel)]=\"mediumQuestionsScore\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Time (sec)\" [(ngModel)]=\"mediumQuestionsTime\">\n              </mat-form-field>\n            </div>\n            <br>\n            <br>\n            <div class=\"gm-question-level\">\n              <mat-list-item role=\"listitem\">Hard Level Questions</mat-list-item>\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Number of Questions \" [(ngModel)]=\"advancedLevel\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Total Score \" [(ngModel)]=\"advanceQuestionsScore\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Time (sec)\" [(ngModel)]=\"advanceQuestionsTime\">\n              </mat-form-field>\n            </div>\n          </mat-list>\n          <div>\n            <mat-list-item role=\"listitem\"> Total</mat-list-item>\n            <mat-form-field>\n              <input matInput type=\"number\" [(ngModel)]=\"easyLevel + mediumLevel + advancedLevel\" placeholder=\"Total Number of Questions \"\n                readonly>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput type=\"number\" [(ngModel)]=\"easyQuestionsScore + mediumQuestionsScore + advanceQuestionsScore\" placeholder=\"Total Score \"\n                readonly>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput type=\"number\" [(ngModel)]=\"easyQuestionsTime + mediumQuestionsTime + advanceQuestionsTime\" placeholder=\"Duration of Game\"\n                readonly>\n            </mat-form-field>\n          </div>\n          <br>\n          <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n            <mat-form-field>\n              <textarea matInput placeholder=\"Set the Game Rules\" [(ngModel)]=\"gameRules\" required></textarea>\n            </mat-form-field>\n          </div>\n          <br>\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n            <mat-checkbox>Advanced Game Mode</mat-checkbox>\n            <mat-icon (click)=\"openInfoDialog()\">help</mat-icon>\n          </div>\n  \n          <br>\n  \n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n            <button mat-raised-button color=\"primary\" style=\"align-content: center\" (click)=\"goBack()\" (click)=\"add()\" (click)=\"openSnackBar()\">Create Single Player Game</button>\n          </div>\n  \n        </mat-expansion-panel>\n      </div>\n      <div fxFlex=\"40%\" fxFlexFill>\n        <mat-expansion-panel [disabled]=\"multiPlayerIsDisabled\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Set Multiplayer Game Properties\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput type=\"number\" placeholder=\"Number of Players\" [(ngModel)]=\"numberOfPlayers\" #numberofPlayers required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput type=\"number\" placeholder=\"Number of Questions \" required [(ngModel)]=\"numberOfQuestions\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput type=\"number\" placeholder=\"Time per Question (sec)\" required [(ngModel)]=\"timePerQuestion\">\n          </mat-form-field>\n          <br>\n          <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n            <mat-form-field>\n              <textarea matInput placeholder=\"Set the Rules for Game\" [(ngModel)]=\"gameRules\" required></textarea>\n            </mat-form-field>\n          </div>\n          <br>\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n            <mat-checkbox>Advanced Game Mode</mat-checkbox>\n            <mat-icon (click)=\"openInfoDialog()\">help</mat-icon>\n          </div>\n  \n          <br>\n  \n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n            <button mat-raised-button color=\"primary\" style=\"align-content: center\" (click)=\"goBack()\" (click)=\"addMultiGame()\" (click)=\"openSnackBar()\">Create Multiplayer Game</button>\n          </div>\n        </mat-expansion-panel>\n      </div>\n    </mat-accordion>\n    <br>\n    <br>\n    <br>\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/game-create/game-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".caption {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 20px;\n  color: #3399ff; }\n\n.gameImage {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 17px;\n  color: grey; }\n\n.example-card {\n  max-width: 700px;\n  background-color: lightgray;\n  margin: auto;\n  -webkit-box-shadow: 2px 5px black;\n          box-shadow: 2px 5px black;\n  padding-left: 30px;\n  padding: 30px;\n  width: 100%; }\n\n.game-title {\n  color: #524e4e;\n  font-family: sans-serif;\n  font-size: 20px;\n  margin: auto;\n  padding-left: 240px; }\n\n.fields {\n  padding-left: 50px; }\n\ninput {\n  border-bottom: 0px white !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-create/game-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reg_dialog_reg_dialog_component__ = __webpack_require__("../../../../../src/app/reg-dialog/reg-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__multiplayer_popup_multiplayer_popup_component__ = __webpack_require__("../../../../../src/app/multiplayer-popup/multiplayer-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__advanced_mode_advanced_mode_component__ = __webpack_require__("../../../../../src/app/advanced-mode/advanced-mode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var GameCreateComponent = /** @class */ (function () {
    function GameCreateComponent(dialog, router, gameService, http, snackBar, location, route) {
        this.dialog = dialog;
        this.router = router;
        this.gameService = gameService;
        this.http = http;
        this.snackBar = snackBar;
        this.location = location;
        this.route = route;
        this.gameData = [];
        this.filteredGameData = [];
        this.multiPlayerIsDisabled = true;
        this.singlePlayerIsDisabled = true;
        this.selectedFile = null;
    }
    GameCreateComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    };
    GameCreateComponent.prototype.onUpload = function () {
        this.http
            .post("http://maverick.stackroute.in:9091/api/game/category/mp/3/capitals", this.selectedFile, {
            reportProgress: true,
            observe: "events"
        })
            .subscribe(function (event) {
            console.log(event); // handle event here
        });
    };
    GameCreateComponent.prototype.ngOnInit = function () { };
    GameCreateComponent.prototype.setGameType = function () {
        this.multiPlayerIsDisabled = false;
        this.singlePlayerIsDisabled = true;
    };
    GameCreateComponent.prototype.setSingleType = function () {
        this.singlePlayerIsDisabled = false;
        this.multiPlayerIsDisabled = true;
    };
    GameCreateComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__reg_dialog_reg_dialog_component__["a" /* RegDialogComponent */], {
            width: "600px"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
        });
    };
    GameCreateComponent.prototype.openMultiDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__multiplayer_popup_multiplayer_popup_component__["a" /* MultiplayerPopupComponent */], {
            width: "600px"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
        });
    };
    GameCreateComponent.prototype.openInfoDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__advanced_mode_advanced_mode_component__["a" /* AdvancedModeComponent */], {
            width: "350px",
            height: "350px"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
        });
    };
    GameCreateComponent.prototype.add = function () {
        var _this = this;
        var games = {
            gameId: this.gameId,
            gameName: this.gameName,
            gameImage: this.gameImage,
            createdBy: this.createdBy,
            createdOn: this.createdOn,
            gameType: {
                gameTypeId: this.gameTypeId,
                gameTypeName: this.gameTypeName,
                gameTypeDescription: this.gameTypeDescription
            },
            gameDescription: this.gameDescription,
            gameRules: this.gameRules,
            questionLevels: {
                easyLevel: this.easyLevel,
                mediumLevel: this.mediumLevel,
                advancedLevel: this.advancedLevel
            },
            questionScore: {
                easyQuestionsScore: this.easyQuestionsScore,
                mediumQuestionsScore: this.mediumQuestionsScore,
                advanceQuestionsScore: this.advanceQuestionsScore
            },
            questionTime: {
                easyQuestionsTime: this.easyQuestionsTime,
                mediumQuestionsScore: this.mediumQuestionsTime,
                advanceQuestionsScore: this.advanceQuestionsTime
            },
            topic: {
                topicId: this.topicId,
                topicName: this.topicName,
                topicImage: this.topicImage,
                questions: [
                    {
                        questionId: this.questionId,
                        questionStem: this.questionStem,
                        questionLevel: this.questionLevel,
                        questionType: this.questionType,
                        option1: this.option1,
                        option2: this.option2,
                        option3: this.option3,
                        option4: this.option4,
                        correctAnswer: this.correctAnswer,
                        user: [
                            {
                                userId: this.userId,
                                userName: this.userName
                            }
                        ]
                    }
                ]
            },
            questions: [
                {
                    questionId: this.questionId,
                    questionStem: this.questionStem,
                    questionLevel: this.questionLevel,
                    questionType: this.questionType,
                    option1: this.option1,
                    option2: this.option2,
                    option3: this.option3,
                    option4: this.option4,
                    correctAnswer: this.correctAnswer
                }
            ]
        };
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.topicName = params.topicName;
        });
        console.log("add", games);
        this.gameService.createGame(this.categoryId, this.topicName, games).subscribe(function (data) {
            console.log("coming data is ", data);
        });
    };
    GameCreateComponent.prototype.addMultiGame = function () {
        var _this = this;
        var multiGames = {
            gameId: this.gameId,
            gameName: this.gameName,
            gameImage: this.gameImage,
            createdBy: this.createdBy,
            createdOn: this.createdOn,
            gameType: {
                gameTypeId: this.gameTypeId,
                gameTypeName: this.gameTypeName,
                gameTypeDescription: this.gameTypeDescription
            },
            gameDescription: this.gameDescription,
            gameRules: this.gameRules,
            userId: this.userId,
            categoryId: this.categoryId,
            questionLevel: {
                easyLevel: this.easyLevel,
                mediumLevel: this.mediumLevel,
                advancedLevel: this.advancedLevel
            },
            numberOfQuestions: this.numberOfQuestions,
            timePerQuestion: this.timePerQuestion,
            scorePerQuestion: this.scorePerQuestion,
            topic: {
                topicId: this.topicId,
                topicName: this.topicName,
                topicImage: this.topicImage,
                questions: [{
                        questionId: this.questionId,
                        questionLevel: this.questionLevel,
                        questionStem: this.questionStem,
                        questionType: this.questionType,
                        option1: this.option1,
                        option2: this.option2,
                        option3: this.option3,
                        option4: this.option4,
                        correctAnswer: this.correctAnswer,
                        user: [{
                                userId: this.userId,
                                userName: this.userName,
                            }],
                    }]
            },
            autoquestions: [{
                    questionId: this.questionId,
                    questionLevel: this.questionLevel,
                    questionStem: this.questionStem,
                    questionType: this.questionType,
                    option1: this.option1,
                    option2: this.option2,
                    option3: this.option3,
                    option4: this.option4,
                    correctAnswer: this.correctAnswer,
                    user: [{
                            userId: this.userId,
                            userName: this.userName
                        }],
                }]
        };
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.topicName = params.topicName;
        });
        console.log("added multiplayer", multiGames);
        this.gameService.createMultiGame(this.categoryId, this.topicName, multiGames).subscribe(function (data) {
            console.log("multiplayer coming data is ", data);
        });
    };
    GameCreateComponent.prototype.goBack = function () {
        this.location.back();
    };
    GameCreateComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Game Created", "", {
            duration: 2000,
        });
    };
    GameCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "sn-game-create",
            template: __webpack_require__("../../../../../src/app/game-create/game-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-create/game-create.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], GameCreateComponent);
    return GameCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game-manager-popup/game-manager-popup.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n    <mat-card class=\"example-card\">\n     \n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title class = \"name\"><h2>Category</h2> Time:</mat-card-title>\n    </mat-card-header>\n    \n    \n    <mat-card-content>\n      <h4>Description: {{gameType}}</h4>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\n        very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n      </p>\n    </mat-card-content>\n    <mat-card-content>\n        <h4>Rules:</h4>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\n          very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n        </p>\n      </mat-card-content>\n    <mat-card-actions>\n      <a routerLink= \"add\">\n      <button mat-raised-button color = \"primary\" style=\"align-content: center\">Play</button>\n    </a>\n    </mat-card-actions>\n  </mat-card>\n\n\n\n\n\n\n\n<!-- <div class=\"col-md-7 main\">\n<mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Log in</mat-card-title>\n        </mat-card-header>\n        \n        <mat-form-field>\n          <input matInput [(ngModel)]=\"authenticationModel.email\" placeholder=\"enter userid\">\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"authenticationModel.password\" placeholder=\"enter password\">\n        </mat-form-field>\n      \n        <mat-card-actions>\n          \n          <mat-chip-list class=\"mat-chip-list-stacked\">\n            <mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\" (click)=\"loginUser(authenticationModel)\">\n              {{chip.name}}\n            </mat-chip>\n        \n            <mat-chip *ngFor=\"let chip of availableRegisterColors\" selected=\"true\" [color]=\"chip.color\" (click)=\"loginUser(authenticationModel)\">\n              {{chip.name}}\n            </mat-chip>\n            <button class=\"btn btn-success\" (click)=\"regiseterUser(user)\" >  Register  </button>\n          </mat-chip-list>\n        </mat-card-actions>\n      </mat-card> -->\n<!-- <form>\n\n<div class=\"form-group\">\n    <label for=\"id\">user Name:</label>\n    <input [(ngModel)]=\"authenticationModel.email\" placeholder=\"user name\" name=\"email\" class=\"form-control\" id=\"email\">\n</div>\n\n<div class=\"form-group\">\n    <label for=\"name\">password:</label>\n    <input [(ngModel)]=\"authenticationModel.password\" placeholder=\"password\" name=\"password\" class=\"form-control\" id=\"password\">\n</div> \n<div>\n    <button class=\"btn btn-success\" (click)=\"loginUser(authenticationModel)\" >  Log in  </button>\n</div>\n<div>\n    <button class=\"btn btn-success\" (click)=\"loginUser(authenticationModel)\" >  forgot password </button>\n</div>\n</form> -->\n<!-- <br/>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/game-manager-popup/game-manager-popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.example-card {\n  max-width: 900px; }\n\n.example-header-image {\n  /* background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); */\n  background-size: cover; }\n\nmat-chip {\n  max-width: 70px; }\n\n.example-card {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  opacity: 0.9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-manager-popup/game-manager-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameManagerPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GameManagerPopupComponent = /** @class */ (function () {
    function GameManagerPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.gameType = "Singleplayer";
    }
    GameManagerPopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GameManagerPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-game-manager-popup',
            template: __webpack_require__("../../../../../src/app/game-manager-popup/game-manager-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-manager-popup/game-manager-popup.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], Object])
    ], GameManagerPopupComponent);
    return GameManagerPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* :host /deep/ h3 {\n    color: yellow;\t\n    font-style: italic;\n}\n:host  >>> .background {\n    color: white;\n    font-style: Monospace;\n    font-size: 20px;\n} */\n\n/* :host  {\n    position: absolute; \n    background-color: silver;\n    width: 100%;\n    height: 100%;\n}  */\n\n.background{\n    z-index:-1;\n}\n\n.gridCentered .static {\n    position: absolute;\n    visibility: hidden;\n  }\n\n.gridCentered {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n.example-card {\n    max-width: 198px;\n    max-height: 236px;\n   }\n\nmat-card-title{\nletter-spacing: 4px;\nmargin: 0;\n\n }\n\n.center{\n    margin: 0 auto;\n     }\n\n.mat-card-title {\n      font-size: 21px !important;\n      font-weight: 400;\n      font-weight: bolder;\n    }\n\n.right{\n      -ms-flex-line-pack:right;\n          align-content:right;\n    }\n\n#aa{\n      margin-top:100px !important;\n    }\n\n.thumbnail{\n      height:100%;\n      margin: 0;\n      -webkit-box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n              box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n        }\n\n.container{\n      margin-top:0;\n      margin-bottom:0;\n    }\n\n.cardd{\n      margin-bottom: 10px;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<marquee direction=\"down\" vspace=\"0\" loop=\"true\" scrollamount=\"3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://image.freepik.com/free-vector/fashion-lettering_1019-21.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://orig14.deviantart.net/7d96/f/2013/287/d/3/tv_series_icon_by_quaffleeye-d6qj64q.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://image.freepik.com/free-vector/fashion-lettering_1019-21.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://orig14.deviantart.net/7d96/f/2013/287/d/3/tv_series_icon_by_quaffleeye-d6qj64q.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://image.freepik.com/free-vector/fashion-lettering_1019-21.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://orig14.deviantart.net/7d96/f/2013/287/d/3/tv_series_icon_by_quaffleeye-d6qj64q.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://image.freepik.com/free-vector/fashion-lettering_1019-21.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://orig14.deviantart.net/7d96/f/2013/287/d/3/tv_series_icon_by_quaffleeye-d6qj64q.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://image.freepik.com/free-vector/fashion-lettering_1019-21.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://orig14.deviantart.net/7d96/f/2013/287/d/3/tv_series_icon_by_quaffleeye-d6qj64q.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://image.freepik.com/free-vector/fashion-lettering_1019-21.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://orig14.deviantart.net/7d96/f/2013/287/d/3/tv_series_icon_by_quaffleeye-d6qj64q.png\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"https://www.laps.in/elite_sports_logo_2_by_s_havrisik-d2xqmsr.jpg\" alt=\"Lights\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://alivecampus.com/wp-content/uploads/2015/01/movies.jpg\" alt=\"Nature\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-4 col-6\">\n        <div class=\"cardd\">\n          <div class=\"thumbnail\">\n            <img src=\"http://examstudy.maanavan.com/wp-content/uploads/2017/09/unnamed-1.png\" alt=\"Fjords\" style=\"width:100%\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</marquee>"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_dialog_login_dialog_component__ = __webpack_require__("../../../../../src/app/login-dialog/login-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reg_dialog_reg_dialog_component__ = __webpack_require__("../../../../../src/app/reg-dialog/reg-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(dialog) {
        this.dialog = dialog;
        this.title = 'app';
    }
    LandingPageComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    LandingPageComponent.prototype.openDialog2 = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__reg_dialog_reg_dialog_component__["a" /* RegDialogComponent */], {
            width: '427px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    LandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.openDialog(); }, 20);
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-dialog/login-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "cdk-overlay-1{\n  width:427px !important;\n}\n\n.email{\n \n    border-color: #b5b5b5;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    /* appearance: none; */\n    border-radius: 4px;\n    border-style: solid;\n    border-width: 1px;\n    padding: 8px 14px;\n}\n\nexample-card1{\n  border-radius: 30px;\n}\n\n.mat-dialog-container{\n  border-radius: 17px !important;\n}\n\n.or {\n  margin: 6px auto;\n  overflow: hidden;\n  text-align: center;\n  color: rgb(85, 85, 85);\n  font-weight: bolder !important;\n  font-size: 14px;\n  margin-bottom: -4px !important;\n}\n\n.spanLogin{\n  color: rgb(255, 255, 255);\n                        display: inline-block;\n                        font-size: 17px;\n                        font-weight: bold;\n                        letter-spacing: normal;\n                        line-height: 16px;\n                        padding-left: 11%;\n                        padding-top: 1px;\n                        text-align: center;\n                        vertical-align: text-bottom;\n                        -webkit-font-smoothing: auto;\n                        white-space: normal;\n                        width: 88%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-dialog/login-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class= \"responsive\">\n  <mat-card class=\"example-card1\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Log in</mat-card-title>\n    </mat-card-header>\n\n    User ID :\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"authenticationModel.email\" placeholder=\"Enter User Id\">\n    </mat-form-field>\n    <br>\n\n    Password :\n    <mat-form-field>\n      <input matInput [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"authenticationModel.password\" placeholder=\"Enter Password\">\n\n    </mat-form-field>\n    <table style=\"margin-left: -12px;\">\n      <tr>\n        <td>\n          <button mat-raised-button color=\"primary\" (click)=\"loginUser(authenticationModel)\" mat-dialog-close>Login</button>\n        </td>\n        <td>\n\n        </td>\n      </tr>\n    </table>\n    <table>\n      <tr>\n        <div id=\"or1\">\n          OR\n        </div>\n      </tr>\n      <tr>\n        <button class=\"arrangeButton\" mat-raised-button color=\"warn\" (click)=\"socialSignIn('google')\" mat-dialog-close>Login with Google</button>\n      </tr>\n\n      <tr>\n        <div id=\"or2\">\n          OR\n        </div>\n      </tr>\n      <tr>\n        <button class=\"arrangeButton\" mat-raised-button color=\"primary\" (click)=\"socialSignIn('facebook')\" mat-dialog-close>Login with Facebook</button>\n      </tr>\n    </table>\n    <a (click)=\"openDialog2()\" [routerLink]=\"['maverick']\" mat-dialog-close>Register</a>\n\n  </mat-card>\n\n  <br/>\n</div> -->\n\n\n\n\n\n\n\n\n\n\n\n<!-- \n<div id=\"demo\" class=\"example-card1\" keyboard=\"false\" data-backdrop=\"static\">\n  <div style=\"background-color: rgb(255, 255, 255); border-radius: 8px; min-height: 400px; padding-top: 7px; width: 383px;\">\n    <div style=\"position: static; height: 100%; width: 100%;\">\n      <div style=\"margin: 30px auto 0px; position: absolute; height: 55px; width: 55px;\">\n\n      </div>\n      <div>\n        <div style=\"margin: 5px 26px 26px; text-align: center; font-weight: bold; font-size: 28px; color: rgb(85, 85, 85);\">Welcome to Maverick</div>\n        <div style=\"text-align: center; font-weight: bold; color: rgb(204, 204, 204); font-size: 18px; margin: -25px 0px 20px;\">Let's play with fun</div>\n      </div>\n      <div>\n        <div>\n          <div style=\"margin: 0px auto; position: relative; text-align: center;\">\n            <div style=\"margin: 0px auto; width: 268px;\">\n              <div>\n                <form method=\"POST\" novalidate=\"\">\n                  <fieldset style=\"position: relative; margin-bottom: 7px;\">\n                    <input [(ngModel)]=\"authenticationModel.email\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\" type=\"email\" value=\"\">\n\n\n                  </fieldset>\n                  <fieldset style=\"position: relative;\">\n\n                    <input placeholder=\"Enter password\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"authenticationModel.password\" value=\"\">\n                  </fieldset>\n                  <button aria-label=\"Continue Logging in your Maverick account\" (click)=\"loginUser(authenticationModel)\" type=\"submit\" style=\"border: 0px; height: 36px; display: inline-block; border-radius: 4px; -webkit-font-smoothing: antialiased; padding: 0px 18px; font-size: 15px; font-weight: bold; outline: none; box-shadow: none; cursor: pointer; margin-top: 10px; vertical-align: middle; text-align: center; background-color: rgb(189, 8, 28); color: rgb(255, 255, 255); width: 100%;\"\n                    mat-dialog-close>\n                    <div>Continue </div>\n                  </button>\n                </form>\n                <p class=\"or\">Or</p>\n                <div>\n                  <div style=\"position: relative;\">\n                    <div>\n                      <button (click)=\"socialSignIn('google')\" type=\"button\" style=\"margin-top:20px; border: 0px;  height: 40px; display: block; border-radius: 2px; -webkit-font-smoothing: antialiased; padding: 0px 0px 0px 8px; font-size: 15px; font-weight: normal; outline: none; box-shadow: none; cursor: pointer; margin-top: 10px; text-align: left; background-clip: padding-box; background-color:#e84104; margin-bottom: 9px; position: absolute; transition: opacity 0.2s linear; width: 100%;\">\n                        <span class=\"spanLogin\" mat-dialog-close>Login with Google</span>\n                      </button>\n                      <div style=\"height: 40px; padding-top: 10px; padding-bottom: 4px; text-align: left;\">\n                        <span style=\"vertical-align: bottom; width: 268px; height: 40px;\">\n                          <iframe name=\"f1be749753ed0d8\" height=\"1000px\" frameborder=\"0\" allowtransparency=\"true\" allowfullscreen=\"true\" scrolling=\"no\"\n                            allow=\"encrypted-media\" src=\"https://www.facebook.com/v2.7/plugins/login_button.php?app_id=274266067164&amp;button_type=continue_with&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FRQ7NiRXMcYA.js%3Fversion%3D42%23cb%3Df10caf54e0fb5a4%26domain%3Din.pinterest.com%26origin%3Dhttps%253A%252F%252Fin.pinterest.com%252Ff6eb241209ae4%26relation%3Dparent.parent&amp;container_width=268&amp;locale=en_US&amp;scope=public_profile%2Cemail%2Cuser_likes%2Cuser_birthday%2Cuser_friends&amp;sdk=joey&amp;size=large&amp;use_continue_as=true&amp;width=268px\"\n                            style=\"border: none; visibility: visible; width: 268px; height: 40px;\" class=\"\"></iframe>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div style=\"height: 10px;\"></div>\n                  <div style=\"position: relative;\">\n                    <div>\n                      <button (click)=\"socialSignIn('facebook')\" aria-label=\"\" class=\"FacebookConnectButton active\" type=\"button\" style=\"margin-top:20px; border: 0px; height: 40px; display: block; border-radius: 2px; -webkit-font-smoothing: antialiased; padding: 0px 0px 0px 8px; font-size: 15px; font-weight: normal; outline: none; box-shadow: none; cursor: pointer; margin-top: 10px; text-align: left; background-clip: padding-box; background-color: rgb(66, 103, 178); margin-bottom: 9px; position: absolute; transition: opacity 0.2s linear; width: 100%;\">\n                        <span class=\"spanLogin\" mat-dialog-close>Login with Facebook</span>\n                      </button>\n                      <div style=\"height: 40px; padding-top: 10px; padding-bottom: 4px; text-align: left;\">\n                        <div class=\"fb-login-button fb_iframe_widget\" data-scope=\"public_profile,email,user_likes,user_birthday,user_friends\" onlogin=\"checkLoginState\"\n                          data-button-type=\"continue_with\" data-use-continue-as=\"true\" data-width=\"268px\" data-size=\"large\"\n                          login_text=\"\" fb-xfbml-state=\"rendered\" fb-iframe-plugin-query=\"app_id=274266067164&amp;button_type=continue_with&amp;container_width=268&amp;locale=en_US&amp;scope=public_profile%2Cemail%2Cuser_likes%2Cuser_birthday%2Cuser_friends&amp;sdk=joey&amp;size=large&amp;use_continue_as=true&amp;width=268px\">\n                          <span style=\"vertical-align: bottom; width: 268px; height: 40px;\">\n                            <iframe name=\"f1be749753ed0d8\" height=\"1000px\" frameborder=\"0\" allowtransparency=\"true\" allowfullscreen=\"true\" scrolling=\"no\"\n                              allow=\"encrypted-media\" title=\"fb:login_button Facebook Social Plugin\" src=\"https://www.facebook.com/v2.7/plugins/login_button.php?app_id=274266067164&amp;button_type=continue_with&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FRQ7NiRXMcYA.js%3Fversion%3D42%23cb%3Df10caf54e0fb5a4%26domain%3Din.pinterest.com%26origin%3Dhttps%253A%252F%252Fin.pinterest.com%252Ff6eb241209ae4%26relation%3Dparent.parent&amp;container_width=268&amp;locale=en_US&amp;scope=public_profile%2Cemail%2Cuser_likes%2Cuser_birthday%2Cuser_friends&amp;sdk=joey&amp;size=large&amp;use_continue_as=true&amp;width=268px\"\n                              style=\"border: none; visibility: visible; width: 268px; height: 40px;\" class=\"\"></iframe>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div style=\"margin-top: 15px;\">\n                <span class=\"\" style=\"-webkit-font-smoothing: antialiased; font-size: 11px; font-weight: normal; text-align: center; transition: opacity 0.2s linear; color: rgb(170, 170, 170); width: 224px;\">\n                  <span>By continuing, you agree to Maverick's T & C\n                  </span>\n                  <a (click)=\"openDialog2()\" [routerLink]=\"['maverick']\">Register</a>\n\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n\n\n\n\n\n\n\n<form>\n    <div>\n        <div style=\"margin: 5px 26px 26px; text-align: center; font-weight: bold; font-size: 28px; color: rgb(85, 85, 85);\">Welcome to Maverick</div>\n        <div style=\"text-align: center; font-weight: bold; color: rgb(204, 204, 204); font-size: 18px; margin: -25px 0px 20px;\">Let's play with fun</div>\n      </div>\n  <!-- <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleTextarea\">Example textarea</label>\n    <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputFile\">File input</label>\n    <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\n    <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>\n  </div> -->\n\n  <div>\n      <div>\n        <div style=\"margin: 0px auto; position: relative; text-align: center;\">\n          <div style=\"margin: 0px auto; width: 268px;\">\n            <div>\n              <form method=\"POST\" novalidate=\"\">\n                <fieldset style=\"position: relative; margin-bottom: 7px;\">\n                  <input [(ngModel)]=\"authenticationModel.email\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\" type=\"email\" value=\"\">\n\n\n                </fieldset>\n                <fieldset style=\"position: relative;\">\n\n                  <input type=\"password\" placeholder=\"Enter password\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"authenticationModel.password\" value=\"\">\n                </fieldset>\n                <button aria-label=\"Continue Logging in your Maverick account\" (click)=\"openSnackBar()\" (click)=\"loginUser(authenticationModel)\" type=\"submit\" style=\"border: 0px; height: 36px; display: inline-block; border-radius: 4px; -webkit-font-smoothing: antialiased; padding: 0px 18px; font-size: 15px; font-weight: bold; outline: none; box-shadow: none; cursor: pointer; margin-top: 10px; vertical-align: middle; text-align: center; background-color: rgb(189, 8, 28); color: rgb(255, 255, 255); width: 100%;\"\n                  mat-dialog-close>\n                  <div>Continue </div>\n                </button>\n              </form>\n              <p class=\"or\">Or</p>\n              <div>\n                <div style=\"position: relative;\">\n                  <div>\n                    <button (click)=\"socialSignIn('google')\" type=\"button\" style=\"margin-top:20px; border: 0px;  height: 40px; display: block; border-radius: 2px; -webkit-font-smoothing: antialiased; padding: 0px 0px 0px 8px; font-size: 15px; font-weight: normal; outline: none; box-shadow: none; cursor: pointer; margin-top: 10px; text-align: left; background-clip: padding-box; background-color:#e84104; margin-bottom: 9px; position: absolute; transition: opacity 0.2s linear; width: 100%;\">\n                      <span class=\"spanLogin\" mat-dialog-close>Login with Google</span>\n                    </button>\n                    <div style=\"height: 40px; padding-top: 10px; padding-bottom: 4px; text-align: left;\">\n                      <span style=\"vertical-align: bottom; width: 268px; height: 40px;\">\n                        <iframe name=\"f1be749753ed0d8\" height=\"1000px\" frameborder=\"0\" allowtransparency=\"true\" allowfullscreen=\"true\" scrolling=\"no\"\n                          allow=\"encrypted-media\" src=\"https://www.facebook.com/v2.7/plugins/login_button.php?app_id=274266067164&amp;button_type=continue_with&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FRQ7NiRXMcYA.js%3Fversion%3D42%23cb%3Df10caf54e0fb5a4%26domain%3Din.pinterest.com%26origin%3Dhttps%253A%252F%252Fin.pinterest.com%252Ff6eb241209ae4%26relation%3Dparent.parent&amp;container_width=268&amp;locale=en_US&amp;scope=public_profile%2Cemail%2Cuser_likes%2Cuser_birthday%2Cuser_friends&amp;sdk=joey&amp;size=large&amp;use_continue_as=true&amp;width=268px\"\n                          style=\"border: none; visibility: visible; width: 268px; height: 40px;\" class=\"\"></iframe>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div style=\"height: 10px;\"></div>\n                <div style=\"position: relative;\">\n                  <div>\n                    <button (click)=\"socialSignIn('facebook')\" aria-label=\"\" class=\"FacebookConnectButton active\" type=\"button\" style=\"margin-top:20px; border: 0px; height: 40px; display: block; border-radius: 2px; -webkit-font-smoothing: antialiased; padding: 0px 0px 0px 8px; font-size: 15px; font-weight: normal; outline: none; box-shadow: none; cursor: pointer; margin-top: 10px; text-align: left; background-clip: padding-box; background-color: rgb(66, 103, 178); margin-bottom: 9px; position: absolute; transition: opacity 0.2s linear; width: 100%;\">\n                      <span class=\"spanLogin\" mat-dialog-close>Login with Facebook</span>\n                    </button>\n                    <div style=\"height: 40px; padding-top: 10px; padding-bottom: 4px; text-align: left;\">\n                      <div class=\"fb-login-button fb_iframe_widget\" data-scope=\"public_profile,email,user_likes,user_birthday,user_friends\" onlogin=\"checkLoginState\"\n                        data-button-type=\"continue_with\" data-use-continue-as=\"true\" data-width=\"268px\" data-size=\"large\"\n                        login_text=\"\" fb-xfbml-state=\"rendered\" fb-iframe-plugin-query=\"app_id=274266067164&amp;button_type=continue_with&amp;container_width=268&amp;locale=en_US&amp;scope=public_profile%2Cemail%2Cuser_likes%2Cuser_birthday%2Cuser_friends&amp;sdk=joey&amp;size=large&amp;use_continue_as=true&amp;width=268px\">\n                        <span style=\"vertical-align: bottom; width: 268px; height: 40px;\">\n                          <iframe name=\"f1be749753ed0d8\" height=\"1000px\" frameborder=\"0\" allowtransparency=\"true\" allowfullscreen=\"true\" scrolling=\"no\"\n                            allow=\"encrypted-media\" title=\"fb:login_button Facebook Social Plugin\" src=\"https://www.facebook.com/v2.7/plugins/login_button.php?app_id=274266067164&amp;button_type=continue_with&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FRQ7NiRXMcYA.js%3Fversion%3D42%23cb%3Df10caf54e0fb5a4%26domain%3Din.pinterest.com%26origin%3Dhttps%253A%252F%252Fin.pinterest.com%252Ff6eb241209ae4%26relation%3Dparent.parent&amp;container_width=268&amp;locale=en_US&amp;scope=public_profile%2Cemail%2Cuser_likes%2Cuser_birthday%2Cuser_friends&amp;sdk=joey&amp;size=large&amp;use_continue_as=true&amp;width=268px\"\n                            style=\"border: none; visibility: visible; width: 268px; height: 40px;\" class=\"\"></iframe>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div style=\"margin-top: 15px;\">\n              <span class=\"\" style=\"-webkit-font-smoothing: antialiased; font-size: 11px; font-weight: normal; text-align: center; transition: opacity 0.2s linear; color: rgb(170, 170, 170); width: 224px;\">\n                <span>By continuing, you agree to Maverick's T & C\n                </span>\n                <a (click)=\"openDialog2()\" [routerLink]=\"['maverick']\">Register</a>\n\n              </span>\n            </div>\n          </div>\n        </div>\n      </div></div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login-dialog/login-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginUser_model__ = __webpack_require__("../../../../../src/app/loginUser.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_user_service__ = __webpack_require__("../../../../../src/app/services/login-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_authentication_model__ = __webpack_require__("../../../../../src/app/model/authentication.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LoginAuth_login_auth_service__ = __webpack_require__("../../../../../src/app/LoginAuth/login-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reg_dialog_reg_dialog_component__ = __webpack_require__("../../../../../src/app/reg-dialog/reg-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(dialog, loginAuthService, socialAuthService, dialogRef, data, router, snackBar, userService, us) {
        this.dialog = dialog;
        this.loginAuthService = loginAuthService;
        this.socialAuthService = socialAuthService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.snackBar = snackBar;
        this.userService = userService;
        this.us = us;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.msg = "";
        this.msg1 = "";
        this.validateEmail = true;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
        this.hide = true;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__loginUser_model__["a" /* LoginUser */]();
        this.authenticationModel = new __WEBPACK_IMPORTED_MODULE_6__model_authentication_model__["a" /* AuthenticationModel */]();
        this.availableColors = [{ name: "log in", color: "primary" }];
        this.availableRegisterColors = [{ name: "Register", color: "accent" }];
    }
    LoginDialogComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.loginAuthService.isLoggedIn;
    };
    LoginDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoginDialogComponent.prototype.loginUser = function (authenticationModel) {
        var _this = this;
        console.log("email: " +
            authenticationModel.email +
            " pass: " +
            authenticationModel.password +
            "");
        this.userService.loginUser(authenticationModel).subscribe(function (data) {
            if (data != null) {
                _this.us.getUserByEmail(data.email).subscribe(function (data1) {
                    console.log(data1);
                    console.log("data in login--" +
                        data1.userId +
                        " " +
                        data1.email +
                        " " +
                        data1.location);
                    sessionStorage.setItem("userEmail", data1.email);
                    if (data1 != null) {
                        _this.loginAuthService.login(data);
                    }
                });
            }
            else {
                alert("wrong credentials ");
            }
            console.log("data userid=>>>>> " + data.userId + " " + data.location);
        });
    };
    LoginDialogComponent.prototype.openDialog2 = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__reg_dialog_reg_dialog_component__["a" /* RegDialogComponent */], {
            width: "600px"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
        });
    };
    LoginDialogComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            _this.loginAuthService.socialLogin(socialPlatformProvider);
            // this.router.navigate(['category']);
            // Now sign-in with userData
        });
    };
    LoginDialogComponent.prototype.checkEmail = function (psw) {
        console.log(psw.match("/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/"));
        console.log(psw);
        this.msg1 = "";
        // this.msg="password should have";
        var i;
        var c;
        var j1 = 0;
        var j2 = 0;
        var j3 = 0;
        for (i = 0; i < psw.length; i++) {
            c = psw.charAt(i);
            console.log("====" + c);
            if (psw.charAt(0) == "@" ||
                (psw.charAt(1) == "@" && psw.charAt(0) == ".") ||
                psw.charAt(1) == ".") {
                j3++;
            }
            else {
                if (c == "@") {
                    j2++;
                }
                if (c == ".") {
                    j1++;
                }
            }
        }
        if (j3 != 0) {
            this.msg1 = this.msg1 + " Enter valid email   ";
        }
        if (j3 == 0) {
            if (j2 == 0) {
                this.msg1 = this.msg1 + " @ Required  ";
            }
            if (j1 == 0) {
                this.msg1 = this.msg1 + " . Required  ";
            }
        }
        else {
            this.msg1 = this.msg1 + " Enter valid email   ";
        }
    };
    LoginDialogComponent.prototype.set = function () {
        this.msg1 = "";
        this.msg = "";
    };
    LoginDialogComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Logged in successfully", "", {
            duration: 2000
        });
    };
    LoginDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-login-dialog",
            template: __webpack_require__("../../../../../src/app/login-dialog/login-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-dialog/login-dialog.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__LoginAuth_login_auth_service__["a" /* LoginAuthService */],
            __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["AuthService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__services_login_user_service__["a" /* LoginUserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loginUser.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUser; });
var LoginUser = /** @class */ (function () {
    function LoginUser() {
    }
    LoginUser.prototype.user = function (name, password, email, location, mobile) {
        this.userName = name;
        this.password = password;
        this.email = email;
        this.location = location;
        this.mobile = mobile;
        this.age = this.age;
        this.gender = this.gender;
    };
    return LoginUser;
}());



/***/ }),

/***/ "../../../../../src/app/masonry/masonry-ref.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MasonryRef;
/**
 * An implemenation of the masonry library to be used
 * as a dummy when running on a server
 */
function MasonryRef(element, options) {
    return {
        layout: function () { return null; },
        destroy: function () { return null; },
        stamp: function () { return null; },
        unstamp: function () { return null; },
        appended: function () { return null; },
        prepended: function () { return null; },
        addItems: function () { return null; },
        remove: function () { return null; },
        on: function () { return null; },
        off: function () { return null; },
        once: function () { return null; },
        reloadItems: function () { return null; },
        getItemElements: function () { return null; }
    };
}


/***/ }),

/***/ "../../../../../src/app/masonry/masonry-token.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Masonry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var Masonry = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Masonry');


/***/ }),

/***/ "../../../../../src/app/masonry/masonry.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasonryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__masonry_ref__ = __webpack_require__("../../../../../src/app/masonry/masonry-ref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masonry_token__ = __webpack_require__("../../../../../src/app/masonry/masonry-token.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var defaultProviders = [
    { provide: __WEBPACK_IMPORTED_MODULE_2__masonry_token__["a" /* Masonry */], useValue: __WEBPACK_IMPORTED_MODULE_1__masonry_ref__["a" /* MasonryRef */] }
];
/**
 * A simple lightweight module to use Masonry layout in Angular
 *
 * {@link https://masonry.desandro.com/}
 *
 */
var MasonryModule = /** @class */ (function () {
    function MasonryModule() {
    }
    MasonryModule_1 = MasonryModule;
    /**
     * Specify a static method for root module to ensure providers
     * are only provided once but allows the module to still be imported
     * into other modules without reproviding services.
     *
     * @memberof MasonryModule
     */
    MasonryModule.forRoot = function (providers) {
        if (providers === void 0) { providers = defaultProviders; }
        return {
            ngModule: MasonryModule_1,
            providers: providers
        };
    };
    MasonryModule = MasonryModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])()
    ], MasonryModule);
    return MasonryModule;
    var MasonryModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/mat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MatModule = /** @class */ (function () {
    function MatModule() {
    }
    MatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRadioModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRadioModule */]
            ]
        })
    ], MatModule);
    return MatModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/authentication.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModel; });
var AuthenticationModel = /** @class */ (function () {
    function AuthenticationModel() {
    }
    return AuthenticationModel;
}());



/***/ }),

/***/ "../../../../../src/app/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.user = function (userId, name, password, email, location, mobile) {
        this.userId = userId;
        this.userName = name;
        this.password = password;
        this.email = email;
        this.location = location;
        this.mobile = mobile;
        this.age = this.age;
        this.gender = this.gender;
    };
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/multi-player-game/multi-player-game.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 style=\"text-align: center; color:darkgreen\">\n  Multi Player FFF Quiz !</h5>\n<hr>\n<div id=\"main-content\" class=\"container\">\n  <div class=\"row\" style=\"background-color: #9db69f\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12\">\n      <br>\n      <form class=\"form-inline\">\n        <div class=\"form-group\">\n          <button style=\"display: none\" id=\"connect\" class=\"btn btn-default\" type=\"button\" [disabled]=\"disabled\" (click)=\"connect()\">Connect</button>\n          <button id=\"disconnect\" class=\"btn-floating btn-small waves-effect waves-light red z-depth-5 ff\" (click)=\"disconnect()\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <div *ngIf=\"countDown != 0\">\n            <h5 style=\"float:left; color:white\">\n              <i>Remaining Time : {{timeElapsed()}}</i>\n            </h5>\n          </div>\n        </div>\n        <div class=\"row\" style=\"background-color: khaki\" *ngIf=\"!isOn\">\n          <div class=\"col m12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <strong>\n                  <i>Game Description :</i>\n                </strong>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                  to make a type specimen book.</p>\n                <strong>\n                  <i>Game Rules :</i>\n                </strong>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                  to make a type specimen book.</p>\n                <br>\n                <button id=\"send\" class=\"waves-effect waves-light btn\" type=\"button\" (click)=\"isOn= true\" (click)=\"sendResponse()\">continue</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"isOn\">\n          <div class=\"col m12\">\n            <div class=\"card option\">\n              <div class=\"card-content\">\n                <strong>Question : {{qNumber}}</strong>\n                <strong>{{questionStamp}} </strong>\n              </div>\n            </div>\n          </div>\n          <div class=\"col m12\">\n            <div class=\"card option\">\n              <a (click)='sendAnswerToAll(op1)'>\n                <div class=\"card-action\">\n                  <strong>1) : {{op1}}</strong>\n                </div>\n              </a>\n            </div>\n          </div>\n          <div class=\"col m12\">\n            <div class=\"card option\">\n              <a (click)='sendAnswerToAll(op2)'>\n                <div class=\"card-action\">\n                  <strong>2) : {{op2}}</strong>\n                </div>\n              </a>\n            </div>\n          </div>\n          <div class=\"col m12\">\n            <div class=\"card option\">\n              <a (click)='sendAnswerToAll(op3)'>\n                <div class=\"card-action\">\n                  <strong>3) : {{op3}}</strong>\n                </div>\n              </a>\n            </div>\n          </div>\n          <div class=\"col m12\">\n            <div class=\"card option\">\n              <a (click)='sendAnswerToAll(op4)'>\n                <div class=\"card-action\">\n                  <strong>4) : {{op4}}</strong>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <!-- <h5 style=\"text-align: center; color:white\">\n      <i>Players Info</i>\n    </h5> -->\n    <div class=\"com-lg-1 col-md-1\"></div>\n    <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12\">\n      <div>\n        <h5 style=\"text-align: center; color:white\">\n          <i>Players Info</i>\n        </h5>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col m12\">\n          <div class=\"card card1\">\n            <div class=\"card-content\">\n              <div class=\"col s4 l4\">\n                <img src=\"https://qualiscare.com/wp-content/uploads/2017/08/default-user.png\" alt=\"user -sample- image\" class=\"circle responsive-img\">\n              </div>\n              <div>\n                <h6>Player Name :\n                  <b>Ajay</b>\n                </h6>\n                <h6>User ID : {{user1}}</h6>\n                <h6>Score :{{score[0]}} </h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col m12\">\n          <div class=\"card card1\">\n            <div class=\"card-content\">\n              <div class=\"col s4 l4\">\n                <img src=\"https://qualiscare.com/wp-content/uploads/2017/08/default-user.png\" alt=\"user - sample - image\" class=\"circle responsive-img\">\n              </div>\n              <div>\n                <h6>Player Name </h6>\n                <h6>Player ID : {{user2}}</h6>\n                <h6>Score : {{score[2]}} </h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/multi-player-game/multi-player-game.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  max-width: 1340px;\n  width: 90%;\n  margin: 0px auto; }\n\ncircle {\n  border-radius: 50%; }\n\n.card .card-content {\n  padding: 10px; }\n\n.ff {\n  position: absolute;\n  float: right; }\n\n.c {\n  background-color: blue; }\n\n.option:hover {\n  background-color: #cae2df; }\n\n.card1 {\n  height: 140px; }\n\n#disconnect {\n  position: absolute;\n  right: 0; }\n\n#send {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/multi-player-game/multi-player-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiPlayerGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs__ = __webpack_require__("../../../../stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multi_player_rules_multi_player_rules_component__ = __webpack_require__("../../../../../src/app/multi-player-rules/multi-player-rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_multi_player_service__ = __webpack_require__("../../../../../src/app/services/multi-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_matching_user_service__ = __webpack_require__("../../../../../src/app/services/matching-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MultiPlayerGameComponent = /** @class */ (function () {
    function MultiPlayerGameComponent(router, dialog, multiPlayerService, matchingUsersService) {
        this.router = router;
        this.dialog = dialog;
        this.multiPlayerService = multiPlayerService;
        this.matchingUsersService = matchingUsersService;
        this.u = [];
        this.matchingData = [];
        this.data = [];
        this.options = [];
        this.showConversation = false;
        this.disableDiv = false;
        this.i = 1;
        this.score = [];
        this.user = [];
    }
    MultiPlayerGameComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__multi_player_rules_multi_player_rules_component__["a" /* MultiPlayerRulesComponent */], {
            width: "350px",
            height: "350px"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
        });
    };
    MultiPlayerGameComponent.prototype.toggleDisable = function () {
        this.disableDiv = !this.disableDiv;
    };
    MultiPlayerGameComponent.prototype.connect = function () {
        var socket = new WebSocket("ws://maverick.stackroute.in:9093/greeting");
        this.ws = __WEBPACK_IMPORTED_MODULE_1_stompjs__["over"](socket);
        var that = this;
        // const userData = JSON.stringify({userId: '100'});
        this.ws.connect({}, function (frame) {
            that.ws.subscribe("/errors", function (message) {
                alert("Error " + message.body);
            });
            that.ws.subscribe("/topicQuestion/reply", function (message) {
                console.log("Response data is ==========> :" + message);
                // this.multiPlayerService.seconds = 20;
                that.showGreeting(message.body);
            });
            that.ws.subscribe("/topicResponse/reply", function (message) {
                console.log("Response data is ==========> Topic response:" + message);
                // this.multiPlayerService.seconds = 20;
                that.showUserData(message.body);
            });
            that.disabled = true;
        }
        // this function is used to show alert box when disconnect socket
        // function(error) {
        //   alert('STOMP error ' + error);
        // }
        );
    };
    MultiPlayerGameComponent.prototype.disconnect = function () {
        this.complete();
        if (this.ws != null) {
            this.ws.ws.close();
        }
        this.setConnected(false);
        console.log("Disconnected");
    };
    MultiPlayerGameComponent.prototype.sendResponse = function () {
        console.log("Data Send ==========>");
        var dd = JSON.stringify({
            // userId: "101",
            // questionStamp: "dummy data",
            // questionId: "110",
            // selectedResponse: "any",
            // correctAns: "any",
            // endTime: "0",
            // score: "0"
            hi: ""
        });
        console.log("First Response Send ==============>" + dd);
        this.ws.send("/app/messageOpen", {}, dd);
    };
    // changeColor() {
    //   console.log("Inside Color Change");
    //   if (this.selectedAnswer === this.correctAns) {
    //     this.color = "green";
    //   } else {
    //     this.color = "red";
    //   }
    // }
    MultiPlayerGameComponent.prototype.sendAnswer = function (answer) {
        this.selectedAnswer = answer;
        // this.qNumber = this.i++
        console.log("Send Response : ", answer);
        var ans = JSON.stringify({
            userId: JSON.stringify(this.user2),
            questionStamp: this.questionStamp,
            questionId: this.questionId,
            selectedOption: answer,
            correctAns: this.correctAns,
            score: this.score,
            endTime: JSON.stringify(this.count)
        });
        console.log("end time =>>>>>>>>>>>>>>>>>>>>" + this.count);
        console.log("Data >>>>>>>>>>>>>>>> " + ans);
        // this.ws.send("/app/privateMessage", {}, ans);
        this.ws.send("/app/privateMessage", {}, ans);
    };
    MultiPlayerGameComponent.prototype.sendAnswerToAll = function (answer) {
        this.selectedAnswer = answer;
        this.sendAnswer(answer);
        var ans = JSON.stringify({
            userId: JSON.stringify(this.user2),
            questionStamp: this.questionStamp,
            questionId: this.questionId,
            selectedOption: answer,
            correctAns: this.correctAns,
            score: this.score,
            endTime: JSON.stringify(this.count)
        });
        // this.ws.send("/app/privateMessage", {}, ans);
        console.log("Data is :===========>" + ans);
        this.ws.send("/app/messageOpen", {}, ans);
    };
    MultiPlayerGameComponent.prototype.showUserData = function (message) {
        this.showConversation = true;
        var rep = message
            .replace("[", "")
            .replace("]", "")
            .replace("{", "")
            .replace("}", "")
            .replace(/"/g, "");
        var quest = rep.split(",");
        for (var k = 0; k <= quest.length; k++) {
            this.matchingData[k] = quest[k];
        }
        this.user[0] = this.matchingData[0].split(":")[1];
        this.user[1] = this.matchingData[1].split(":")[1];
        this.score[0] = this.matchingData[2].split(":")[1];
        this.user[2] = this.matchingData[3].replace("{", "").split(":")[1];
        this.user[3] = this.matchingData[4].replace(/"/g, "").split(":")[1];
        this.score[1] = this.matchingData[5].replace(/"/g, "").split(":")[1];
        this.score[2] = this.score[1].replace("}", "");
        console.log("Parsing Data : " + quest);
        console.log("Private Data comming.....: " + message);
        if (this.i > 8) {
            this.disconnect();
            this.router.navigate(["/multiResult"]);
        }
        this.qNumber = this.i++;
    };
    MultiPlayerGameComponent.prototype.showGreeting = function (message) {
        //this.qNumber = this.i++
        this.showConversation = true;
        // console.log('Type of Data =====> ' + typeof message);
        var rep = message
            .replace("{", "")
            .replace("}", "")
            .replace(/"/g, "");
        var quest = rep.split(",");
        for (var j = 0; j <= quest.length; j++) {
            this.data[j] = quest[j];
        }
        this.questionId = this.data[0].split(":")[1];
        console.log(this.questionId);
        this.questionStamp = this.data[1].split(":")[1];
        console.log(this.questionStamp);
        this.op1 = this.data[2].split(":")[1];
        this.op2 = this.data[3].split(":")[1];
        this.op3 = this.data[4].split(":")[1];
        this.op4 = this.data[5].split(":")[1];
        this.correctAns = this.data[6].split(":")[1];
        console.log("Correct Ans" + this.correctAns);
        // tslint:disable-next-line:radix
        this.totalTime = parseInt(this.data[7].split(":")[1]);
        // this.user[0] = parseInt(this.data[10].split(':')[1]);
        console.log(this.totalTime);
        // this.multiPlayerService.seconds = this.totalTime;
        this.complete();
        this.startTimer();
    };
    MultiPlayerGameComponent.prototype.startTimer = function () {
        var _this = this;
        this.count = 15;
        this.timer = setInterval(function () {
            _this.count--;
            if (_this.count <= 1) {
                _this.sendAnswerToAll("");
            }
        }, 1000);
    };
    MultiPlayerGameComponent.prototype.complete = function () {
        clearInterval(this.timer);
    };
    MultiPlayerGameComponent.prototype.timeElapsed = function () {
        return Math.floor(this.count % 60);
    };
    MultiPlayerGameComponent.prototype.setConnected = function (connected) {
        this.disabled = connected;
        this.showConversation = connected;
        this.data = [];
    };
    MultiPlayerGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matchingUsersService.getMatchingUsers().subscribe(function (data) {
            _this.matchingUsers = data;
            _this.user1 = _this.matchingUsers[0].userId;
            _this.user2 = _this.matchingUsers[1].userId;
        });
        this.connect();
    };
    MultiPlayerGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "sn-multi-player-game",
            template: __webpack_require__("../../../../../src/app/multi-player-game/multi-player-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/multi-player-game/multi-player-game.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_multi_player_service__["a" /* MultiPlayerService */],
            __WEBPACK_IMPORTED_MODULE_5__services_matching_user_service__["a" /* MatchingUserService */]])
    ], MultiPlayerGameComponent);
    return MultiPlayerGameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multi-player-result/multi-player-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-md-8 col-sm-12 col-xs-12 col-12\">\n      <!-- <div class=\"col m6\" style=\"padding: 10px; margin-left: 20%;\"> -->\n      <div class=\"card\" style=\"background-color: lightgray\">\n        <h4 class=\"header\" style=\"text-align: center;color: green\">Completed!</h4>\n        <div class=\"card-content\">\n          <div class=\"row justify-content-center\">\n            <img class=\"responsive-img\" src=\"http://www.pngall.com/wp-content/uploads/2016/04/Winner-PNG-Image.png\" style=\"width: 250px;height : 250px;\">\n          </div>\n          <div class=\"row justify-content-center\" style=\"color: rgb(4, 162, 4)\">\n            <h5>Winner Id : {{winnerId}}</h5>\n          </div>\n          <div class=\"row justify-content-center\" style=\"color: rgb(4, 162, 4)\">\n            <h5>Final Score: {{winnerScore}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/multi-player-result/multi-player-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/multi-player-result/multi-player-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiPlayerResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_matching_user_service__ = __webpack_require__("../../../../../src/app/services/matching-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MatchingUserService } from "../matching-user.service";

var MultiPlayerResultComponent = /** @class */ (function () {
    function MultiPlayerResultComponent(matchingUsersService) {
        this.matchingUsersService = matchingUsersService;
    }
    MultiPlayerResultComponent.prototype.getResults = function () {
        var _this = this;
        this.matchingUsersService
            .finalResult()
            .subscribe(function (result) {
            _this.result = result;
            _this.gameId = _this.result.gameId;
            _this.winnerId = _this.result.userId;
            _this.winnerScore = _this.result.score;
        });
    };
    MultiPlayerResultComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    MultiPlayerResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-multi-player-result',
            template: __webpack_require__("../../../../../src/app/multi-player-result/multi-player-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/multi-player-result/multi-player-result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_matching_user_service__["a" /* MatchingUserService */]])
    ], MultiPlayerResultComponent);
    return MultiPlayerResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multi-player-rules/multi-player-rules.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 style=\"text-align: center\">\n  Multi Player FFF Quiz !</h5>\n<hr>\n<div id=\"main-content\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12 m7\" style=\"border-right: greenyellow 2px solid\">\n      <form class=\"form-inline\">\n        <div class=\"form-group\">\n          <!-- style=\"display: none\" -->\n          <button style=\"display: none\" id=\"connect\" class=\"btn btn-default\" type=\"button\" [disabled]=\"disabled\" (click)=\"connect()\">Connect</button>\n          <!-- <button id=\"disconnect\" class=\"btn btn-default\" type=\"button\" [disabled]=\"!disabled\" (click)=\"disconnect()\">Disconnect</button> -->\n\n          <button id=\"disconnect\" class=\"btn-floating btn-large waves-effect waves-light red ff\" (click)=\"disconnect()\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <div *ngIf=\"countDown != 0\">\n            <!-- <strong  style=\"float:left;\">{{multiPlayerService.displayTimer()}}</strong> -->\n            <strong style=\"float:left;\">Question Time : {{countDown | async}}</strong>\n\n          </div>\n          <div *ngIf=\"count === 0\" >\n            <!-- sendAnswerToAll('') -->\n          </div>\n          <!-- <button id=\"send\" class=\"btn btn-default\" type=\"button\" (click)=\"sendResponse()\">Start Game</button> -->\n        </div>\n        <div class=\"row\" style=\"background-color: khaki\" *ngIf=\"!isOn\">\n          <div class=\"col m12\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <strong>\n                  <i>Game Description :</i>\n                </strong>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                  to make a type specimen book.</p>\n                <strong>\n                  <i>Game Rules :</i>\n                </strong>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\n                  to make a type specimen book.</p>\n                <br>\n                <button id=\"send\" class=\"waves-effect waves-light btn\" type=\"button\" (click)=\"isOn= true\" (click)=\"sendResponse()\">continue</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"isOn\">\n          <div class=\"col m12\">\n            <div class=\"card option\">\n              <div class=\"card-content\">\n                <strong>Question : {{questionId}}</strong>\n                <strong>{{questionStamp}} </strong>\n              </div>\n            </div>\n          </div>\n          <div class=\"col m12\">\n            <div class=\"card option\">\n              <a (click)='sendAnswerToAll(op1)'>\n                <div class=\"card-action\">\n                  <strong>1) : {{op1}}</strong>\n                </div>\n              </a>\n            </div>\n          </div>\n          <div class=\"col m12\">\n            <div class=\"card option\"> \n              <a (click)='sendAnswerToAll(op2)'>\n                <div class=\"card-action\">\n                  <strong>2) : {{op2}}</strong>\n                </div>\n              </a>\n            </div>\n          </div>\n          <div class=\"col m12\">\n            <div class=\"card option\">\n              <a (click)='sendAnswerToAll(op3)'>\n                <div class=\"card-action\">\n                  <strong>3) : {{op3}}</strong>\n                </div>\n              </a>\n            </div>\n          </div>\n          <div class=\"col m12\">\n            <div class=\"card option\">\n              <a (click)='sendAnswerToAll(op4)' >\n                <div class=\"card-action\">\n                  <strong>4) : {{op4}}</strong>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <h5 style=\"text-align: center\">Players Info :</h5>\n    <div class=\"col s12 m5\">\n      <hr>\n      <!-- <div class=\"row\" >\n        <div class=\"col m12\">\n          <div class=\"card\" style=\"background-color: white\">\n            <div class=\"card-content\">\n              <div class=\"col s4 l4\">\n                <img src=\"../../assets/img1.jpeg\" alt=\"\" class=\"circle responsive-img\">\n              </div>\n              <div>\n                <h6>User ID : {{user1}}</h6>\n                <h6>Score :{{score1}} </h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"row\" >\n        <div class=\"col m12\">\n          <div class=\"card\" style=\"background-color: white\">\n            <div class=\"card-content\">\n              <div class=\"col s4 l4\">\n                <img src=\"../../assets/img1.jpeg\" alt=\"\" class=\"circle responsive-img\">\n              </div>\n              <div>\n                <h6>User  ID : {{user2}}</h6>\n                <h6>Score : {{score2}} </h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n\n\n\n      <div class=\"row\" *ngFor=\"let user of matchingUsers\">\n        <div class=\"col m12\">\n          <div class=\"card\" style=\"background-color: white\">\n            <div class=\"card-content\">\n              <div class=\"col s4 l4\">\n                <img src=\"../../assets/img1.jpeg\" alt=\"\" class=\"circle responsive-img\">\n              </div>\n              <div>\n                <h6>User  ID : {{user.userId}}</h6>\n                <h6>Score : {{user.score}} </h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/multi-player-rules/multi-player-rules.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  max-width: 1340px;\n  width: 90%;\n  margin: 0px auto; }\n\ncircle {\n  border-radius: 50%; }\n\n.card .card-content {\n  padding: 10px; }\n\n.ff {\n  float: right; }\n\n.option:hover {\n  background-color: #cae2df; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/multi-player-rules/multi-player-rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiPlayerRulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MultiPlayerRulesComponent = /** @class */ (function () {
    function MultiPlayerRulesComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.msg = [];
        this.serverUrl = 'http://maverick.stackroute.in:9093/socket';
        //this.initializeWebSocketConnection()
    }
    MultiPlayerRulesComponent.prototype.ngOnInit = function () {
    };
    MultiPlayerRulesComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    // initializeWebSocketConnection(){
    //   this.ws = new SockJS(this.serverUrl);
    //   this.stompClient = Stomp.over(this.ws);
    //   let that = this;
    //   this.stompClient.connect({}, function(frame) {
    //   //  let data = JSON.stringify({
    //   //     message:'hello'
    //   //   });
    //   //   this.ws.send("/app/message", {}, data);
    //   //   console.log("Data  ja rha ========================>");
    //   let data = JSON.stringify({
    //     userName: "ajay",
    //     userId: 100,
    //     questionStamp: "Questionsssss",
    //     questionId: 200
    //   });
    //   this.ws.send("/app/message", {}, data);
    //   });
    // }
    MultiPlayerRulesComponent.prototype.sendResponse = function () {
        // var socket = new SockJS("http://localhost:8080/greeting1");
        // this.ws = Stomp.over(socket);
        console.log("Data Send ==========>");
        // let data = JSON.stringify({
        //   message:'hello'
        // });
        // this.ws.send("/app/message", {}, data);
    };
    MultiPlayerRulesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-multi-player-rules',
            template: __webpack_require__("../../../../../src/app/multi-player-rules/multi-player-rules.component.html"),
            styles: [__webpack_require__("../../../../../src/app/multi-player-rules/multi-player-rules.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], Object])
    ], MultiPlayerRulesComponent);
    return MultiPlayerRulesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multiplayer-popup/multiplayer-popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/multiplayer-popup/multiplayer-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title class=\"name\">\n      <h2>Category</h2> Time:</mat-card-title>\n  </mat-card-header>\n\n\n  <mat-card-content>\n    <h4>Description: {{gameType}}</h4>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\n      very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-content>\n    <h4>Rules:</h4>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\n      very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" style=\"align-content: center\">Play</button>\n\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/multiplayer-popup/multiplayer-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplayerPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MultiplayerPopupComponent = /** @class */ (function () {
    function MultiplayerPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.gameType = "Multiplayer";
    }
    MultiplayerPopupComponent.prototype.ngOnInit = function () {
    };
    MultiplayerPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multiplayer-popup',
            template: __webpack_require__("../../../../../src/app/multiplayer-popup/multiplayer-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/multiplayer-popup/multiplayer-popup.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], Object])
    ], MultiplayerPopupComponent);
    return MultiplayerPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/play/play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m6\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">Card Title</span>\n        <p>Start Game</p>\n      </div>\n      <div class=\"card-action\">\n        <a routerLink=\"/quiz\">Play</a>\n      </div>\n    </div>\n  </div>\n</div>\n          "

/***/ }),

/***/ "../../../../../src/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayComponent = /** @class */ (function () {
    function PlayComponent() {
    }
    PlayComponent.prototype.ngOnInit = function () {
    };
    PlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-play',
            template: __webpack_require__("../../../../../src/app/play/play.component.html"),
            styles: [__webpack_require__("../../../../../src/app/play/play.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayComponent);
    return PlayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question-category/question-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4 col-6 aa\" *ngFor=\"let category of categories\">\n      <a routerLink=\"/category-details\" [queryParams]=\"{categoryId:category.categoryId}\">\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <mat-card-title>{{category.categoryName | uppercase }} </mat-card-title>\n          </mat-card-header>\n          <img mat-card-image src={{category.categoryImage}} alt=\"{{ category.categoryImage }}\">\n        </mat-card>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/question-category/question-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  z-index: -1; }\n\n.gridCentered .static {\n  position: absolute;\n  visibility: hidden; }\n\n.gridCentered {\n  margin-left: auto;\n  margin-right: auto; }\n\n.example-card {\n  max-width: 198px;\n  max-height: 236px; }\n\nmat-card-title {\n  letter-spacing: 2px; }\n\n.center {\n  margin: 0 auto; }\n\n.mat-card-title {\n  font-weight: bolder; }\n\n.right {\n  -ms-flex-line-pack: right;\n      align-content: right; }\n\n.aa {\n  margin-top: 20px !important; }\n\nmat-card {\n  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22) !important;\n          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22) !important; }\n\n.container {\n  margin-top: 0;\n  margin-bottom: 0; }\n\nmat-card {\n  margin-bottom: 10px; }\n\n.header {\n  font-weight: bolder;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n\n.mat-card-image {\n  height: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-category/question-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_questionservice_service__ = __webpack_require__("../../../../../src/app/services/questionservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionCategoryComponent = /** @class */ (function () {
    function QuestionCategoryComponent(router, questionService) {
        this.router = router;
        this.questionService = questionService;
    }
    QuestionCategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    QuestionCategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.questionService
            .getCategories()
            .subscribe(function (data) { return (_this.categories = data); });
    };
    QuestionCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-question-category',
            template: __webpack_require__("../../../../../src/app/question-category/question-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question-category/question-category.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_questionservice_service__["a" /* QuestionService */]])
    ], QuestionCategoryComponent);
    return QuestionCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question-detail/question-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"alignment\" *ngFor=\"let question of questionGen\">\n  <strong>Question Stem:</strong> {{ question.questionStem }}\n  <br>\n  <hr>\n  <strong>Question Level:</strong> {{ question.questionLevel }}\n  <br>\n  <hr>\n  <strong>Correct Answer:</strong> {{ question.questionStem }}\n  <br>\n  <hr>\n  <strong>Options: </strong>\n  <ul>\n    <li>{{question.option1}}</li>\n    <li>{{question.option2}}</li>\n    <li>{{question.option3}}</li>\n    <li>{{question.option4}}</li>\n\n  </ul>\n  <div class=\"container\">\n    <button mat-raised-button color=\"accent\" (click)=\"goBack()\">Back</button>\n    <button mat-raised-button color=\"accent\" (click)=\"delete(question)\">Delete</button>\n  </div>\n</div> -->\n\n\n<div *ngFor=\" let question of questionGen\" class=\"example-container\">\n\n  <div class=\"alignment\">\n\n    <label>\n\n      <span>Question Id: </span>{{ question.questionId}}\n\n    </label>\n\n    <br>\n\n    <br>\n\n    <label>\n\n      <span>Question Stem:</span>\n\n      <mat-form-field>\n\n        <input matInput [(ngModel)]=\"question.questionStem\">\n\n      </mat-form-field>\n\n    </label>\n\n    <br>\n\n    <label>\n\n      <span>Question Level:</span>\n\n      <mat-form-field>\n\n        <input matInput [(ngModel)]=\"question.questionLevel\">\n\n      </mat-form-field>\n\n    </label>\n\n    <br>\n\n    <label>\n\n      <span>Option1:</span>\n\n      <mat-form-field>\n\n        <input matInput [(ngModel)]=\"question.option1\">\n\n      </mat-form-field>\n\n    </label>\n\n    <br>\n\n    <label>\n\n      <span>Option2:</span>\n\n      <mat-form-field>\n\n        <input matInput [(ngModel)]=\"question.option2\">\n\n      </mat-form-field>\n\n    </label>\n\n    <br>\n\n    <label>\n\n      <span>Option3:</span>\n\n      <mat-form-field>\n\n        <input matInput [(ngModel)]=\"question.option3\">\n\n      </mat-form-field>\n\n    </label>\n\n    <br>\n\n    <label>\n\n      <span>Option4:</span>\n\n      <mat-form-field>\n\n        <input matInput [(ngModel)]=\"question.option4\">\n\n      </mat-form-field>\n\n    </label>\n\n    <br>\n\n    <label>\n\n      <span>Correct Answer:</span>\n\n      <mat-form-field>\n\n        <input matInput [(ngModel)]=\"question.correctAnswer\">\n\n      </mat-form-field>\n\n    </label>\n\n    <br>\n\n    <div>\n\n      <button mat-raised-button color=\"primary\" (click)=\"goBack()\">Back</button>\n\n      <button mat-raised-button color=\"primary\" (click)=\"save(question)\" (click)=\"goBack()\">Save</button>\n\n      <button mat-raised-button color=\"accent\" (click)=\"delete(question)\">Delete</button>\n\n    </div>\n\n  </div>\n\n</div>\n<br>\n<br>\n<br>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <h3>\n    Post new question</h3>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-3 col-xs-4 col-6\">\n        <div class=\"justify-content-center\">\n          <table>\n            <tr>\n              <td>\n                Question Id\n              </td>\n              <td>\n                <mat-form-field class=\"example-form-field\">\n                  <input matInput type=\"number\" min=\"1\" placeholder=\"Question ID\" [(ngModel)]=\"questionId\" />\n                  <button mat-button *ngIf=\"questionId\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"questionId=''\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Question\n              </td>\n              <td>\n                <mat-form-field class=\"example-form-field\">\n                  <input matInput type=\"text\" placeholder=\"Question\" [(ngModel)]=\"questionStem\" />\n                  <button mat-button *ngIf=\"questionStem\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"questionStem=''\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Question Level\n              </td>\n              <td>\n                <mat-form-field class=\"example-form-field\">\n                  <input matInput type=\"text\" placeholder=\"Question Level\" [(ngModel)]=\"questionLevel\" />\n                  <button mat-button *ngIf=\"questionLevel\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"questionLevel=''\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Question Type\n              </td>\n              <td>\n                <mat-form-field class=\"example-form-field\">\n                  <input matInput type=\"text\" placeholder=\"Question Type\" [(ngModel)]=\"questionType\" />\n                  <button mat-button *ngIf=\"questionType\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"questionType=''\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Option 1\n              </td>\n              <td>\n                <mat-form-field class=\"example-form-field\">\n                  <input matInput type=\"text\" placeholder=\"Option1\" [(ngModel)]=\"option1\" />\n                  <button mat-button *ngIf=\"option1\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"option1=''\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Option 2\n              </td>\n              <td>\n                <mat-form-field class=\"example-form-field\">\n                  <input matInput type=\"text\" placeholder=\"Option2\" [(ngModel)]=\"option2\" />\n                  <button mat-button *ngIf=\"option2\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"option2=''\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Option 3\n              </td>\n              <td>\n                <mat-form-field class=\"example-form-field\">\n                  <input matInput type=\"text\" placeholder=\"Option3\" [(ngModel)]=\"option3\" />\n                  <button mat-button *ngIf=\"option3\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"option3=''\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Option 4\n              </td>\n              <td>\n                <mat-form-field class=\"example-form-field\">\n                  <input matInput type=\"text\" placeholder=\"Option4\" [(ngModel)]=\"option4\" />\n                  <button mat-button *ngIf=\"option4\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"option4=''\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Correct Answer \n              </td>\n              <td>\n                <mat-form-field class=\"example-form-field\">\n                  <input matInput type=\"text\" placeholder=\"Correct Answer\" [(ngModel)]=\"correctAnswer\" />\n                  <button mat-button *ngIf=\"correctAnswer\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"correctAnswer=''\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </mat-form-field>\n              </td>\n            </tr>\n          </table>\n          <button mat-raised-button color=\"accent\" (click)=\"addQuestion()\" (click)=\"goBack()\">Add</button>\n          <br>\n          <br>\n          <br>\n          <br>\n        </div>\n      </div>\n    </div>\n  </div> -->"

/***/ }),

/***/ "../../../../../src/app/question-detail/question-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alignment {\n  margin-left: 20px;\n  margin-top: 20px; }\n\nmat-form-field {\n  width: 270px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-detail/question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_questionservice_service__ = __webpack_require__("../../../../../src/app/services/questionservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionDetailComponent = /** @class */ (function () {
    function QuestionDetailComponent(route, location, router, questionService) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.questionService = questionService;
    }
    QuestionDetailComponent.prototype.ngOnInit = function () {
        this.getQuestion();
    };
    QuestionDetailComponent.prototype.getQuestion = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.topicName = params.topicName;
            _this.questionId = params.questionId;
        });
        this.questionService.getQuestionById(this.categoryId, this.topicName, this.questionId)
            .subscribe(function (questionGen) { return (_this.questionGen = questionGen); });
    };
    QuestionDetailComponent.prototype.delete = function (questionGen) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.topicName = params.topicName;
        });
        this.questionService.deleteQuestion(this.categoryId, this.topicName, this.questionId, questionGen)
            .subscribe(function () { return _this.goBack(); });
    };
    QuestionDetailComponent.prototype.save = function (questionGen) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.topicName = params.topicName;
        });
        this.questionService.updateQuestion(this.categoryId, this.topicName, this.questionId, questionGen)
            .subscribe(function () { return _this.goBack; });
    };
    QuestionDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    QuestionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-question-detail',
            template: __webpack_require__("../../../../../src/app/question-detail/question-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question-detail/question-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_questionservice_service__["a" /* QuestionService */]])
    ], QuestionDetailComponent);
    return QuestionDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question-dialog/question-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Post new question</h3>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 col-sm-3 col-xs-4 col-6\">\n      <div class=\"justify-content-center\">\n        <table>\n          <tr>\n            <td>\n              Question Id\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"number\" min=\"1\" placeholder=\"Question ID\" [(ngModel)]=\"questionId\" />\n                <button mat-button *ngIf=\"questionId\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"questionId=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Question\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Question\" [(ngModel)]=\"questionStem\" />\n                <button mat-button *ngIf=\"questionStem\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"questionStem=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Question Level\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Question Level\" [(ngModel)]=\"questionLevel\" />\n                <button mat-button *ngIf=\"questionLevel\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"questionLevel=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Question Type\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Question Type\" [(ngModel)]=\"questionType\" />\n                <button mat-button *ngIf=\"questionType\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"questionType=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Option 1\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Option1\" [(ngModel)]=\"option1\" />\n                <button mat-button *ngIf=\"option1\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"option1=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Option 2\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Option2\" [(ngModel)]=\"option2\" />\n                <button mat-button *ngIf=\"option2\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"option2=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Option 3\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Option3\" [(ngModel)]=\"option3\" />\n                <button mat-button *ngIf=\"option3\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"option3=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Option 4\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Option4\" [(ngModel)]=\"option4\" />\n                <button mat-button *ngIf=\"option4\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"option4=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Correct Answer \n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Correct Answer\" [(ngModel)]=\"correctAnswer\" />\n                <button mat-button *ngIf=\"correctAnswer\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"correctAnswer=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n        <button mat-raised-button color=\"accent\" (click)=\"addQuestion()\" (click)=\"goBack()\">Add</button>\n        <br>\n        <br>\n        <br>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/question-dialog/question-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container.ex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\ninput {\n  border-bottom: 0px solid #e03737 !important;\n  -webkit-box-shadow: 0 0px 0 0 #000 !important;\n          box-shadow: 0 0px 0 0 #000 !important;\n  color: #000; }\n\nmat-form-field {\n  width: 300px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-dialog/question-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_questionservice_service__ = __webpack_require__("../../../../../src/app/services/questionservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionDialogComponent = /** @class */ (function () {
    function QuestionDialogComponent(questionService, route, location) {
        this.questionService = questionService;
        this.route = route;
        this.location = location;
    }
    QuestionDialogComponent.prototype.ngOnInit = function () { };
    QuestionDialogComponent.prototype.addQuestion = function () {
        var _this = this;
        var question = {
            questions: [
                {
                    questionId: "" + this.questionId,
                    questionLevel: "" + this.questionLevel,
                    questionStem: this.questionStem,
                    questionType: this.questionType,
                    option1: this.option1,
                    option2: this.option2,
                    option3: this.option3,
                    option4: this.option4,
                    correctAnswer: this.correctAnswer
                }
            ]
        };
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.topicName = params.topicName;
        });
        this.questionService
            .addQuestion(this.categoryId, this.topicName, question)
            .subscribe(function (questionGen) {
            _this.questionGen = questionGen;
        });
    };
    QuestionDialogComponent.prototype.goBack = function () {
        this.location.back();
    };
    QuestionDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-question-dialog',
            template: __webpack_require__("../../../../../src/app/question-dialog/question-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question-dialog/question-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_questionservice_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], QuestionDialogComponent);
    return QuestionDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questions/questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\n    text-decoration: none;\n    color: rebeccapurple;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <h1 mat-subheader><strong style=\"font-size: 18px\">{{ topicName | uppercase }} Questions</strong></h1>\n  <mat-list-item *ngFor=\"let question of questionGen\">\n    <a routerLink=\"/question-detail\" [queryParams]=\" {questionId: question.questionId, topicName:topicName, categoryId:categoryId}\">\n      <h4 mat-line><span style=\"font-size: 30px\">- </span>{{ question.questionStem }}</h4>\n    </a>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n</mat-list>\n\n<div class=\"container\">\n  <button mat-raised-button color=\"accent\" (click)=\"goBack()\">Back</button>\n  <button mat-raised-button color=\"accent\" (click)=\"generate()\">Generate</button>\n</div>\n\n<div style=\"margin-right:40px;\">\n  <a routerLink=\"/add-question\" [queryParams]=\" {categoryId:categoryId, topicName: topicName}\">\n    <button style=\"float: right\" mat-fab color=\"primary\">\n      <span style=\"font-size: 30px\">+</span>\n    </button>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_questionservice_service__ = __webpack_require__("../../../../../src/app/services/questionservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(route, location, router, questionService) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.questionService = questionService;
        var snapshot = router.routerState.snapshot;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    QuestionsComponent.prototype.getQuestions = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.topicName = params.topicName;
        });
        this.questionService
            .getQuestions(this.categoryId, this.topicName)
            .subscribe(function (questionGen) { return (_this.questionGen = questionGen); });
    };
    QuestionsComponent.prototype.generate = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.topicName = params.topicName;
        });
        this.questionService.autoquestions(this.categoryId, this.topicName).subscribe(function (questionGen) { return (_this.questionGen = questionGen); });
    };
    QuestionsComponent.prototype.goBack = function () {
        this.location.back();
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__("../../../../../src/app/questions/questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_questionservice_service__["a" /* QuestionService */]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li:hover{\n    background-color: orange;\n    cursor: pointer;\n  }\n  \n\n  .aa{\n    -ms-flex-line-pack:center;\n        align-content:center;\nwidth:90% !important;\n  }\n  \n\n  #preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n  \n\n  #loader {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #9370DB;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n  \n\n  #loader:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #BA55D3;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n  \n\n  #loader:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #FF00FF;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.5s linear infinite;\n}\n  \n\n  @-webkit-keyframes spin {\n  0%   {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n  \n\n  @keyframes spin {\n  0%   {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n  }\n  100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }\n}\n  \n\n  .loaderText{\n\n  display: block;\n  position: fixed;\n  left: 47%;\n  top: 50%;\n  color: #9370DB;\n  font-weight:bolder;\n}\n  \n\n  .card-content{\n  padding-bottom:0 !important;\n}\n  \n\n  .row{\n  width:80%;\n  margin:auto;\n}\n  \n\n  strong{\nposition:absolute;\n  right:2%;\n  top:0;\n}\n  \n\n  .card-title{\nmargin-top:1%;\n}\n  \n\n  .q{\n  font-size:15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"preloader\">\n  <div id=\"loader\"></div>\n</div>\n<div class=\"loaderText\">\n  Loading...</div> -->\n\n<div *ngIf=\"quizService.qns == null \">\n  <div id=\"preloader\">\n    <div id=\"loader\"></div>\n  </div>\n  <div class=\"loaderText\">\n    Loading...</div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 aa\">\n      <div *ngIf=\"quizService.qns !=null && this.quizService.qnProgress !=quizService.qns[1].totalQuestions\">\n        <div>\n          <div class=\"progress\">\n            <div class=\"determinate\" [style.width.%]=\"(quizService.qnProgress+1)*((100)/quizService.qns[1].totalQuestions)\"></div>\n          </div>\n          <div class=\"card blue-grey darken-1\">\n            <div class=\"card-content white-text\">\n              <strong style=\"font-size: 50px\">{{quizService.displayTimeElapsed()}}</strong>\n              <br>\n              <span class=\"card-title\">{{quizService.qnProgress+1}}\n                <div class=\"q\">{{quizService.qns[quizService.qnProgress].question}}</div>\n              </span>\n\n            </div>\n            <div class=\"card-action\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor=\"let option of quizService.qns[quizService.qnProgress].options\">\n                  <li *ngIf=\"option != null\" class=\"collection-item\" (click)=\"Answer(quizService.qns[quizService.qnProgress].qId,option)\">\n                    {{option}}\n                  </li>\n                </ng-container>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div >\n        <h4>Loading please wait...</h4>\n        <div class=\"preloader-wrapper active\" style=\"margin-left: 610px\">\n          <div class=\"spinner-layer spinner-red-only\">\n            <div class=\"circle-clipper left\">\n              <div class=\"circle\"></div>\n            </div>\n            <div class=\"gap-patch\">\n              <div class=\"circle\"></div>\n            </div>\n            <div class=\"circle-clipper right\">\n              <div class=\"circle\"></div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n\n\n\n\n\n<!-- \n      <div *ngIf=\"quizService.qns !=0 && this.quizService.qnProgress != 10\">\n        <div >\n          <div class=\"progress\">\n            <div class=\"determinate\" [style.width.%]=\"(quizService.qnProgress+1)*10\"></div>\n          </div>\n          <div class=\"card blue-grey darken-1\">\n            <div class=\"card-content white-text\">\n              <strong style=\"margin-left: 670px; font-size: 50px\">{{quizService.displayTimeElapsed()}}</strong>\n              <br>\n              <span class=\"card-title\" style=\"margin-top: -50px;font-size: 20px\">{{quizService.qnProgress+1}}</span>\n              <span class=\"card-title\">{{quizService.qnProgress+1}}</span>\n              <p>{{quizService.qns[quizService.qnProgress].question}}</p>\n\n            </div>\n            <div class=\"card-action\">\n              <ul class=\"collection answer\">\n                <ng-container *ngFor=\"let option of quizService.qns[quizService.qnProgress].options\">\n                  <li *ngIf=\"option != null\" class=\"collection-item\" (click)=\"Answer(quizService.qns[quizService.qnProgress].qId,option)\">\n                    {{option}}\n                  </li>\n                </ng-container>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n -->"

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recommendation_service__ = __webpack_require__("../../../../../src/app/recommendation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = /** @class */ (function () {
    function QuizComponent(router, quizService, recommendationService) {
        this.router = router;
        this.quizService = quizService;
        this.recommendationService = recommendationService;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.fetchData();
        }, 2000);
    };
    QuizComponent.prototype.fetchData = function () {
        var _this = this;
        this.quizService.seconds = 15;
        this.quizService.qnProgress = 0;
        this.quizService.getQuestions().subscribe(function (data) {
            _this.quizService.qns = data;
            _this.startTimer();
        });
    };
    QuizComponent.prototype.startTimer = function () {
        var _this = this;
        this.quizService.timer = setInterval(function () {
            _this.quizService.seconds--;
            if (_this.quizService.seconds < 1) {
                _this.time();
            }
            if (_this.quizService.qnProgress == _this.quizService.qns[1].totalQuestions) {
                _this.Complete();
            }
            sessionStorage.setItem("seconds", _this.quizService.seconds.toString());
        }, 1000);
    };
    QuizComponent.prototype.Answer = function (qId, choice) {
        this.quizService.qns[this.quizService.qnProgress].answer = choice;
        sessionStorage.setItem("qns", JSON.stringify(this.quizService.qns));
        this.time();
        sessionStorage.setItem("qnProgress", this.quizService.qnProgress.toString());
        if (this.quizService.qnProgress == this.quizService.qns[1].totalQuestions) {
            this.Complete();
        }
    };
    QuizComponent.prototype.time = function () {
        if (this.quizService.qns[this.quizService.qnProgress].questionLevel == 1) {
            this.quizService.seconds = 10;
            this.quizService.qnProgress++;
        }
        else if (this.quizService.qns[this.quizService.qnProgress].questionLevel == 2) {
            this.quizService.seconds = 15;
            this.quizService.qnProgress++;
        }
        else {
            this.quizService.seconds = 20;
            this.quizService.qnProgress++;
        }
    };
    QuizComponent.prototype.Complete = function () {
        clearInterval(this.quizService.timer);
        this.router.navigate(["/result"]);
    };
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-quiz",
            template: __webpack_require__("../../../../../src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__["a" /* QuizService */],
            __WEBPACK_IMPORTED_MODULE_3__recommendation_service__["a" /* RecommendationService */]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recent-game/recent-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recent-game/recent-game.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-user></app-user> -->\n<!-- <app-update-profile></app-update-profile>\n<app-profile-game-card></app-profile-game-card> -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/recent-game/recent-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentGameComponent = /** @class */ (function () {
    function RecentGameComponent() {
    }
    RecentGameComponent.prototype.ngOnInit = function () {
    };
    RecentGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recent-game',
            template: __webpack_require__("../../../../../src/app/recent-game/recent-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recent-game/recent-game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecentGameComponent);
    return RecentGameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recommendation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecommendationService = /** @class */ (function () {
    function RecommendationService(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.API = "http://maverick.stackroute.in:9095/api/v1/recommendation/categories";
        this.userId = this.userService.getUserId();
    }
    RecommendationService.prototype.getAll = function () {
        return this.http.get(this.API + "/" + this.userId);
    };
    RecommendationService.prototype.getAll1 = function () {
        return this.http.get("http://maverick.stackroute.in:9095/api/v1/recommendation/category" +
            "/" +
            this.userId);
    };
    RecommendationService.prototype.get = function (id) {
        return this.http.get("http://maverick.stackroute.in:9095/api/v1/recommendation/categoryGames" + "/" + id);
    };
    RecommendationService.prototype.getAllGames = function () {
        return this.http.get("http://maverick.stackroute.in:9095/api/v1/recommendation/games/" + this.userId);
    };
    RecommendationService.prototype.sendGameIdToSingleplayerEngine = function (id, game_type, game_type_id, topic_id) {
        return this.http.get("http://maverick.stackroute.in:9092/api/v1/details" +
            "/" +
            game_type_id +
            "/" +
            this.userId +
            "/" +
            id);
    };
    RecommendationService.prototype.sendGameIdToMultiplayerEngine = function (id, game_type, game_type_id, topic_id) {
        return this.http.get("http://maverick.stackroute.in:9089/api/v1/matching" + "/" + this.userId + "/" + id);
    };
    RecommendationService.prototype.sendGameIdToAdaptiveEngine = function (id, topic_id, category_id, name) {
        return this.http.get("http://maverick.stackroute.in:9094/api/v1/adaptiveGameEngine/" +
            category_id +
            "/" +
            topic_id +
            "/" +
            id +
            "/" +
            this.userId +
            "/" +
            name);
    };
    RecommendationService.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    RecommendationService.prototype.getUserId = function () {
        return this.userId;
    };
    RecommendationService.prototype.sendCar = function (name) {
        this.router.navigate(["/game-by-categoryId", name, this.userId]);
    };
    RecommendationService.prototype.favCategory = function (category_id) {
        return this.http.get("http://maverick.stackroute.in:9095/api/v1/recommendation/" +
            category_id +
            "/" +
            this.userId);
    };
    RecommendationService.prototype.getCategoryUser = function (id) {
        return this.http.get("http://maverick.stackroute.in:9095/api/v1/recommendation/category" + "/" + id);
    };
    RecommendationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], RecommendationService);
    return RecommendationService;
}());



/***/ }),

/***/ "../../../../../src/app/reg-dialog/reg-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.example-card {\n  max-width: 300px;\n}\n\n.example-header-image {\n  background-size: cover;\n}\n\nmat-chip {\n  max-width: 70px;\n}\n\n#or1 {\n  text-align: center;\n  margin-top: -25px;\n  margin-bottom: 1%;\n}\n\n#or2 {\n  text-align: center;\n  margin-top: 4.5%;\n  margin-bottom: 3.5%;\n}\n\n.RegisterDialog {\n  min-height: 400px !important;\n  max-height: 400px !important;\n\n  background: red !important;\n}\n\nform {\n  width: 300px;\n  height: 400px;\n  margin: 0 auto;\n}\n\ninput {\n  border-bottom: 0px solid rgb(224, 55, 55) !important;\n  -webkit-box-shadow: 0 0px 0 0 #000 !important;\n          box-shadow: 0 0px 0 0 #000 !important;\n  color: #000;\n}\n\n.fullDiv {\n  margin-bottom: 10%;\n}\n\n.regButton {\n  float: right;\n}\n\n.mat-raised-button {\n  background: limegreen;\n}\n\ntd {\n  margin: 0 auto;\n}\n\n.mat-horizontal-content-container {\n  overflow: auto;\n  padding: 0px 25px 66px 14px;\n}\n\n.regForm {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-size: 14px;\n}\n\n.content {\n  font-size: 14px !important;\n}\n\nmat-error #mat-error-2 {\n  display: none;\n}\n\n.form-control {\n  border: none !important;\n}\n\n.message {\n  color: red;\n  font-size: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reg-dialog/reg-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-horizontal-stepper [linear]=\"  \" #stepper=\"matHorizontalStepper\">\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <div class=\"regForm\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>Basic info</ng-template>\n          <table mat-table class=\"table form-group\">\n            <tr>\n              <td title=\"User Name\">\n                User Name</td>\n              <td>\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [(ngModel)]=\"user.userName\"  (blur)=\"set(user.userName,user.email,user.password)\" placeholder=\"How they call you\" formControlName=\"firstCtrl\" required>\n                  </mat-form-field>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td title=\"E-mail\">\n                E-Mail</td>\n              <td>\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input class=\"form-control\" matInput aria-invalid=\"true\" (blur)=\"set()\" (keyup)=\"checkEmail(user.email)\" [(ngModel)]=\"user.email\"\n                      placeholder=\"We won't full your inbox\" formControlName=\"firstCtrl\" required>\n                      \n                  </mat-form-field>\n                  <div class=\"message\">{{msg1}}</div>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td title=\"Password\">\n                Password</td>\n              <td>\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input type=\"password\" class=\"form-control\" (blur)=\"set(user.userName,user.email,user.password)\" (keyup)=\"check(user.password)\" matInput [(ngModel)]=\"user.password\"\n                      placeholder=\"I promise to keep it secret\" formControlName=\"firstCtrl\" required>\n                    <div class=\"message\">{{msg}}</div>\n                  </mat-form-field>\n                </div>\n              </td>\n            </tr>\n          </table>\n        </form>\n      </div>\n      <button mat-raised-button class=\"regButton\" [disabled]=\"valid\" matStepperNext>Next</button>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <div class=\"regForm\">\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Personal Info</ng-template>\n          <table mat-table>\n            <tr>\n              <td title=\"City\">\n                City</td>\n              <td>\n                <mat-form-field>\n                  <input matInput [(ngModel)]=\"user.location\" placeholder=\"Where can we meet\" formControlName=\"secondCtrl\" required>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td title=\"'Gender'\">\n                Gender</td>\n              <td>\n                <mat-form-field>\n                  <mat-select [(value)]=\"user.gender\">\n                    <mat-option value=\"Male\">Male</mat-option>\n                    <mat-option value=\"Female\">Female</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <!-- <input matInput [(ngModel)]=\"user.gender\" placeholder=\"gender\" formControlName=\"secondCtrl\" required> -->\n                <!-- <mat-radio-group>\n                    <mat-radio-button [(ngModel)]=\"user.gender\" value=\"Male\">Male</mat-radio-button>\n                    <mat-radio-button [(ngModel)]=\"user.gender\" value=\"Female\">Female</mat-radio-button>\n                  </mat-radio-group>                   -->\n                <!-- <mat-form-field>\n                  <input type=\"radio\" [(ng-model)]=\"user.gender\" value=\"Male\">Male\n                  <input type=\"radio\" [(ng-model)]=\"user.gender\" value=\"Female\">Female\n\n                </mat-form-field> -->\n              </td>\n            </tr>\n            <tr>\n              <td title=\"'Age'\">\n                Date Of Birth</td>\n              <td>\n                <mat-form-field>\n                  <input matInput class=\"form-control\" [(ngModel)]=\"user.age\" placeholder=\"Happy Birthday in advance\" class=\"datepicker\" formControlName=\"secondCtrl\"\n                    [matDatepicker]=\"picker\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n                </mat-form-field>\n                <!-- <input matInput  [(ngModel)]=\"user.age\" placeholder=\"age\" formControlName=\"secondCtrl\" required> -->\n              </td>\n            </tr>\n            <tr>\n              <td title=\"'Mobile'\">\n                Mobile</td>\n              <td>\n                <mat-form-field>\n                  <input matInput min=\"7000000000\" [(ngModel)]=\"user.mobile\" placeholder=\"No calls without permission\" formControlName=\"secondCtrl\"\n                    required>\n                </mat-form-field>\n              </td>\n            </tr>\n          </table>\n        </form>\n      </div>\n      <button class=\"regButton\" mat-raised-button (click)=\"openSnackBar()\" (click)=\"regiseterUser(user)\" mat-dialog-close>Register</button>\n    </mat-step>\n  </mat-horizontal-stepper>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reg-dialog/reg-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_model__ = __webpack_require__("../../../../../src/app/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_model__ = __webpack_require__("../../../../../src/app/authentication.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var RegDialogComponent = /** @class */ (function () {
    // emailp: FormControl;
    function RegDialogComponent(_formBuilder, router, userService, _fb, _pass, snackBar) {
        this._formBuilder = _formBuilder;
        this.router = router;
        this.userService = userService;
        this._fb = _fb;
        this._pass = _pass;
        this.snackBar = snackBar;
        this.isLinear = false;
        this.msg = "";
        this.msg1 = "";
        this.valid = false;
        this.PASS_REGEX = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;
        //emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__model_user_model__["a" /* User */]();
        this.authenticationModel = new __WEBPACK_IMPORTED_MODULE_4__authentication_model__["a" /* AuthenticationModel */]();
        this.startDate = new Date(1990, 0, 1);
        this.array = ["Male", "Female"];
        this.version = __WEBPACK_IMPORTED_MODULE_5__angular_material__["K" /* VERSION */];
        this.testForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormGroup */]({});
        this.passForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormGroup */]({});
        this.errorTest = [
            { type: "pattern", msg: "Please enter a valid email address" },
            { type: "required", msg: "Email  <strong>required</strong>" }
        ];
        this.error = [
            { type: "pattern", msg: "Please enter a valid passqord " },
            { type: "required", msg: "password  <strong>required</strong>" }
        ];
        this.testForm = this._fb.group({
            email: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].pattern(EMAIL_REGEX)]]
        });
        this.passForm = this._pass.group({
            password: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].pattern(this.PASS_REGEX)]]
        });
        // this.firstFormGroup = this._formBuilder.group({
        //   'email': ['', [Validators.required, EmailValidator.emailValidator]],
        //   'password': ['', [Validators.required, ValidationService.passwordValidator]],
        //   'currency': ['', [Validators.required, ValidationService.currencyValidator]]
        // });
    }
    RegDialogComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].required]
            //   email:['', [Validators.required, Validators.pattern("[^@]*@[^@]*")]],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].required]
        });
    };
    RegDialogComponent.prototype.regiseterUser = function (user) {
        var _this = this;
        console.log("reg name=======" + this.user.userName);
        // this.user.user(name,password,email,location,mobile);
        // this.userService.registerprofileUser(user).subscribe(data => {});
        this.userService.registerUser(user).subscribe(function (data) {
            console.log("data val====" + data);
            // console.log("before byemail  api call=="+data.email);
            if (data != null) {
                if (data.email != null && data.password != null) {
                    _this.userService.getUserByEmail(data.email).subscribe(function (data1) {
                        console.log(data1);
                        console.log("data in reg--" +
                            data1.userId +
                            " " +
                            data1.email +
                            " " +
                            data1.location);
                        //  alert("user created successfully");
                        if (_this.user.email != null && _this.user.password != null) {
                            console.log("data aftre reg----" + data.userId);
                            _this.router.navigate(["categorySuggetions", data.userId]);
                        }
                    });
                }
            }
            else {
                alert("user is already exist");
                _this.router.navigate(["maverick"]);
            }
        });
    };
    RegDialogComponent.prototype.radioChange = function (event) {
        console.log(event.value);
    };
    RegDialogComponent.prototype.save = function (model, isValid) {
        // call API to save customer
        console.log(model, isValid);
    };
    RegDialogComponent.prototype.check = function (psw) {
        console.log(psw.match("/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/"));
        console.log(psw);
        this.msg = "";
        // this.msg="password should have";
        if (psw.length < 6) {
            this.msg = this.msg + " more than 6 letters required ";
        }
        var i;
        var c;
        var j = 0;
        var j1 = 0;
        var j2 = 0;
        for (i = 0; i < psw.length; i++) {
            c = psw.charAt(i);
            console.log("====" + c);
            if (!isNaN(c * 1)) {
                j++;
            }
            if (c == c.toUpperCase()) {
                j1++;
            }
            if (c == c.toLowerCase()) {
                j2++;
            }
        }
        if (j == 0) {
            this.msg = this.msg + " one number required ";
        }
        if (j1 == 0) {
            this.msg = this.msg + " one capital letter required ";
        }
        if (j2 == 0) {
            this.msg = this.msg + " one lower letter required ";
        }
        if (this.msg.length != 0) {
            this.valid = true;
        }
        else {
            this.valid = false;
        }
    };
    RegDialogComponent.prototype.checkEmail = function (psw) {
        console.log(psw.match("/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/"));
        console.log(psw);
        this.msg1 = "";
        // this.msg="password should have";
        var i;
        var c;
        var j1 = 0;
        var j2 = 0;
        var j3 = 0;
        for (i = 0; i < psw.length; i++) {
            c = psw.charAt(i);
            console.log("====" + c);
            if (psw.charAt(0) == "@" ||
                (psw.charAt(1) == "@" && psw.charAt(0) == ".") ||
                psw.charAt(1) == ".") {
                j3++;
            }
            else {
                if (c == "@") {
                    j2++;
                }
                if (c == ".") {
                    j1++;
                }
            }
        }
        if (j3 != 0) {
            this.msg1 = this.msg1 + " Enter valid email   ";
        }
        if (j3 == 0) {
            if (j2 == 0) {
                this.msg1 = this.msg1 + " @ Required  ";
            }
            if (j1 == 0) {
                this.msg1 = this.msg1 + " . Required  ";
            }
            if (this.msg1.length != 0) {
                this.valid = true;
            }
            else {
                this.valid = false;
            }
        }
        // else {
        //   this.msg1 = this.msg1 + " Enter valid email   ";
        // }
    };
    RegDialogComponent.prototype.set = function (data, data1, data2) {
        // this.msg1='';
        // this.msg='';
        if (data.length == 0 || data1.length == 0 || data2.length == 0) {
            this.valid = true;
        }
        if (data.length != 0 && data1.length != 0 && data2.length != 0 && this.msg.length != 0 && this.msg1.length != 0) {
            this.valid = false;
        }
    };
    RegDialogComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Topic Added", "", {
            duration: 2000
        });
    };
    RegDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-reg-dialog",
            template: __webpack_require__("../../../../../src/app/reg-dialog/reg-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reg-dialog/reg-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatSnackBar */]])
    ], RegDialogComponent);
    return RegDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-chip {\n    max-width: 100px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Register</mat-card-title>\n    </mat-card-header>\n    \n    <mat-form-field>\n      <input matInput   name=\"name\" placeholder=\"enter user name\" #name> \n    </mat-form-field>\n    <br>\n    <mat-form-field>\n      <input matInput  name=\"password\"  placeholder=\"enter password\" #password>\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n        <input matInput  name=\"email\"  placeholder=\"enter email\" #email>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n          <input matInput  name=\"location\"  placeholder=\"enter location\" #location>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n            <input matInput   name=\"mobile\" placeholder=\"enter mobile number\" #mobile>\n          </mat-form-field>\n    <mat-card-actions>\n      <mat-chip-list class=\"mat-chip-list-stacked\">\n        <mat-chip *ngFor=\"let chip of availableRegisterColors\" selected=\"true\" [color]=\"chip.color\" (click)=\"regiseterUser(name.value,password.value.email.value,location.value,mobile.value)\">\n          {{chip.name}}\n        </mat-chip>\n      </mat-chip-list>\n      <div>\n          <button class=\"btn btn-success\" (click)=\"regiseterUser(name.value,password.value.email.value,location.value,mobile.value)\" >  Submit  </button>\n      </div>\n    \n    </mat-card-actions>\n  </mat-card> -->\n\n<!-- <div class=\"example-container\">\n      <mat-form-field>\n          <input matInput   name=\"name\" placeholder=\"enter user name\" #name> \n      </mat-form-field>\n    \n      <mat-form-field>\n          <input matInput  name=\"password\"  placeholder=\"enter password\" #password>\n      </mat-form-field>\n    \n      <mat-form-field>\n        \n            <input matInput  name=\"email\"  placeholder=\"enter email\" #email>\n       \n      </mat-form-field>\n      <mat-form-field>\n          <input matInput  name=\"location\"  placeholder=\"enter location\" #location>\n      </mat-form-field>\n      <mat-form-field>\n          <input matInput   name=\"mobile\" placeholder=\"enter mobile number\" #mobile>\n      </mat-form-field>\n      <div>\n          <button class=\"btn btn-success\" (click)=\"regiseterUser(name.value,password.value.email.value,location.value,mobile.value)\" >  Submit  </button>\n      </div>\n    </div> -->\n\n    \n<div class=\"col-md-7 main\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"id\">User Id:</label>\n            <input [(ngModel)]=\"user.id\" placeholder=\"user name\" name=\"id\" class=\"form-control\" id=\"id\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"id\">User Name:</label>\n            <input [(ngModel)]=\"user.userName\" placeholder=\"user name\" name=\"name\" class=\"form-control\" id=\"name\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Password:</label>\n            <input [(ngModel)]=\"user.password\" placeholder=\"password\" name=\"password\" class=\"form-control\" id=\"password\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"image\">Email:</label>\n            <input [(ngModel)]=\"user.email\" placeholder=\"Enter email\" pattern=\"^@]+@[^@]+\\.[a-zA-Z]{2,6}\" name=\"email\" class=\"form-control\" id=\"eamil\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\"\n                title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\"\n                required>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"location\">Location:</label>\n            <input [(ngModel)]=\"user.location\" placeholder=\"Enter location\" name=\"location\" class=\"form-control\" id=\"location\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"location\">Mobile:</label>\n            <input [(ngModel)]=\"user.mobile\" placeholder=\"Enter mobile\" name=\"mobile\" class=\"form-control\" id=\"mobile\">\n        </div>\n        <div>\n            <button class=\"btn btn-success\" (click)=\"regiseterUser(user)\"> Register </button>\n        </div>\n        <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Log In</button>\n    </form>\n    <br/>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user_model__ = __webpack_require__("../../../../../src/app/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(dialog, router, userService) {
        this.dialog = dialog;
        this.router = router;
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user_model__["a" /* User */]();
        this.availableRegisterColors = [
            { name: 'Register', color: 'accent' },
        ];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.regiseterUser = function (user) {
        var _this = this;
        console.log("reg name=======" + this.user.userName);
        this.userService.registerUser(user)
            .subscribe(function (data) {
            alert("user created successfully");
            if (_this.user.email != null && _this.user.password != null) {
                _this.router.navigate(['/login']);
            }
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/result/result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n  zoom:25%;\n}\n.container{\n  /* padding: 0% 50% 0% 50%; */\n  /* background-color: yellowgreen; */\n\n}\n.card .card-image img{\n  /* top:15px;\n  left:15px; */\n  /* zoom:90%; */\n}\n.card{\n  /* background-color: deepskyblue; */\n}\n.halfway-fab{\nposition: absolute;\nright:0;\nbottom:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-lg-6 col-md-8 col-sm-12 col-xs-12 col-12 aa\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-9 col-12 aa\">\n                        <div class=\"card horizontal\">\n                            <div class=\"card-image\">\n                               <img src=\"https://png.pngtree.com/element_origin_min_pic/16/08/25/1757beb73c8dec3.jpg\">\n                            </div>\n                            <a class=\"btn-floating halfway-fab waves-effect waves-light red\" (click)=\"restart()\">\n                                <i class=\"material-icons\">replay</i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-3 col-12 aa\">\n                        <div class=\"card-stacked\">\n                            <div class=\"card-content\">\n                                <div *ngIf=\"percent != 0\">\n                                    <h3>{{percent}}%</h3>\n                                </div>\n                                <div *ngIf=\"percent == 0\">\n                                    <h3>0 %</h3>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<h3>Questions with correct answer</h3>\n<ng-container *ngFor=\"let qn of quizService.qns;let i=index\">\n    <div class=\"card blue-grey darken-1\">\n        <div class=\"card-content white-text\">\n            <span class=\"card-title\">{{i+1}}</span>\n            <p>{{qn.question}}</p>\n            <div *ngIf=\"qn.ImageName!=null\">\n                <img class=\"center\" [src]=\"quizService.rootUrl+'/Images/'+qn.ImageName\" style=\"width:350px;height:200px\">\n            </div>\n        </div>\n        <div class=\"card-action\">\n            <ul class=\"collection\">\n                <ng-container *ngFor=\"let option of qn.options\">\n                    <li *ngIf=\"option != null\" class=\"collection-item\">\n                        {{option}}\n                        <span class=\"badge\" *ngIf=\"qn.cAns==option\">\n                            <i class=\"material-icons green-text\">check_circle</i>\n                        </span>\n                        <span class=\"badge red-text\" *ngIf=\"qn.answer==option && qn.cAns!=option \">Incorrect</span>\n                    </li>\n                </ng-container>\n            </ul>\n        </div>\n    </div>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = /** @class */ (function () {
    function ResultComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
        this.percent = 0;
    }
    ResultComponent.prototype.ngOnInit = function () {
        if (parseInt(sessionStorage.getItem('qnProgress')) == this.quizService.qns[1].totalQuestions) {
            this.quizService.seconds = parseInt(sessionStorage.getItem('seconds'));
            this.quizService.qnProgress = parseInt(sessionStorage.getItem('qnProgress'));
            this.quizService.qns = JSON.parse(sessionStorage.getItem('qns'));
            this.asses();
            this.OnSubmit();
        }
    };
    ResultComponent.prototype.asses = function () {
        var _this = this;
        this.quizService.correctAnswerCount = 0;
        this.quizService.qns.forEach(function (e, i) {
            if (e.answer == e.cAns) {
                _this.quizService.correctAnswerCount++;
            }
        });
        this.score = ((this.quizService.correctAnswerCount) / this.quizService.qns[1].totalQuestions) * 100;
        this.percent = Math.round(this.score);
        console.log(this.percent);
    };
    ResultComponent.prototype.OnSubmit = function () {
        this.quizService.result(this.quizService.qns, this.percent).subscribe(function (data) {
            console.log("result sent");
        });
    };
    ResultComponent.prototype.restart = function () {
        sessionStorage.setItem('qnProgress', "0");
        sessionStorage.setItem('qns', "");
        sessionStorage.setItem('seconds', "0");
        this.router.navigate(['/play']);
    };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result',
            template: __webpack_require__("../../../../../src/app/result/result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__all_topics_in_category_all_topics_in_category_component__ = __webpack_require__("../../../../../src/app/all-topics-in-category/all-topics-in-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_detail_question_detail_component__ = __webpack_require__("../../../../../src/app/question-detail/question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__topic_dialog_topic_dialog_component__ = __webpack_require__("../../../../../src/app/topic-dialog/topic-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_dialog_question_dialog_component__ = __webpack_require__("../../../../../src/app/question-dialog/question-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_create_game_create_component__ = __webpack_require__("../../../../../src/app/game-create/game-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__question_category_question_category_component__ = __webpack_require__("../../../../../src/app/question-category/question-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__category_suggetions_category_suggetions_component__ = __webpack_require__("../../../../../src/app/category-suggetions/category-suggetions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__UserProfile_userupdateprofile_userupdateprofile_component__ = __webpack_require__("../../../../../src/app/UserProfile/userupdateprofile/userupdateprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__UserProfile_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/UserProfile/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__administration_administration_component__ = __webpack_require__("../../../../../src/app/administration/administration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__multi_player_game_multi_player_game_component__ = __webpack_require__("../../../../../src/app/multi-player-game/multi-player-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__multi_player_result_multi_player_result_component__ = __webpack_require__("../../../../../src/app/multi-player-result/multi-player-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__adaptive_result_adaptive_result_component__ = __webpack_require__("../../../../../src/app/adaptive-result/adaptive-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__adaptive_play_board_adaptive_play_board_component__ = __webpack_require__("../../../../../src/app/adaptive-play-board/adaptive-play-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__all_games_inside_topic_all_games_inside_topic_component__ = __webpack_require__("../../../../../src/app/all-games-inside-topic/all-games-inside-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__update_delete_game_update_delete_game_component__ = __webpack_require__("../../../../../src/app/update-delete-game/update-delete-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__UserProfile_reporting_single_single_component__ = __webpack_require__("../../../../../src/app/UserProfile/reporting/single/single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__UserProfile_reporting_multi_multi_component__ = __webpack_require__("../../../../../src/app/UserProfile/reporting/multi/multi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__UserProfile_reporting_adaptive_adaptive_component__ = __webpack_require__("../../../../../src/app/UserProfile/reporting/adaptive/adaptive.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var routes = [
    { path: "", pathMatch: "full", redirectTo: "maverick" },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: "question", component: __WEBPACK_IMPORTED_MODULE_15__question_category_question_category_component__["a" /* QuestionCategoryComponent */] },
    { path: "category-details", component: __WEBPACK_IMPORTED_MODULE_9__all_topics_in_category_all_topics_in_category_component__["a" /* AllTopicsInCategoryComponent */] },
    { path: "topic-details", component: __WEBPACK_IMPORTED_MODULE_10__questions_questions_component__["a" /* QuestionsComponent */] },
    { path: "profile", component: __WEBPACK_IMPORTED_MODULE_18__UserProfile_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: "category", component: __WEBPACK_IMPORTED_MODULE_3__content_content_component__["a" /* ContentComponent */] },
    { path: "create-game", component: __WEBPACK_IMPORTED_MODULE_14__game_create_game_create_component__["a" /* GameCreateComponent */] },
    { path: "home/:userId", component: __WEBPACK_IMPORTED_MODULE_3__content_content_component__["a" /* ContentComponent */] },
    { path: "content", component: __WEBPACK_IMPORTED_MODULE_3__content_content_component__["a" /* ContentComponent */] },
    { path: "maverick", component: __WEBPACK_IMPORTED_MODULE_4__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: "game-by-categoryId/:id/:userId", component: __WEBPACK_IMPORTED_MODULE_3__content_content_component__["a" /* ContentComponent */] },
    { path: "play", component: __WEBPACK_IMPORTED_MODULE_7__play_play_component__["a" /* PlayComponent */] },
    { path: "quiz", component: __WEBPACK_IMPORTED_MODULE_5__quiz_quiz_component__["a" /* QuizComponent */] },
    { path: "result", component: __WEBPACK_IMPORTED_MODULE_6__result_result_component__["a" /* ResultComponent */] },
    { path: "multiResult", component: __WEBPACK_IMPORTED_MODULE_22__multi_player_result_multi_player_result_component__["a" /* MultiPlayerResultComponent */] },
    { path: "categorySuggetions/:id", component: __WEBPACK_IMPORTED_MODULE_16__category_suggetions_category_suggetions_component__["a" /* CategorySuggetionsComponent */] },
    { path: "question-detail", component: __WEBPACK_IMPORTED_MODULE_11__question_detail_question_detail_component__["a" /* QuestionDetailComponent */] },
    { path: "add-topic", component: __WEBPACK_IMPORTED_MODULE_12__topic_dialog_topic_dialog_component__["a" /* TopicDialogComponent */] },
    { path: "add-question", component: __WEBPACK_IMPORTED_MODULE_13__question_dialog_question_dialog_component__["a" /* QuestionDialogComponent */] },
    { path: "form/:id", component: __WEBPACK_IMPORTED_MODULE_17__UserProfile_userupdateprofile_userupdateprofile_component__["a" /* UserupdateprofileComponent */] },
    { path: "admin", component: __WEBPACK_IMPORTED_MODULE_19__administration_administration_component__["a" /* AdministrationComponent */] },
    { path: "searchresult", component: __WEBPACK_IMPORTED_MODULE_20__search_result_search_result_component__["a" /* SearchResultComponent */] },
    { path: "multiquiz", component: __WEBPACK_IMPORTED_MODULE_21__multi_player_game_multi_player_game_component__["a" /* MultiPlayerGameComponent */] },
    { path: "adaptiveresult", component: __WEBPACK_IMPORTED_MODULE_23__adaptive_result_adaptive_result_component__["a" /* AdaptiveResultComponent */] },
    { path: "adaptivequiz", component: __WEBPACK_IMPORTED_MODULE_24__adaptive_play_board_adaptive_play_board_component__["a" /* AdaptivePlayBoardComponent */] },
    { path: "showgame", component: __WEBPACK_IMPORTED_MODULE_25__all_games_inside_topic_all_games_inside_topic_component__["a" /* AllGamesInsideTopicComponent */] },
    { path: "edit", component: __WEBPACK_IMPORTED_MODULE_26__update_delete_game_update_delete_game_component__["a" /* UpdateDeleteGameComponent */] },
    { path: "single/:userId", component: __WEBPACK_IMPORTED_MODULE_27__UserProfile_reporting_single_single_component__["a" /* SingleComponent */] },
    { path: "multi/:userId", component: __WEBPACK_IMPORTED_MODULE_28__UserProfile_reporting_multi_multi_component__["a" /* MultiComponent */] },
    { path: "adaptive/:userId", component: __WEBPACK_IMPORTED_MODULE_29__UserProfile_reporting_adaptive_adaptive_component__["a" /* AdaptiveComponent */] },
    { path: "**", redirectTo: "maverick" } // please keep this link at the last
    // { path: 'searchresult/:gameName', component: SearchResultComponent}
    // { path: 'search', component: SearchComponent },
    // { path: 'searchresult/:name', component: SearchresultComponent }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());

//   { path: '', pathMatch: 'full', redirectTo: 'maverick' },
//   { path: 'register', component: RegistrationComponent },
//   { path: 'question', component: QuestionCategoryComponent, canActivate: [AuthGuard] },
//   { path: 'category-details', component: AllTopicsInCategoryComponent, canActivate: [AuthGuard] },
//   { path: 'topic-details', component: QuestionsComponent, canActivate: [AuthGuard] },
//   { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
//   { path: 'category', component: ContentComponent, canActivate: [AuthGuard] },
//   { path: 'create-game', component: GameCreateComponent, canActivate: [AuthGuard]},
//   {
//     component: ContentComponent, canActivate: [AuthGuard],
//     path: 'home'
//   },
//   {
//     component: ContentComponent, canActivate: [AuthGuard],
//     path: 'content'
//   },
//   {
//     component: LandingPageComponent,
//     path: 'maverick'
//   },
//   {
//     path: 'game-by-categoryId/:id',
//     component: ContentComponent, canActivate: [AuthGuard]
//   },
//   { path: 'play', component: PlayComponent, canActivate: [AuthGuard] },
//   { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
//   { path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
//   { path: 'categorySuggetions', component: CategorySuggetionsComponent },
//   { path: 'question-detail', component: QuestionDetailComponent, canActivate: [AuthGuard] },
//   { path: 'add-topic', component: TopicDialogComponent, canActivate: [AuthGuard]},
//   { path: 'add-question', component: QuestionDialogComponent, canActivate: [AuthGuard]},
//   { path: 'form/:id', component: UserupdateprofileComponent,canActivate: [AuthGuard] },
//   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//   //{ path: 'login', component: LoginComponent },
//   { path: '**', redirectTo: 'maverick' }
// ];
// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forRoot(routes)
//   ],
//   declarations: [],
//   exports: [RouterModule]
// })
// export class RoutingModule { }


/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12\">\n      <h2>\n        {{result.gameType.gameTypeName}}\n      </h2>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <mat-card>\n      <div class=\"col-lg-5 col-md-6 col-sm-8 col-xs-12 col-12\">\n        <div *ngIf=\"result\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12\">\n              <img style=\"max-width: 300px;\" [src]='sanitizer.bypassSecurityTrustResourceUrl(result.gameImage)' frameborder=\"0\" mozallowfullscreen\n                allowfullscreen>\n            </div>\n          <div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12\">\n                <div class=\"row justify-content-center\">\n                  <b style=\"font-size:20px\">{{result.gameName}}</b>\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12\">\n                <div class=\"row justify-content-end\">\n                  <button (click)=\"routeToQuiz(result.gameId,result.gameType,result.gameType.gameTypeId,result.topicId,result.categoryId,result.gameName)\"\n                    mat-raised-button class=\"mat-primary\">Play Now</button>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </mat-card>\n    <div class=\"col-lg-5 col-md-6 col-sm-8 col-xs-12 col-12\">\n      <b>Game Description:</b> {{result.gameDescription}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n  max-width: 400px;\n  border-spacing: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_searchService__ = __webpack_require__("../../../../../src/app/services/searchService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommendation_service__ = __webpack_require__("../../../../../src/app/recommendation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(route, service, sanitizer, router, recommendationService) {
        this.route = route;
        this.service = service;
        this.sanitizer = sanitizer;
        this.router = router;
        this.recommendationService = recommendationService;
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        this.getGame();
    };
    // getGame() {
    //   this.service.searchResult(this.route.snapshot.paramMap.get("gameName"))
    //     .subscribe(result => (this.result = result));
    // }
    SearchResultComponent.prototype.getGame = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.gameName = params.gameName;
        });
        console.log(this.gameName);
        this.service
            .searchResult(this.gameName)
            .subscribe(function (result) { return (_this.result = result); });
    };
    SearchResultComponent.prototype.routeToQuiz = function (id, game_type, game_type_id, topic_id, category_id, name) {
        console.log(game_type_id + " " + id + " " + game_type + " " + topic_id + " " + category_id);
        if (game_type_id == 1) {
            this.recommendationService
                .sendGameIdToSingleplayerEngine(id, game_type, game_type_id, topic_id)
                .subscribe(function (data) {
                console.log("done");
            });
            this.router.navigate(["/quiz"]);
        }
        if (game_type_id == 2) {
            this.recommendationService
                .sendGameIdToMultiplayerEngine(id, game_type, game_type_id, topic_id)
                .subscribe(function (data) {
                console.log("done");
            });
            this.router.navigate(["/multiquiz"]);
        }
        if (game_type_id == 3) {
            this.recommendationService
                .sendGameIdToAdaptiveEngine(id, topic_id, category_id, name)
                .subscribe(function (data) {
                console.log("done");
            });
            this.router.navigate(["/adaptivequiz"]);
        }
    };
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "sn-search-result",
            template: __webpack_require__("../../../../../src/app/search-result/search-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-result/search-result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_searchService__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__recommendation_service__["a" /* RecommendationService */]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/adaptive.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptiveService; });
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


var AdaptiveService = /** @class */ (function () {
    function AdaptiveService(http) {
        this.http = http;
    }
    AdaptiveService.prototype.getResult = function () {
        console.log('http://maverick.stackroute.in:9094/api/v1/adaptiveGameEngine/adaptiveResult');
        return this.http.get('http://maverick.stackroute.in:9094/api/v1/adaptiveGameEngine/adaptiveResult');
    };
    AdaptiveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdaptiveService);
    return AdaptiveService;
}());



/***/ }),

/***/ "../../../../../src/app/services/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        "Content-type": "application/json"
    })
};
var GameService = /** @class */ (function () {
    function GameService(http, route) {
        this.http = http;
        this.route = route;
        this.url = "http://maverick.stackroute.in:9091/api/game";
        this.url1 = "http://maverick.stackroute.in:9091/api/game/category/mp";
        this.gameByIdUrl = "http://maverick.stackroute.in:9091/api/game/game1";
        this.showAllGamesUnderTopicUrl = "http://maverick.stackroute.in:9091/api/game/mp/category";
        this.deleteUrl = "http://maverick.stackroute.in:9091/api/game/deletegame";
        this.updateUrl = "http://maverick.stackroute.in:9091/api/game/updategame";
    }
    GameService.prototype.createGame = function (categoryId, topicName, game) {
        var getUrl = this.url + "/category/" + categoryId + "/" + topicName;
        return this.http.post(getUrl, game);
    };
    GameService.prototype.createMultiGame = function (categoryId, topicName, multigame) {
        var getUrl = this.url1 + "/" + categoryId + "/" + topicName;
        return this.http.post(getUrl, multigame);
    };
    GameService.prototype.getGames = function (categoryId, topicName) {
        return this.http.get(this.showAllGamesUnderTopicUrl + "/" + categoryId + "/" + topicName);
    };
    GameService.prototype.getGameById = function (gameId) {
        var getUrl1 = this.gameByIdUrl + "/" + gameId;
        return this.http.get(getUrl1);
    };
    GameService.prototype.deleteGame = function (gameId) {
        return this.http.delete(this.deleteUrl + "/" + gameId);
    };
    GameService.prototype.updateGame = function (gameId, game) {
        var getUrl = this.updateUrl + "/" + gameId;
        return this.http.put(getUrl, game);
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "../../../../../src/app/services/login-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUserService; });
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
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Content-type": "application/json" })
};
var LoginUserService = /** @class */ (function () {
    function LoginUserService(http) {
        this.http = http;
    }
    LoginUserService.prototype.registerUser = function (user) {
        return this.http.post("http://maverick.stackroute.in:9097/addUser", user);
    };
    LoginUserService.prototype.loginUser = function (authenticationModel) {
        return this.http.post("http://maverick.stackroute.in:9097/api/q1/auth", authenticationModel);
    };
    LoginUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginUserService);
    return LoginUserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/matching-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchingUserService; });
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


var MatchingUserService = /** @class */ (function () {
    function MatchingUserService(http) {
        this.http = http;
    }
    MatchingUserService.prototype.getMatchingUsers = function () {
        return this.http.get("http://maverick.stackroute.in:9089/maverick/users");
    };
    MatchingUserService.prototype.finalResult = function () {
        return this.http.get("http://maverick.stackroute.in:9089/maverick/getResults");
    };
    MatchingUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MatchingUserService);
    return MatchingUserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/multi-player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiPlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiPlayerService = /** @class */ (function () {
    function MultiPlayerService() {
    }
    MultiPlayerService.prototype.displayTimer = function () {
        return Math.floor(this.seconds);
    };
    MultiPlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MultiPlayerService);
    return MultiPlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/questionservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
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


var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        this.url = "http://maverick.stackroute.in:9090/api/v1/question-generator/category";
    }
    QuestionService.prototype.getCategories = function () {
        return this.http.get(this.url);
    };
    QuestionService.prototype.addTopic = function (categoryId, questionGen) {
        var getUrl = this.url + "/" + categoryId + "/topics";
        return this.http.put(getUrl, questionGen);
    };
    QuestionService.prototype.getTopics = function (categoryId) {
        var getUrl = this.url + "/" + categoryId + "/topics";
        return this.http.get(getUrl);
    };
    QuestionService.prototype.addQuestion = function (categoryId, topicName, questionGen) {
        var getUrl = this.url + "/" + categoryId + "/" + topicName + "/questions";
        return this.http.put(getUrl, questionGen);
    };
    QuestionService.prototype.getQuestions = function (categoryId, topicName) {
        var getUrl = this.url + "/" + categoryId + "/" + topicName + "/questions";
        return this.http.get(getUrl);
    };
    QuestionService.prototype.getQuestionById = function (categoryId, topicName, questionId) {
        var getUrl = this.url + "/" + categoryId + "/" + topicName + "/" + questionId;
        return this.http.get(getUrl);
    };
    QuestionService.prototype.updateQuestion = function (categoryId, topicName, questionId, questionGen) {
        var getUrl = this.url + "/" + categoryId + "/" + topicName + "/" + questionId;
        return this.http.put(getUrl, questionGen);
    };
    QuestionService.prototype.deleteQuestion = function (categoryId, topicName, questionId, questionGen) {
        var getUrl = this.url + "/" + categoryId + "/" + topicName + "/" + questionId;
        return this.http.delete(getUrl);
    };
    QuestionService.prototype.autoquestions = function (categoryId, topicName) {
        var getUrl = this.url + "/" + categoryId + "/" + topicName + "/auto-questions";
        return this.http.get(getUrl);
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
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


var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
        this.rootUrl = 'http://maverick.stackroute.in:9092';
    }
    QuizService.prototype.displayTimeElapsed = function () {
        return Math.floor(this.seconds % 60);
    };
    QuizService.prototype.getQuestions = function () {
        return this.http.get(this.rootUrl + '/api/v1/getdata');
    };
    QuizService.prototype.getAnswers = function () {
        var body = this.qns.map(function (x) { return x.qId; });
        return this.http.post(this.rootUrl + '/api/v1/answers', body);
    };
    QuizService.prototype.result = function (data, score) {
        return this.http.post(this.rootUrl + '/api/v1/result' + '/' + score, data);
    };
    QuizService.prototype.grafna = function () {
        return this.http.get("http://maverick.stackroute.in:3000");
    };
    QuizService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "../../../../../src/app/services/reporting-adaptive.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptiveService; });
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
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "content-type": "application.json" })
};
var AdaptiveService = /** @class */ (function () {
    function AdaptiveService(http) {
        this.http = http;
    }
    AdaptiveService.prototype.showAdaptiveGameReports = function () {
        return this.http.get("http://maverick.stackroute.in:9099/api/v1/Adapt");
    };
    AdaptiveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdaptiveService);
    return AdaptiveService;
}());



/***/ }),

/***/ "../../../../../src/app/services/reporting-multi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiService; });
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
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "content-type": "application.json" })
};
var MultiService = /** @class */ (function () {
    function MultiService(http) {
        this.http = http;
    }
    MultiService.prototype.showMultiGameReports = function () {
        return this.http.get("http://maverick.stackroute.in:9099/api/v1/Multi");
    };
    MultiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MultiService);
    return MultiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/reporting-single.service..ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleService; });
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
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "content-type": "application.json" })
};
var SingleService = /** @class */ (function () {
    function SingleService(http) {
        this.http = http;
    }
    SingleService.prototype.showGameReports = function () {
        return this.http.get("http://maverick.stackroute.in:9099/api/v1/getAllSingleReports");
    };
    SingleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SingleService);
    return SingleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/searchService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.searchurl = "http://maverick.stackroute.in:9096/maverick/search/";
        this.searchresulturl = "http://maverick.stackroute.in:9096/maverick/searchresult/";
    }
    SearchService.prototype.searchGames = function (term) {
        return this.http.get(this.searchurl + term);
    };
    SearchService.prototype.searchResult = function (term) {
        return this.http.get(this.searchresulturl + term);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user-profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileService; });
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


var UserProfileService = /** @class */ (function () {
    function UserProfileService(http) {
        this.http = http;
    }
    UserProfileService.prototype.getById = function (userEmail) {
        return this.http.get("http://maverick.stackroute.in:9098/api/v1/getUserByEmail/" + userEmail);
    };
    UserProfileService.prototype.updateUser = function (user) {
        this.mail = user.email;
        return this.http.put("http://maverick.stackroute.in:9098/api/v1/updateUser/" + this.mail, user);
    };
    UserProfileService.prototype.profilePercent = function (userEmail) {
        return this.http.get("http://maverick.stackroute.in:9098/api/v1/getProfilePercent/" + userEmail);
    };
    UserProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserProfileService);
    return UserProfileService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Content-type": "application/json" })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.registerUser = function (user) {
        console.log("user is here ", user);
        return this.http.post("http://maverick.stackroute.in:9097/addUser", user);
    };
    UserService.prototype.registerprofileUser = function (user) {
        return this.http.post("http://maverick.stackroute.in:9097/api/v1/addUser", user);
    };
    UserService.prototype.loginUser = function (authenticationModel) {
        return this.http.post("http://maverick.stackroute.in:9097/api/q1/auth", authenticationModel);
    };
    UserService.prototype.logoutUser = function (userEmail) {
        return this.http.post("http://maverick.stackroute.in:9097/api/q1/logout", userEmail);
    };
    UserService.prototype.getAllCategories = function () {
        return this.http.get("http://maverick.stackroute.in:9097/api/q1/getallCategories");
    };
    UserService.prototype.sendSelectedCategories = function (id, selectedCategoriesList) {
        return this.http.post("http://maverick.stackroute.in:9097/api/q1/addSelectedCategories/" + id, selectedCategoriesList);
    };
    UserService.prototype.getUserByEmail = function (email) {
        return this.http.get("http://maverick.stackroute.in:9097/api/q1/getUserByEmail/" + email);
    };
    UserService.prototype.grafna = function () {
        return this.http.get("http://maverick.stackroute.in:3000/?orgId=1");
    };
    UserService.prototype.produceUserId = function (id) {
        this.userId = id;
        return this.http.get("http://maverick.stackroute.in:9097/api/q1/produceUserId/" + id);
    };
    UserService.prototype.getUserId = function () {
        return this.userId;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navbar {\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),\n    0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  font-weight: 300;\n}\n\n.navbar-brand{\n  font-size: 20px;\n  font-weight:bolder;\n}\n\n.default-color {\n  background-color: #2bbbad !important;\n}\n\n.justify-content-between {\n  -ms-flex-pack: justify !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n}\n\n.navbar {\n  position: relative;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: justify;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n\narticle,\naside,\ndialog,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection {\n  display: block;\n}\n\n*,\n::after,\n::before {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nuser agent stylesheet article,\naside,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  font-family: Roboto, sans-serif;\n  font-weight: 300;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\nlink,\n.navbar.navbar-dark .navbar-nav .nav-item .nav-link {\n  color: #fff;\n  -webkit-transition: 0.35s;\n  transition: 0.35s;\n}\n\n.navbar .nav-item .nav-link {\n  display: block;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n}\n\na:not([href]):not([tabindex]),\na:not([href]):not([tabindex]):focus,\na:not([href]):not([tabindex]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n\na.waves-effect,\na.waves-light {\n  display: inline-block;\n}\n\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 1;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\na {\n  cursor: pointer;\n  text-decoration: none;\n  color: #007bff;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\n*,\n::after,\n::before {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nuser agent stylesheet li {\n  display: list-item;\n  text-align: -webkit-match-parent;\n}\n\n.navbar .nav-flex-icons {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.navbar-nav {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\nuser agent stylesheet ul,\nmenu,\ndir {\n  display: block;\n  list-style-type: disc;\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n}\n\n.mdb-skin-custom .navbar {\n  background-color: #243a51;\n  color: #fff;\n}\n\n.navbar {\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),\n    0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  font-weight: 300;\n  position: fixed;\n  z-index: 3;\n}\n\n.dropdown,\n.dropleft,\n.dropright,\n.dropup {\n  position: relative;\n}\n\n*,\n::after,\n::before {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nuser agent stylesheet li {\n  display: list-item;\n  text-align: -webkit-match-parent;\n}\n\n.navbar .nav-flex-icons {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.navbar-nav {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\nuser agent stylesheet ul,\nmenu,\ndir {\n  display: block;\n  list-style-type: disc;\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n}\n\nmat-select {\n  width: 17% !important;\n  opacity: 0 !important;\n  /* background: transparent !important;\n  color: transparent !important; */\n}\n\n::ng-deep .mat-option {\n  font-size: 10px;\n}\n\nmat-input-container\n  mat-form-field\n  ng-tns-c2-0\n  mat-primary\n  mat-form-field-type-mat-select\n  mat-form-field-can-float\n  mat-form-field-hide-placeholder {\n  height: 0px !important;\n  border-bottom: 0px !important;\n}\n\nmat-form-field {\n  width: 20px !important;\n}\n\n.fa-user {\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  z-index: 4 !important;\n}\n\nmat-input-underline mat-form-field-underline {\n  z-index: -1 !important;\n}\n\n/*FOOTER START///////////////////*/\n\n.footer {\n  background-color: #2bbbad !important;\n  color: #878c94;\n  width: 100%;\n  height: 5%;\n  position: fixed;\n  bottom: 0px;\n  color: blanchedalmond;\n  z-index: 4 !important;\n}\n\n.footer .payment li {\n  list-style-type: none;\n}\n\nsection {\n  padding-bottom: 5%;\n}\n\n@media screen and (max-width: 425px) {\n  form {\n    width: 70%;\n  }\n}\n\ninput{\n  color:white !important;\n  border-color: rgb(255, 255, 255) !important;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: white;\n}\n\n::-moz-placeholder { /* Firefox 19+ */\n  color: white;\n}\n\n:-ms-input-placeholder { /* IE 10+ */\n  color: white;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color: white;\n}\n\n.footer-content{\n  text-align: center; /* For Edge */ /* For Firefox prior 58.0 */\n  text-align-last: center;\n  color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <nav class=\"navbar navbar-dark default-color justify-content-between\">\n    <div>\n      <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['home/']\">Maverick</a>\n    </div>\n    <form class=\"form-inline my-1\">\n      <div class=\"md-form form-sm my-0\">\n        <input class=\"form-control form-control-sm mr-sm-2 mb-0\" type=\"text\" placeholder=\"&emsp;&emsp;Look for a game\" aria-label=\"Number\"\n          matInput [formControl]=\"searchTerm\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let s of searchResult\">\n            <a [routerLink]=\"['searchresult']\" [queryParams]=\" { gameName: s.gameName }\">\n              <div style=\"background-color:red\">{{ s.gameName }}</div>\n            </a>\n          </mat-option>\n        </mat-autocomplete>\n      </div>\n    </form>\n    <div class=\"logOut\">\n      <mat-form-field>\n        <i class=\"fa fa-user\" style=\"font-size: 40px;\"></i>\n        <mat-select placeholder=\"profileButton\">\n          <mat-option [routerLink]=\"['profile']\" >User profile </mat-option>\n          <!-- <mat-option> Settings </mat-option> -->\n          <mat-option [routerLink]=\"['maverick']\">Log Out</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </nav>\n</section>\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6 col-6\">\n        Copyright © Maverick 2018\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoginAuth_login_auth_service__ = __webpack_require__("../../../../../src/app/LoginAuth/login-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_user_service__ = __webpack_require__("../../../../../src/app/services/login-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_searchService__ = __webpack_require__("../../../../../src/app/services/searchService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(router, restService, loginAuthService, userService) {
        var _this = this;
        this.router = router;
        this.restService = restService;
        this.loginAuthService = loginAuthService;
        this.userService = userService;
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormControl */]();
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.searchTerm.valueChanges
            .subscribe(function (data) {
            _this.restService.searchGames(data).subscribe(function (data) {
                _this.searchResult = data;
                console.log(_this.searchResult);
                //sessionStorage.setItem('searchdata', this.searchResult);
            });
        });
    }
    SideNavComponent.prototype.onLogout = function () {
        // this.userService.loginUser()
        // .subscribe(data => {});
        console.log();
        console.log("inside logout ");
        this.loginAuthService.logout();
        // this.loggedIn.next(false);
        // this.router.navigate(['/land'])
        // this.authService.logout();
    };
    SideNavComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.loginAuthService.isLoggedIn;
        //authenticationModel: AuthenticationModel;
    };
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-side-nav",
            template: __webpack_require__("../../../../../src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-nav/side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_searchService__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_3__LoginAuth_login_auth_service__["a" /* LoginAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_login_user_service__["a" /* LoginUserService */]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topic-dialog/topic-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <h3>\n      Add Topic\n    </h3>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12\">\n        <table>\n          <tr>\n            <td>\n              Topic Id\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input min=\"1\" matInput type=\"number\" placeholder=\"Topic ID\" [(ngModel)]=\"topicId\" />\n                <button mat-button *ngIf=\"topicId\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"topicId=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Topic Name </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Topic Name\" [(ngModel)]=\"topicName\" />\n                <button mat-button *ngIf=\"topicName\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"topicName=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Topic Image\n            </td>\n            <td>\n              <mat-form-field class=\"example-form-field\">\n                <input matInput type=\"text\" placeholder=\"Topic Image\" [(ngModel)]=\"topicImage\" />\n                <button mat-button *ngIf=\"topicImage\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"topicImage=''\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n\n            </td>\n            <td>\n              <button mat-raised-button type=\"submit\" color=\"accent\" (click)=\"onSubmit()\" (click)=\"goBack()\">Add</button>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/topic-dialog/topic-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container.ex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\nh3 {\n  padding: 2%; }\n\n@media (min-width: 580px) and (max-width: 992px) {\n  h3 {\n    padding: 5%; } }\n\n@media (min-width: 490px) and (max-width: 580px) {\n  h3 {\n    padding: 8%; } }\n\ninput {\n  border-bottom: 0px solid #e03737 !important;\n  -webkit-box-shadow: 0 0px 0 0 #000 !important;\n          box-shadow: 0 0px 0 0 #000 !important;\n  color: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic-dialog/topic-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_questionservice_service__ = __webpack_require__("../../../../../src/app/services/questionservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopicDialogComponent = /** @class */ (function () {
    function TopicDialogComponent(router, route, questionService, location) {
        this.router = router;
        this.route = route;
        this.questionService = questionService;
        this.location = location;
    }
    TopicDialogComponent.prototype.ngOnInit = function () {
    };
    TopicDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        var question = {
            topic: [
                {
                    topicId: "" + this.topicId,
                    topicName: "" + this.topicName,
                    topicImage: this.topicImage
                }
            ]
        };
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = +params.categoryId;
        });
        this.questionService
            .addTopic(this.categoryId, question)
            .subscribe(function (questionGen) {
            _this.questionGen = questionGen;
        });
    };
    TopicDialogComponent.prototype.goBack = function () {
        this.location.back();
    };
    TopicDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-topic-dialog',
            template: __webpack_require__("../../../../../src/app/topic-dialog/topic-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topic-dialog/topic-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_questionservice_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], TopicDialogComponent);
    return TopicDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/update-delete-game/update-delete-game.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <div *ngFor=\" let g of game\" class=\"example-container\">\n    <div class=\"alignment\">\n      <label>\n        <span>Game Id: </span>{{ g.gameId}}\n      </label>\n      <br>\n      <br>\n      <div class=\"fields\">\n        <table>\n          <tr>\n            <td>\n              <mat-form-field>\n                <input matInput placeholder=\"Game Name\" required [(ngModel)]=\"gameName\">\n              </mat-form-field>\n            </td>\n          </tr>\n          <br>\n          <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\"> -->\n          <button mat-raised-button color=\"primary\" (click)=\"goBack()\">Back</button>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"save(g.gameId)\" (click)=\"goBack()\">Save</button> -->\n          <button mat-raised-button color=\"accent\" (click)=\"delete(g)\">Delete</button>\n        </table>\n      </div>\n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/update-delete-game/update-delete-game.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-delete-game/update-delete-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateDeleteGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateDeleteGameComponent = /** @class */ (function () {
    function UpdateDeleteGameComponent(route, location, router, gameService) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.gameService = gameService;
    }
    UpdateDeleteGameComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    UpdateDeleteGameComponent.prototype.getGames = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.gameId = params.gameId;
        });
        this.gameService.getGameById(this.gameId)
            .subscribe(function (game) { return (_this.game = game); });
    };
    UpdateDeleteGameComponent.prototype.delete = function (game) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.gameId = params.gameId;
        });
        this.gameService.deleteGame(this.gameId)
            .subscribe(function () { return _this.goBack(); });
    };
    UpdateDeleteGameComponent.prototype.save = function (game) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.topicName = params.topicName;
        });
        this.gameService.updateGame(this.gameId, game)
            .subscribe(function () { return _this.goBack; });
    };
    UpdateDeleteGameComponent.prototype.goBack = function () {
        this.location.back();
    };
    UpdateDeleteGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sn-update-delete-game',
            template: __webpack_require__("../../../../../src/app/update-delete-game/update-delete-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update-delete-game/update-delete-game.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_game_service__["a" /* GameService */]])
    ], UpdateDeleteGameComponent);
    return UpdateDeleteGameComponent;
}());



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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