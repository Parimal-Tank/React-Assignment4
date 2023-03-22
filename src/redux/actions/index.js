// import data from the product.json file
import product from  '../../product.json';

// For Count the Product Quantity
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

// Product and Cart
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

// Total Items In Cart
export const GET_NUMBER_CART = 'GET_NUMBER_CART';

// Get Data From the File
export const actFetchProductsRequest = () => {

   return (dispatch) => {
       dispatch(GetAllProduct(product))
   }
}

/* INCREASE_QUANTITY */
export const IncreaseQuantity = (payload) => {
    return {
        type : 'INCREASE_QUANTITY',
        payload
    }
}


/* DECREASE_QUANTITY */
export const DecreaseQuantity = (payload) => {
    return {
        type : 'DECREASE_QUANTITY',
        payload
    }
}

/* GET_ALL_PRODUCT   */
export const GetAllProduct = (payload) => {
    return{
        type: 'GET_ALL_PRODUCT',
        payload
    }
}


/* ADD_CART  */
export const AddCart = (payload) =>{
    return{
        type: 'ADD_CART',
        payload
    }
}

/* UPDATE_CART */
export const UpdateCart = (payload) => {
    return{
        type: 'UPDATE_CART',
        payload
    }
}

/* DELETE_CART */
export const DeleteCart = (payload) => {
    return{
        type: 'DELETE_CART',
        payload
    }
}

/* GET_NUMBER_CART */
export const Get_Number_Cart = () => {
     return{
        type: 'GET_NUMBER_CART'
     }
}