import "../Services.css";
import "../../../App.css"
import House from "./House";
let ServicesHouse = (props) => {
  console.log (props.state.houses)
  return (
  
    <div className="ServicesHouse">
      {
        props.state.houses.map((house)=>(
          <House name = {house.name} image = {house.image} id= {house.id} key={house.id} deleteHouse = {props.deleteHouse}/>
        ))
      }
    </div>
  );
};

export default ServicesHouse; 