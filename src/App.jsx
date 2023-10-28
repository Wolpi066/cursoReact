import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './components/Navbar/Navbar.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;