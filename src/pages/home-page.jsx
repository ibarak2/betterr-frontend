import React from "react"
import { loadGigs } from "../store/gig.actions.js"
import { useDispatch, useSelector } from "react-redux"
import { HeroImg } from "../cmps/hero-img"
// import logo from "../assets/img/logo.png"

export function HomePage() {

  return (
    <section className="main-container homepage">
      <div className="hero-wrapper">
        <div className="hero-backgrounds">
        <HeroImg />
        </div>
      </div>

      <h1 className='hero'>Find the perfect <span>freelance</span> services for your business</h1>
      </section>
  )
}
