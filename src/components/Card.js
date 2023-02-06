import React, { useState } from "react";

function Card({ id, mealName, price, ingredient, increaseAmount, addAmountToMeal}) {
  const [number, setNumber] = useState(0);

  function handleChange(event) {
    setNumber(parseInt(event.target.value));
  }

  function handleClick(event) {
    addAmountToMeal(event.target.id , number)
    increaseAmount(number);

  }

  
  return (
    <div className="meal-card">
      <div className="meal-info">
        <h3>{mealName}</h3>
        <p>{ingredient}</p>
        <h5>${price}</h5>
      </div>
      <div className="price-info">
        <form>
          <label for="fname">Amount:</label>
          <input type="number" id="meal-amount" onChange={handleChange} />
        </form>
        <button id={id} className="add-button" onClick={handleClick}>
          +Add
        </button>
      </div>
    </div>
  );
}

export default Card;
