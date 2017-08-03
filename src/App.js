import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <div className="App">
          <h1>You Gotta Do Stuff!</h1>
          <TodoForm />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
