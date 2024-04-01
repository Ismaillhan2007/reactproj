import "../Services.css";
import "../../../App.css"

let House = (props) => {
  
let deleteHouse = () => {
  props.deleteHouse(props.id)
}
debugger
  return (
    <div className="House">
      <img src={props.image} alt="house"/>
      <div className="House__name">
        <p>{props.name}</p>
      </div>
      <div>
      <button >Подробнее</button>
      </div>
      <div>
        <button onClick={deleteHouse}>delete</button>
      </div>
    </div>
    
  );
};

export default House;
