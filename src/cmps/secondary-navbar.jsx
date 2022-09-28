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
    <nav className="secondary-navbar">
      <ul className="flex clean-list secondary-nav-routes">
        <li>
          <NavLink to="/explore?category=graphics-and-design">Graphics & Design</NavLink>
        </li>
        <li>
          <NavLink to="/explore?category=digital-marketing">Digital Marketing</NavLink>
        </li>
        <li>
          <NavLink to="/explore?category=writing-and-translation">Writing & Translation</NavLink>
        </li>
        <li>
          <NavLink to="/explore?category=video-and-animation">Video & Animation</NavLink>
        </li>
        <li>
          <NavLink to="/explore?category=music-and-audio">Music & Audio</NavLink>
        </li>
        <li>
          <NavLink to="/explore?category=programming-and-tech">Programming & Tech</NavLink>
        </li>
        <li>
          <NavLink to="/explore?category=business">Business</NavLink>
        </li>
        <li>
          <NavLink to="/explore?category=lifestyle">Lifestyle</NavLink>
        </li>
        <li>
          <NavLink to="/explore?category=trending">Trending</NavLink>
        </li>
      </ul>
    </nav>
  )
}
