angular.module('todoMaterial.controllers', []).
controller('TodoController', ['$scope', function  ($scope) {
	
	$scope.todos = [];

	// Check if the browser has saved tasks, if so add these tasks
	// to the todos' list 
	if (localStorage.length > 0) {
		for (key in localStorage) {
			// Add only items with the prefix tm (todo-material)
			if (key.indexOf("tm") === 0) {
				var value = localStorage.getItem(key);
				$scope.todos.push(value);
			};
			
		}
	};

	$scope.addTodo = function  () {
		$scope.todos.push($scope.newTodo);
		localStorage.setItem("tm_" + $scope.newTodo, $scope.newTodo);

		$scope.newTodo = "";
	}

	$scope.removeTodo = function  (value) {
		$scope.todos.splice($scope.todos.indexOf(value, 1));
		localStorage.removeItem("tm_" + value);
	}
}]);