import { Routes, Route } from "react-router"

import routes from "./routes"

import { AppHeader } from "./cmps/app-header"
import { AppFooter } from "./cmps/app-footer"
import { UserProfile } from "./pages/user-profile"
import { GigPreview } from "./cmps/gig-preview"

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
      <GigPreview />
      <AppFooter />
    </div>
  )
}