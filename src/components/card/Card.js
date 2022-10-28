import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ src, body, title, url }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="box">
        <img src={src} alt={title} onClick={()=>navigate(url)} style={{cursor : "pointer"}}/>
        <h3>{title}</h3>
        <p>{body} </p>
      </div>
    </>
  );
};

export default Card;
