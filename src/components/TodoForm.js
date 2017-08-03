import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_TODO } from '../constants/actionTypes';

const mapStateToProps = state => ({
	...state.todos
});

const mapDispatchToProps = dispatch => ({
	onAdd: text =>
		dispatch({ type: ADD_TODO, text })
});

class TodoForm extends Component {
	constructor() {
		super();
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.value) {
			this.props.onAdd(this.state.value);
			this.setState({ value: '' });
		}
		return;
	}

	render() {
		return (
			<div className="container">
				<fieldset>
					<form className="form-group" onSubmit={this.handleSubmit}>
						<label>Add Todos:<br />
							<input
								type="text"
								value={this.state.value}
								placeholder="I need to..."
								onChange={this.handleChange} />
								<input type="submit" value="Add" />
						</label><br />
					</form>
				</fieldset>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
