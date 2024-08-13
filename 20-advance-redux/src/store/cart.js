import { createSlice } from "@reduxjs/toolkit";

/*import { ItemCart } from '../Interfaces/ItemCart';


interface CartState {
    items: {
        [key: number]: ItemCart
    },
    show: boolean
}*/


const initialCart = {
    items: {},
    show: false,
    changed: false
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addItem(state, action) {
            const item = action.payload; 
            const id = item.product.id;
            state.items[id] = action.payload;
            state.changed = true;
        },
        removeItem(state, action) {
            const item = action.payload; 
            const id = item.product.id;
            delete state.items[id];
            state.changed = true;
        },
        addQuantity(state, action) {
            const id = action.payload;
            state.items[id].quantity++;
            state.changed = true;
        },
        lessQuantity(state, action) {
            const id = action.payload;
            state.items[id].quantity--;
            state.changed = true;

            if (state.items[id].quantity === 0) {
                delete state.items[id];
            }
        },
        toggleCart(state) {
            state.show = !state.show;
        },
        replaceCart(state, action) {
            state.items = action.payload.items;
        }
    }
});


export default cartSlice.reducer;
export const cartActions = cartSlice.actions;