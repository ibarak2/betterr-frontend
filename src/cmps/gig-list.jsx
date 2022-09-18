import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GigPreview } from "./gig-preview"
import { loadGigs } from "../store/gig.actions"

export const GigList = () => {
  const gigs = useSelector((state) => state.gigModule.gigs)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(loadGigs())
  //   console.log("GIGS", gigs)
  // }, [])
  if (!gigs) return <h1>Loading...</h1>
  return (

    <div className="gig-list">
      {gigs.map((gig) => {
        return <GigPreview key={gig._id} {...gig} />
      })}

    </div>
  )
}
