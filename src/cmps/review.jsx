import ReactStars from 'react-stars'




export const Review = ({ review }) => {




    return (
        <div className='review'>
            <div className="user-info">
                <img src={review.by.imgUrl}></img>
                <b>{review.by.fullname}</b>
            </div>
            <div className="review-details">
                <div className='review-stars-details flex align-center'>
                    <div><ReactStars
                        value={review.rate}
                        count={5}
                        size={24}
                        color2={'#ffd700'}
                        edit={false}
                    /></div>
                    <span> | </span>
                    <time>1 month ago</time>
                </div>
                <p>{review.txt}</p>
            </div>
            <hr />
        </div>
    )
}