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

  // if (!order)
  //   return <div className="table-details table-row-header">No active</div>
  console.log(order)

  return (
    // <div className="flex align-center table-details table-row-header gig-table-details">
    //   {/* {!isBuyer && ( */}
    //     <div className="subheader backoffice-checkbox">
    //       {/* <input type="checkbox" /> */}
    //       <img className="backoffice-gig-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1664440647/Fiverr-Sprint-4/imgs/gig%20img/SE-COVER_gaxuhs.jpg" alt="" />
    //     </div>
    //   {/* )} */}
    //   <div className="flex align-center subheader subheader-one user-details-container">
    //     <h3 className="buyer-name">{isBuyer ? order.seller.fullname : order.buyer.fullname}</h3>
    //     <p className="buyer-name">{order.gig.title}</p>
    //   </div>
    //   <div className="flex subheader due-on">
    //     <p className="p-due">Due</p>
    //     <p className="p-date">01/10</p>
    //     </div>
    //   <div className="subheader backoffice-gig-price">
    //     {"$"}
    //     {order.gig.price}
    //   </div>
    //   <div className={`subheader backoffice-gig-status ${statusStyle}`}>{order.status}</div>
    //   <div className="flex column subheader backoffice-btns">
    //     {!isBuyer && order.status === 'pending' && <button onClick={() => onAccept(order)}>Accept</button>}
    //     {!isBuyer && order.status === 'in-progress' && <button onClick={() => onReady(order)}>Ready</button>}
    //     {isBuyer && order.status === 'ready' && <button onClick={() => onDelivered(order)}>Delivered</button>}
    //     {!(order.status === 'cancelled' || order.status === 'completed') && <button className="cancel-btn" onClick={() => {
    //       // debugger
    //       onCancel(order)
    //     }}>Cancel</button>}
    //   </div>
    // </div>

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
        <div className="flex column order-text recieved">
          <p className="subheader">Recieved</p>
          <p className="info">{`${new Date(order.createdAt).toLocaleDateString()} \n${utilService.getClockTime(order.createdAt)}`}</p>
        </div>

        <div className="flex column order-text due-on">
          <p className="subheader">Due On</p>
          <p className="info">{`${utilService.getOrderDate(order.createdAt, order.gig.daysToMake)} \n${utilService.getClockTime(order.createdAt)}`}</p>
        </div>

        <div className="flex column order-text price">
          <p className="subheader">price</p>
          <p className="info">${`${order.gig.price}`}</p>
        </div>

        <div className="flex column order-text order-status">
          <p className="subheader">Order Status</p>
          <p className="info">{order.status}</p>
        </div>
      </div>

      <div className="flex align-center controls">
        {!isBuyer && order.status === "pending" && (
          <button onClick={() => onAccept(order)}>Accept</button>
        )}
        {!isBuyer && order.status === "in-progress" && (
          <button onClick={() => onReady(order)}>Ready</button>
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
