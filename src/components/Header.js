import React from "react";

import cart from '../assets/cart.png'

function Header() {
    return(
        <div className="food-header">
            <h1>ReactMeals</h1>
            <div className="cart">
                <img src={cart} alt="cart" className="cart-img"/>
                <h4>Your Cart</h4>
                <button className="cart-button">2</button>

            </div>

        </div>
    )
}


export default Header