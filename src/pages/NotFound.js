import { useNavigate } from "react-router-dom";
import errorImg from "../assets/img/404.png";

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="notfound">
      <img src={errorImg} alt="" />
      <div>
        <button onClick={() => navigate("/")} className="btn button_1">
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn button_1">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
