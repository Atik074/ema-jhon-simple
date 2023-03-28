import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
console.log(props)
 const handlerAddtoCart  = props.handlerAddtoCart

   
  
    return (
        <div className='product'>
           <img src={props.img} alt='' />
           <div className='product-description'> 
            <h4>{props.name}</h4>
            <p className='price'>price : ${props.price}</p>
            <p className='seller'>manufacture : {props.seller}</p>
            <p className='rating'>Rating : {props.rating}</p>
            </div>  
                     
             <button className='cart-btn' onClick={()=> handlerAddtoCart(props.product)}>Add to Cart  
              <FontAwesomeIcon icon={faShoppingCart} />
             </button>
        </div>
       
    );
};

export default Product;