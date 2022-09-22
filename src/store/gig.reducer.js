const initialState = {
  gigs: [],
  cart: [],
  gigsByOwner: [],
  lastRemovedGig: null,
  filterBy: { maxPrice: "", daysToMake: "", rate: "", category: "" },
}

export function gigReducer(state = initialState, action) {
  var newState = state
  var gigs
  var gigsByOwner
  var cart
  var filterBy
  var category

  switch (action.type) {
    case "SET_GIGS":
      return { ...state, gigs: action.gigs }
    
    case "SET_GIGS_BY_OWNER":
      return { ...state, gigsByOwner: action.gigsByOwner }

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
      category = state.filterBy.category
      filterBy = action.filterBy
      filterBy.category = category
      return { ...state, filterBy }

    case "SET_CATEGORY":
      filterBy = { ...state.filterBy, category: action.category }
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
  //   return newState
}
