(function () {
    "use strict";

    angular.module("public")
        .controller("MyInfoController", MyInfoController);

    MyInfoController.$inject = ["UserInfoService"];

    function MyInfoController(UserInfoService) {
        const myInfoCtrl = this;
        myInfoCtrl.UserInformation = UserInfoService;
    }
})();
