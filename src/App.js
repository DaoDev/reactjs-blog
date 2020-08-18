import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './container/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Swiich, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>

      <Route path ="/" component={Home} />

      <Home/>
    </div>
  );
}

export default App;
