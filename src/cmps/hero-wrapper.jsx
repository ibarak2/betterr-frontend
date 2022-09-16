import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HeroImg } from '../cmps/hero-img'


export function HeroWrapper() {

    return (
        <div className="max-width-container hero-wrapper">
        <div className="hero-backgrounds">
          <HeroImg />
        </div>

        <div className="max-width-container flex column hero-main">
          <h1 className="hero-title">
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <form className="flex hero-form">
            <span className="flex">
              <svg
                className="hero-search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
              </svg>
            </span>
            <input
              className="hero-search-input"
              type="search"
              placeholder='Try "building mobile app"'
            />
            <button className="btn btn-hero">Search</button>
          </form>
          <div className="flex popular">
            Popular:
            <ul className="flex clean-list popular-list">
              <li className="popular-filters">
                <NavLink
                  key="/explore?filter=tags:Website-design"
                  to="/explore?filter=tags:Website-design"
                  target="_blank"
                >
                  Website Design
                </NavLink>
              </li>
              <li className="popular-filters">
                <NavLink
                  key="/explore?filter=tags:WordPress"
                  to="/explore?filter=tags:WordPress"
                  target="_blank"
                >
                  WordPress
                </NavLink>
              </li>
              <li className="popular-filters">
                <NavLink
                  key="/explore?filter=tags:Logo-Design"
                  to="/explore?filter=tags:Logo-Design"
                  target="_blank"
                >
                  Logo Design
                </NavLink>
              </li>
              <li className="popular-filters">
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
    )
}