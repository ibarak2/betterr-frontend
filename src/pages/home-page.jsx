import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { loadGigs } from '../store/gig.actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { HeroImg } from '../cmps/hero-img'
import { HeroWrapper } from '../cmps/hero-wrapper.jsx'
import { TrustedBy } from '../cmps/trusted-by.jsx'
import { GetInspired } from '../cmps/get-inspired.jsx'
import { PopularServices } from '../cmps/popular-services.jsx'
import { MainCategories } from '../cmps/main-categories.jsx'

export function HomePage() {
  return (
    <section className="flex column main-container homepage">
      <HeroWrapper />
      <TrustedBy />
      <PopularServices/>
      <MainCategories />
      <GetInspired />
    </section>
  )
}
