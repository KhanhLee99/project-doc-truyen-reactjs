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
import Login from './components/Login/Login';

class App extends Component {
  renderApp = () => {
    if (this.props.isLogin) {
      return (
        <Router>
          <Header />
          <Sidebar />
          {this.showContentMenus(routes)}
        </Router>
      )
    }
    else {
      return (
        <Login />
      )
    }
  }
  render() {
    return (
      <>
        {this.renderApp()}
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
