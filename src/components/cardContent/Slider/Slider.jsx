

import React, { useRef } from 'react';

const Slider = ({ slides }) => {
  const carouselRef = useRef(null);

  const handleScrollToSlide = (index) => {
    const slideElement = document.querySelector(`#slide${index}`);
    if (slideElement) {
      carouselRef.current.scrollTo({
        left: slideElement.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Carousel container with scroll snapping */}
      <div
        ref={carouselRef}
        className="carousel w-full overflow-x-scroll snap-x snap-mandatory scroll-smooth"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full snap-start"
          >
            {/* Imagen del carrusel */}
            <img
              src={slide.image}
              className="w-full lg:w-4/5 mx-auto" // 80% en pantallas grandes
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Botones para cambiar de imagen */}
      <div className="text-center mt-spacing-2 flex flex-wrap sm:mx-spacing-3 gap-2 justify-center">
        {slides.map((slide, index) => (
          <button
            key={index}
            aria-label={`Slide ${index}`}
            className={`btn slide-button ${
              index === 0 ? 'btn-active' : ''
            }`}
            onClick={() => handleScrollToSlide(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
