import Reviews from './Review';
import './Review.css';
import { addCommentActionCreater, updateNewCommentActionCreater } from "../../redux/store";
import "../../App.css";
import { connect } from 'react-redux';

function mapStateToProps (state) {
    return{
    reviewsPage: state.reviewsPage
    }
}

function mapDispatchToProps (dispatch) {
   return { addReview: ()=> {
        dispatch(addCommentActionCreater())
    },
    UpdateNewReviewText: (text)=> {
        dispatch(updateNewCommentActionCreater(text))
    }
    }
}

let ReviewsContainer = connect (mapStateToProps,mapDispatchToProps) (Reviews)
export default ReviewsContainer;