import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import {selectedProductsReducers} from "./productReducer"

const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductsReducers,
})

export default reducers;