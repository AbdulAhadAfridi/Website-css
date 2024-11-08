import React from 'react';
import About from './about/page';
import Gallery from './gallery/page';
import Order from './order/page';
import Contact from './contact/page';
import Menu from './menu/page';

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <section className="hero"></section>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <h1 className="heading">Welcome to Delicious Bites</h1>
        <p className="heading">Experience the best food in town with quality ingredients and passionate chefs.</p>
      </section>

      <About/>
      <Menu/>
      <Gallery/>
      <Order/>
      

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Delicious Bites. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
