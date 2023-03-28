import React, { useEffect, useState } from 'react';
import Product from '../Product/Product.jsx';
import "./Shop.css"

const Shop = () => {
    const [products , setProducts] =useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProducts(data))
    }, [])

    const [cart, setCart] =useState([])

    const handlerAddtoCart =(product)=>{
        const newCart =[...cart , product]
        setCart(newCart)
       }



    return (
       
        <div className='shop-container'>
            <div className="products-container">
            {products.map(product=><Product
            handlerAddtoCart= {handlerAddtoCart}
            key={product.id}
            product ={product}
            img= {product.img}
            name= {product.name}
            price= {product.price}
            seller ={product.seller}
            rating ={product.ratings}
         ></Product> )
     
         
         
         }
            </div>
            <div className="cart-container">
            <h2>summaryy</h2>
                <p>selected items :{cart.length} </p>
            </div>

           
            
        </div>
    );
};

export default Shop;