import React,{ Component } from 'react'
import '../css/RollDice.css'
import Dice from './Dice'

class RollDice extends Component{ 

	// Face numbers passes as default props 
	static defaultProps = { 
		sides : ['zero', 'one', 'two', 'three','four', 'five', 'six'],
		number_of_dices : 2,
		default_value_of_dice : 'zero'
	} 
	constructor(props){ 
		super(props) 
		const {sides, number_of_dices, default_value_of_dice} = this.props;

		var dices = Array(number_of_dices).fill(default_value_of_dice)
		// States 
		this.state = { 
			dices : dices,
			rolling: false,
			result : number_of_dices * sides.indexOf(default_value_of_dice)
		} 
		this.roll = this.roll.bind(this)
	} 

	roll() { 
		const {sides} = this.props;
		const {number_of_dices} = this.props;

		var result = 0;
		var dices = [];

		for (var i = 0; i < number_of_dices; i++)
		{
			var number = Math.floor(Math.random() * sides.length);
			dices.push(sides[number]);
			result += number;
		}

		this.setState({ 
			// Changing state upon click 
			dices: dices,
			rolling:true,
			result: result
		}) 

		// Start timer of one sec when rolling start 
		setTimeout(() => { 

			// Set rolling to false again when time over 
			this.setState({rolling:false}) 
		},1000) 
	} 

	render(){ 
		const handleBtn = this.state.rolling ? 'RollDice-rolling' : ''
		const {dices, rolling, result} = this.state 

		var dices_lines = []
		dices.forEach(dice => {
			dices_lines.push(<Dice face={dice} rolling={rolling} />)
		})
		return ( 
			<div className='RollDice'> 
			<div className='RollDice-container'> 
				{dices_lines}
			</div> 
			<button className={handleBtn} disabled={this.state.rolling} onClick={this.roll}> 
				{this.state.rolling ? 'Rolling' : 'Roll: ' + result} 
			</button> 
			</div> 
		) 
	} 
} 

export default RollDice
