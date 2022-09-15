import React from "react"
import { loadGigs } from "../store/gig.actions.js"
import { useDispatch, useSelector } from "react-redux"
// import logo from "../assets/img/logo.png"

export function HomePage() {
  const count = useSelector((state) => state.userModule.count)
  const dispatch = useDispatch()

  const changeCount = (diff) => {
    dispatch(loadGigs())
  }
  return (
    <section>
      {/* <img src={logo} alt="Logo" style={{ maxWidth: "300px" }} /> */}
      <h2>
        Count {count}
        <button
          onClick={() => {
            changeCount(1)
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            changeCount(10)
          }}
        >
          +10
        </button>
      </h2>
    </section>
  )
}
