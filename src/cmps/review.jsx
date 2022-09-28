import ReactStars from 'react-stars'
import { utilService } from '../services/util.service'




export const Review = ({ review }) => {




    return (
        <div className='review'>
            <div className="user-info">
                <img src={review.imgUrl}></img>
                <div className='flex column'>

                    <b>{review.fullname}</b>
                    <div className='review-stars-details flex align-center'>
                        <div><ReactStars
                            value={review.rate}
                            count={5}
                            size={22}
                            color2={'#FFB33E'}
                            edit={false}
                        /></div>
                        <span className='seperator'> | </span>
                        <time>{utilService.getReviewDate(review.createdAt)}</time>
                    </div>
                </div>
            </div>
            <div className="review-details">
                <p>{review.txt}</p>
            </div>
            <hr />
        </div>
    )
}