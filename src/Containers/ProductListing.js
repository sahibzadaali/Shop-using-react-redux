import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import ProductComponents from './ProductComponents';
import axios from "axios";
import { setProducts } from '../Redux/actions/productActions';

function ProductListing() {
     const products = useSelector(state => state);
     const dispatch = useDispatch();
     useEffect(()=>{
        fetchProducts();
     },[])

     const fetchProducts=async ()=>{
         const response=await axios.get("https://fakestoreapi.com/products"); 
            dispatch(setProducts(response.data))     
     }
    return (
        <div>
            <ProductComponents/>
        </div>
    )
}

export default ProductListing
