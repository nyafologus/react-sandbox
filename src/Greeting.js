import React from "react";
import { Container, Row, Col, Input, Button } from 'mdbreact';



class Greeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Molly',
		}
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value
		});
	}

	render() {
		return (
			<form className="container">
				<Input
					className="grey-text"
					label ="Name"
					value={this.state.name} 
					onChange={this.handleNameChange}>
				</Input>
			</form>
		);
	}
}

export default Greeting;