interface Product {
    readonly id: string;
    name: string;
    price: number;
}

interface OrderItem {
    product: Product;
    quantity: number;
}

interface Order {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
}

const newOrder: Order = {
    customerName: "dev",
    items: [
        {product: { id: "1", name: "áo sơ mi", price: 500000}, quantity: 1},
        {product: { id: "1", name: "quần tây", price: 400000}, quantity: 1},
    ],
    orderId: "#OD001",
    note: "Giao sau 18h",
};

const calculateOrderTotal = (order: Order): number => {
    const { items } = order;
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += items[i].product.price * items[i].quantity;
    }
    return sum;
}

const printOrder = (order: Order): void => {
    console.log("đon hàng: ", order.orderId);
    console.log("khách hàng: ", order.customerName);
    console.log("sản phẩm:");
    for (let i = 0; i < order.items.length; i++) {
        const item = order.items[i];
        const {name, price} = item.product;
        console.log(`${name} Price: ${price} Quantity: ${item.quantity}`);
    }
    console.log("tổng:", calculateOrderTotal(order));
    if (order.note) {
        console.log("ghi chú:", order.note);
    }
}

printOrder(newOrder); 
