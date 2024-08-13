import { configureStore } from "@reduxjs/toolkit";

import CartReducer from './cart';
import UIReducer from './ui';


const store = configureStore({
    reducer: {
        cart: CartReducer,
        ui: UIReducer
    }
});


export default store;