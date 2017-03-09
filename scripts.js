var app = angular.module("toDoList", []);

app.controller('listCtrl', function($scope){
    
    $scope.tasks = [
        {text:'task1', done:false},
        {text:'task2', done:false},
        {text:'task3', done:false}
    ];
    
    $scope.addTask = function(){
        $scope.tasks.push({text:$scope.newTask, done:false});
        $scope.newTask = "";
    };
    
    $scope.checkOff = function() {
        var oldTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldTasks, function(task) {
            if (!task.done){
                $scope.tasks.push(task)
            }
        });
    };
    
});