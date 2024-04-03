import "./Services.css";
import "../../App.css"
import ServicesHouse from "./ServiceHouse/ServicesHouse";
import React from "react";
import Preloader from "../Preloader/Preloader";



let Services = (props) => {

  const newHouseName = React.useRef();
  const newHouseDescription = React.useRef();



  console.log (props);
        
  let addHouse = () => {
    props.addHouse();
    newHouseName.current.value = ""
  }
  let updateNewHousesText = ()=>{
    props.updateNewHousesText(newHouseName.current.value);
  }
  let updateNewHousesDescription = ()=>{
    props.updateNewHousesDescription(newHouseDescription.current.value);
  }
  
  return (
    <div className="Services">
      {
        props.housesPage.isLoad ? <Preloader/> 
        : 
        <div>
              <div className='form'> 
              <h2>Строительство коттеджей</h2> 
              <p>Добавить Дом</p>
              <input type='text' placeholder='Название дома' ref={newHouseName} value={props.housesPage.newHouseName} onChange={updateNewHousesText}/>
              <input type='text' placeholder='Описание' ref={newHouseDescription} value={props.housesPage.newHouseDescription} onChange={updateNewHousesDescription}/>
              <button onClick={addHouse}>Submit</button>
              <ServicesHouse state={props.housesPage} deleteHouse = {props.deleteHouse}/>
            </div>
        </div>
      }
    
    </div>
  );
};



export default Services;