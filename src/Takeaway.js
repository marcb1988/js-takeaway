'use strict';

function Takeaway() {
    this.dishes = {};
};

Takeaway.prototype.menu = function () {
    dishes["Kebab"] = 3.50;
    dishes["Pizza"] = 5.20;
    dishes["Chips"] = 1.50;
};

Takeaway.prototype.showMenu = function () {
    return this.dishes;
}

