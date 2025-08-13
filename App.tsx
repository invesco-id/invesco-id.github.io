
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Strengths from './components/Strengths';
import Market from './components/Market';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-base-bg font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Strengths />
        <Market />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;
