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
      listCategory: [],
      listUser: [],
      listStory: [],
      authorEdit: {}
    }
  }

  loadAuthor = () => {
    Axios.get('http://127.0.0.1:8000/api/authors').then((response) => {
      this.setState({
        listAuthor: response.data
      })
    })
  }
  loadCategory = () => {
    Axios.get('http://127.0.0.1:8000/api/categories').then((response) => {
      this.setState({
        listCategory: response.data
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
    this.loadCategory();
    this.loadStory();
    this.loadUser();
  }

  getAuthorById = (id) => {
    Axios.get('http://127.0.0.1:8000/api/author/' + id).then((response) => {
      // alert(JSON.stringify(response.data));
      this.setState({
        authorEdit: response.data
      })
      // console.log("res "+JSON.stringify(response.data));
      // console.log("edit "+JSON.stringify(this.state.authorEdit));
    })
  }

  render() {
    return (
      <>
        <MyContext.Provider value={{
          listAuthor: this.state.listAuthor,
          listCategory: this.state.listCategory,
          listUser: this.state.listUser,
          listStory: this.state.listStory,
          loadAuthor: () => this.loadAuthor(),
          authorEdit: this.state.authorEdit,
          getAuthorById: (id) => this.getAuthorById(id),
          loadCategory: () => this.loadCategory(),
          loadStory: () => this.loadStory(),
          loadUser: ()=>this.loadUser()
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
