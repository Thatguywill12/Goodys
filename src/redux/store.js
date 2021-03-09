import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage' 

const persistConfig = { 
    key: 'root',
    storage: storage,
}

const myCart = localStorage.getItem('myCart');

const initialState = {
    signedUser: {},
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
    
    if (Object.keys(state).length === 0 && state.constructor === Object) {
        state = initialState;
    }
    
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

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN': {
            return {
                ...state,
                signedUser: action.signedUser,
            };
        }
        case 'LOG_OUT': {
            return {
                ...state,
                signedUser: {},
            }
        }
        default:
            return state;
    }
}

const persistedReducer = persistReducer(persistConfig, combineReducers({cartReducer, userReducer})) 

const store = createStore(
    persistedReducer, {},
    applyMiddleware(thunk, logger) 
)

const  persistor = persistStore(store); 

export { store, persistor }

