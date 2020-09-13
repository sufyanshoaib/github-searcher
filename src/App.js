import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import { NotFound } from './components/pages/NotFound';

const App = () => {


  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Searcher" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" render= {props => (
                    <Fragment>
                      <Search />
                    <Users  />
                  </Fragment> 
                )} />
                <Route exact path="/about" component={About}/>
                <Route exact path="/user/:login" component={User}/>
                <Route component={NotFound}/>
              </Switch>
              
            </div>
            
          </div>
          </Router>
        </AlertState>
      </GithubState>
  );
  
  
}

export default App;
