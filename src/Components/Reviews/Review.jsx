   
import './../../App.css';
import './Review.css';
import React from 'react';

let Reviews = (props)=> {
    const review = React.useRef();

    let addReview = ()=> {
        props.addReview();
        review.current.value = "";
    }
    
    let UpdateNewReviewText = () => {
        props.UpdateNewReviewText(review.current.value)
    }
    return (
        <div className='Review'>
            <div className='Reviews_form'>
                <textarea ref={review} value={props.newReview} onChange={UpdateNewReviewText}></textarea>
                <button onClick={addReview}>AddReview</button>
            </div>
            {
                props.reviewsPage.reviews.map((newReviews)=>(
                    <div className='review_block' key={newReviews.id}>
                        <p>{newReviews.review}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Reviews;