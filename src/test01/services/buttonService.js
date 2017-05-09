export function buttonService() {
    'use strict';

    angular
        .module('app')
        .service('buttonService', ButtonService);

    ButtonService.$inject = ['$http'];

    function ButtonService($http) {

        var _self = this;

        _self.getData = getData;

        function getData() {
            return $http.get('test01/data.json');
        }

        return this;
    }
};