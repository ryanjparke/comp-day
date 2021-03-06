import axios from 'axios';


const initialState = {
    user: {},
    cart: [],
    books: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const ADD_TO_CART = 'ADD_TO_CART';
const GET_BOOKS = 'GET_BOOKS';
const _FULFILLED = '_FULFILLED';


export function getUserInfo() {
    const userData = axios.get('')
        .then(res => {
            return res.data
        })
    return {
        type: 'GET_USER_INFO',
        payload: userData
    }


}

// export function getBooks() {

// }
export function addToCart(val) {
    return {
        type: ADD_TO_CART,
        payload: val
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + _FULFILLED:
            return Object.assign({}, state, { user: action.payload })
        case ADD_TO_CART:
        const newCart = state.cart.slice();
        newCart.push(action.payload);
        return Object.assign({}, state, {products: action.payload})

        default:

        return state;
    }
}