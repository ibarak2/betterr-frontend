import { Link, Outlet } from "react-router-dom"

export function BackOfficeInterface() {
  return (
    <div className="main-container back-office">
      <div className="max-width-container manage-interface">
        <section className="sub-header">
          <h1>Gigs</h1>
          {/* <form>
        <label htmlFor="">Get breifs</label>
        <input type="checkbox" name="get-breifs" id="get-breifs" />

        <label htmlFor="">Accept Custom Orders</label>
        <input type="checkbox" name="custom-orders" id="custom-orders" />
      </form> */}
        </section>
        <nav className="mini-nav">
          <ul className="clean-list dash-nav">
            <Link to="active-gigs" className="mini-link">
              active
            </Link>
            <Link to="gig-pending-approval" className="mini-link">
              pending approval
            </Link>
            <Link to="gig-requires-modification" className="mini-link">requires modification</Link>
            <Link to="gig-draft" className="mini-link">draft</Link>
            <Link to="gig-denied" className="mini-link">denied</Link>
            <Link to="gig-paused" className="mini-link">paused</Link>
          </ul>
          <button className="add-gig-btn">create a new gig</button>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}
