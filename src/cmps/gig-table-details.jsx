import { useEffect, useState } from "react"
import { SmallModal } from "./small-modal"
import { UserAvatar } from "./user-avatar"


export function GigTableDetails({ order, isBuyer, onAccept, onCancel, onReady, onDelivered }) {
  const [open, setOpen] = useState(false)
  const [statusStyle, setStatusStyle] = useState('')

  const onSelect = () => {
    setOpen(false)
  }
  const handleOpenModal = () => {
    setOpen(true)
  }

  useEffect(() => {
    order.status == 'pending' && setStatusStyle('status-pending')
    order.status == 'in-progress' && setStatusStyle('status-in-progress')
    order.status == 'ready' && setStatusStyle('status-ready')
    order.status == 'completed' && setStatusStyle('status-completed')
    order.status == 'cancelled' && setStatusStyle('status-cancelled')
  }, [order.status])

  // if (!order)
  //   return <div className="table-details table-row-header">No active</div>

  return (
    <div className="flex align-center table-details table-row-header gig-table-details">
      {!isBuyer && (
        <div className="subheader backoffice-checkbox">
          <input type="checkbox" />
        </div>
      )}
      <div className="flex align-center subheader subheader-one user-details-container">
        <h3 className="buyer-name">{isBuyer ? order.seller.fullname : order.buyer.fullname}</h3>
        <p className="buyer-name">{order.gig.title}</p>
      </div>
      <div className="flex subheader due-on">
        <p className="p-due">Due</p>
        <p className="p-date">01/10</p>
        </div>
      <div className="subheader backoffice-gig-price">
        {"$"}
        {order.gig.price}
      </div>
      <div className={`subheader backoffice-gig-status ${statusStyle}`}>{order.status}</div>
      <div className="flex column subheader backoffice-btns">
        {!isBuyer && order.status === 'pending' && <button onClick={() => onAccept(order)}>Accept</button>}
        {!isBuyer && order.status === 'in-progress' && <button onClick={() => onReady(order)}>Ready</button>}
        {isBuyer && order.status === 'ready' && <button onClick={() => onDelivered(order)}>Delivered</button>}
        {!(order.status === 'cancelled' || order.status === 'completed') && <button className="cancel-btn" onClick={() => {
          // debugger
          onCancel(order)
        }}>Cancel</button>}
      </div>
    </div>
  )
}
