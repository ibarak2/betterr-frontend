const initialState = {
  gigs: [],
  cart: [],
  lastRemovedGig: null,
}

export function gigReducer(state = initialState, action) {
  var newState = state
  var gigs
  var cart

  switch (action.type) {
    case "SET_CARS":
      return { ...state, gigs: action.gigs }

    case "REMOVE_CAR":
      const lastRemovedGig = state.gigs.find((gig) => gig._id === action.gigId)
      gigs = state.gigs.filter((gig) => gig._id !== action.gigId)

      return { ...state, gigs, lastRemovedGig }

    case "ADD_CAR":
      return { ...state, gigs: [...state.gigs, action.gig] }

    case "UPDATE_CAR":
      gigs = state.gigs.map((gig) =>
        gig._id === action.gig._id ? action.gig : gig
      )

      return { ...state, gigs }

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.gig] }

    case "REMOVE_FROM_CART":
      cart = state.cart.filter((gig) => gig._id !== action.gigId)

      return { ...state, cart }

    case "CLEAR_CART":
      return { ...state, cart: [] }

    case "UNDO_REMOVE_CAR":
      if (state.lastRemovedGig) {
        return {

          ...state,
          gigs: [...state.gigs, state.lastRemovedGig],
          lastRemovedGig: null,
        }
      }
      break

    default:
      return newState
  }
  // For debug:
  //   window.gigState = newState
  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)
  //   return newState
}
