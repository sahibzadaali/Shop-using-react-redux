import React, { useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import "../App.css"
// import {useDispatch} from
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../Redux/actions/productActions"

function ProductDetail() {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch()
    console.log(product, "product")
    const fetchSingleProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        dispatch(selectedProducts(response.data))
    }
    useEffect(() => {
        if (productId && productId !== "") {
            fetchSingleProduct();
        }
    }, [productId])
    return (
        <>
        <div className="detail-ui">
            <h1>Product Detail</h1>
            <p>{"Title------------"}{product.title}</p>
            <p>{"Price---------------"}{product.price}</p>
            <img src={product.image} alt={product.title} />
            <p>{"Description----------"}{product.description}</p>
        </div>
        <div>
            <Link to="/">Back</Link>
        </div>
        </>
    )
}

export default ProductDetail
