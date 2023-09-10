import React, { useState } from "react";

const DynamicCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div className="container">
      <div
        id="dynamic-carousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <button
              key={idx}
              data-bs-target="#dynamic-carousel"
              data-bs-slide-to={idx}
              className={idx === index ? "active" : ""}
              aria-current={idx === index ? true : false}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`carousel-item${idx === index ? " active" : ""}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${idx + 1}`}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#dynamic-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#dynamic-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Proximo</span>
        </button>
      </div>
    </div>
  );
};

export default DynamicCarousel;
