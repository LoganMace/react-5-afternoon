import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router-dom';

import './App.css';
import router from './router'


class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <HashRouter>
        <div>
      
          { router }

        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = state => state;

export default App;
// export default withRouter(connect(mapStateToProps)(App));