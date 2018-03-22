import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Cart from './containers/cart';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Cart />
        </div>
      </Provider>
    );
  }
}

export default App;
