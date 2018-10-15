import React from 'react';
import GroceryItem from './GroceryItem';
const GroceryList = props => (
  <div className= "groceries">
    {props.list.map((item) => <GroceryItem item = {item} key={item.id} />)
  }
  </div>

	)

export default GroceryList;
