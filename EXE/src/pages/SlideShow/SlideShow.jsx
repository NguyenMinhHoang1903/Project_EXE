import { useState } from 'react';
import slideimg from "../../assets/img/1.jpg";
import slideimg1 from "../../assets/img/2.jpg";
import slideimg2 from "../../assets/img/3.jpg";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slideimg, slideimg1, slideimg2];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mt-28 relative">
      <div className="w-full h-96 overflow-hidden relative">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            className={`w-full object-cover shadow-lg h-full transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-5 text-white font-bold bg-black bg-opacity-50 p-3 rounded hover:bg-blue-500 transform -translate-y-1/2"
      >
        &#10094;
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-5 text-white font-bold bg-black bg-opacity-50 p-3 rounded hover:bg-blue-500 transform -translate-y-1/2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default SlideShow;
