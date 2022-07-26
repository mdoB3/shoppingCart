/*
    productModule is responsible for obtaining a list of product items from server.
*/
import axios from 'axios'

const state = {
    productItems : []
};
// when app loads, make a call to the server to GET all products
const mutations = {
    // updates state with data(payload) provided
    UPDATE_PRODUCT_ITEMS (state, payload) {
        state.productItems = payload;
    }
};
const actions = {
    // action for GET a list of products from server
    getProductItems ({commit}) { // context obj allows commit to mutation in addition to accessing getters and state
        axios.get('/api/products').then((response) => {
            commit('UPDATE_PRODUCT_ITEMS', response.data)
        });
    }
};
const getters = {
    // gets the list in our state
    productItems: state => state.productItems
};
const productModule = {
    state,
    mutations,
    actions,
    getters
}
export default productModule;
