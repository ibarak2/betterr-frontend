import { Routes, Route, useNavigate } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import { GigDataTable } from "../cmps/gig-data-table"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { loadOrders, setOrderStatus, setOrderStatusLocal } from "../store/order.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { socketService } from "../services/socket.service"

export const BackOfficeApp = () => {

  const navigate = useNavigate()
  const [isBuyer, setIsBuyer] = useState(false)
  const tableByUserState = useSelector(
    (state) => state.userModule.tableByUserState
  )
  const orders = useSelector((state) => state.orderModule.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    onLoadOrders()
  }, [isBuyer, window.location.pathname])

  const onLoadOrders = () => {
    let filterBy = window.location.pathname
    filterBy = filterBy.split('/manage-orders/').pop()
    dispatch(loadOrders({ isBuyer, filterBy }))
  }

  const ToggleUserState = () => {
    setIsBuyer(!isBuyer)
  }

  // on order accepted
  const onAccept = async (order) => {
    const miniOrder = {
      userId: order.buyer._id,
      _id: order._id,
      txt: "Your Order Accepted",
      status: "in-progress"
    }
    try {
      dispatch(setOrderStatus(miniOrder))
      showSuccessMsg("Order Accepted")
    } catch (err) {
      console.log(err);
    }
  }

  // on order ready
  const onReady = async (order) => {
    const miniOrder = {
      userId: order.buyer._id,
      _id: order._id,
      txt: "Your Order is Ready",
      status: "ready"
    }

    try {
      dispatch(setOrderStatus(miniOrder))
      showSuccessMsg("Order is Ready")
    } catch (err) {
      console.log(err);
    }
  }

  // on delivered order
  const onDelivered = async (order) => {
    const miniOrder = {
      userId: order.seller._id,
      _id: order._id,
      txt: "Order Delivered",
      status: "completed"
    }
    try {
      dispatch(setOrderStatus(miniOrder))
      showSuccessMsg("Order Delivered")
    } catch (err) {
      console.log(err);
    }
  }

  // on cancel order
  const onCancel = async (order) => {
    const miniOrder = {
      userId: isBuyer ? order.seller._id : order.buyer._id,
      _id: order._id,
      txt: "Order Cancelled",
      status: "cancelled"
    }
    try {
      dispatch(setOrderStatus(miniOrder))
      showErrorMsg("Order Canceled")
    } catch (err) {
      console.log(err);
    }
  }


  if (!tableByUserState) return <div>Loading...</div>
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BackOffice
            isBuyer={isBuyer}
            ToggleUserState={ToggleUserState}
          />
        }
      >
        {tableByUserState.routes.map((route) => (
          <Route
            key={route.path}
            element={
              <GigDataTable
                orders={orders}
                isBuyer={isBuyer}
                title={route.label}
                onAccept={onAccept}
                onCancel={onCancel}
                onReady={onReady}
                onDelivered={onDelivered}
              />
            }
            path={route.path}
          />
        ))}
      </Route>
    </Routes >
  )
}
