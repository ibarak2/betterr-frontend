import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"
import { userService } from "./user.service.js"
import { removeCar, addCar, updateCar } from "../store/car.actions.js"


// This file demonstrates how to use a BroadcastChannel to notify other browser tabs

const STORAGE_KEY = "car"


export const carService = {
  query,
  getById,
  save,
  remove,
  getEmptyCar,
}
window.cs = carService

function query(filterBy) {
  return storageService.query(STORAGE_KEY)
}
function getById(carId) {
  return storageService.get(STORAGE_KEY, carId)
  // return axios.get(`/api/car/${carId}`)
}
async function remove(carId) {
  await storageService.remove(STORAGE_KEY, carId)
}
async function save(car) {
  var savedCar
  if (car._id) {
    savedCar = await storageService.put(STORAGE_KEY, car)

  } else {
    // Later, owner is set by the backend
    car.owner = userService.getLoggedinUser()
    savedCar = await storageService.post(STORAGE_KEY, car)

  }
  return savedCar
}

function getEmptyCar() {
  return {
    vendor: "Susita-" + (Date.now() % 1000),
    price: utilService.getRandomIntInclusive(1000, 9000),
  }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
