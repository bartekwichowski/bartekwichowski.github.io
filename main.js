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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answer/answer.component.css":
/*!*********************************************!*\
  !*** ./src/app/answer/answer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/answer/answer.component.html":
/*!**********************************************!*\
  !*** ./src/app/answer/answer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group-item list-group-item-action\" (click)=\"clickedAnswer()\" [style.background] = \"isChoosen() ? '#fdf7f2' : 'white'\">\r\n  {{answer.value}}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/answer/answer.component.ts":
/*!********************************************!*\
  !*** ./src/app/answer/answer.component.ts ***!
  \********************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/answer */ "./src/model/answer.ts");
/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/question */ "./src/model/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerComponent = /** @class */ (function () {
    function AnswerComponent() {
        this.choosen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.style = 'white';
    }
    AnswerComponent.prototype.isChoosen = function () {
        return this.question.answers.includes(this.answer.id);
    };
    AnswerComponent.prototype.clickedAnswer = function () {
        this.choosen.emit(this.answer);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_answer__WEBPACK_IMPORTED_MODULE_1__["Answer"])
    ], AnswerComponent.prototype, "answer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_question__WEBPACK_IMPORTED_MODULE_2__["Question"])
    ], AnswerComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AnswerComponent.prototype, "choosen", void 0);
    AnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(/*! ./answer.component.html */ "./src/app/answer/answer.component.html"),
            styles: [__webpack_require__(/*! ./answer.component.css */ "./src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h3 class=\"display-6\">Quiz App</h3>\n      <p class=\"lead\">Cure your knowledge taking medical quiz!</p>\n    </div>\n  </div>\n  <app-question-list></app-question-list>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-list/question-list.component */ "./src/app/question-list/question-list.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answer/answer.component */ "./src/app/answer/answer.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_3__["QuestionListComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_4__["QuestionComponent"],
                _answer_answer_component__WEBPACK_IMPORTED_MODULE_5__["AnswerComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/question */ "./src/model/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getQuestions = function () {
        return [new _model_question__WEBPACK_IMPORTED_MODULE_1__["Question"](1, 'Upośledzona tolerancja glukozy oznacza:'), new _model_question__WEBPACK_IMPORTED_MODULE_1__["Question"](2, 'What is B?'), new _model_question__WEBPACK_IMPORTED_MODULE_1__["Question"](3, 'What is C?')];
    };
    DataService.prototype.getAnswers = function (questionId) {
        if (questionId === 1) {
            return [{ 'id': 1, 'value': 'This is caused by A' }, { 'id': 2, 'value': 'This is caused by B' },
                { 'id': 3, 'value': 'This is caused by C' }];
        }
        else if (questionId === 2) {
            return [{ 'id': 4, 'value': 'This is caused by D' }, { 'id': 5, 'value': 'This is caused by E' },
                { 'id': 6, 'value': 'This is caused by F' }];
        }
        return [{ 'id': 7, 'value': 'This is caused by G' }, { 'id': 8, 'value': 'This is caused by H' }];
    };
    DataService.prototype.countProperAnswers = function (questions) {
        var count = 0;
        for (var _i = 0, questions_1 = questions; _i < questions_1.length; _i++) {
            var question = questions_1[_i];
            for (var _a = 0, _b = question.answers; _a < _b.length; _a++) {
                var i = _b[_a];
                if (i % 2 === 0) {
                    count++;
                }
            }
        }
        return count;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/question-list/question-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/question-list/question-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/question-list/question-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/question-list/question-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\" *ngIf=\"isQuiz\">\r\n    <div class=\"card-header\">\r\n        Qustion #{{index + 1}}\r\n    </div>\r\n    <app-question [(question)]=\"questions[index]\"></app-question>\r\n    <div class=\"btn-group container\">\r\n        <button class=\"btn btn-light\" (click)=prev()>Prev</button>\r\n        <button class=\"btn btn-light\" (click)=next()>Next</button>\r\n        <button class=\"btn btn-light\" (click)=\"submit()\">Submit</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\" *ngIf=\"!isQuiz\">\r\n    <div class=\"card-header\">\r\n        Results\r\n    </div>\r\n    <app-result [(questions)]=\"questions\"></app-result>\r\n    <div class=\"btn-group container\">\r\n        <button class=\"btn btn-light\" (click)=\"reset()\">Reset</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/question-list/question-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-list/question-list.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/question */ "./src/model/question.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(dataService) {
        this.dataService = dataService;
        this.questions = [_model_question__WEBPACK_IMPORTED_MODULE_1__["Question"].emptyQuestion()];
        this.index = 0;
        this.isQuiz = true;
        this.properAnswers = 0;
    }
    QuestionListComponent.prototype.getIndex = function () {
        return this.index;
    };
    QuestionListComponent.prototype.ngOnInit = function () {
        this.questions = this.dataService.getQuestions();
        this.shuffle(this.questions);
    };
    QuestionListComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    QuestionListComponent.prototype.prev = function () {
        if (this.index === 0) {
            this.index = this.questions.length;
        }
        this.index--;
    };
    QuestionListComponent.prototype.next = function () {
        this.index++;
        this.index = this.index % this.questions.length;
    };
    QuestionListComponent.prototype.submit = function () {
        this.isQuiz = false;
        this.properAnswers = this.dataService.countProperAnswers(this.questions);
        console.log(JSON.stringify(this.questions));
    };
    QuestionListComponent.prototype.reset = function () {
        this.properAnswers = 0;
        this.isQuiz = true;
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            question.answers = [];
        }
    };
    QuestionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-list',
            template: __webpack_require__(/*! ./question-list.component.html */ "./src/app/question-list/question-list.component.html"),
            styles: [__webpack_require__(/*! ./question-list.component.css */ "./src/app/question-list/question-list.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/question/question.component.html":
/*!**************************************************!*\
  !*** ./src/app/question/question.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n  <h5 class=\"card-title\">{{question.question}}</h5>\r\n  <div class=\"list-group\" *ngFor=\"let answer of answers\">\r\n    <app-answer [answer]=\"answer\" [(question)]=\"question\" (choosen)=\"setAnswer($event)\"></app-answer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../model/question */ "./src/model/question.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(dataService) {
        this.dataService = dataService;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.answers = this.dataService.getAnswers(this.question.id);
    };
    QuestionComponent.prototype.ngOnChanges = function () {
        this.answers = this.dataService.getAnswers(this.question.id);
    };
    QuestionComponent.prototype.setAnswer = function (answer) {
        if (this.question.answers.includes(answer.id)) {
            var index = this.question.answers.indexOf(answer.id, 0);
            if (index > -1) {
                this.question.answers.splice(index, 1);
            }
        }
        else {
            this.question.answers.push(answer.id);
        }
        this.question.answers.forEach(function (item) {
            console.log(item);
        });
    };
    QuestionComponent.prototype.isChoosen = function (answer) {
        return this.question.answers.includes(answer.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], QuestionComponent.prototype, "question", void 0);
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group-item list-group-item-action\" >\r\n  <p>\r\n      There was {{properAnswers}} of 3 questions.\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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
    function ResultComponent(dataService) {
        this.dataService = dataService;
        this.properAnswers = 0;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.properAnswers = this.dataService.countProperAnswers(this.questions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ResultComponent.prototype, "questions", void 0);
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ResultComponent);
    return ResultComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/model/answer.ts":
/*!*****************************!*\
  !*** ./src/model/answer.ts ***!
  \*****************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());



/***/ }),

/***/ "./src/model/question.ts":
/*!*******************************!*\
  !*** ./src/model/question.ts ***!
  \*******************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(id, question) {
        this.answers = [];
        this.id = id;
        this.question = question;
    }
    Question.emptyQuestion = function () {
        return new Question(1, null);
    };
    return Question;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\503012088\IdeaProjects\quiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map