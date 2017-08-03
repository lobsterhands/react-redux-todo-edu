import { ADD_TODO, REMOVE_TODO, TODO_UP, TODO_DOWN } from '../constants/actionTypes';

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_TODO: {
			const newTodoList = [ ...state.todoList ];
			newTodoList.push(
				{
					text: action.text,
					id: state.idCounter + 1
				}
			);
			const newState = { ...state };
			newState.todoList = newTodoList;
			newState.idCounter = state.idCounter + 1;
			return newState;
		}
		case REMOVE_TODO: {
			const newTodoList = state.todoList.filter((todo) => {
				return todo.id !== action.todo.id;
			});
			const newState = { ...state };
			newState.todoList = newTodoList;
			return newState;
		}
		case TODO_DOWN: {
			const index = state.todoList.findIndex((todo) => {
				return todo.id === action.todo.id;
			});
			if (index === state.todoList.length-1) {
				return state;
			}

			const newState = { ...state };
			const newTodoList = [ ...state.todoList ];
			const swapTodo_1 = newTodoList[index];
			const swapTodo_2 = newTodoList[index+1];
			newTodoList[index+1] = swapTodo_1;
			newTodoList[index] = swapTodo_2;
			newState.todoList = newTodoList;
			return newState;
		}
		case TODO_UP: {
			const index = state.todoList.findIndex((todo) => {
				return todo.id === action.todo.id;
			});
			if (index === 0) {
				return state;
			}

			const newState = { ...state };
			const newTodoList = [ ...state.todoList ];
			const swapTodo_1 = newTodoList[index-1];
			const swapTodo_2 = newTodoList[index];
			newTodoList[index] = swapTodo_1;
			newTodoList[index-1] = swapTodo_2;
			newState.todoList = newTodoList;
			return newState;
		}
		default: {
			return state;
		}
	}
}
