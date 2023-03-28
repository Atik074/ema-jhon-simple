import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products , setProducts] =useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProducts(data))
    }, [])
    return (
       
        <div className='shop-container'>
            <div className="products-container">
            {products.map(product => <Product
            key={product.id}
            img= {product.img}
            name= {product.name}
            price= {product.price}
            seller ={product.seller}
            rating ={product.ratings}
         ></Product> )}
            </div>
            <div className="cart-container">
                <h2>summary</h2>
            </div>

           
            
        </div>
    );
};

export default Shop;