import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Card from "./components/Card";
import "./index.css";
import { DUMMY_MEALS } from "./datas/dummyMeal";
import Cart from "./components/Cart";

function App() {
  const [amount, setAmount] = useState(localStorage.getItem("amount"));
  const [mealInfo, setMealInfo] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function changeCartCondition() {
    setIsCartOpen(!isCartOpen);
  }

  function increaseAmount(num) {
    setAmount((prevAmount) => (prevAmount = parseInt(prevAmount + num)));
  }

  useEffect(() => {
    localStorage.setItem("amount", amount);
  }, [amount]);


  useEffect(() => {
    setMealInfo(
      DUMMY_MEALS.map((meal) => {
        return {
          id: meal.id,
          amount: 0,
        };
      })
    );
  }, []);

  useEffect(() => {
    console.log(mealInfo);
  }, [mealInfo]);

  function resetAmount() {
    setAmount(0);
  }

  function addAmountToMeal(id, num) {
    setMealInfo(prevMealInfo =>
      prevMealInfo.map(item => {
        if (item.id === id) {
          return { ...item, amount: item.amount + num };
        }
        return item;
      })
    );
  }

  const meals = DUMMY_MEALS.map((meal) => {
    return (
      <Card
        id={meal.id}
        addAmountToMeal={addAmountToMeal}
        mealName={meal.name}
        price={meal.price}
        key={meal.id}
        ingredient={meal.description}
        increaseAmount={increaseAmount}
      />
    );
  });
  return (
    <div className="App">
      <Header
        amount={amount}
        resetAmount={resetAmount}
        changeCartCondition={changeCartCondition}
      />
      {isCartOpen && <Cart />}

      {!isCartOpen && (
        <>
          <Info />
          <div className="card-divs">{meals}</div>
        </>
      )}
    </div>
  );
}


export default App;
