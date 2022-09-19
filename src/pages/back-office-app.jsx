import { Routes, Route } from "react-router-dom"
import { BackOffice } from "../cmps/back-office"
import backofficeRoutes from "../backoffice.routes"
export const BackOfficeApp = () => {
  return (
    <Routes>
      <Route path="/" element={<BackOffice />}>
        {backofficeRoutes.map((route) => (
          <Route key={route.path} element={route.component} path={route.path} />
        ))}
      </Route>
    </Routes>
  )
}
