angular.module('todoMaterial.controllers', []).
controller('TodoController', ['$scope', function  ($scope) {
	
	$scope.todos = [];

	// Check if the browser has saved tasks, if so add these tasks
	// to the todos' list 
	if (localStorage.length > 0) {
		for (key in localStorage) {
			var value = localStorage.getItem(key);
			$scope.todos.push(value);
		}
	};

	$scope.addTodo = function  () {
		$scope.todos.push($scope.newTodo);
		localStorage.setItem($scope.newTodo, $scope.newTodo);

		$scope.newTodo = "";
	}

	$scope.removeTodo = function  (value) {
		$scope.todos.splice($scope.todos.indexOf(value, 1));
		localStorage.removeItem(value);
	}
}]);