"use strict";

angular.module('firstModule', []);

"use strict";

function myDirectiveFn(myService) {

    function controllerFn($scope) {

        $scope.title = myService.getTitle();
    }

    return {
        controller: controllerFn,
        template: '<!DOCTYPE html><div class="alert alert-success"><div class="hallo-world">{{title}}</div></div>'
    };
}

angular
    .module("firstModule")
    .directive("myDirective", myDirectiveFn);

"use strict";

angular.module('secondModule', ['firstModule']);

'use strict';
function myServiceFn() {
    function getTitle() {
        return "Hallo World";
    }
    return {
        getTitle: getTitle
    };
}
angular
    .module('firstModule')
    .factory('myService', myServiceFn);

//# sourceMappingURL=../maps/firstModule/myService.js.map
