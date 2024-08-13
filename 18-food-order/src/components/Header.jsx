import { useContext } from 'react';
import Button from './UI/Button';
import logoImg from '/logo.jpg';
import CartContext from '../store/CartContext'; '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';


export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);


    const handleShowCart = () => {
        userProgressCtx.showCart();
    }


    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logoImg} alt='Logo' />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button
                    textOnly
                    onClick={handleShowCart}>
                        Cart ({totalCartItems})
                </Button>
            </nav>
        </header>
    )
}