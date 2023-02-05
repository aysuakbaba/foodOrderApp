import React from "react";
import table from "../assets/table.png"


function Info() {
    return(
        <div>
            <img src={table} alt="table" className="dinner-table"/>
            <div className="information">
                <h2>Delicious Food, Delivered To You</h2>
                <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </div>
           

        </div>
    )
}


export default Info