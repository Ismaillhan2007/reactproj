const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const SET_HOUSE = "SET_HOUSE";
const DELETE_HOUSE = "DELETE_HOUSE";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
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
      isLoad:true
      };

const housesReducer = (state = initialState,action)=> {
    switch(action.type) {
        case ADD_HOUSE: {
          let postData = {
              name:state.newHouseName,
              description:state.newHouseDescription,
              image: "./images/House1.png",
              id: state.houses.length+1, 
              }
          fetch("https://6605b4f9d92166b2e3c2a359.mockapi.io/houses/v1/houses", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          })
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
              return {
                ...state,
                houses:[...state.houses,postData],
                newHouseName: "",
                newHouseDescription: "",

              }
            }
        case UPDATE_NEW_HOUSES_TEXT: {
          return {
            ...state,
            newHouseName:action.newHouseNameText 
          }   
        }
       
        case TOGGLE_PRELOADER  : {
          return {...state,isLoad:action.status}
        }
        case SET_HOUSE: {
          return {
            ...state,
            houses:action.houses,
          }
        }

        case DELETE_HOUSE:{
          fetch(`https://6605b4f9d92166b2e3c2a359.mockapi.io/houses/v1/houses/${action.id}`,{
            method:'DELETE',
          })
          .then(function(response){
            if (!response.ok){
              throw new Error("Ошибка HTTP,статус"+ response.status);
            }
            console.log ("Дом успешно удален");
          })
          .catch (function(error){
            console.error ("Произошла ошибка:",error)
          });
          const filteredhouses = state.houses.filter(house=>house.id !==action.id);
          return {
            ...state,
            houses:filteredhouses
          };
        }

        default:
          return state;
    } 

}
export const togglePreloader =(status)=> ({type:TOGGLE_PRELOADER,status:status})

export const addHouse = ()=> ({type: ADD_HOUSE});

export const updateNewHousesText = (newHouseName)=>({type: UPDATE_NEW_HOUSES_TEXT,newHouseNameText: newHouseName})

export const setHouse = (houses)=>({type:SET_HOUSE,house:houses})

export const DeleteHouse = (id)=>({type:DELETE_HOUSE,id:id})

export default housesReducer;