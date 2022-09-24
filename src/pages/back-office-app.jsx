import { Routes, Route, useNavigate } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import { GigDataTable } from "../cmps/gig-data-table"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { loadOrders, setOrderStatus } from "../store/order.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"

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

  const onCancel = (orderId) => {
    dispatch(setOrderStatus(orderId, "canceled"))
    showErrorMsg("Order Canceled")
  }

  const onReady = (orderId) => {}

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
