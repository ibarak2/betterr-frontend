import { useEffectUpdate } from "../hooks/useEffectUpdate"
import { Review } from "./review"




export const ReviewList = ({ reviews }) => {
    console.log("here1");
    useEffectUpdate(() => {

    }, [reviews])

    { console.log("reviews here:", reviews) }
    return (
        <div className="review-list">
            {reviews.map(review => {
                return <Review key={review.id} review={review} />
            })}
        </div>
    )
}