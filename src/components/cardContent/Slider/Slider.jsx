import React from 'react';

const Slider = ({ slides }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="carousel w-full">
        {slides.map((slide, index) => (
          <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
            <img src={slide.image} className="w-full" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="text-center mt-spacing-2 flex flex-wrap sm:mx-spacing-3 gap-2 justify-center  ">
        {slides.map((slide, index) => (
          <button key={index} aria-label={`Slide ${index}`} className={`btn slide-button ${index === 0 ? 'btn-active' : ''}`} onClick={() => document.querySelector(`#slide${index}`).scrollIntoView({ behavior: 'smooth' })}>{slide.title}</button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
