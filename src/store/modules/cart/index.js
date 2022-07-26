import axios from 'axios'

const state = {
    cartItems: [],
};
const mutations = {
    // update state with provided data
    UPDATE_CART_ITEMS (state, payload) {
        state.cartItems = payload;
    }
};
const actions = {
    // Actions for changes GET POST to the server
    //get Cart items
    getCartItems ({ commit }) {
        axios.get('/api/cart').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    },
    // Add CartItem
    addCartItem ({ commit }, cartItem) {
        axios.post('/api/cart', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    },
    // Delete CartItem
    removeCartItem ({ commit }, cartItem) {
        axios.post('/api/cart/delete', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    },
    // Delete all CartItems
    removeAllCartItems ({ commit }) {
        axios.post('/api/cart/delete/all').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    },
};
const getters = {
    // 3 Forms of computed data, we want to get from cartModule State
    cartItems: state => state.cartItems,
    // totalprice of all items in the cart
    // reduce -> creates sum of cartItem.quantity * cartItem price for every cartItem -> label: cartTotal
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc;
        }, 0).toFixed(2);
    },
    // total quantity of items in cart
    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc;
        }, 0);
    }


};
const cartModule = {
    state,
    mutations,
    actions,
    getters
}
export default cartModule;
