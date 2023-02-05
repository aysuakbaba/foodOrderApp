import React from "react";

function Card() {
    /*const [meal, setMeal] = React.useState("")

    async function handleClick(){
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php#")
            const data = await res.json()
            setMeal(data.meals[0].strMeal)
            console.log(meal)
    }*/
    return(
        <div className="meal-card">
            <div className="meal-info">
                <h3>Sushi</h3>
                <p>Ingredients</p>
                <h5>$33.75</h5>
            </div>
            <div className="price-info">
            <form>
                <label for="fname">Amount:</label>
                <input type="number" id="meal-amount"/>
            </form>
            <button className="add-button">+Add</button>
            </div>
            
          
        </div>
    )
}



export default Card