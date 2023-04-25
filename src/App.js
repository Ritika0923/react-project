import React from 'react';
import Quotes from './rquotebox';
import './App.css';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="App">
    <Header/>
      <Quotes/>
      
      <Footer/>
    </div>
  );
}

export default App;
