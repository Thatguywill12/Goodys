import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from "redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage: storage, // define which storage to use,
}

const myCart = localStorage.getItem('myCart');
console.log(myCart);
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

const persistedReducer = persistReducer(persistConfig, cartReducer) // create a persisted reducer

const middlewares = [thunk];
    middlewares.push(
      createLogger({
        level: 'info',
        collapsed: true,
        diff: true,
      }),
    );

// const store = createStore(
//     persistedReducer, {},
//     applyMiddleware(...middlewares) // add any middlewares here
// )

// const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

// export {store, persistor}

const store = createStore(cartReducer);

export { store }


