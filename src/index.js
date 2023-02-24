import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './sections/Header';
import Home from './sections/1-Home'
import Profile from './sections/2-Profile'
import Skills from './sections/3-Skills'
import Expertise from './sections/4-Expertise'
import Portfolio from './sections/5-Portfolio'
import Contact from './sections/6-Contact'
import Footer from './sections/Footer'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Profile />
    <Skills />
    <Expertise />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
