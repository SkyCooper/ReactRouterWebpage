import React from "react";
import "../../App.css";
import logo from "../../assets/img/logo.png";
import logoreact from "../../assets/img/logoreact.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="http://www.clarusway.com" target="_blank">
          <img className="logo" src={logo} width="200" height="40" alt="" />
        </a>
        <div>
          <p>Cooper Web Design with React Router, </p>
          <p>Copyright &copy; 2022</p>
        </div>
        <a href="http://www.clarusway.com" target="_blank">
          <img className="logo" src={logoreact} width="200" height="40" alt="" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
