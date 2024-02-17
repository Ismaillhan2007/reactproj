import "../Services.css";
import "../../../App.css"
import { useNavigate } from "react-router-dom";

let House = (props) => {
  
  const navigate = useNavigate();
  function openHomeDesc(){
    console.log(props.id)
  }

  return (
    <div className="House">
      <img src={props.image} alt="house"/>
      <div className="House__name">
        <p>{props.name}</p>
      </div>
      <button onClick={openHomeDesc}>Подробнее</button>
    </div>
  );
};

export default House;
