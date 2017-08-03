import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REMOVE_TODO, TODO_UP, TODO_DOWN } from '../constants/actionTypes';

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	onDelete: todo =>
		dispatch({ type: REMOVE_TODO, todo }),
	onTodoDown: todo =>
		dispatch({ type: TODO_DOWN, todo }),
	onTodoUp: todo =>
		dispatch({ type: TODO_UP, todo })
});

class TodoList extends Component {
	constructor() {
		super();
		this.state = { value: '' };

		this.deleteTodo = this.deleteTodo.bind(this);
		this.down = this.down.bind(this);
		this.up = this.up.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	deleteTodo(todo) {
		this.props.onDelete(todo);
	}

	down(todo) {
		this.props.onTodoDown(todo);
	}

	up(todo) {
		this.props.onTodoUp(todo);
	}

	toggle(e) {
	}

	render() {

		const { todoList } = this.props.todos;
		return (
			<div className="container">
				<ul className="list-group">
					{
						todoList.map((todo) => {
							return (
								<li className="list-group-item" key={todo.id}>{todo.text}
									<button // X marks delete
										className="btn close"
										onClick={() => this.deleteTodo(todo)}>
										&#x2716;
									</button>
									<button // Up-Pointing Triangle
										className="btn close"
										onClick={() => this.up(todo)}>
										&#x25b2;
									</button>
									<button // Down-Pointing Triangle
										className="btn close"
										onClick={() => this.down(todo)}>
										&#x25bc;
									</button>
									{ /* <button
										className="btn close"
										onClick={this.toggle}>
										Completed
									</button>
									*/ }
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

TodoList.styles = {
	margin: {
		"margin-top": "200px"
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
