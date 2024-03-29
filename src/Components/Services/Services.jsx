import "./Services.css";
import "../../App.css"
import ServicesHouse from "./ServiceHouse/ServicesHouse";
import React from "react";
import { setHouse } from "../../redux/store";


let Services = (props) => {

  const newHouseName = React.useRef();
  const newHouseDescription = React.useRef();
  console.log (props);
      if (props.housesPage.houses.length===0){
        fetch("https://6605b4f9d92166b2e3c2a359.mockapi.io/houses/v1/houses")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setHouse('Ответ от сервера:', data);
      })
      .catch(error => {
        console.error('Произошла ошибка при выполнении запроса:', error);
      });

      }

  

  
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