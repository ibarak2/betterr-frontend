import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GigList } from '../cmps/gig-list'
import { loadGigs, setFilterBy, setCategory } from '../store/gig.actions'
import { Filter } from '../cmps/filter'
import { useSearchParams } from 'react-router-dom'
import { Loading } from '../cmps/loading'

export const Explore = () => {
  const gigs = useSelector((state) => state.gigModule.gigs)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategory(searchParams.get('category')))
    dispatch(loadGigs())
    console.log('GIGS', gigs)
  }, [searchParams])

  const onChangeFilter = (filterBy) => {
    console.log('changed')
    dispatch(setFilterBy(filterBy))
    dispatch(loadGigs())
  }
  return (
    <div className="explore main-container">
      {!gigs ? (
        <div>
          <Filter onChangeFilter={onChangeFilter} />
          <Loading />
        </div>
      ) : (
        <div>
          <Filter onChangeFilter={onChangeFilter} />
          <GigList gigs={gigs} />
        </div>
      )}
    </div>
  )
}
