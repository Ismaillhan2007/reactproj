import "./Services.css";
import "../../App.css"
import ServicesHouse from "./ServiceHouse/ServicesHouse";
import React from "react";


let Services = (props) => {
  const newHouseName = React.useRef();
  const newHouseDescription = React.useRef();
  
  let addHouse = () => {
    props.addHouse();
  }
  let updateNewHousesText = ()=>{
    props.updateNewHousesText(newHouseName.current.value,newHouseDescription.current.value);
  }
  return (
    <div className="Services">
      <div className="container">
        <h2>Строительство коттеджей</h2> 
        <div className='form'> 
          <p>Добавить Дом</p>
          <input type='text' placeholder='Название дома' ref={newHouseName} value={props.housesPage.newHouseName} onChange={updateNewHousesText}/>
          <input type='text' placeholder='Описание' ref={newHouseDescription} value={props.housesPage.newHouseDescription} onChange={updateNewHousesText}/>
          <button onClick={addHouse}>Submit</button>
        </div>
        <ServicesHouse state={props.housesPage}/>
      
      </div>
      
    </div>
  );
};
export default Services;