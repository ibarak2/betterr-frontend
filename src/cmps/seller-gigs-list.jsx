
import { SellerGigs } from "./seller-gigs"

export function SellerGigsList({ gigsByOwner, onDeleteGig }) {

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
            return <SellerGigs key={gig._id} gig={gig} onDeleteGig={onDeleteGig} />
          })}
        </div>

        <a className="gig-card-base add-new-gig" href="/edit">
          Create a New Gig
        </a>
      </div>
    </section>
  )
}
