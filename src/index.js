import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';
import BoxContainer from './Containers/BoxContainer'

let store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
  render(){
    return (
      <BoxContainer/>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
