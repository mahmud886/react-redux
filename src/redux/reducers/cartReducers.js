import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
    cart: [],
    products: [
        { name: 'Lenevo', id: 1 },
        { name: 'Asus', id: 2 },
        { name: 'Dell', id: 3 },
        { name: 'MSI', id: 4 },
        { name: 'Walton', id: 5 },
    ],
};
const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = { ...state, newId };
            return { ...state, cart: newCart };

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter((item) => item !== id);
            return { ...state, cart: remainingCart };
        default:
            return state;
    }
};

export default cartReducers;
