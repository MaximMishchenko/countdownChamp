import React, { Component } from 'react'
import  { Form, FormControl, Button } from 'react-bootstrap'

import Clock from './Clock'
import './App.css'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			deadline: 'January 23, 2018',
			newDeadline: ''
		}
		
	}

	changeDeadline() {
		this.setState({
			deadline: this.state.newDeadline !== '' ? this.state.newDeadline : this.state.deadline
		})
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">
					Countdown to {this.state.deadline}
				</div>
					<Clock
						deadline={this.state.deadline}
					/>
				<Form inline>
					<FormControl 
						className="Deadline-input"
						placeholder="New date"
						onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<Button onClick={() => this.changeDeadline()}>
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}

export default App