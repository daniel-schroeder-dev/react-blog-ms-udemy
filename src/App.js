import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* eslint-disable import/first */
import loadable from '@loadable/component';
const BlogSubLayout = loadable(() => import('./layouts/BlogSubLayout/BlogSubLayout'));

import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/posts" component={BlogSubLayout} />
          <Route>
            <div>404 not found</div>
          </Route>
        </Switch>
      </main>
    );  
  }
}

export default App;
