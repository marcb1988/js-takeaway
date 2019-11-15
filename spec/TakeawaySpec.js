'use strict';

describe('takeaway', function () {
    var takeaway;

    beforeEach(function () {
        takeaway = new Takeaway();
    });
    it('shows the items', function () {
        expect(takeaway.menu).toInclude('Kebab');
    });
});