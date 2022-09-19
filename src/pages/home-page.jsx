import React from 'react'
import { HeroWrapper } from '../cmps/hero-wrapper.jsx'
import { TrustedBy } from '../cmps/trusted-by.jsx'
import { GetInspired } from '../cmps/get-inspired.jsx'
import { PopularServices } from '../cmps/popular-services.jsx'
import { MainCategories } from '../cmps/main-categories.jsx'

export function HomePage() {
  return (
    <section className="homepage">
      <HeroWrapper />
      <TrustedBy />
      <PopularServices/>
      <MainCategories />
      <GetInspired />
    </section>
  )
}
