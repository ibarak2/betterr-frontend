import { useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"

export function BackOffice({ header, ToggleUserState, isBuyer }) {
  const users = useSelector((state) => state.userModule.users)
  const tableByUserState = useSelector(
    (state) => state.userModule.tableByUserState
  )

  const handleToggleUserState = () => {
    ToggleUserState()
  }
  if (!users) return <div>Loading...</div>
  return (
    <div className="main-container full back-office">
      <div className="manage-interface">
        <section className="flex space-between sub-header">
          <h1>{isBuyer ? 'Your orders' : 'Manage orders'}</h1>
          <button onClick={handleToggleUserState}>
            {isBuyer ? "Switch To Seller" : "Switch To Buyer"}
          </button>
        </section>
        <nav className="mini-nav">
          <ul className="clean-list dash-nav flex ">
            {tableByUserState.routes.map((li) => (
              <li key={li.path}>
                <NavLink to={li.path} className="mini-link">
                  {li.txt}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* {!isBuyer && <a className="add-gig-btn">create a new gig</a>} */}
        </nav>
        <Outlet />
      </div>
    </div>
  )
}
