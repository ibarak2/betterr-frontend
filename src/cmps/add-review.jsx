import { useState } from "react";
import ReactStars from "react-stars";


export function AddReview({ onAddReview, imgUrl }) {

    const [review, setReview] = useState({
        txt: '',
        rate: 3,
    })

    const ratingChanged = (newRating) => {
        setReview({ ...review, rate: newRating })
    }

    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value


        setReview({ ...review, [field]: value })
    }

    const onSubmitReview = (ev) => {
        ev.preventDefault()

        onAddReview(review)
        setReview({
            txt: '',
            rate: 3,
        })

    }

    return (
        <form onSubmit={(ev) => onSubmitReview(ev)} className="add-review-form">
            <img src={`${imgUrl}`} alt='avatar' />
            <ReactStars
                value={review.rate}
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#FFB33E'}
                half={false}
            />
            <input name="txt" type="text" placeholder="Add a review" onChange={handleChange} value={review.txt} />
            <button>REVIEW</button>
        </form>
    )
}