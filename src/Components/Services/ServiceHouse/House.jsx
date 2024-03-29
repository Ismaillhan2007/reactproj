import "../Services.css";
import "../../../App.css"

let House = (props) => {
  
let deleteHouse = () => {
  props.deleteHouse(props.id)
}

  return (
    <div className="House">
      <img src={props.image} alt="house"/>
      <div className="House__name">
        <p>{props.name}</p>
      </div>
      <button onClick={deleteHouse}>Delete</button>
    </div>
  );
};

export default House;
