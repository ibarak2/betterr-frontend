import { useForm } from "../hooks/useForm"


export function AddReview() {

    const newReview = useForm(value)
    const onSubmitReview = () => {

    }

    return (
        <form onSubmit={console.log('added review')} className="add-review-form">
            <img src='https://res.cloudinary.com/dalkffrhf/image/upload/v1663780105/Fiverr-Sprint-4/imgs/No_Image_Available_dio7te.jpg' alt='avatar' />
            <input type="text" placeholder="Add a review" />
            <button onClick={() => onSubmitEdit(value)}>REVIEW</button>
        </form>
    )
}