import { Filter } from "./filter"
import { GigPreview } from "./gig-preview"
export const GigList = () => {
  return (
    <div className="list">
      <Filter />
      <GigPreview />
    </div>
  )
}
