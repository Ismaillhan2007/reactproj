import "./Services.css";
import "../../App.css"
import { addHouseActionCreater, updateNewHousesTextActionCreater,setHouseActionCreater,DeleteHouseActionCreater  } from "../../redux/store";
import Services from "./Services";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import React, { useEffect } from "react";
import { setHouse } from "../../redux/store";


let ServicesContainer = (props) => {
  useEffect (()=> {
       
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


    return ()=> {
      console.log ("Я пропал")
    }
  },[]);

return <Services {...props}/>;
}


function mapStateToProps(state){
  return {
    housesPage:state.housesPage
  }
}; 

function mapDispatchToProps (dispatch) {
  return {
      addHouse:()=>{
      dispatch(addHouseActionCreater())
    },
    updateNewHousesText:(newHouseName,newHouseDescription)=> {
      dispatch (updateNewHousesTextActionCreater(newHouseName,newHouseDescription))
    },
    setHouse:(houses)=> {
      dispatch(setHouseActionCreater(houses))
    },
    deleteHouse:(id)=> {
      dispatch(DeleteHouseActionCreater(id));
    }
  }
}
let AuthRedirect = withAuthRedirect (ServicesContainer)
export default connect(mapStateToProps,mapDispatchToProps)(AuthRedirect);

