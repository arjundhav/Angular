"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var a = 20;
console.log(a);
var b = "hello world !!";
console.log(b);
var c = [1, 2, 'Arjun', true];
console.log(c);
function abc() {
    console.log('ABC');
}
abc();
function xyz(a, b) {
    return a * b;
}
var v = xyz(2, 3);
console.log(v);
function any(a, b) {
    return a + b;
}
var n = any(2, ' Arjun');
console.log(n);
var h = ''; //generic datatype
//var i!:string="";    undefined var
//Type Assertion : mechanism which tells the compiler about the type of a variabl
var j = 20;
var k = j;
console.log(k);
// Rest Operator
function addNum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log("Sum is " + sum);
}
addNum(1, 2, 3);
// Spread Operator
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(arr3);
// Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(code, name, salary) {
        this.empCode = code;
        this.empName = name;
        this.empSalary = salary;
    }
    Employee.prototype.getSalary = function () {
        document.write("".concat(this.empName) + ' with id ' + "".concat(this.empCode) + ' is a Employee with salary ' + "".concat(this.empSalary));
    };
    return Employee;
}());
var emp = new Employee(1, "Arjun", 10000);
console.log(emp.empCode);
console.log(emp.empName);
console.log(emp.empSalary);
console.log(emp.getSalary());
console.log(emp.empName);
// protected
var p1 = /** @class */ (function () {
    function p1() {
    }
    return p1;
}());
var p2 = /** @class */ (function () {
    function p2(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.id = id;
        this.name = name;
        this.age = age;
    }
    p2.prototype.getDetails = function () {
        document.write("<br> ".concat(this.name) + ' with ID ' + "".concat(this.id), ' is ' + "".concat(this.age) + ' years old');
    };
    return p2;
}());
var p = new p2(2, "AJ", 24);
console.log(p.id);
console.log(p.getDetails());
var demo_1 = require("./demo");
var ABC = /** @class */ (function () {
    function ABC(demo) {
        this.demo = demo;
        var d = new demo_1.Demo();
        console.log(d.details);
    }
    return ABC;
}());
