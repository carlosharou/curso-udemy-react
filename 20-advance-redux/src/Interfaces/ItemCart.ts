export interface ItemCart {
    product: {
        id: number,
        title: string,
        description: string
    };
    quantity: number;
    price: number;
}