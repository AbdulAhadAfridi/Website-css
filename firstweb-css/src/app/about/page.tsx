import React from 'react'
    
    const About = () => {
      return (
        <section id="about" className="about-section">
          <div className="about-content">
            <h1 className="about-heading">About Us</h1>
            <p className="about-description">
              At Delicious Bites, we believe in bringing the most authentic and delightful flavors to your table. Our chefs use only the finest ingredients to create mouthwatering dishes that will leave you craving more.
            </p>
            <p className="about-description">
              Whether you’re here for a quick bite or a full-course meal, our menu offers a range of options to suit every taste. Our goal is simple – to make every meal an unforgettable experience.
            </p>
            <div className="about-image-container">
              <img
                src="/bg.PNG"
                alt="chef preparing food"
                className="about-image"
              />
            </div>
          </div>
          <div className="about-mission">
            <h2 className="mission-heading">Our Mission</h2>
            <p className="mission-description">
              Our mission is to serve high-quality, freshly made food with excellent customer service. We are dedicated to providing a warm, welcoming environment where you can enjoy delicious meals with family and friends.
            </p>
          </div>
        </section>
        
      );
    };
    
    export default About;
    

