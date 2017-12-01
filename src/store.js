import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';

// let createStoreWithMiddleware = applyMiddleware(reduxPromiseMiddleware())(createStore)

// let store = createStoreWithMiddleware(reducer)

export default createStore( reducer, applyMiddleware( promiseMiddleware() ));