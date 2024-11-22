 import { ActionTypes } from "../contAnts/action-type";

 export const setProduct = (products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
 }

 export const selectedProduct = (product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
 }

 export const removeSelectedProduct = (product)=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
 }

 