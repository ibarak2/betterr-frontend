import React, { useEffect } from "react"
import {
  loadGigs,
  addGig,
  updateGig,
  removeGig,
  addToCart,
} from "../store/gig.actions.js"
// import { useDispatch, useSelector } from "react-redux"
import { showSuccessMsg } from "../services/event-bus.service.js"
import { gigService } from "../services/gig.service.js"
import { GigList } from "../cmps/gig-list.jsx"

export function GigApp() {
  // const gigs = useSelector((state) => state.gigModule.gigs)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(loadGigs())
  // }, [])

  // const onRemoveGig = (gigId) => {
  //   dispatch(removeGig(gigId))
  // }
  // const onAddGig = () => {
  //   const gig = gigService.getEmptyGig()
  //   gig.vendor = prompt("Vendor?")
  //   dispatch(addGig(gig))
  // }
  // const onUpdateGig = (gig) => {
  //   const price = +prompt("New price?")
  //   const gigToSave = { ...gig, price }
  //   dispatch(updateGig(gigToSave))
  // }

  // const onAddToCart = (gig) => {
  //   console.log(`Adding ${gig.vendor} to Cart`)
  //   addToCart(gig)
  //   showSuccessMsg("Added to Cart")
  // }
  // if (!gigs) return <h1>Loading..</h1>
  return (
    <GigList />
  )
}
