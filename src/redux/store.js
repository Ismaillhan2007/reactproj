
import housesReducer from "./housesReducer";
import commentsReducer from "./commentsReducer";

const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_NEW_COMMENT_TEXT = "UPDATE_NEW_COMMENT_TEXT";
const SET_HOUSE = "SET_HOUSE";
const DELETE_HOUSE = "DELETE_HOUSE";


let store = {
    _state: {
        housesPage : {
          houses: [
              {
                name: "Из бетона",
                image: "./images/House1.png",
                id: 1,
                description: ""
              },
              {    
                name: "Из кирпича",
                image: "./images/House2.png",
                id: 2,
                description: ""
              },
            {
              name: "Из дерево",
              image: "./images/House3.png",
              id: 3,
              description: ""
            },    
        ],
        newHouseName: "",
        newHouseDescription: "",
        },
          reviewsPage :{
            
          reviews:[
            {
              review: "Из газобетона",
              id: 1,
          },
            {
              id:2,
              review:"Hello,i like it",
            
            },
            {
              id:3,
              review:"Good site",
              
            }
          ],

          newReviewsName: "",
        }
  
    },

    getState(){
      return this._state;
    },

    _callSubscribe(){
      console.log("state changed");
    },

    subscribe(observer){
      this._callSubscribe = observer;  
      return ()=> {

      };
    },

    dispatch(action){
      this.getState().housesPage = housesReducer( this.getState().housesPage,action)
      this.getState().reviewsPage = commentsReducer( this.getState().reviewsPage,action)
    }
  }



export const addHouseActionCreater = ()=> ({type: ADD_HOUSE});

export const updateNewHousesTextActionCreater = (newHouseName,newHouseDescription)=>({type: UPDATE_NEW_HOUSES_TEXT,newHouseNameText: newHouseName,newHouseDescriptionText:  newHouseDescription})

export const addCommentActionCreater = ()=>({type:ADD_COMMENT})

export const updateNewCommentActionCreater = (newReviewsName) =>  ({type: UPDATE_NEW_COMMENT_TEXT, newReviewsNameText: newReviewsName})

export const setHouseActionCreater = (houses)=>({type:SET_HOUSE,house:houses})

export const setHouse = (houses) => ({ type: 'SET_HOUSE', house: houses });

export const DeleteHouseActionCreater = (id)=>({type:DELETE_HOUSE,id:id})


export default store;