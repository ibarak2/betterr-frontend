import { NavLink } from "react-router-dom"


export const SecondaryNavbar = () => {


  return (
    <nav className="max-width-container secondary-navbar">
      <div className="flex secondary-nav-routes">
        <NavLink to="/?nav=home">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </div>
    </nav>
  )
}
