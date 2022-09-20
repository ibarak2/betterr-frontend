import { useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { navLinks } from "../services/back-office.service"
import { useDispatch, useSelector } from "react-redux"
import { loadUser } from "../store/user.actions"

export function BackOffice({ header }) {
  const users = useSelector((state) => state.userModule.users)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  },[])
  if(!users) return <div>Loading...</div>
  return (
    <div className="main-container full back-office">
      {console.log(users)}
      <div className="manage-interface">
        <section className="sub-header">
          <h1>{header}</h1>
        </section>
        <nav className="mini-nav">
          <ul className="clean-list dash-nav flex ">
            {navLinks.map((li) => (
              <li key={li.path}>
                <NavLink to={li.path} className="mini-link">
                  {li.txt}
                </NavLink>
              </li>
            ))}
          </ul>
          <a className="add-gig-btn">create a new gig</a>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}
