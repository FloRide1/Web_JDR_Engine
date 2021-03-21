import React, {Component} from 'react'
import '../css/Dice.css'

class Dice extends Component{ 
	render(){ 
		const {face, rolling} = this.props 

		// Using font awesome icon to show  
		// the exactnumber of dots 
		var fa_dice = "fa-dice-" + face;

		var return_tag = <span className="Dice-span fa-stack fa-3x"> <i className={`fas Dice fa-stack-1x  ${fa_dice} ${rolling && 'Dice-shaking'}`}/> </span> 
		if (face === 'zero')
		{
			fa_dice = 'fa-square'
			return_tag = <span className="Dice-span fa-stack fa-3x"> 
				<i className={`fas Dice fa-stack-1x fa-square ${rolling && 'Dice-shaking'}`}/> 
				<strong className={`fa-stack-1x Dice-text ${rolling && 'Dice-shaking'}`}>9</strong> 
			</span> 
		}


		if (face === 'seven')
		{
		}

		return return_tag
	} 
} 

export default Dice

