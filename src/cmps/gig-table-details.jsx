import { useState } from "react"
import { SmallModal } from "./small-modal"
import { UserAvatar } from "./user-avatar"

export function GigTableDetails({ gig, isBuyer }) {
  const onSelect = () => {
    console.log("onSelect")
    setOpen(false)
  }
  const handleOpenModal = () => {
    setOpen(true)
  }
  const [open, setOpen] = useState(false)
  if (gig)
    return <div className="table-details table-row-header">No active</div>

  return (
    <div className="flex align-center table-details table-row-header gig-table-details">
      {!isBuyer && (
        <div className="subheader">
          <input type="checkbox" />
        </div>
      )}
      <div className="flex align-center subheader subheader-one user-details-container">
        <UserAvatar
          height="34"
          imgUrl={"https://api.lorem.space/image/face?w=150&h=150"}
        />
        <h3 className="buyer-name">{"order.buyer.fullname"}</h3>
        <p className="buyer-name">{"order.gig.title"}</p>
      </div>
      <div className="subheader">{"tommorrow"}</div>
      <div className="subheader">
        {"$"}
        {120}
      </div>
      <div className="subheader">{"order.gig.status"}</div>
      <div className="subheader">
        <SmallModal
          list={[
            { value: "cancel order", txt: "cancel order" },
            { value: "contact buyer", txt: "contact buyer" },
            { value: "accept order", txt: "accept order" },
            { value: "decline order", txt: "decline order" },
          ]}
          onSelect={onSelect}
          open={open}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </div>
  )
}
// Title, order.gig.title
// Buyer name, order.buyer.fullname
// Seller Name, order.seller.fullname
// Price, order.gig.price
// Order Created,
// Due on, maybe use moment.js for this
// status, order.gig.status
// Actions
