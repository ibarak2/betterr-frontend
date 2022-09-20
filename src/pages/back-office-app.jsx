import { Routes, Route } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import {
  backofficeGigRoutes,
  backofficeBuyerOrderRoutes,
  backofficeSellerOrderRoutes,
} from "../backoffice.routes"

export const BackOfficeApp = ({ header }) => {
  return (
    <Routes>
      <Route path="/" element={<BackOffice header={header} />}>
        {backofficeGigRoutes.map((route) => (
          <Route key={route.path} element={route.component} path={route.path} />
        ))}
      </Route>
    </Routes>
  )
}
