import { UserAvatar } from "./user-avatar"
export function GigTableDetails({ gig }) {
  if (gig)
    return <div className="table-details table-row-header">No active</div>

  return (
    <div className="flex table-details table-row-header gig-table-details">
      <span className="user-avatar-container">
        <UserAvatar
          height="34"
          imgUrl={"https://api.lorem.space/image/face?w=150&h=150"}
        />
      </span>
    </div>
  )
}
