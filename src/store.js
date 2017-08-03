import { createStore } from 'redux';
import reducer from './reducer';

const state = {
	todos: {
		idCounter: 0,
		todoList: []
	}
};

const store = createStore(reducer, state);

export default store;
