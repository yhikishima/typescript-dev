(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../typings/tsd.d.ts" />
var Greeter = require('./app2');
var greeter = new Greeter('World');
console.log(greeter.greet());
var TodoItem = (function () {
    function TodoItem() {
    }
    return TodoItem;
})();
var MyApp;
(function (MyApp) {
    var GreetingCtrl = (function () {
        function GreetingCtrl($scope) {
            $scope.todoText = 'こんにちは';
        }
        return GreetingCtrl;
    })();
    angular.module("myApp", []).controller("GreetingCtrl", ["$scope", GreetingCtrl]);
})(MyApp || (MyApp = {}));

},{"./app2":2}],2:[function(require,module,exports){
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return 'Hello ' + this.greeting + '!';
    };
    return Greeter;
})();
module.exports = Greeter;

},{}]},{},[1]);
