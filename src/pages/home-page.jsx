import React from "react"
import { loadGigs } from "../store/gig.actions.js"
import { useDispatch, useSelector } from "react-redux"
// import logo from "../assets/img/logo.png"

export function HomePage() {

  return (
    <section className="main-container home-page">
      <h2>Home Page</h2>
      <h1><img className="home-logo" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663246874/Fiverr-Sprint-4/imgs/beterr./logo_fw45hc.png" alt="logo" /></h1>
    </section>
  )
}
