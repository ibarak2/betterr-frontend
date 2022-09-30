import React, { useEffect } from 'react'
import { HeroWrapper } from '../cmps/hero-wrapper.jsx'
import { TrustedBy } from '../cmps/trusted-by.jsx'
import { GetInspired } from '../cmps/get-inspired.jsx'
import { PopularServices } from '../cmps/popular-services.jsx'
import { MainCategories } from '../cmps/main-categories.jsx'
import { useNavigate } from 'react-router-dom'
import { socketService } from '../services/socket.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function HomePage() {

  const navigate = useNavigate()

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/") {
      navigate('/?nav=home')
    }
    socketService.on('new-order-recieved', (data) => {
      showSuccessMsg(data)
    })
    socketService.on('on-order-changed-status', (data) => {
      (data.status === 'cancelled') ? showErrorMsg(data.txt) : showSuccessMsg(data.txt)
    })

    return () => {
      socketService.off('new-order-recieved')
      socketService.off('on-order-changed-status')
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
