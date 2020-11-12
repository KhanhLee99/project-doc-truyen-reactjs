import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from './Router/Url';
import { connect } from 'react-redux';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
// import 'animate.css/animate.compat.css'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <ReactNotification />
          <Sidebar />
          {this.showContentMenus(routes)}
        </Router>
      </>
    )
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin
  }
}

export default connect(mapStateToProps, null)(App)
