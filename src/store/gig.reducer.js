const initialState = {
  gigs: [],
  cart: [],
  lastRemovedGig: null,
  filterBy: { maxPrice: "", daysToMake: "", rate: "" },
}

export function gigReducer(state = initialState, action) {
  var newState = state
  var gigs
  var cart
  var filterBy

  switch (action.type) {
    case "SET_GIGS":
      return { ...state, gigs: action.gigs }

    case "REMOVE_GIG":
      const lastRemovedGig = state.gigs.find((gig) => gig._id === action.gigId)
      gigs = state.gigs.filter((gig) => gig._id !== action.gigId)

      return { ...state, gigs, lastRemovedGig }

    case "ADD_GIG":
      return { ...state, gigs: [...state.gigs, action.gig] }

    case "UPDATE_GIG":
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

    case "SET_FILTER_BY":
      // NOT SURE
      filterBy = action.filterBy
      return { ...state, filterBy }

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
      return state
  }
  // For debug:
  //   window.gigState = newState
  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)
  //   return newState
}
