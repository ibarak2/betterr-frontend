const initialState = {
  cars: [],
  cart: [],
  lastRemovedCar: null,
}

export function carReducer(state = initialState, action) {
  var newState = state
  var cars
  var cart

  switch (action.type) {
    case "SET_CARS":
      return { ...state, cars: action.cars }

    case "REMOVE_CAR":
      const lastRemovedCar = state.cars.find((car) => car._id === action.carId)
      cars = state.cars.filter((car) => car._id !== action.carId)

      return { ...state, cars, lastRemovedCar }

    case "ADD_CAR":
      return { ...state, cars: [...state.cars, action.car] }

    case "UPDATE_CAR":
      cars = state.cars.map((car) =>
        car._id === action.car._id ? action.car : car
      )

      return { ...state, cars }

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.car] }

    case "REMOVE_FROM_CART":
      cart = state.cart.filter((car) => car._id !== action.carId)

      return { ...state, cart }

    case "CLEAR_CART":
      return { ...state, cart: [] }

    case "UNDO_REMOVE_CAR":
      if (state.lastRemovedCar) {
        return {

          ...state,
          cars: [...state.cars, state.lastRemovedCar],
          lastRemovedCar: null,
        }
      }
      break

    default:
      return newState
  }
  // For debug:
  //   window.carState = newState
  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)
  //   return newState
}
