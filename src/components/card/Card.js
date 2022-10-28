import React from "react";

const Card = ({ image, body, title }) => {
  return (
    <>
      <div className="box">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{body} </p>
      </div>
    </>
  );
};

export default Card;
