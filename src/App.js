import React from 'react';
import Header from "./components/Header";
import Info from './components/Info';
import Card from './components/Card';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      <div className='card-divs'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
      
    </div>
  );
}

export default App;
