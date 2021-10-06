import React from 'react';
import { useSelector } from "react-redux";
import "../App.css";
import { Link } from "react-router-dom"

function ProductComponents() {
    const products = useSelector((state) => state.allProducts.products);
    //   const{title}=products[3];
    return (
        <div className="img-style">
            {/* <p>{title}</p> */}
            {
                products.map((item) => (
                    <div key={item.id}>
                        <Link to={`/product/${item.id}`}>
                        <p>{"Title------------"}{item.title}</p>
                        <p>{"Price---------------"}{item.price}</p>
                        <img src={item.image} alt={item.title} />
                        <p>{"Description----------"}{item.description}</p>
                        </Link>
                        <hr />
                       
                    </div>
                ))
            }
        </div>
    )
}

export default ProductComponents
