import { useEffect } from "react"
import { useParams } from "react-router-dom"




export const GigDetails = () => {

    const params = useParams()

    useEffect(() => {
        console.log(params.id);
    }, [])

    return (
        <div className='gig-details'>
            Hello from gig details page
        </div>
    )
}