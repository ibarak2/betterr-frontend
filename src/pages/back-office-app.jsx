import { Routes, Route, useNavigate } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import { GigDataTable } from "../cmps/gig-data-table"
import { useDispatch, useSelector } from "react-redux"
import { toggleIsBuyer } from "../store/user.actions"
import { useEffect } from "react"
import { httpService } from "../services/http.service"
import { orderService } from "../services/order.service"
import { loadOrders, setOrderStatus } from "../store/order.actions"

export const BackOfficeApp = ({ header }) => {
  const navigate = useNavigate()
  const isBuyer = useSelector((state) => state.userModule.isBuyer)
  const tableByUserState = useSelector(
    (state) => state.userModule.tableByUserState
  )
  const dispatch = useDispatch()

  useEffect(() => {
    onLoadOrders()
  }, [isBuyer])

  const onLoadOrders = () => {
    dispatch(loadOrders(isBuyer))
  }

  const ToggleUserState = () => {
    console.log("isBuyer", isBuyer)
    dispatch(toggleIsBuyer())
    navigate("active-orders")
  }

  const onAccept = () => {
    console.log("Acc");
  }

  const onCancel = (orderId) => {
    dispatch(setOrderStatus(orderId, 'canceled'))

  }

  const onReady = () => {
    console.log("rea");

  }

  const onDelivered = () => {
    console.log("deli");

  }
  if (!tableByUserState) return <div>Loading...</div>
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BackOffice
            header={header}
            ToggleUserState={ToggleUserState}

          />
        }
      >
        {tableByUserState.routes.map((route) => (
          <Route
            key={route.path}
            element={<GigDataTable
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
