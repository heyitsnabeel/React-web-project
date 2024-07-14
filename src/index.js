import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import Services from './Services';
import Project from './Project';
import Growth from './Growth';
import Feedback from './Feedback';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Services/>
    <Project/>
    <Growth/>
    <Feedback/>
    <Footer/>
  </React.StrictMode>
);