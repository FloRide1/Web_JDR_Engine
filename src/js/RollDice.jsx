import React,{ Component } from 'react'
import '../css/RollDice.css'
import Dice from './Dice'

class RollDice extends Component{ 

	// Face numbers passes as default props 
	static defaultProps = { 
		sides : ['one', 'two', 'three',  
			'four', 'five', 'six'] 
	} 
	constructor(props){ 
		super(props) 

		// States 
		this.state = { 
			dice1 : 'one', 
			dice2 : 'one', 
			rolling: false
		} 
		this.roll = this.roll.bind(this) 
	} 
	roll(){ 
		const {sides} = this.props 
		this.setState({ 

			// Changing state upon click 
			dice1 : sides[Math.floor(Math.random() * sides.length)], 
			dice2 : sides[Math.floor(Math.random() * sides.length)], 
			rolling:true
		}) 

		// Start timer of one sec when rolling start 
		setTimeout(() => { 

			// Set rolling to false again when time over 
			this.setState({rolling:false}) 
		},1000) 
	} 

	render(){ 
		const handleBtn = this.state.rolling ?  
			'RollDice-rolling' : ''
		const {dice1, dice2, rolling} = this.state 
		return( 
			<div className='RollDice'> 
			<div className='RollDice-container'> 
			<Dice face={dice1} rolling={rolling}/> 
			<Dice face={dice2} rolling={rolling}/> 
			</div> 
			<button className={handleBtn} 
			disabled={this.state.rolling}  
			onClick={this.roll}> 
			{this.state.rolling ? 'Rolling' : 'Roll Dice!'} 
			</button> 
			</div> 
		) 
	} 
} 

export default RollDice
