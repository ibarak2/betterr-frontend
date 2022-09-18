import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GigList } from "../cmps/gig-list"
import { loadGigs, setFilterBy, setCategory } from "../store/gig.actions"
import { Filter } from "../cmps/filter"
import { useSearchParams } from "react-router-dom"

export const Explore = () => {
  const gigs = useSelector((state) => state.gigModule.gigs)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategory(searchParams.get('category')))
    dispatch(loadGigs())
    console.log("GIGS", gigs)
  }, [])

  const onChangeFilter = (filterBy) => {
    console.log("changed");
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
