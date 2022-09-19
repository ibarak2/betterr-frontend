import { NavLink, Outlet } from "react-router-dom"

export function BackOffice() {
  return (
    <div className="main-container full back-office">
      <div className="manage-interface">
        {/* <div className="main-container full back-office">
      <div className="max-width-container manage-interface"> */}
        <section className="sub-header">
          <h1>Gigs</h1>
        </section>
        <nav className="mini-nav">
          <ul className="clean-list dash-nav flex ">
            <li>
              <NavLink to="active-gigs" className="mini-link">
                active
              </NavLink>
            </li>

            <li>
              <NavLink to="gig-pending-approval" className="mini-link">
                pending approval
              </NavLink>
            </li>
            <li>
              <NavLink to="gig-requires-modification" className="mini-link">
                requires modification
              </NavLink>
            </li>
            <li>
              <NavLink to="gig-draft" className="mini-link">
                draft
              </NavLink>
            </li>
            <li>
              <NavLink to="gig-denied" className="mini-link">
                denied
              </NavLink>
            </li>
            <li>
              <NavLink to="gig-paused" className="mini-link">
                paused
              </NavLink>
            </li>
            <li className="mini-link active"></li>
          </ul>
          <a className="add-gig-btn">create a new gig</a>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}
