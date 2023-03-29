import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb.js';
import Cart from '../Cart/Cart.jsx';
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

// get data from local storage
    useEffect(()=>{
        const storedCart = getShoppingCart()
        const savedCart = []
        // step 01:get id
        for(const id in storedCart){
            //02:get product by using id
          const addedProduct = products.find(product => product.id === id)
          
        // 03: get quantity
       if(addedProduct){
          const quantity =storedCart[id]
          addedProduct.quantity = quantity
        //  add the added product to the savedcart
          savedCart.push(addedProduct)
       }
       console.log(addedProduct)       
         }

    setCart(savedCart)
    },[products])
    

const handlerAddtoCart =(product)=>{
        // const newCart =[...cart , product]
        let newCart =[]
      const exists = cart.find(pd => pd.id === product.id)
      if(!exists){
        product.quantity = 1
        newCart =[...cart , product]

      }
      else{
        exists.quantity = exists.quantity + 1
        const remaining = cart.filter(pd => pd.id !== product.id)
        newCart = [...remaining , exists]
      }

        

        setCart(newCart)
        addToDb(product.id)

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
            <Cart cart={cart}></Cart>
            </div>

           
            
        </div>
    );
};

export default Shop;