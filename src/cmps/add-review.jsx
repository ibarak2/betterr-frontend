

export function AddReview({ onAddReview, imgUrl }) {



    return (
        <form onSubmit={(ev) => onAddReview(ev)} className="add-review-form">
            <img src={`${imgUrl}`} alt='avatar' />
            <input type="text" placeholder="Add a review" />
            <button>REVIEW</button>
        </form>
    )
}