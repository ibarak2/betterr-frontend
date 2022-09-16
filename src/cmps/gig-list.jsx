import { GigPreview } from "./gig-preview"

export const GigList = ({ gigs }) => {

  return (
    <div className="gig-list">
      {gigs.map((gig) => {
        console.log(gig)
        return <GigPreview key={gig._id} {...gig} />
      })}
    </div>
  )
}
