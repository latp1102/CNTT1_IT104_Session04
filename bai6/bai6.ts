interface Product {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
}

const getFinalPrice = (product: Product): number => {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
};

const printProductInfo = (product: Product): void => {
    const finalPrice = getFinalPrice(product);
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
    console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
    console.log(`Danh mục: ${product.category.name}`);
};

const listProduct: Product[] = [
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

for(let i = 0; i < listProduct.length; i++){
    printProductInfo(listProduct[i]);
}