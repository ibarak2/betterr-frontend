import { Review } from "./review"

export const ReviewList = ({ reviews }) => {

    return (
        <div className="review-list">
            {reviews.map((review, idx) => {
                return <Review key={idx} review={review} />
            })}
        </div>
    )
}