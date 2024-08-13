import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
//import { uiActions } from './store/ui';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';


let isInitial = true;


function App() {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.cart.show);
    const cart = useSelector((state) => state.cart);
    const notificacion = useSelector((state) => state.ui.notification);


    /*useEffect(() => {
        const sendCartData = async() => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            }));


            const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json', { 
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }


            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }));
        }


        if (isInitial) {
            isInitial = false;
            return;
        }


        sendCartData().catch(error => {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }));
        });
        
    }, [cart, dispatch]);*/


    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);


    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (!cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);


    return (
        <Fragment>
            { 
                notificacion && 
                <Notification 
                    status={notificacion.status} 
                    title={notificacion.title} 
                    message={notificacion.message} 
                /> 
            }
            <Layout>
                { showCart && <Cart /> }
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
