(function () {
    "use strict";

    angular.module("public")
        .controller("SignUpController", SignUpController);

    SignUpController.$inject = ["UserInfoService", "MenuService"];

    function SignUpController(UserInfoService, MenuService) {
        const ctrl = this;

        ctrl.UserInfo = UserInfoService;
        ctrl.firstName = "";
        ctrl.lastName = "";
        ctrl.email = "";
        ctrl.phoneNumber = "";
        ctrl.menuItem = "";
        ctrl.isFilled = false;
        ctrl.isInvalidShortName = false;

        ctrl.submit = function () {
            ctrl.getShortName();
            if (ctrl.isInvalidShortName === false) {
                ctrl.UserInfo.firstName = ctrl.firstName;
                ctrl.UserInfo.lastName = ctrl.lastName;
                ctrl.UserInfo.email = ctrl.email;
                ctrl.UserInfo.phoneNumber = ctrl.phoneNumber;
                ctrl.UserInfo.menuItem = ctrl.menuItem;
                ctrl.UserInfo.isFilled = true;
                ctrl.isFilled = true;
            } else {
                ctrl.UserInfo.isFilled = false;
            }
        };

        ctrl.getShortName = function () {
            const shortName = MenuService.getShortName(ctrl.menuItem);
            shortName.then(function () {
                ctrl.isInvalidShortName = false;
            }, function () {
                ctrl.isInvalidShortName = true;
            });
        };
    }
})();
