'use strict';

app.directive('formDirective', function () {
    return {
        controller: function($scope,$http){
            $scope.submit = function(field){
                
                console.log(field.form_fields.length);
                var values = [];
                for(var i=0; i<field.form_fields.length; i++){
                    values.push(field.form_fields[i].field_value);
                }
                console.log(values);

                $http.post('/form', values).success(function(response){
                    console.log('Server Response'+response);
                })
                
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
