import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Card from "./components/Card";
import "./index.css";
import { DUMMY_MEALS } from "./datas/dummyMeal";

function App() {
  const [amount, setAmount] = useState(localStorage.getItem("amount"));
  function increaseAmount(num) {
    setAmount((prevAmount) => (prevAmount = parseInt(prevAmount + num)));
  }

  useEffect(() => {
    localStorage.setItem("amount", amount);
  }, [amount]);

  function resetAmount() {
    setAmount(0);
  }

  const meals = DUMMY_MEALS.map((meal) => {
    return (
      <Card
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
      <Header amount={amount} resetAmount={resetAmount} />
      <Info />
      <div className="card-divs">{meals}</div>
    </div>
  );
}

export default App;
