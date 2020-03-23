import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './container/home';
import Header from './components/header';
import Banner from './components/banner';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './container/contact';
import Patterns from './container/patterns';
import blogPage from './container/blog';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Banner/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/blog" component={blogPage}/>   
                <Route exact path="/patterns" component={Patterns}/>  
                <Route exact path="/contact" component={Contact}/>  
            </div>
        </Router>
    );
}

export default App;
