import { useState } from "react"
import { SmallModal } from "./small-modal"
import { UserAvatar } from "./user-avatar"

export function GigTableDetails({ order, isBuyer, onAccept, onCancel, onReady, onDelivered }) {
  const onSelect = () => {
    setOpen(false)
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  const [open, setOpen] = useState(false)
  // if (!order)
  //   return <div className="table-details table-row-header">No active</div>

  return (
    <div className="flex align-center table-details table-row-header gig-table-details">
      {!isBuyer && (
        <div className="subheader">
          <input type="checkbox" />
        </div>
      )}
      <div className="flex align-center subheader subheader-one user-details-container">
        {/* <UserAvatar
          height="34"
          imgUrl={"https://api.lorem.space/image/face?w=150&h=150"}
        /> */}
        <h3 className="buyer-name">{isBuyer ? order.seller.fullname : order.buyer.fullname}</h3>
        <p className="buyer-name">{order.gig.title}</p>
      </div>
      <div className="subheader">{"tommorrow"}</div>
      <div className="subheader">
        {"$"}
        {order.gig.price}
      </div>
      <div className="subheader">{order.status}</div>
      <div className="subheader flex column">
        {!isBuyer && order.status === 'pending' && <button onClick={() => onAccept(order._id)}>Accept</button>}
        {isBuyer && order.status === 'in-progress' && <button onClick={() => onDelivered(order._id)}>Delivered</button>}
        {!(order.status === 'canceled' || order.status === 'completed') && <button className="cancel-btn" onClick={() => onCancel(order._id)}>Cancel</button>}
      </div>
    </div>
  )
}
