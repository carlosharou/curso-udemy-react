import { useSelector, useDispatch } from 'react-redux';

import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart';


const CartButton = (props) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => Object.values(state.cart.items));
    const total = items.reduce((accumulator, item) => { return accumulator + item.quantity }, 0);


    const handleToggleCart = () => {
        dispatch(cartActions.toggleCart());
    }


    return (
        <button className={classes.button} onClick={handleToggleCart}>
            <span>My Cart</span>
            <span className={classes.badge}>{total}</span>
        </button>
    );
};

export default CartButton;
