/*
    productModule is responsible for obtaining a list of product items from server.
    (*no server right now, just hardcoded responses)
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
        // const hardCoded_responseData = [
        //     {
        //         "id" : 1,
        //         "title" : "Hoodie",
        //         "description" : "Lightweight, breathable hoodie with Cat.",
        //         "price" : 199.99
        //     },
        //     {
        //         "id" : 2,
        //         "title" : "T Shirt Vue",
        //         "description" : "original, clothing t-shirt item.",
        //         "price" : 99.99
        //     },
        //     {
        //         "id" : 3,
        //         "title" : "Hat",
        //         "description" : "Lightweight, easy going  hoodie with cat - magic hat.",
        //         "price" : 59.99
        //     },
        //     {
        //         "id" : 4,
        //         "title" : "Shoes",
        //         "description" : "Leather, breathable shoes.",
        //         "price" : 299.99
        //     },
        // ]
        // commit('UPDATE_PRODUCT_ITEMS', hardCoded_responseData)
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
