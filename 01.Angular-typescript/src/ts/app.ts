/// <reference path="../../typings/tsd.d.ts" />

import Greeter = require('./app2');

var greeter = new Greeter('World');
console.log(greeter.greet());



class TodoItem {
  text: string;
  done: boolean;
}

module MyApp {
  interface TodoScope extends ng.IScope {
    todoText: string;
  }

  class GreetingCtrl {
    constructor($scope: TodoScope) {
      $scope.todoText = 'こんにちは';
    }
  }

  angular.module("myApp", []).controller("GreetingCtrl", ["$scope", GreetingCtrl]);
}

