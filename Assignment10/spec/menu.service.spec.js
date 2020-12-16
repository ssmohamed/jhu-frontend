describe("Spec: MenuService", function () {

    let menuService;
    let $httpBackend;
    let apiPath;

    beforeEach(function () {
        module("common");
        inject(function ($injector) {
            menuService = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            apiPath = $injector.get("ApiPath");
        });
    });

    const validJSON = {"short_name": "A1", "name": "Won Ton Soup with Chicken"};

    it("should return Valid JSON", function () {
        const url = apiPath + '/menu_items/A1.json';
        $httpBackend.whenGET(url).respond(validJSON);
        menuService.getShortName('A1').then(function (response) {
            expect(response).toEqual(validJSON);
        });
        $httpBackend.flush();
    });

    it('should return null when error', function () {
        const url = apiPath + '/menu_items/INV.json';
        $httpBackend.expectGET(url).respond(404, 'Not Found');
        menuservice.getShortName('INV').then(function (response) {
            expect(response).toEqual(null);
        });
        $httpBackend.flush();
    });
});
