import { useParams } from "react-router-dom";
import "./../../../App.css"
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import HouseDescription from "./HouseDescription";
import withAuthRedirect from "../../HOC/withAuthRedirect";

let HouseDescriptionContainer = (props) => {
    const { id } = useParams();
    const [oneHouse,setOneHouse] = useState ({});
  useEffect (()=> {
    fetch(`https://6605b4f9d92166b2e3c2a359.mockapi.io/houses/v1/houses${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
        setOneHouse(data)
    })
    .catch(error => {
      console.error('Произошла ошибка при выполнении запроса:', error);
    });

  },[]);

return <HouseDescription {...props}oneHouse = {oneHouse}/>;
}


function mapStateToProps(state){
  return {
    housesPage:state.housesPage
  }
}; 

let AuthRedirect = withAuthRedirect (HouseDescriptionContainer)
export default connect(mapStateToProps,{

}
)(AuthRedirect);

