import React, { useEffect } from 'react'
import { HeroWrapper } from '../cmps/hero-wrapper.jsx'
import { TrustedBy } from '../cmps/trusted-by.jsx'
import { GetInspired } from '../cmps/get-inspired.jsx'
import { PopularServices } from '../cmps/popular-services.jsx'
import { MainCategories } from '../cmps/main-categories.jsx'
import { useNavigate } from 'react-router-dom'

export function HomePage() {

  const navigate = useNavigate()

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/") {
      navigate('/?nav=home')
    }
  }, [])

  return (
    <section className="homepage">
      <HeroWrapper />
      <TrustedBy />
      <PopularServices />
      <MainCategories />
      <GetInspired />
    </section>
  )
}
