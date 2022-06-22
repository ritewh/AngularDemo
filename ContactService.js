var app = angular.module('ContactBook');

app.service('contactService', ['$http', '$q', function ($http, $q) {
    var contact = {};
    contact.GetContacts = function () {
        var defer = $q.defer();
        $http.get('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts')
            .then(function (data) {
                defer.resolve(data);
            });
        return defer.promise;
    }

    return contact;

}]);