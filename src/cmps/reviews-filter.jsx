import { useState } from "react"
import { useEffectUpdate } from "../hooks/useEffectUpdate"




export const ReviewsFilter = ({ onChangeSortBy }) => {

    const [sortBy, setSortBy] = useState('')

    useEffectUpdate(() => {
        onChangeSortBy(sortBy)
    }, [sortBy])

    const handleChange = ({ target }) => {
        setSortBy(target.value)
    }

    return (
        <div className="reviews-filter">
            <label htmlFor="review-filter">Sort By</label>
            <select name="reviews" id="reviews" className="reviews" onChange={handleChange}>
                <option value="createdAt">Most recent</option>
                <option value="rate">Rating</option>
            </select>
        </div>
    )
}