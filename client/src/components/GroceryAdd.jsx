import React from 'react';

class GroceryAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name : '',
			quantity: '', 
		};

	this.handleNameChange = this.handleNameChange.bind(this);
	this.handleQuantityChange = this.handleQuantityChange.bind(this);
	this.handleClick = this.handleClick.bind(this)
}
  handleNameChange(event) {
    this.setState({
    	name: event.target.value
    })
  }

  handleQuantityChange(event) {
    this.setState({
    	quantity: event.target.value
    })
  }

  handleClick() {
  	var grocery = {
  		name: this.state.name,
  		quantity: parseInt(this.state.quantity)
  	}
  	this.props.handleAddGrocery(grocery)
  }
  render() {
  	return (
  		<div>
  		<input type="text" 
  		       value={this.state.name}
  		       onChange={this.handleNameChange}
  		 />
  		 <input type="text" 
  		       value={this.state.quantity}
  		       onChange={this.handleQuantityChange}
  		 />
       <button onClick={this.handleClick}>Add Grocery</button>
  		</div>
  		)
  }
}
export default GroceryAdd;