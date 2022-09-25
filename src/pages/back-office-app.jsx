import { Routes, Route, useNavigate } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import { GigDataTable } from "../cmps/gig-data-table"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { loadOrders, setOrderStatus } from "../store/order.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { socketService, SOCKET_EVENT_ORDER_CANCELLED } from "../services/socket.service"

export const BackOfficeApp = ({ header }) => {
  const navigate = useNavigate()
  const [isBuyer, setIsBuyer] = useState(false)
  const tableByUserState = useSelector(
    (state) => state.userModule.tableByUserState
  )
  const orders = useSelector((state) => state.orderModule.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    onLoadOrders()
  }, [isBuyer])

  useEffect(() => {
    socketService.on("on-order-cancelled", (data) => {
      dispatch(setOrderStatus(data.orderId, "canceled"))

      showErrorMsg(data.txt)
    })
    return socketService.off("on-order-cancelled")
  }, [])

  const onLoadOrders = () => {
    dispatch(loadOrders(isBuyer))
  }

  const ToggleUserState = () => {
    //dispatch(toggleIsBuyer())
    setIsBuyer(!isBuyer)
  }

  const onAccept = (orderId) => {
    dispatch(setOrderStatus(orderId, "in-progress"))
    showSuccessMsg("Order Accepted")
  }

  const onCancel = (order) => {
    const miniOrder = {
      userId: isBuyer ? order.seller._id : order.buyer._id,
      _id: order._id
    }

    socketService.emit(SOCKET_EVENT_ORDER_CANCELLED, miniOrder)
    dispatch(setOrderStatus(order._id, "canceled"))

    showErrorMsg("Order Canceled")
  }

  const onReady = (orderId) => { }

  const onDelivered = (orderId) => {
    dispatch(setOrderStatus(orderId, "completed"))
    showSuccessMsg("Order Delivered")
  }
  if (!tableByUserState) return <div>Loading...</div>
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BackOffice
            header={header}
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
    </Routes>
  )
}
