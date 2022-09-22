import { Routes, Route, useNavigate } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import { GigDataTable } from "../cmps/gig-data-table"
import { useDispatch, useSelector } from "react-redux"
import { toggleIsBuyer } from "../store/user.actions"
import { useEffect, useState } from "react"
import { httpService } from "../services/http.service"
import { orderService } from "../services/order.service"
import { loadOrders, setOrderStatus } from "../store/order.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"

export const BackOfficeApp = ({ header }) => {
  const navigate = useNavigate()
  //const isBuyer = useSelector((state) => state.userModule.isBuyer)
  const [isBuyer, setIsBuyer] = useState(false)
  const tableByUserState = useSelector(
    (state) => state.userModule.tableByUserState
  )
  const orders = useSelector(state => state.orderModule.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    onLoadOrders()
  }, [isBuyer])

  const onLoadOrders = () => {
    dispatch(loadOrders(isBuyer))
  }

  const ToggleUserState = () => {
    console.log("isBuyer", isBuyer)
    //dispatch(toggleIsBuyer())
    setIsBuyer(!isBuyer)
    // navigate("active-orders")
  }

  const onAccept = (orderId) => {
    console.log("Acc");
    dispatch(setOrderStatus(orderId, 'in-progress'))
    showSuccessMsg('Order Accepted')
  }

  const onCancel = (orderId) => {
    console.log(orderId, 'cancelllllllll')
    dispatch(setOrderStatus(orderId, 'canceled'))
    showErrorMsg('Order Canceled')
  }

  const onReady = (orderId) => {
    console.log("rea");


  }

  const onDelivered = (orderId) => {
    console.log("deli");
    dispatch(setOrderStatus(orderId, 'completed'))
    showSuccessMsg('Order Delivered')


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
            element={<GigDataTable
              orders={orders}
              isBuyer={isBuyer}
              title={route.label}
              onAccept={onAccept}
              onCancel={onCancel}
              onReady={onReady}
              onDelivered={onDelivered}
            />}
            path={route.path}
          />
        ))}
      </Route>
    </Routes>
  )
}
