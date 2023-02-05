import React, { useState } from 'react';
import Header from "./components/Header";
import Info from './components/Info';
import Card from './components/Card';
import './index.css';
import { DUMMY_MEALS } from './datas/dummyMeal';


function App() {
  const meals = DUMMY_MEALS.map(meal => {
    return(
      <Card mealName={meal.name} price={meal.price} key={meal.id}/>
    )
  })
  return (
    <div className="App">
      <Header/>
      <Info/>
      <div className='card-divs'>
        {meals}
      </div>
      
      
    </div>
  );
}

export default App;
