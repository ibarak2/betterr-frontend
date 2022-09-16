



export const Review = ({ review }) => {




    return (
        <div className='review'>
            <div className="user-info">
                <img src={review.by.imgUrl}></img>
                <b>{review.by.fullname}</b>
            </div>
            <div className="review-details">
                <b>{` * `.repeat(review.rate)} {review.rate} </b>
                <span> | </span>
                <time>1 month ago</time>
                <p>{review.txt}</p>
            </div>

        </div>
    )
}