

export default function Contact() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: About Us */}
        <div className="footer-column">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
          
           we are passionate about delivering delicious, high-quality food that brings people together. Our menu is crafted with the freshest ingredients, sourced from trusted local farms and suppliers, ensuring every dish bursts with flavor and authenticity. From our hearty entrees to our delightful desserts, each item is prepared with love and care, reflecting our commitment to quality and taste.

           Whether you are dining in, taking out, or ordering online, we strive to create a memorable experience that keeps you coming back for more. Join us and discover a world of flavors where quality meets taste!          </p>
        </div>
    
        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="http://localhost:3000" className="footer-link">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/about" className="footer-link">About</a>
            </li>
            <li>
              <a href="http://localhost:3000/contact" className="footer-link">Contact Us</a>
            </li>
          </ul>
        </div>
    
        {/* Column 3: Contact Form */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">We would love to hear from you! Please fill out the form below:</p>
          
          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
                placeholder="Your Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
                placeholder="Your Email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-textarea"
                placeholder="Your Message"
              />
            </div>
            
            <button
              type="submit"
              className="submit-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2024 CHEAMIND. All rights reserved.</p>
      </div>
    </footer>
  );
}
