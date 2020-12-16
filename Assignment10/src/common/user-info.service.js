(function () {
    "use strict";

    angular.module('common')
        .service('UserInfoService', UserInfoService);

    function UserInfoService() {
        const userInfo = this;
        userInfo.firstName = "";
        userInfo.lastName = "";
        userInfo.email = "";
        userInfo.phoneNumber = "";
        userInfo.menuItem = "";
        userInfo.isFilled = false;
    }

})();
