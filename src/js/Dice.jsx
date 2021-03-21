import React, {Component} from 'react'
import '../css/Dice.css'

class Dice extends Component{ 
	render(){ 
		const {face, rolling} = this.props 

		// Using font awesome icon to show  
		// the exactnumber of dots 
		var fa_dice = "fa-dice-" + face;
		var over_6 = ""

		if (face === 'zero')
		{
			fa_dice = 'fa-square'
		}

		var return_tag = <i className={`Dice fas ${fa_dice} ${rolling && 'Dice-shaking'}`} />

		if (face === 'seven')
		{
			return_tag = <div className={`Dice-over-6 fas ${rolling && 'Dice-shaking'}`}> 7 </div>
			fa_dice = "Dice-over-6";
			over_6 = "7";
		}

		return return_tag
	} 
} 

export default Dice

