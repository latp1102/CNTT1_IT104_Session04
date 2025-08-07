var getFinalPrice = function (product) {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
};
var printProductInfo = function (product) {
    var finalPrice = getFinalPrice(product);
    console.log("T\u00EAn: ".concat(product.name));
    console.log("Gi\u00E1 g\u1ED1c: ".concat(product.price.toLocaleString(), " VND"));
    console.log("Gi\u00E1 sau gi\u1EA3m: ".concat(finalPrice.toLocaleString(), " VND"));
    console.log("Danh m\u1EE5c: ".concat(product.category.name));
};
var listProduct = [
    {
        id: "1",
        name: "Áo sơ mi",
        price: 300000,
        discount: 20,
        category: {
            id: "c1",
            name: "Thời trang nam",
        }
    },
    {
        id: "2",
        name: "Quần",
        price: 500000,
        category: {
            id: "c1",
            name: "Thời trang nam",
        }
    },
    {
        id: "3",
        name: "Váy",
        price: 800000,
        discount: 10,
        category: {
            id: "c2",
            name: "Thời trang nữ",
        }
    }
];
for (var i = 0; i < listProduct.length; i++) {
    printProductInfo(listProduct[i]);
}
