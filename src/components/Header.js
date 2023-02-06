import React from "react";

import cart from "../assets/cart.png";

function Header({ amount, resetAmount, changeCartCondition}) {
  return (
    <div className="food-header">
      <h1>ReactMeals</h1>
      <div className="cart" onClick={changeCartCondition}>
        <img src={cart} alt="cart" className="cart-img" />
        <h4>Your Cart</h4>
        <div className="cart-button">{amount}</div>
        
      </div>
    </div>
  );
}

export default Header;