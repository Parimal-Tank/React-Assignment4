import { createStore  ,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../reducers/index';

// Created Store and apply reducers 
const store = createStore(ShopApp,applyMiddleware(thunkMiddleware));
export default store;