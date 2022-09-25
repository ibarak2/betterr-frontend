import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GigList } from "../cmps/gig-list"
import { loadGigs, setFilterBy, setCategory } from "../store/gig.actions"
import { Filter } from "../cmps/filter"
import { useSearchParams } from "react-router-dom"
import { Loading } from "../cmps/loading"
import { utilService } from "../services/util.service"
import { Pageneation } from "../cmps/pageneation"
export const Explore = () => {
  const gigs = useSelector((state) => state.gigModule.gigs)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategory(searchParams.get("category")))
    dispatch(loadGigs())
  }, [searchParams])

  const onChangeFilter = (filterBy) => {
    dispatch(setFilterBy(filterBy))
    dispatch(loadGigs())
  }

  return (
    <div className="explore main-container">
      <h1 className="explore-title">
        {utilService.getExploreTitle(searchParams.get("category"))}
      </h1>
      <Filter onChangeFilter={onChangeFilter} />
      {!gigs ? <Loading /> : <GigList gigs={gigs} />}
      <Pageneation />
    </div>
  )
}
