import { Filter } from "./filter"
import { GigPreview } from "./gig-preview"
export const GigList = () => {
  const gigs = ["1", "2", "3", "4", "5", "6"]
  return (
    <div className="gig-list" style={{display:'flex',}}>
      <Filter />
      <div className="gigs">
        {gigs.map((gig) => (
          <GigPreview />
        ))}
      </div>
    </div>
  )
}
