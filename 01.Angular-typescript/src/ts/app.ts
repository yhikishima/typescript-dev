import Greeter = require('./app2');

var greeter = new Greeter('World');
console.log(greeter.greet());



class TodoItem {
  text: string;
  done: boolean;
}

interface TodoScope extends ng.IScope {
  todos: Array<TodoItem>;
  todoText: string;

  addTodo: Function;
  remaining: Function;
  archive: Function;
}

