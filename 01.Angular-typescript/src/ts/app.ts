import Greeter = require('./app2');

var greeter = new Greeter('World');
console.log(greeter.greet());

class TodoItem {
  text: string;
  done: boolean;
}

module MyApp {
  interface TodoScope extends ng.IScope {
    greetingText: string;
    todos       : Array<TodoItem>;
    todoText    : string;
  }

  class GreetingCtrl {
    constructor($scope: TodoScope) {
      $scope.greetingText = 'こんにちは';
    }
  }

  class TodoCtrl {
    constructor($scope: TodoScope) {
      $scope.todoText = 'tood!';
      todos = [
        {text: 'angular', done: true},
        {text: 'angular2', done: false}
      ]
    }
  }

  angular.module("myApp", []).controller("GreetingCtrl", ["$scope", GreetingCtrl]);
}


