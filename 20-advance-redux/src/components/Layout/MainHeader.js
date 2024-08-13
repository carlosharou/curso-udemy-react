import { useSelector } from 'react-redux';

import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';


const MainHeader = (props) => {
    const contItems = useSelector(state => Object.values(state.cart.items));


    return (
        <header className={classes.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        { (contItems.length > 0) && <CartButton /> }
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
