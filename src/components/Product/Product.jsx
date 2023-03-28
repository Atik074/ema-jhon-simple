import React from 'react';
import './Product.css'

const Product = (props) => {
    return (
        <div className='product'>
           <img src={props.img} alt='' />
           <div className='product-description'> 
            <h4>{props.name}</h4>
            <p className='price'>price : ${props.price}</p>
            <p className='seller'>manufacture : {props.seller}</p>
            <p className='rating'>Rating : {props.rating}</p>
            </div>  
                     
             <button className='cart-btn'>Add to Cart</button>
        </div>
       
    );
};

export default Product;