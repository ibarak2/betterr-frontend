import { NavLink, Route, Routes } from 'react-router-dom'

export const SecondaryNavbar = () => {

  const categories = [
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'Business',
    'Lifestyle',
    'Trending',
  ]

  return (
    <nav className="max-width-container secondary-navbar">
      <ul className="flex clean-list secondary-nav-routes">
        <li>
          <NavLink to="/?nav=graphics-design">Graphics & Design</NavLink>
        </li>
        <li>
          <NavLink to="/?nav=Writing & Translation">Writing & Translation</NavLink>
        </li>
        <li>
          <NavLink to="/?nav=Video & Animation">Video & Animation</NavLink>
        </li>
        <li>
          <NavLink to="/?nav=Music & Audio">Music & Audio</NavLink>
        </li>
        <li>
          <NavLink to="/?nav=Programming & Tech">Programming & Tech</NavLink>
        </li>
        <li>
          <NavLink to="/?nav=Business">Business</NavLink>
        </li>
        <li>
          <NavLink to="/?nav=Lifestyle">Lifestyle</NavLink>
        </li>
        <li>
          <NavLink to="/?nav=Trending">Trending</NavLink>
        </li>
      </ul>
    </nav>
  )
}
