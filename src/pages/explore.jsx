import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GigList } from "../cmps/gig-list"
import { loadGigs } from "../store/gig.actions"

export const Explore = () => {

    const gigs = useSelector((state) => state.gigModule.gigs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGigs())
        console.log("GIGS", gigs)
    }, [])




    if (!gigs) return <h1>Loading...</h1>
    return (
        <div className='explore'>
            Hello from Explore page
            <GigList gigs={gigs} />
        </div>
    )
}