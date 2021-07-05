import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './features/header/Header';
import NotFoundPage from './pages/404/NotFoundPage';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/' component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
