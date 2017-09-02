import React, { Component } from 'react';
import  Nav  from './Nav'
import Venues from './Venues'
import store from '../stores'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store.initialize()}>
      <div>
        <Nav />
        <Venues />
      </div>
      </Provider>
    );
  }
}

export default App;
