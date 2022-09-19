import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HeroImg } from '../cmps/hero-img'

export function HeroWrapper() {
  return (
    <div className="main-container hero-wrapper">
      <div className="hero-backgrounds">
        <HeroImg />
      </div>

      <div className="flex column hero-main">
        <h1 className="hero-title">
          Find the perfect <span>freelance</span> services for your business
        </h1>

        <div className="hero-filter">
          <form className="flex hero-form">
            <span className="flex">
              <svg className="hero-search-icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path></svg>
            </span>
            <input
              className="hero-search-input"
              type="search"
              placeholder='Try "building mobile app"'
            />
            <button className="btn btn-hero">Search</button>
          </form>
          <div className="main-popular-filter">
            Popular:
            <ul className="flex clean-list popular-list">
              <li className="flex popular-filters">
                <NavLink
                  key="/explore?filter=tags:Website-design"
                  to="/explore?filter=tags:Website-design"
                  target="_blank"
                >
                  Website Design
                </NavLink>
              </li>
              <li className="flex popular-filters">
                <NavLink
                  key="/explore?filter=tags:WordPress"
                  to="/explore?filter=tags:WordPress"
                  target="_blank"
                >
                  WordPress
                </NavLink>
              </li>
              <li className="flex popular-filters">
                <NavLink
                  key="/explore?filter=tags:Logo-Design"
                  to="/explore?filter=tags:Logo-Design"
                  target="_blank"
                >
                  Logo Design
                </NavLink>
              </li>
              <li className="flex popular-filters">
                <NavLink
                  key="/explore?filter=tags:Video-Editing"
                  to="/explore?filter=tags:Video-Editing"
                  target="_blank"
                >
                  Video Editing
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
