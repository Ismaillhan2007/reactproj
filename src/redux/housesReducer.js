const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const SET_HOUSE = "SET_HOUSE";
let initialState = {
    
        houses: [
          // {
          //   name: "Из бетона",
          //   image: "./images/House1.png",
          //   id: 1,
          //   description: ""
          // },
          // {
          //   name: "Из кирпича",
          //   image: "./images/House2.png",
          //   id: 2,
          //   description: ""
          // },
          // {
          //   name: "Из дерево",
          //   image: "./images/House3.png",
          //   id: 3,
          //   description: ""
          // },
      ],
      newHouseName: "",
      newHouseDescription: "",
      
      };


const   housesReducer = (state = initialState,action)=> {
    switch(action.type) {
        case ADD_HOUSE: {
            let newHouse = {
                name:state.newHouseName,
                description:state.newHouseDescription,
                image: "./images/House1.png",
                id: state.houses.length+1,
              } 
              return {
                ...state,
                houses:[...state.houses,newHouse],
                newHouseName: "",
                newHouseDescription: "",

              }
            }
        case UPDATE_NEW_HOUSES_TEXT: {
          return {
            ...state,
            newHouseName:action.newHouseNameText ,
            newHouseDescription:action.newHouseDescriptionText
          }   
        }
        case SET_HOUSE: {
          return {
            ...state,
            houses:action.houses,
          }
        }
        default:
          return state;
    } 

}
export const addHouseActionCreater = ()=> ({type: ADD_HOUSE});

export const updateNewHousesTextActionCreater = (newHouseName,newHouseDescription)=>({type: UPDATE_NEW_HOUSES_TEXT,newHouseNameText: newHouseName,newHouseDescriptionText:  newHouseDescription})

export const setHouse = (houses)=>({type:SET_HOUSE,house:houses})


export default housesReducer;