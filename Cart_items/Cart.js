
import React from 'react'
import './cart.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item';
import Products from './Api';
import { useState } from 'react';




const Cart = () => {

  const [item,setItem] = useState(Products);
  return (
 <div>


    <header>

    <div className='continue-shopping'>

     <img src='./images/arrow.png' height={70} width={70} alt="arrow"/>
     <h2>continue shopping</h2>

    </div>


    <div className='cart-icon'>
    <img src='./images/cart.png' alt="cart"/>
    <p>5</p>
    </div>
    
    </header>

    <section className='main-cart-section'>

    <h1>shopping cart</h1>

    <p className='total-items'>you have<span className='total-items-count'> 
     7 </span>items in your card</p>

     <div className='cart-items'>

     <div className='cart-items-container'>

     <Scrollbars >

     {item.map((curItem)=>{
      return <Item key={curItem.id}{...curItem}/>
     })}

     


     </Scrollbars>
  
     </div>
     
     </div>

     <div className='card-total'>

     <h3>Cart Total: <span>2200rs</span></h3>
     <button>Checkout</button>
     
     </div>
    
    </section>
    </div>
  )
}

export default Cart