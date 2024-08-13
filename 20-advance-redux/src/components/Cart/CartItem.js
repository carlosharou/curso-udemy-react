import { useSelector, useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart';


const CartItem = (props) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => Object.values(state.cart.items));
    const show = useSelector((state) => state.cart.show);
    const { title, quantity, total, price, id } = props.item;


    const addQuantityHandler = () => {
        dispatch(cartActions.addQuantity(id));
    }


    const lessQuantityHandler = () => {
        dispatch(cartActions.lessQuantity(id));

        if ((items.length === 1) && show) {
            dispatch(cartActions.toggleCart());
        }
    }


    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={lessQuantityHandler}>-</button>
                    <button onClick={addQuantityHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
