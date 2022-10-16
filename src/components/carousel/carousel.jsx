import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "./carousel.scss";
import changeItem from "../../assets/images/pngkey.com-stylish-arrow-png-8304891.png";

const Carousel = () => {
  // carousel
  const items = document.querySelectorAll(".carousel__item");
  const intervalRef = useRef();
  let index = 0;

  const nextItem = () => {
    index++;
    let currentIndex = ((index % items.length) + items.length) % items.length;

    console.log(index);
    console.log(currentIndex);
    if (currentIndex === 0) {
      items[items.length - 1].classList.remove("carousel__item--fade");
      items[items.length - 1].classList.add("carousel__item--hidden");

      items[0].classList.remove("carousel__item--hidden");
      items[0].classList.add("carousel__item--fade");

      return;
    }

    items[currentIndex].classList.remove("carousel__item--hidden");
    items[currentIndex].classList.add("carousel__item--fade");

    items[currentIndex - 1].classList.remove("carousel__item--fade");
    items[currentIndex - 1].classList.add("carousel__item--hidden");
  };

  const previousItem = () => {
    index--;
    let currentIndex = ((index % items.length) + items.length) % items.length;

    if (currentIndex === items.length - 1) {
      items[0].classList.remove("carousel__item--fade");
      items[0].classList.add("carousel__item--hidden");
      items[items.length - 1].classList.remove("carousel__item--hidden");
      items[items.length - 1].classList.add("carousel__item--fade");

      return;
    }
    items[currentIndex].classList.remove("carousel__item--hidden");
    items[currentIndex].classList.add("carousel__item--fade");
    items[currentIndex + 1].classList.remove("carousel__item--fade");
    items[currentIndex + 1].classList.add("carousel__item--hidden");
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextItem();
    }, 4000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return (
    <div className="container">
      <img
        className="container__previous"
        src={changeItem}
        alt="carousel previous"
        id="previous"
        onClick={() => {
          clearInterval(intervalRef.current);
          intervalRef.current = setInterval(() => {
            previousItem();
          }, 4000);
          previousItem();
        }}
      />
      <div className="carousel">
        <div className="carousel__item">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a hic
            eaque excepturi neque deleniti. Nam ducimus vero sint omnis illum
            provident eius debitis iusto? Fugit accusamus dolore quibusdam
            voluptates.
          </p>
          <img
            src="https://static.dezeen.com/uploads/2020/03/chinese-brutalism-today-alberto-bologna-china-architecture-concrete_dezeen_1704_taizhou_hero-852x479.jpg"
            alt=""
          />
        </div>
        <div className="carousel__item carousel__item--hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a hic
            eaque excepturi neque deleniti. Nam ducimus vero sint omnis illum
            provident eius debitis iusto? Fugit accusamus dolore quibusdam
            voluptates.
          </p>
          <img
            src="https://images.adsttc.com/media/images/5a58/f9c6/f197/cc1f/8600/0199/slideshow/14.jpg?1515780543"
            alt=""
          />
        </div>
        <div className="carousel__item carousel__item--hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a hic
            eaque excepturi neque deleniti. Nam ducimus vero sint omnis illum
            provident eius debitis iusto? Fugit accusamus dolore quibusdam
            voluptates.
          </p>
          <img
            src="https://www.mydomaine.com/thmb/jo2cJ63MGggEC1y8iBh7jsfulWE=/2000x1500/filters:no_upscale():max_bytes(150000):strip_icc()/PhilipOpenshaw_GettyImages_brutalistbuilding-260626ceed144a5a8f1afd4914f3d394.jpg"
            alt=""
          />
        </div>
      </div>
      <img
        className="secondary-container__next"
        src={changeItem}
        alt="carousel next"
        id={"next"}
        onClick={() => {
          clearInterval(intervalRef.current);
          intervalRef.current = setInterval(() => {
            nextItem();
          }, 4000);
          nextItem();
        }}
      />
    </div>
  );
};

export default Carousel;
