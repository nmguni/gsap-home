import React from "react";
import "../style.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";

const ImageContainer = () => {
  return (
    <>
      <div className="img__container">
        <div className="img one"></div>
        <div className="img two"></div>
        <div className="img three"></div>
      </div>
      <div className="image__navigation">
        <p className="text"> 03/04</p>
        <span className="icons">
          {" "}
          <AiOutlineLine />{" "}
          <span className="light__icon">
            <MdKeyboardArrowRight />
          </span>
        </span>{" "}
      </div>
    </>
  );
};

export default ImageContainer;
