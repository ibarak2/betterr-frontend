import { Routes, Route } from "react-router-dom"
import { BackOfficeInterface } from "../cmps/back-office-interface"
import backofficeRoutes from "../backoffice.routes"
export const BackOffice = () => {
  return (
    <Routes>
      <Route path="/" element={<BackOfficeInterface />}>
        {backofficeRoutes.map((route) => (
          <Route key={route.path} element={route.component} path={route.path} />
        ))}
      </Route>
    </Routes>
    // <div className="main-container back-office">
    //   <div className="max-width-container manage-interface">
    //     <section className="sub-header">
    //       <h1>Gigs</h1>
    //       {/* <form>
    //       <label htmlFor="">Get breifs</label>
    //       <input type="checkbox" name="get-breifs" id="get-breifs" />

    //       <label htmlFor="">Accept Custom Orders</label>
    //       <input type="checkbox" name="custom-orders" id="custom-orders" />
    //     </form> */}
    //     </section>
    //     <nav className="mini-nav">
    //       <ul className="clean-list dash-nav">
    //         <Link to="active-gigs" className="mini-link">
    //           active
    //         </Link>
    //         {/* <Link className="mini-link">pending approval</Link>
    //         <Link className="mini-link">requires modification</Link>
    //         <Link className="mini-link">draft</Link>
    //         <Link className="mini-link">denied</Link>
    //         <Link className="mini-link">paused</Link> */}
    //       </ul>
    //       <button className="add-gig-btn">create a new gig</button>
    //     </nav>
    //   </div>
    //   <Outlet />
    // </div>
  )
}
