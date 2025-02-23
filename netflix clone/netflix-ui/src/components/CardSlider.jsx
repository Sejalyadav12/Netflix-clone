import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
export default React.memo(function CardSlider({ data, title }) {
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 35; //70
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${240 + distance}px)`; //230
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 3) {
      listRef.current.style.transform = `translateX(${-240 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <Container
      className="flex column"
      showControls={showControls}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider flex" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;    //
          })}
        </div>
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
});



const Container = styled.div`
  gap: 1 rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 0.3rem;
      transform: translateX(0px);
      transition: 0.5s ease-in-out;
      margin-left: 36px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 5rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 5;
    }
    .right {
      right: 0;
    }
  }
`;





