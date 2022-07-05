import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Route } from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar';
import DetailPage from './components/DetailPage/DetailPage'
import CreatePage from './components/CreatePage/CreatePage';


function App() {
  return (
    <React.Fragment>
      <Route
        exact path='/'
        render={()=><LandingPage />}
      />
      <Route
        path='/n/'
        render={()=><NavBar />}
      />
      <Route
        path='/n/home'
        render={()=><Home />}
      />
      <Route
        exact path='/n/create/pokemon'
        component={CreatePage}
      />
      <Route
        exact path='/n/pokemon/:id'
        component={DetailPage}
      />
    </React.Fragment>
  );
}

export default App;
