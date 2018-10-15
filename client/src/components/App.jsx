import React from "react";
import axios from 'axios';
import GroceryList from './GroceryList'
import GroceryAdd from './GroceryAdd'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: []
    }
    this.addGrocery = this.addGrocery.bind(this);
  }
  componentDidMount() {
    this.getAllGroceries();
  }
  getAllGroceries() {
    // axios makes ajax request
    // get all the domain you have and attach /groceries
    axios.get('/groceries')
      .then(results => this.setState({groceries: results.data}))
      .catch(err => console.log('error fetching groceries:', err));

  }
  addGrocery(grocery) {
    /*console.log('click', grocery);*/
    console.log(grocery)
    axios.post('/groceries', grocery)
      .then(results => this.getAllGroceries())
      .catch(err => console.log('error posting groceries', err));

  }
  render() {
    return (
    <div>
      <h1>GroceryList</h1>
      <GroceryAdd handleAddGrocery= {this.addGrocery}/>
      <GroceryList list={this.state.groceries} />
    </div>)
  }
} 

export default App;