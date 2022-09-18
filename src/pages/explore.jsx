import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GigList } from "../cmps/gig-list"
import { loadGigs, setFilterBy } from "../store/gig.actions"
import { Filter } from "../cmps/filter"

export const Explore = () => {
  const gigs = useSelector((state) => state.gigModule.gigs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGigs())
    console.log("GIGS", gigs)
  }, [])

  const onChangeFilter = (filterBy) => {
    dispatch(setFilterBy(filterBy))
    dispatch(loadGigs())
  }
  if (!gigs) return <h1>Loading...</h1>
  return (
    <div className="explore main-container">
      <Filter onChangeFilter={onChangeFilter} />
      <GigList gigs={gigs} />
    </div>
  )
}
