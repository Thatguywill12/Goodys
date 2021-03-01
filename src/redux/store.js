import { createStore } from "redux";
import { combineReducers } from "redux";

const initialState = {
    myCart: [
        {
            id: 'abc_1',
            title: 'Runtz',
            price: 35.00,
            weight: '1/8 oz',
            countOf: 1,
        },
        {
            id: 'abc_2',
            title: 'Bluberry Muffin',
            price: 35.00,
            weight: '1/8 oz',
            countOf: 1,
        }
    ],
};

let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return {
                ...state,
                myCart: [
                    state.myCart.filter(product=>product.id!==action.selectedProduct.id),
                    action.selectedProduct
                ]
            };
        }
        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                myCart: [
                    state.myCart.filter(product=>product.id!==action.selectedProduct.id),
                ]
            };
        }
        case 'ADD_ONE': {
            state.myCart.filter(product=>product.id==action.selectedProduct.id).map((product)=>{
                product.countOf++;
            });
            return { ...state }
        }
        case 'MINUS_ONE': {
            state.myCart.filter(product=>product.id==action.selectedProduct.id).map((product)=>{
                if(product.countOf !=0) product.countOf--;
            })
            return { ...state }
        }
        default:
        return state;
    }
}
  
export default createStore(combineReducers({cartReducer, }));
