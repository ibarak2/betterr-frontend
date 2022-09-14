import React, { useEffect } from "react"

import {
  loadCars,
  addCar,
  updateCar,
  removeCar,
  addToCart,
} from "../store/car.actions.js"
import { useDispatch, useSelector } from "react-redux"
import { showSuccessMsg } from "../services/event-bus.service.js"
import { carService } from "../services/car.service.js"

export function CarApp() {
  const cars = useSelector((state) => state.carModule.cars)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCars())
  }, [])

  const onRemoveCar = (carId) => {
    dispatch(removeCar(carId))
  }
  const onAddCar = () => {
    const car = carService.getEmptyCar()
    car.vendor = prompt("Vendor?")
    dispatch(addCar(car))
  }
  const onUpdateCar = (car) => {
    const price = +prompt("New price?")
    const carToSave = { ...car, price }
    dispatch(updateCar(carToSave))
  }

  const onAddToCart = (car) => {
    console.log(`Adding ${car.vendor} to Cart`)
    addToCart(car)
    showSuccessMsg("Added to Cart")
  }
  if (!cars) return <h1>Loading..</h1>
  return (
    <div>
      {console.log(cars)}
      <h3>Cars App</h3>
      <main>
        <button onClick={onAddCar}>Add Car ⛐</button>

        <ul className="car-list">
          {cars.map((car) => (
            <li className="car-preview" key={car._id}>
              <h4>{car.vendor}</h4>
              <h1>⛐</h1>
              <p>
                Price: <span>${car.price.toLocaleString()}</span>
              </p>
              <p>
                Owner: <span>{car.owner && car.owner.fullname}</span>
              </p>
              <div>
                <button
                  onClick={() => {
                    onRemoveCar(car._id)
                  }}
                >
                  x
                </button>
                <button
                  onClick={() => {
                    onUpdateCar(car)
                  }}
                >
                  Edit
                </button>
              </div>

              <button
                className="buy"
                onClick={() => {
                  onAddToCart(car)
                }}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
