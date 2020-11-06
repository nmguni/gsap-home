import React from "react";
import ImageContainer from "./ImageContainer";
import "../style.css";
import { AiOutlineLine } from "react-icons/ai";
import { BsFillSquareFill } from "react-icons/bs";

const Landing = () => {
  return (
    <div className="Landing__container">
      <div className="landing__text__contaner">
        <div className="text">
          <span className="landing__number">08</span>
          <span className="">
            <h1 className="landing__text">
              Dark <br /> Interior
            </h1>
          </span>
          <div className="landing__subtitle">
            {" "}
            <span> Learn more</span>
          </div>
        </div>
        <div className="bottom__btn">
          <span>
            {" "}
            <BsFillSquareFill />
          </span>
          <span>
            {" "}
            <BsFillSquareFill />
          </span>
          <span>
            {" "}
            <BsFillSquareFill />
          </span>
          <span>
            {" "}
            <BsFillSquareFill />
          </span>
        </div>
      </div>

      <div className="image__container">
        {" "}
        <ImageContainer />{" "}
      </div>
    </div>
  );
};

export default Landing;
