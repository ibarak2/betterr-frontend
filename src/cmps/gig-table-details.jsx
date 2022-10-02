import { useEffect, useState } from "react"
import { SmallModal } from "./small-modal"
import { UserAvatar } from "./user-avatar"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { utilService } from "../services/util.service.js"

export function GigTableDetails({
  order,
  isBuyer,
  onAccept,
  onCancel,
  onReady,
  onDelivered,
  handleOpenMenu,
  menuOpen,
}) {
  const [open, setOpen] = useState(false)
  const [statusStyle, setStatusStyle] = useState("")

  const onSelect = () => {
    setOpen(false)
  }
  const handleOpenModal = () => {
    setOpen(true)
  }

  useEffect(() => {
    order.status == "pending" && setStatusStyle("status-pending")
    order.status == "in-progress" && setStatusStyle("status-in-progress")
    order.status == "ready" && setStatusStyle("status-ready")
    order.status == "completed" && setStatusStyle("status-completed")
    order.status == "cancelled" && setStatusStyle("status-cancelled")
  }, [order.status])

  return (
    <div className=" flex align-center gig-table-details">
      <div className="flex align-center order-details">
        <img src={order.gig.imgUrl} className="gig-details-img" />
        <div className="flex column order-text">
          <p className="subheader">
            {isBuyer ? order.seller.fullname : order.buyer.fullname}
          </p>
          <p className="info">{order.gig.title}</p>
        </div>
      </div>

      <div className="flex details-container">
        <div className="flex ">
          <div className="flex column order-text recieved">
            <p className="subheader">Recieved</p>
            <p className="info">{`${new Date(order.createdAt).toLocaleDateString()} \n${utilService.getClockTime(order.createdAt)}`}</p>
          </div>

          <div className="flex column order-text due-on">
            <p className="subheader">Due On</p>
            <p className="info">{`${utilService.getOrderDate(order.createdAt, order.gig.daysToMake)} \n${utilService.getClockTime(order.createdAt)}`}</p>
          </div>
        </div>

        <div className="flex status">
          <div className="flex column order-text price">
            <p className="subheader">price</p>
            <p className="info">${`${order.gig.price}`}</p>
          </div>

          <div className="flex column order-text order-status">
            <p className="subheader">Order Status</p>
            <p className="info">{order.status}</p>
          </div>
        </div>
      </div>

      <div className="flex align-center controls">
        {!isBuyer && order.status === "pending" && (
          <button onClick={() => onAccept(order)}>Accept</button>
        )}
        {!isBuyer && order.status === "in-progress" && (
          <button className="ready-btn" onClick={() => onReady(order)}>Ready</button>
        )}
        {isBuyer && order.status === "ready" && (
          <button onClick={() => onDelivered(order)}>Delivered</button>
        )}
        {!(order.status === "cancelled" || order.status === "completed") && (
          <button
            className="cancel-btn"
            onClick={() => {
              onCancel(order)
            }}
          >
            Cancel
          </button>
        )}
        <span onClick={menuOpen ? undefined : () => handleOpenMenu()}>
          <MoreHorizIcon />
        </span>
      </div>

      <div
        style={{ display: `${menuOpen ? "" : "none"}` }}
        className="menu"
      ></div>
    </div>
  )
}
