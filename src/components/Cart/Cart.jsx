import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart =props.cart
     let totall = 0; 
     let totallShipping = 0 ;
     let quantity = 0  
     for(const product of cart){
        if(product.quantity === 0){
           product.quantity = 1 
        }
        // product.quantity = product.quantity || 1
      totall= totall + product.price * product.quantity
      totallShipping =totallShipping + product.shipping
      quantity =quantity + product.quantity
      
    }
    const tax = totall*5/100
    const grandTotall = totall + totallShipping + tax

    return (
        <div className='cart'>
            <h2>summaryy</h2>
                <p>selected items :{quantity} </p>
                <p>Total price :${totall} </p>
                <p>Totall shipping :${totallShipping} </p>
                <p>Tax :${tax}</p>
                <h5>Grand totall :${grandTotall.toFixed(2)} </h5>
         
        </div>
    );
};

export default Cart;