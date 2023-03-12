import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import "./index.css";

const Work = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="left-arrow arrow" onClick={prevSlide}>
        <FaAngleDoubleLeft className="arrowBtn" />
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
      <div className="left-arrow arrow" onClick={nextSlide}>
        <FaAngleDoubleRight className="arrowBtn" />
      </div>
    </section>
  );
};

export default Work;
