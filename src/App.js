import React from 'react';
import './App.scss';
import Home from './container/home';
import About from './container/about';
import Header from './components/header';
import Banner from './components/banner';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Post from './container/post';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Banner/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/blog" component={Post}/>   

              
            </div>
        </Router>
    );
}

export default App;
