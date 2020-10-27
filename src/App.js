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
      authorEdit: {},
      isRedirect: false,
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

  getAuthorEdit = (authorEdit) => {
    this.setState({
      authorEdit: authorEdit
    })
  }

  searchAuthor = (name) => {
    if (name === "") {
      this.loadAuthor();
    }
    else {
      Axios.get('http://127.0.0.1:8000/api/author/search/' + name).then((response) => {
        this.setState({
          listAuthor: response.data
        })
      })
    }
  }

  trueRedirect = () => {
    this.setState({
      isRedirect: true
    })
  }
  falseRedirect = () => {
    this.setState({
      isRedirect: false
    })
  }

  searchCategory = (name) => {
    if (name === "") {
      this.loadCategory();
    }
    else {
      Axios.get(('http://127.0.0.1:8000/api/category/search/' + name)).then((response) => {
        this.setState({
          listCategory: response.data
        })
      })
    }
  }

  searchStory = (name) => {
    if (name === '') {
      this.loadStory();
    } else {
      Axios.get('http://127.0.0.1:8000/api/story/search/' + name).then((response) => {
        this.setState({
          listStory: response.data
        })
      })
    }
  }

  searchUser = (name) => {
    if (name === '') {
      this.loadUser();
    }
    else {
      Axios.get('http://127.0.0.1:8000/api/user/search/' + name).then((response) => {
        this.setState({
          listUser: response.data
        })
      })
    }
  }

  

  render() {
    console.log(this.state);
    return (
      <>
        <MyContext.Provider value={{
          listAuthor: this.state.listAuthor,
          listCategory: this.state.listCategory,
          listUser: this.state.listUser,
          listStory: this.state.listStory,
          loadAuthor: () => this.loadAuthor(),
          authorEdit: this.state.authorEdit,
          getAuthorEdit: (authorEdit) => this.getAuthorEdit(authorEdit),
          loadCategory: () => this.loadCategory(),
          loadStory: () => this.loadStory(),
          loadUser: () => this.loadUser(),
          searchAuthor: (name) => this.searchAuthor(name),
          isRedirect: this.state.isRedirect,
          trueRedirect: () => this.trueRedirect(),
          falseRedirect: () => this.falseRedirect(),
          searchCategory: (name) => this.searchCategory(name),
          searchUser: (name) => this.searchUser(name),
          searchStory: (name) => this.searchStory(name),
          //addAuthor: (name) => this.addAuthor(name)
        }}>
          <Router>
            <Header />
            <Sidebar />
            <Url />
          </Router>
        </MyContext.Provider>
      </>
    )
  }
}
