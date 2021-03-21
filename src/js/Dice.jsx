import React, {Component} from 'react'
import '../css/Dice.css'

class Dice extends Component{ 
	render(){ 
		const {face, rolling} = this.props 

		// Using font awesome icon to show  
		// the exactnumber of dots 
		var fa_dice = "fa-dice-" + face;

		if (face === 'zero')
		{
			fa_dice = 'fa-square'
		}

		return <i className={`Dice fas ${fa_dice} 
			  ${rolling && 'Dice-shaking'}`}/> 
	} 
} 

export default Dice

