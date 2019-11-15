'use strict';

describe('takeaway', function () {
    var takeaway;

    beforeEach(function () {
        takeaway = new Takeaway();
        takeaway.showMenu();
    });

    it('has a menu', function () {
        expect(takeaway.dishes).toBeDefined();
        expect(takeaway.dishes[1].name).toEqual('Chow Mein');
    });

});