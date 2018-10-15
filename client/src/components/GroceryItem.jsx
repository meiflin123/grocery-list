import React from 'react';
const GroceryItem = ({item}) => (
 
  	<div>
  		
  		<span>{item.name}</span>
  		<span>{item.quantity}</span>
  	</div>
)

export default GroceryItem;


