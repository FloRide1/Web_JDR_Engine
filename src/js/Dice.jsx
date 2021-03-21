import React, {Component} from 'react'
import '../css/Dice.css'

class Dice extends Component{ 
	render(){ 
		const {face, rolling} = this.props 

		// Using font awesome icon to show  
		// the exactnumber of dots 
		return <i className={`Dice fas fa-dice-${face} 
			  ${rolling && 'Dice-shaking'}`}/> 
	} 
} 

export default Dice

