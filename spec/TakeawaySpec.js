'use strict';

describe('takeaway', function () {
    var takeaway;

    beforeEach(function () {
        takeaway = new Takeaway();
    });

    it('has a menu', function () {
        expect(takeaway.menu).toBeDefined();
    });

    it('can display the menu', function () {
        expect(takeaway.showMenu).toContain('Kebab')
    })
});