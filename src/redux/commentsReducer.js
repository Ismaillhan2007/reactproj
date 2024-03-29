const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_NEW_COMMENT_TEXT = "UPDATE_NEW_COMMENT_TEXT";
let initialState = {    
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
        
};
const   commentsReducer = (state = initialState,action)=> {
    switch(action.type) {
        case ADD_COMMENT: {
            let newReviews={
                review: state.newReviewsName,
                id: state.reviews.length+1,
            }
            return {
              ...state,
              reviews:[...state.reviews,newReviews],
              newReviewsName: "",

            }
        } 
        case UPDATE_NEW_COMMENT_TEXT: {
          return {
            ...state,
            newReviewsName:action.newReviewsNameText
          }
        }
        default:
          return state;

    }
}
export const addCommentActionCreater = ()=>({type:ADD_COMMENT})

export const updateNewCommentActionCreater = (newReviewsName) =>  ({type: UPDATE_NEW_COMMENT_TEXT, newReviewsNameText: newReviewsName})

export default commentsReducer;