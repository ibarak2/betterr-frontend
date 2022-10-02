import { useSelector } from "react-redux"
import { GigPreview } from "./gig-preview"

export const GigList = () => {

  const gigs = useSelector((state) => state.gigModule.gigs)

  if (!gigs) return <h1>Loading...</h1>
  return (
    <div className="gig-list">
      {gigs.map((gig) => {
        return <GigPreview key={gig._id} {...gig} />
      })}
    </div>
  )
}
