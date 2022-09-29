const initialState = {
  gigs: [],
  cart: [],
  gigsByOwner: [],
  lastRemovedGig: null,
  filterBy: { maxPrice: "", daysToMake: "", rate: "", category: "", search: "" },
}

export function gigReducer(state = initialState, action) {
  var newState = state
  var gigs
  var gigsByOwner
  var cart
  var filterBy
  var category
  var search

  switch (action.type) {
    case "SET_GIGS":
      return { ...state, gigs: action.gigs }

    case "SET_GIGS_BY_OWNER":
      return { ...state, gigsByOwner: action.gigsByOwner }

    case "REMOVE_GIG":
      const lastRemovedGig = state.gigsByOwner.find((gig) => gig._id === action.gigId)
      gigsByOwner = state.gigsByOwner.filter((gig) => gig._id !== action.gigId)

      return { ...state, gigsByOwner, lastRemovedGig }

    case "ADD_GIG":
      return { ...state, gigs: [...state.gigs, action.gig] }

    case "UPDATE_GIG":
      gigs = state.gigs.map((gig) =>
        gig._id === action.gig._id ? action.gig : gig
      )

      return { ...state, gigs }



    case "SET_FILTER_BY":
      // NOT SURE
      search = state.filterBy.search
      category = state.filterBy.category
      filterBy = { ...action.filterBy, category, search }
      return { ...state, filterBy }

    case "SET_CATEGORY":
      filterBy = { ...state.filterBy, category: action.category }
      return { ...state, filterBy }

    case "SET_SEARCH":
      filterBy = { ...state.filterBy, search: action.search }
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
