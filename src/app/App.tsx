import * as React from 'react';
import './App.css';
import { GridContainer } from '../grid/Grid';
import { appStore } from './AppStore';
import { Provider } from 'react-redux';

const logo = require('../logo.svg');

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Provider store={appStore}>
          <GridContainer/>  
        </Provider>
      </div>
    );
  }
}

export default App;