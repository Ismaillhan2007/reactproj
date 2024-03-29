import "./Services.css";
import "../../App.css"
import { addHouseActionCreater, updateNewHousesTextActionCreater,setHouseActionCreater,DeleteHouseActionCreater  } from "../../redux/store";
import Services from "./Services";
import { connect } from "react-redux";

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

let ServicesContainer = connect(mapStateToProps,mapDispatchToProps)(Services)
export default ServicesContainer;

