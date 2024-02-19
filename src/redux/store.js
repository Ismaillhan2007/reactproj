const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_NEW_COMMENT_TEXT = "UPDATE_NEW_COMMENT_TEXT";
let store = {
    _state: {
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

        reviews:[
          {
            id:1,
            name:"Hello,i like it",
           
          },
          {
            id:2,
            name:"Good site",
            
          }
        ],

        newHouseName: "",
        newHouseDescription: "",
        newReviewsName: "",
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
      if(action.type === ADD_HOUSE){
        let newHouse = {
          name: this.getState().newHouseName,
          description: this.getState().newHouseDescription,
          image: "./images/House1.png",
          id: this.getState().houses.length+1,
        } 
        this.getState().houses.push(newHouse)
        this._callSubscribe(store)
      }
      else if(action.type === UPDATE_NEW_HOUSES_TEXT){
        this.getState().newHouseName = action.newHouseNameText;
        this.getState().newHouseDescription = action.newHouseDescriptionText;
        this._callSubscribe(store);         
      }

      else if(action.type === ADD_COMMENT){
        let newRev={
          review:this.getState().newReview,
          id:this.getState().reviews.length+1,
        }
          this.getState().reviews.push(newRev)
          this._callSubscribe(store);
      }
      else if(action.type ===  UPDATE_NEW_COMMENT_TEXT){
        this.getState().newReviewsName = action.newReviewsNameText;
        this._callSubscribe(store); 
      }
    }
  }



export const addHouseActionCreater = ()=> ({type: ADD_HOUSE});

export const updateNewHousesTextActionCreater = (newHouseName,newHouseDescription)=>({type: UPDATE_NEW_HOUSES_TEXT,newHouseNameText: newHouseName,newHouseDescriptionText:  newHouseDescription})

export const addCommentActionCreater = ()=>({type:ADD_COMMENT})

export const updateNewCommenActionCreater = (newReviewsname) => {return {type: UPDATE_NEW_COMMENT_TEXT, newReviewsNameText: newReviewsName}}

export default store;