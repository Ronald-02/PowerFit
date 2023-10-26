import React from 'react';
import "./index.css";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs'
import Services from './Components/Services';
import Trainers from './Components/Trainers';
import Pricing from './Components/Pricing';
import Blog from './Components/Blog';
import Footer from './Components/Footer';



function App() {
  return (
    <div className='text-body'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Trainers />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
