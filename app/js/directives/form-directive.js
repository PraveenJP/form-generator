'use strict';

app.directive('formDirective', function () {
    return {
        controller: function($scope){
            $scope.submit = function(field){
                console.log(field);
                $scope.form.submitted = true;
            }
        },
        templateUrl: './views/directive-templates/form/form.html',
        restrict: 'E',
        scope: {
            form:'='
        }
    };
});
