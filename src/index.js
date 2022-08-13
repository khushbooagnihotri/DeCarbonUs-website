import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Team from './components/Team';
import Nav from './components/Nav';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact';
import Hero from './components/Hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Hero />
    <Team />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
