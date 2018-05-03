webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <app-employees></app-employees>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employees_employees_component__ = __webpack_require__("./src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__employees_employee_employee_component__ = __webpack_require__("./src/app/employees/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employees_employee_list_employee_list_component__ = __webpack_require__("./src/app/employees/employee-list/employee-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__employees_employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__employees_employee_list_employee_list_component__["a" /* EmployeeListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Employee List</h6><br>\n<table class=\"table table-sm table-hover\">\n  <tr *ngFor=\"let employee of employeeList\">\n    <td>{{employee.name}}</td>\n    <td>{{employee.position}}</td>\n    <td>${{employee.salary}}</td>\n    <td>\n      <a class=\"btn\" (click)=\"onEdit(employee)\">\n        <i class=\"fa fa-pencil-square-o\"></i>\n      </a>\n      <a class=\"btn\" (click)=\"onDelete(employee.$key)\">\n          <i class=\"fa fa-trash-o\"></i>\n        </a>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService, tostr) {
        this.employeeService = employeeService;
        this.tostr = tostr;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.employeeService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.employeeList.push(y);
            });
        });
    };
    EmployeeListComponent.prototype.onEdit = function (emp) {
        this.employeeService.selectedEmployee = Object.assign({}, emp); //Object.assign({},emp) makes it so that as you are editing an employees information in the form, their information inside the list component doesnt change realtime
    };
    EmployeeListComponent.prototype.onDelete = function (key) {
        if (confirm('Are you sure you wish to delete this record?') == true) {
            this.employeeService.deleteEmployee(key);
            this.tostr.warning("Deleted Successfully", "Employee Register");
        }
    };
    EmployeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employee-list',
            template: __webpack_require__("./src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__("./src/app/employees/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit(employeeForm)\">\n  <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.$key\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.name\" placeholder=\"Full Name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Position</label>\n    <input class=\"form-control\" name=\"position\" #position=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.position\" placeholder=\"Position\">\n  </div>\n  <div class=\"form-group\">\n    <label>Office</label>\n    <input class=\"form-control\" name=\"office\" #office=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.office\" placeholder=\"Location\">\n  </div>\n  <div class=\"form-group\">\n    <label>Salary</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-addon\">\n        <i class=\"fa fa-dollar\"></i>\n      </div>\n      <input class=\"form-control\" name=\"salary\" #salary=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.salary\" placeholder=\"Salary\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button class=\"btn btn-default\" type=\"Submit\" [disabled]=\"!employeeForm.valid\">\n      <i class=\"fa fa-floppy-o\"></i>\n      Submit</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"resetForm(employeeForm)\">\n      <i class=\"fa fa-repeat\"></i>\n      Reset</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, tostr) {
        this.employeeService = employeeService;
        this.tostr = tostr;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeComponent.prototype.onSubmit = function (employeeForm) {
        if (employeeForm.value.$key == null)
            this.employeeService.insertEmployee(employeeForm.value);
        else
            this.employeeService.updateEmployee(employeeForm.value);
        this.resetForm(employeeForm);
        this.tostr.success("Successfully Submitted Employee", "Employee Register");
    };
    EmployeeComponent.prototype.resetForm = function (employeeForm) {
        if (employeeForm != null)
            employeeForm.reset();
        this.employeeService.selectedEmployee = {
            $key: null,
            name: '',
            position: '',
            office: '',
            salary: 0
        };
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employee',
            template: __webpack_require__("./src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__("./src/app/employees/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h2 class=\"jumbotron\">Employee Register</h2>\n</div>\n<div class=\"row\">\n\n  <div class=\"col-md-7\">\n    <app-employee></app-employee>\n  </div>\n\n  <div class=\"col-md-5\">\n    <app-employee-list></app-employee-list>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employees',
            template: __webpack_require__("./src/app/employees/employees.component.html"),
            styles: [__webpack_require__("./src/app/employees/employees.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employees/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/employees/shared/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_model__ = __webpack_require__("./src/app/employees/shared/employee.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    function EmployeeService(firebase) {
        this.firebase = firebase;
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_2__employee_model__["a" /* Employee */]();
    }
    EmployeeService.prototype.getData = function () {
        this.employeeList = this.firebase.list('employees');
        return this.employeeList;
    };
    EmployeeService.prototype.insertEmployee = function (employee) {
        this.employeeList.push({
            name: employee.name,
            position: employee.position,
            office: employee.office,
            salary: employee.salary
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        this.employeeList.update(employee.$key, {
            name: employee.name,
            position: employee.position,
            office: employee.office,
            salary: employee.salary
        });
    };
    EmployeeService.prototype.deleteEmployee = function ($key) {
        this.employeeList.remove($key);
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDX92ELB1SWnmXYHBUU_rIaSEzIl7jrEVw",
        authDomain: "employeeregister-a0bc8.firebaseapp.com",
        databaseURL: "https://employeeregister-a0bc8.firebaseio.com",
        projectId: "employeeregister-a0bc8",
        storageBucket: "employeeregister-a0bc8.appspot.com",
        messagingSenderId: "508837718361"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map