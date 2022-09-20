import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { EditBox } from "../cmps/edit-box"




export const Edit = () => {

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const gigId = params.id
        console.log(gigId);
    }, [])

    const onSubmitEdit = (gig) => {
        console.log(gig);
    }


    return (
        <div className='edit'>
            <EditBox onSubmitEdit={onSubmitEdit} />
        </div>
    )
}