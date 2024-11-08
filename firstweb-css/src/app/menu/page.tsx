import React from 'react'

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
    <h1 className="menu-heading">Our Menu</h1>
    
    <div className="menu-items">
      <div className="menu-item">
        <img 
          src="/pizza.jpg"
          alt="Pizza"
          className="menu-img" 
        />
        <h3 className="item-name">Pizza</h3>
        <p className="item-description">Freshly baked with a variety of toppings to suit every taste.</p>
        <p className="item-price">$12.99</p>
      </div>

      <div className="menu-item">
        <img 
          src="https://img.freepik.com/premium-photo/zinger-burger-with-fries-chicken-burger_926154-893.jpg?w=740"
          alt="Burger"
          className="menu-img" 
        />
        <h3 className="item-name">Burger</h3>
        <p className="item-description">Juicy and delicious burgers, made to perfection with fresh ingredients.</p>
        <p className="item-price">$9.99</p>
      </div>

      <div className="menu-item">
        <img 
          src="https://w0.peakpx.com/wallpaper/511/1022/HD-wallpaper-food-pasta.jpg"
          alt="Pasta"
          className="menu-img" 
        />
        <h3 className="item-name">Pasta</h3>
        <p className="item-description">Creamy and rich pasta dishes made with love and fresh ingredients.</p>
        <p className="item-price">$14.99</p>
      </div>

      <div className="menu-item">
        <img 
          src="https://arabiangrillnight.net/wp-content/uploads/2024/07/29.jpg"
          alt="Tikka"
          className="menu-img" 
        />
        <h3 className="item-name">Tikka</h3>
        <p className="item-description">Delicious Tikka made with fresh hen and high-quality ingredients.</p>
        <p className="item-price">$18.99</p>
      </div>
    </div>
  </section>
  )
}

export default Menu
