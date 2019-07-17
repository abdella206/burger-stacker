import React from 'react';
import ClearBurger from './ClearBurger'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [{name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}],
      
      burgerStack: [],
      clear: ''
      

    }
    
    this.addItem = this.addItem.bind(this)

  }


  
  addItem(e, i) {
    var  newBurgerStack = Array.from(this.state.burgerStack)
    // add new item to new burger stack
    newBurgerStack.push(this.state.ingredients[i]);
    this.setState({
      burgerStack : newBurgerStack,
      clear: ''
      
    })
  }




  render() {

    //var listsCopy = Array.from(this.state.ingredients)
    var newListsCopy = Array.from(this.state.burgerStack)

    return (
      <>
      <IngredientList lists={this.state.ingredients} addItem={this.addItem}/>
      <BurgerPane newLists ={newListsCopy}/> 
      <ClearBurger/>
      </>


      

    )

  }



}
export default App;
