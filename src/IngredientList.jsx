import React from 'react';



const IngredientList = (props) => (
    <>
        <h1>Ingredient Lists:</h1>
    {props.lists.map((list, i) => <li key={i}>{list.name} <button onClick={(e) => props.addItem(e,i)}>Add Item ></button> </li>)}

    </>
)







export default IngredientList