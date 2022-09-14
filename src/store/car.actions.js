import { carService } from "../services/car.service.js"
import { userService } from "../services/user.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"

// Action Creators:

export function loadCars() {
  console.log("Getting to Dispatch")
  return async (dispatch) => {
    try {
      const cars = await carService.query()
      dispatch({
        type: "SET_CARS",
        cars,
      })
      console.log("Cars from DB:", cars)
    } catch (err) {
      showErrorMsg("Cannot load cars")
      console.log("Cannot load cars", err)
    }
  }
}

export function removeCar(carId) {
  return async (dispatch) => {
    try {
      await carService.remove(carId)
      console.log("Deleted Succesfully!")
      dispatch(removeCar(carId))
      showSuccessMsg("Car removed")
    } catch (err) {
      showErrorMsg("Cannot remove car")
      console.log("Cannot remove car", err)
    }
  }
}

export function addCar(car) {
  return async (dispatch) => {
    try {
      const savedCar = await carService.save(car)
      console.log("savedCar", savedCar)
      dispatch({ type: "ADD_CAR", car: savedCar })
      const newCar = undefined
      return newCar
    } catch (err) {
      console.log("err:", err)
    }
  }
}

export function updateCar(car) {
  console.log("log from UPDATE_TOY dispatch", car)
  return async (dispatch) => {
    try {
      const savedCar = await carService.save(car)
      dispatch({ type: "UPDATE_TOY", car: savedCar })
    } catch (err) {
      console.log("err:", err)
    }
  }
}

export function addToCart(car) {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      car,
    })
  }
}
export function removeFromCart(carId) {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      carId,
    })
  }
}
export function checkout() {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const total = state.carModule.cart.reduce(
        (acc, car) => acc + car.price,
        0
      )
      const score = await userService.changeScore(-total)
      dispatch({ type: "SET_SCORE", score })
      dispatch({ type: "CLEAR_CART" })
      showSuccessMsg("Charged you: $" + total.toLocaleString())
    } catch (err) {
      showErrorMsg("Cannot checkout, login first")
      console.log("CarActions: err in checkout", err)
    }
  }
}

// Demo for Optimistic Mutation
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveCarOptimistic(carId) {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_CAR",
      carId,
    })
    showSuccessMsg("Car removed")

    carService
      .remove(carId)
      .then(() => {
        console.log("Server Reported - Deleted Succesfully")
      })
      .catch((err) => {
        showErrorMsg("Cannot remove car")
        console.log("Cannot load cars", err)
        dispatch({
          type: "UNDO_REMOVE_CAR",
        })
      })
  }
}
