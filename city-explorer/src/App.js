import React, { Component } from 'react';

import Header from './scripts/header.js';
import Body from './scripts/body.js';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
      </React.Fragment>
    );
  }
}

export default App;
