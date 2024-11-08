import React from 'react';

const Gallery = () => {
  return (
    // Gallery Section
    <section id="gallery" className="section gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-images">
        <img className="gallery-img-1" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pizza image" />
        <img className="gallery-img-2" src="https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg?t=st=1730236911~exp=1730240511~hmac=acca8f07a7c52fa4a8d4a25631403e1aa99e017456a8184aaab024bc44b8431b&w=360" alt="burger image" />
        <img className="gallery-img-3" src="https://img.freepik.com/premium-photo/colorful-chicken-tikka-platter-top-fast-food-chicken-tikka-picture-photography_1020697-114080.jpg?w=740" alt="tikka image" />
      </div>
    </section>
  );
};

export default Gallery;
