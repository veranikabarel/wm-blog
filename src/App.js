import React from 'react';
import './App.scss';
import Home from './container/home';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
     </div>
  );
}

export default App;
