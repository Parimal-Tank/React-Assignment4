import { combineReducers } from "redux";
import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  DELETE_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions/index";

const initProduct = {
  numberCart: 0,
  Carts: [],
  products: [],
};

const Product = (state = initProduct, action) => {
  switch (action.type) {
    // Get All Products from the data
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case GET_NUMBER_CART:
      // return the total number of Items in Cart
      return {
        ...state,
      };
    case ADD_CART:
      // Check if the cart is empty, then add items in the cart
      if (state.numberCart === 0) {
        const cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          price: action.payload.price,
        };
        state.Carts.push(cart);
      } else {
        // IF cart have items then print the items
        let check = false;

        state.Carts.map((item, key) => {
          if (item.id === action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        // If the cart have items and we need to add more items
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            price: action.payload.price,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };

    case DELETE_CART:
      // Store Total Cart Quantity
      const quantitys = state.Carts[action.payload].quantity;

      return{
        ...state,
        numberCart:state.numberCart - quantitys,
        // If we delete any items from cart, so this filter return cart items accepts the deleted item.
        Carts: state.Carts.filter(item => {
             return item.id !== state.Carts[action.payload].id
        })
    }
    case INCREASE_QUANTITY:
      // To Increase the Quantity of Items
      state.numberCart++;
      state.Carts[action.payload].quantity++;
      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      const quantity = state.Carts[action.payload].quantity;
      // Check if the Cart have more than 0 Items
      if (quantity > 0) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      if (
        state.Carts[action.payload].quantity === undefined ||
        state.Carts[action.payload].quantity === 0
      ) {
        return {
          ...state,
          Carts: state.Carts.filter((item) => {
            return item.id !== state.Carts[action.payload].id;
          }),
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};

const ShopApp = combineReducers({
  Product: Product,
});

export default ShopApp;
