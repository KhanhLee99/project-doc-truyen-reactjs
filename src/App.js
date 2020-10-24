import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Url from './Router/Url';
import MyContext from './myContext';
import Axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAuthor: [],
      listUser: [],
      listStory: []
    }
  }

  loadAuthor = () => {
    Axios.get('http://127.0.0.1:8000/api/authors').then((response) => {
      this.setState({
        listAuthor: response.data
      })
    })
  }
  loadStory = () => {
    Axios.get('http://127.0.0.1:8000/api/stories').then((response) => {
      this.setState({
        listStory: response.data
      })
    })
  }
  loadUser = () => {
    Axios.get('http://127.0.0.1:8000/api/users').then((response) => {
      this.setState({
        listUser: response.data
      })
    })
  }
  componentDidMount() {
    this.loadAuthor();
    this.loadStory();
    this.loadUser();
  }

  render() {
    return (
      <>
        <MyContext.Provider value={{
          listAuthor: this.state.listAuthor,
          listUser: this.state.listUser,
          listStory: this.state.listStory,
          loadAuthor: () => this.loadAuthor(),
        }}>
          <Header />
          <Sidebar />
          <Router>
            <Url />
          </Router>
        </MyContext.Provider>

      </>
    )
  }
}
