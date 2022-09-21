import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { loadGigsByOwner } from "../store/gig.actions"
import { SellerGigs } from "./sellerGigs"

export function SellerGigsList() {

  const gigsByOwner = useSelector((state) => state.gigModule.gigsByOwner)
  const loggedInUser = useSelector((state) => state.userModule.user.fullname)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGigsByOwner(loggedInUser))
  }, [searchParams])

  return (
    <section className="seller-gigs-wrapper">
      <div className="seller-gigs">
        <div className="seller-gigs-filter">
          <ul className="seller-gigs-status">
            <li className="active">ACTIVE GIGS</li>
          </ul>
        </div>

        <div className="gig-list">
          {gigsByOwner.map((gig) => {
            return <SellerGigs key={gig._id} {...gig} />
          })}
        </div>

        <a className="gig-card-base add-new-gig" href="/edit">
          Create a New Gig
        </a>
      </div>
    </section>
  )
}
