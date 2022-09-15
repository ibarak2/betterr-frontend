import { Routes, Route } from "react-router"

import routes from "./routes"

import { AppHeader } from "./cmps/app-header"
import { AppFooter } from "./cmps/app-footer"
<<<<<<< HEAD
import { UserDetails } from "./pages/user-details"
import { GigPreview } from "./cmps/gig-preview"
=======
>>>>>>> c7c2ce3b22a0218eca8ed6ede68f3da20ecf75f7

// export class RootCmp extends React.Component {
export function RootCmp() {
  return (
    <div>
      <AppHeader />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={true}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
      <AppFooter />
      <GigPreview />
    </div>
  )
}
