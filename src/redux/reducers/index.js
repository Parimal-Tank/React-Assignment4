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
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      }
    case GET_NUMBER_CART:
        return{
            ...state
        }
    case ADD_CART:
    
            if(state.numberCart === 0){
                const cart = {
                    id: action.payload.id,
                    quantity:1,
                    title:action.payload.title,
                    price: action.payload.price
                }
                state.Carts.push(cart);
            }else{
                let check = false;

                state.Carts.map((item , key) => {
                     if(item.id === action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                     }
                });

                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        title: action.payload.title,
                        price: action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart: state.numberCart+1
            }
        
    case DELETE_CART:
        const quantitys = state.Carts[action.payload].quantity
        return{
            ...state,
            numberCart:state.numberCart - quantitys,
            Carts: state.Carts.filter(item => {
                 return item.id !== state.Carts[action.payload].id
            })
        }
    case INCREASE_QUANTITY :
        state.numberCart++;
        state.Carts[action.payload].quantity++;
        return{
            ...state
        }
    case DECREASE_QUANTITY :
        const quantity = state.Carts[action.payload].quantity;

        if(quantity > 1){
            state.numberCart--;
            state.Carts[action.payload].quantity--;
        }

        return{
            ...state
        }
    default:
        return state;
  }
};

const ShopApp = combineReducers({
    Product : Product
})

export default ShopApp;
