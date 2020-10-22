import React from 'react';
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
import AddAuthor from './components/Author/AddAuthor';
import ListUser from './components/User/ListUser';

function App() {
  return (
    // <Router>
    //   <Header />
    //   <Sidebar />
    //   <Url/>
    // </Router>
    <>
      <Header />
      <Sidebar />
      <Router>
        <Url />
      </Router>
    </>
  );
}

export default App;
