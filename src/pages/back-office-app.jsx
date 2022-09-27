import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import { GigDataTable } from "../cmps/gig-data-table"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { loadOrders, setOrderStatus } from "../store/order.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { socketService, SOCKET_EVENT_ORDER_ACCEPTED, SOCKET_EVENT_ORDER_CANCELLED, SOCKET_EVENT_ORDER_DELIVERED, SOCKET_EVENT_ORDER_READY } from "../services/socket.service"

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

  useEffect(() => {
    socketService.on("on-order-accepted", (data) => {
      dispatch(setOrderStatus(data.orderId, "in-progress"))
      showSuccessMsg(data.txt)
    })
    socketService.on("on-order-ready", (data) => {
      dispatch(setOrderStatus(data.orderId, "ready"))
      showSuccessMsg(data.txt)
    })
    socketService.on("on-order-delivered", (data) => {
      dispatch(setOrderStatus(data.orderId, "completed"))
      showSuccessMsg(data.txt)
      // onLoadOrders()
    })
    socketService.on("on-order-cancelled", (data) => {
      dispatch(setOrderStatus(data.orderId, "cancelled"))
      showErrorMsg(data.txt)
      // onLoadOrders()
    })

    // return socketService.off("on-order-accepted", "on-order-ready", "on-order-delivered", "on-order-cancelled")
  }, [])

  const onLoadOrders = () => {
    let filterBy = window.location.pathname
    filterBy = filterBy.split('/manage-orders/').pop()
    dispatch(loadOrders({ isBuyer, filterBy }))
  }

  const ToggleUserState = () => {
    //dispatch(toggleIsBuyer())
    setIsBuyer(!isBuyer)
  }

  // on order accepted
  const onAccept = async (order) => {
    const miniOrder = {
      userId: order.buyer._id,
      _id: order._id
    }

    socketService.emit(SOCKET_EVENT_ORDER_ACCEPTED, miniOrder)
    dispatch(setOrderStatus(order._id, "in-progress"))

    showSuccessMsg("Order Accepted")
  }

  // on order ready
  const onReady = async (order) => {
    const miniOrder = {
      userId: order.buyer._id,
      _id: order._id
    }

    socketService.emit(SOCKET_EVENT_ORDER_READY, miniOrder)
    dispatch(setOrderStatus(order._id, "ready"))

    showSuccessMsg("Order is Ready")
  }

  // on delivered order
  const onDelivered = async (order) => {
    const miniOrder = {
      userId: order.seller._id,
      _id: order._id
    }

    socketService.emit(SOCKET_EVENT_ORDER_DELIVERED, miniOrder)
    dispatch(setOrderStatus(order._id, "completed"))
    showSuccessMsg("Order Delivered")
    // onLoadOrders()
  }

  // on cancel order
  const onCancel = (order) => {
    try {

      const miniOrder = {
        userId: isBuyer ? order.seller._id : order.buyer._id,
        _id: order._id
      }

      socketService.emit(SOCKET_EVENT_ORDER_CANCELLED, miniOrder)
      dispatch(setOrderStatus(order._id, "cancelled"))
      showErrorMsg("Order Canceled")
      // onLoadOrders()
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
