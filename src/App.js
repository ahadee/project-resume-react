import React, { Fragment } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Jumbotron'
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './components/Profile/Profile';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"

function App() {
  return (
    <Fragment>
      <div>
        <Navigation />
        <Main />
        <Profile />
        <Portfolio />
        <Contact />
        <Footer />
      </div>

    </Fragment>
  );
}

export default App;
