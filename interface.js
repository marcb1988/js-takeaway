$(document).ready(function (e) {
    var takeaway = new Takeaway();
    takeaway.createMenu();
    for (var i = 0; i < takeaway.dishes.length; i++) {
        $(`#items${i}`).text(takeaway.dishes[i].name + " - £" + takeaway.dishes[i].price);
    }

});