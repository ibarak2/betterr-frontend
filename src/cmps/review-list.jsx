import { Review } from "./review"




export const ReviewList = ({ reviews }) => {



    return (
        <div className="review-list">
            {reviews.map(review => {
                return <Review review={review} />
            })}
        </div>
    )
}