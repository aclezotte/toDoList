var app = angular.module('toDoList', []);

app.controller('listCtrl', function($scope){
    
    $scope.tasks = [];
    
    $scope.addTask = function(){
        $scope.tasks.push($scope.newTask);
        $scope.newTask = "";
    };
    
});
