'use strict';

function Takeaway() {
  this.dishes = [];

  this.createMenu = function () {
    this.dishes.push(new Item("Chicken Rice", 3.99));
    this.dishes.push(new Item("Chow Mein", 4.99));
    this.dishes.push(new Item("Chop Suey", 4.59));
    this.dishes.push(new Item("Sweet and Sour Pork", 6.99));
  };
  this.showMenu = function () {
    this.createMenu();
    for (var i = this.dishes.length - 1; i >= 0; i--) {
      console.log(this.dishes[i].name + " - £" + this.dishes[i].price)
    };
  };

};

function Item(name, price) {
  this.name = name;
  this.price = price;
};
