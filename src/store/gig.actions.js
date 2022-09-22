import { gigService } from "../services/gig.service.js"
import { userService } from "../services/user.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"

// Action Creators:
export function loadGigs() {
  return async (dispatch, getState) => {
    try {

      const { filterBy } = getState().gigModule
      const gigs = await gigService.query(filterBy)
      dispatch({
        type: "SET_GIGS",
        gigs,
      })
    } catch (err) {
      showErrorMsg("Cannot load gigs")
      console.log("Cannot load gigs", err)
    }
  }
}

export function removeGig(gigId) {
  return async (dispatch) => {
    try {
      await gigService.remove(gigId)
      dispatch(removeGig(gigId))
      showSuccessMsg("Gig removed")
    } catch (err) {
      showErrorMsg("Cannot remove gig")
      console.log("Cannot remove gig", err)
    }
  }
}

export function addGig(gig) {
  return async (dispatch) => {
    try {
      const savedGig = await gigService.save(gig)
      dispatch({ type: "ADD_GIG", gig: savedGig })
      const newGig = undefined
      return newGig
    } catch (err) {
      console.log("err:", err)
    }
  }
}

export function updateGig(gig) {
  return async (dispatch) => {
    try {
      const savedGig = await gigService.save(gig)
      dispatch({ type: "UPDATE_TOY", gig: savedGig })
    } catch (err) {
      console.log("err:", err)
    }
  }
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: "SET_FILTER_BY", filterBy })
  }
}

export function setCategory(category) {
  return (dispatch) => {
    dispatch({ type: "SET_CATEGORY", category })
  }
}

export function addToCart(gig) {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      gig,
    })
  }
}
export function removeFromCart(gigId) {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      gigId,
    })
  }
}
export function checkout() {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const total = state.gigModule.cart.reduce(
        (acc, gig) => acc + gig.price,
        0
      )
      const score = await userService.changeScore(-total)
      dispatch({ type: "SET_SCORE", score })
      dispatch({ type: "CLEAR_CART" })
      showSuccessMsg("Charged you: $" + total.toLocaleString())
    } catch (err) {
      showErrorMsg("Cannot checkout, login first")
      console.log("GigActions: err in checkout", err)
    }
  }
}

export function loadGigsByOwner(owner) {

  return async (dispatch, getState) => {
    try {
      const gigsByOwner = await gigService.query({ owner })
      
      dispatch({
        type: "SET_GIGS_BY_OWNER",
        gigsByOwner,
      })

    } catch (err) {
      showErrorMsg("Cannot load gigs")
      console.log("Cannot load gigs", err)
    }
  }
}


// Demo for Optimistic Mutation
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveGigOptimistic(gigId) {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_GIG",
      gigId,
    })
    showSuccessMsg("Gig removed")

    gigService
      .remove(gigId)
      .then(() => {
        console.log("Server Reported - Deleted Succesfully")
      })
      .catch((err) => {
        showErrorMsg("Cannot remove gig")
        console.log("Cannot load gigs", err)
        dispatch({
          type: "UNDO_REMOVE_GIG",
        })
      })
  }
}
