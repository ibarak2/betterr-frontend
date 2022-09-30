import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import { GigDataTable } from "../cmps/gig-data-table"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { loadOrders, setOrderStatus } from "../store/order.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { socketService, SOCKET_EVENT_ORDER_CHANGE_STATUS } from "../services/socket.service"

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
    socketService.on("on-order-changed-status", (data) => {
      console.log("data", data);
      if (data.status === 'cancelled') {
        showErrorMsg(data.txt)
      } else if (data.status === 'completed') {
        showSuccessMsg(data.txt)
      } else {
        showSuccessMsg(data.txt)
      }

      dispatch(setOrderStatus(data.orderId, data.status))
    })
    socketService.on('new-order-recieved', () => {
      showSuccessMsg('New Order Recieved!')
      onLoadOrders()
    })

    // return socketService.off("on-order-changed-status")
  }, [])

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
      socketService.emit(SOCKET_EVENT_ORDER_CHANGE_STATUS, miniOrder)
      dispatch(setOrderStatus(order._id, "in-progress"))
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
      socketService.emit(SOCKET_EVENT_ORDER_CHANGE_STATUS, miniOrder)
      dispatch(setOrderStatus(order._id, "ready"))
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
      socketService.emit(SOCKET_EVENT_ORDER_CHANGE_STATUS, miniOrder)
      dispatch(setOrderStatus(order._id, "completed"))
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
      socketService.emit(SOCKET_EVENT_ORDER_CHANGE_STATUS, miniOrder)
      dispatch(setOrderStatus(order._id, "cancelled"))
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
