const newOrder: OrderItem = {
    customerName: "dev",
    items: [
        {product: {id: "1", name: "hello", price: 123}, quantity: 10},
        {product: {id: "1", name: "hello", price: 123}, quantity: 10},
    ],
    orderId: "123",
    note: "sakdaskdas",
};

const calculateOrderTotal = (order: OrderItem): number => {
    const {items} = order;
    let sum = 0;
    for(let i = 0; i < items.length; i++){
        sum += items[i].product.price * items[i].quantity;
    }
    return sum;
}