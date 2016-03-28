angular.module("todoApp", [])
.controller("TodoListController", function($scope) {
  var todoList = this;
  todoList.todoItems = [
    { name: "Wake up", done: true },
    { name: "Go to work", done: false },
    { name: "Drink coffee", done: false },
    { name: "Hustle", done: false }
  ]

  todoList.addTodo = function() {
    todoList.todoItems.push(
      { name: todoList.todoText, done: false }
    )
    todoList.todoText = ""
  };

  todoList.remove = function() {
    var oldTodos = todoList.todoItems;
    todoList.todoItems = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todoItems.push(todo);
    })
    todoList.todoItems
  }

  todoList.remaining = function() {
    var notCompletedCount = 0;
    angular.forEach(todoList.todoItems, function(todo) {
      notCompletedCount += todo.done ? 0 : 1;
    })

    return notCompletedCount;
  }
});