import React from 'react';


const BurgerPane = props => (
    <ul>

    {props.newLists.map((newList, i) => <li key={i}>{newList.name}  </li>)}
    <button>Clear</button>
    </ul>



)




export default BurgerPane