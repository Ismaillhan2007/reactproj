import "./Services.css";
import "../../App.css"
import { addHouse, updateNewHousesText,updateNewHousesDescription,setHouse,DeleteHouse,togglePreloader  } from "../../redux/store";
import Services from "./Services";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import React, { useEffect } from "react";


let ServicesContainer = (props) => {
  useEffect (()=> {
    props.togglePreloader(true)
    fetch("https://6605b4f9d92166b2e3c2a359.mockapi.io/houses/v1/houses")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      props.setHouse('Ответ от сервера:', data);
      props.togglePreloader(false);
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

// function mapDispatchToProps (dispatch) {
//   return {
//       addHouse:()=>{
//       dispatch(addHouseActionCreater())
//     },
//     updateNewHousesText:(newHouseName)=> {
//       dispatch (updateNewHousesTextActionCreater(newHouseName))
//     },
//     updateNewHousesDescriptionActionCreater:(newHouseDescription)=> {
//       dispatch (updateNewHousesDescriptionActionCreater(newHouseDescription))
//     },
//     setHouse:(houses)=> {
//       dispatch(setHouseActionCreater(houses))
//     },
//     deleteHouse:(id)=> {
//       dispatch(DeleteHouseActionCreater(id));
//     },
//     togglePreloader:(status) => {
//       dispatch (togglePreloaderActionCreater(status))
//     }
//   }
// }
let AuthRedirect = withAuthRedirect (ServicesContainer)
export default connect(mapStateToProps,{
  addHouse
,
updateNewHousesText
,
updateNewHousesDescription
,
setHouse
,
DeleteHouse
,
togglePreloader
}
)(AuthRedirect);

