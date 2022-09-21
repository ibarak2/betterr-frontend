import { Routes, Route, useNavigate } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import { GigDataTable } from "../cmps/gig-data-table"
import { useDispatch, useSelector } from "react-redux"
import { toggleIsBuyer } from "../store/user.actions"

export const BackOfficeApp = ({ header }) => {
  const navigate = useNavigate()
  const isBuyer = useSelector((state) => state.userModule.isBuyer)
  const tableByUserState = useSelector(
    (state) => state.userModule.tableByUserState
  )
  const dispatch = useDispatch()
  const ToggleUserState = () => {
    console.log("isBuyer", isBuyer)
    dispatch(toggleIsBuyer())
    navigate("active-orders")
  }
  if (!tableByUserState) return <div>Loading...</div>
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BackOffice header={header} ToggleUserState={ToggleUserState} />
        }
      >
        {tableByUserState.routes.map((route) => (
          <Route
            key={route.path}
            element={<GigDataTable title={route.label} />}
            path={route.path}
          />
        ))}
      </Route>
    </Routes>
  )
}
