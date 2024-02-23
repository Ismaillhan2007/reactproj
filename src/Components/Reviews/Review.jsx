import{addCommentActionCreater,updateNewCommentActionCreater} from './../../redux/store';
import './../../App.css';
import './Review.css';
import React from 'react';


let Reviews = (props)=> {
    const newReview = React.useRef();
    console.log(props)


    let addReview = ()=> {
        props.dispatch(addCommentActionCreater())
    }
    
    let UpdateNewReviewText = () => {
        props.dispatch(updateNewCommentActionCreater(newReview.current.value))
    }
    
    
    return (
        <div className='Reviews'>
            <div className='Reviews_form'>
                <textarea ref={newReview} value={props.state.newReview} onChange={UpdateNewReviewText}></textarea>
                <button onClick={addReview}>AddReview</button>
            </div>
            {
                props.state.reviews.map((review)=>(
                    <div className='review_block' key={review.id}>
                        <p>{review.review}</p>
                    </div>
                ))
            }
        </div>
    )
}


export default Reviews;