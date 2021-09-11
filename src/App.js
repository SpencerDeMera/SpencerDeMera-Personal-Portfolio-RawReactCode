import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/PageHeader';
import Splash from './components/Splash';
import About from './components/About';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="showcase" id="home">
      <PageHeader />
      <section>
        <Splash />
        <br/>
        <About />
        <br/>
        <Projects />
        <br/>
        <Tools />
        <br/>
      </section>
      <Footer />
    </div>
  );
}
