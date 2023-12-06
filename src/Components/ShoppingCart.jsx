import React from 'react'
import "./ShoppingCart.css"
import Paypal from "../Paypal.js"
import CurvedLine from './ShoppingCartParts/CurvedLine';
import SmallerCurvedLine from './ShoppingCartParts/SmallerCurvedLine';
// const handleClick = () => setClick(!click);

const Shop = () => {
  return (
    <div className="triangle">
        <img
            className="image"
            src={process.env.PUBLIC_URL + "./images/flower.png"}
            alt="flower"
        />
        <img
            className="image-smaller1"
            src={process.env.PUBLIC_URL + "./images/smallflower.png"}
            alt="smallflower"
        />
        <img
            className="image-smaller2"
            src={process.env.PUBLIC_URL + "./images/smallflower.png"}
            alt="smallflower"
        />
        <img
            className="image-smaller3"
            src={process.env.PUBLIC_URL + "./images/smallflower.png"}
            alt="smallflower"
        />
        <SmallerCurvedLine />
        <CurvedLine />
        <div className="shopping-cart-wrap">
            <h className="shopping-heading"> MY CART</h>
            <div className="cart-wrap">
                <div className="cart-item-wrap">
                    <img 
                        className='cart-item-image' 
                        src={process.env.PUBLIC_URL + "./images/Standard.jpeg"}
                        alt='item image'
                    />
                    <div className="text-container">
                        <h className = "item-name">Standard Nipple Cover</h>
                        <h className = "item-quantity"> Size: A </h>
                        <h className = "item-quantity"> Color: #55321E </h>
                        <h className = "item-quantity"> Quantity: 1</h>
                        <h className = "item-price"> $15.00 </h>
                    </div>
                </div>
                <div className="cart-item-wrap">
                    <img 
                        className='cart-item-image' 
                        src={process.env.PUBLIC_URL + "./images/fragrant1.jpeg"}
                        alt='item image'
                    />
                    <div className="text-container">
                        <h className = "item-name">Fragrant Nipple Cover</h>
                        <h className = "item-quantity"> Size: B </h>
                        <h className = "item-quantity"> Color: #7D5645</h>
                        <h className = "item-quantity"> Quantity: 1</h>
                        <h className = "item-price"> $20.00 </h>
                    </div>
                </div>
                <div className="cart-item-wrap">
                    <img 
                        className='cart-item-image' 
                        src={process.env.PUBLIC_URL + "./images/fragrant2.jpeg"}
                        alt='item image'
                    />
                    <div className="text-container">
                        <h className = "item-name">Thickened Nipple Cover</h>
                        <h className = "item-quantity"> Size: C </h>
                        <h className = "item-quantity"> Color: #D4B594</h>
                        <h className = "item-quantity"> Quantity: 1</h>
                        <h className = "item-price"> $18.00</h>
                    </div>
                </div>
            </div>
            <div className="order-summary-container">
                <h className="order-summary-text"> ORDER SUMMARY</h>
                <h className="order-summary-text-small"> Shipping </h>
                <h className="order-summary-text-small"> Estimated Tax </h>
                <h className="order-summary-text-small"> Subtotal </h>
                <h className="order-money-text-grey">Taxes and shipping calculated at checkout</h>
                <div className="order-summary-money-container">
                    <h className="order-money-text">TBD</h>
                    <h className="order-money-text">TBD</h>
                    <h className="order-money-text">$53.00</h>
                </div>
                <Paypal className="paypal"></Paypal>
            </div>
        </div>
        <img
            className="curly-line"
            src={process.env.PUBLIC_URL + "./images/CurlyLine.png"}
            alt="curlyLine"
        />
    </div>
  )
}

export default Shop
