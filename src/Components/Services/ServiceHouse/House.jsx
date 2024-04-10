import "../Services.css";
import "../../../App.css"
import { useNavigate } from "react-router-dom";

const House = (props) => {
  
const navigate = useNavigate;

const deleteHouse = () => {
  props.deleteHouse(props.id)
}
let redirectDescription = (id)=> {
  navigate(`./houseDescription/${id}`)
}
  return (
    <div className="House">
      <img src={props.image} alt="house"/>
      <div className="House__name">
        <p>{props.name}</p>
      </div>
      <div>
      <button onClick={()=>{redirectDescription(1)}}>Подробнее</button>
      </div>
      <div>
        <button onClick={deleteHouse}>delete</button>
      </div>
    </div>
    
  );
};

export default House;
