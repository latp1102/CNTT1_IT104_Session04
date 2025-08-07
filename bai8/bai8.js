var newOrder = {
    customerName: "dev",
    items: [
        { product: { id: "1", name: "áo sơ mi", price: 500000 }, quantity: 1 },
        { product: { id: "1", name: "quần tây", price: 400000 }, quantity: 1 },
    ],
    orderId: "#OD001",
    note: "Giao sau 18h",
};
var calculateOrderTotal = function (order) {
    var items = order.items;
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
        sum += items[i].product.price * items[i].quantity;
    }
    return sum;
};
var printOrder = function (order) {
    console.log("đon hàng: ", order.orderId);
    console.log("khách hàng: ", order.customerName);
    console.log("sản phẩm:");
    for (var i = 0; i < order.items.length; i++) {
        var item = order.items[i];
        var _a = item.product, name_1 = _a.name, price = _a.price;
        console.log("".concat(name_1, " Price: ").concat(price, " Quantity: ").concat(item.quantity));
    }
    console.log("tổng:", calculateOrderTotal(order));
    if (order.note) {
        console.log("ghi chú:", order.note);
    }
};
printOrder(newOrder);
