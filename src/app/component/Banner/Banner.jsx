import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="hero h-80" style={{ backgroundImage: 'url(https://i.ibb.co/LSCDQB4/online-shopping-smartphone-turned-into-internet-shop-concept-of-mobile-marketing-and-e.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="text-4xl font-bold">Shop Smart, Shop Chic: Elevate Your Style with <br />EYE-Commerce </h1>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;