import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const items = useSelector(state => Object.values(state.cart.items));


    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {
                    items.map((item) => {
                        return (
                            <CartItem
                                key={item.product.id}
                                item={
                                    {
                                        id: item.product.id,
                                        title: item.product.title,
                                        quantity: item.quantity,
                                        price: item.price,
                                        total: item.price * item.quantity
                                    }
                                }
                            />
                        )
                    })
                }
            </ul>
        </Card>
    );
};

export default Cart;
