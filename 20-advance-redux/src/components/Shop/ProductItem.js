import { useSelector, useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart';


const ProductItem = (props) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const { title, price, description, id } = props;


    const addItemHandler = () => {
        if (!items[id]) {
            const newItem = {
                product: {
                    id,
                    title,
                    description
                },
                quantity: 1,
                price
            };

            dispatch(cartActions.addItem(newItem));
        } else {
            dispatch(cartActions.addQuantity(id));
        }
    }


    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addItemHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
