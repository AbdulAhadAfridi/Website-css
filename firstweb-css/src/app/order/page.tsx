import React from 'react'

const Order = () => {
  return (
    <section className="order-now-section">
    <div className="order-now-content">
        <h2 className="order-now-title">Order Delicious Food Now!</h2>
        <p className="order-now-description">
            Enjoy a wide variety of gourmet dishes, prepared with fresh ingredients and delivered straight to your door.
        </p>
        <div className="order-now-features">
            <div className="feature-item">
                <i className="fas fa-utensils"></i>
                <p>Fresh Ingredients</p>
            </div>
            <div className="feature-item">
                <i className="fas fa-shipping-fast"></i>
                <p>Fast Delivery</p>
            </div>
            <div className="feature-item">
                <i className="fas fa-star"></i>
                <p>Top Quality</p>
            </div>
        </div>
        <a href="#menu" className="order-now-button">Order Now</a>
    </div>
</section>
  )
}

export default Order
