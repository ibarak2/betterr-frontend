import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { gigService } from "../services/gig.service"
import { loadGigs } from "../store/gig.actions"
import { GigPlans } from "../cmps/gig-plans"
import { UserInfo } from "../cmps/user-info"
import { ReviewList } from "../cmps/review-list"
import { GigImgsCarousel } from "../cmps/gig-imgs-carousel"
import { SellerOverview } from "../cmps/seller-overview"




export const GigDetails = () => {

    const [gig, setGig] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log('gig-details page: params.id:', params.id);
        loadGig()

    }, [params.id])

    const loadGig = async () => {
        const gigId = params.id
        try {
            const gig = await gigService.getById(gigId)
            setGig(gig)
            console.log(gig);
        } catch (err) {
            console.log('Failed to load gig');
        }
    }

    if (!gig) return <div>Loading</div>
    return (
        <div className='gig-details'>
            <section className="gig-description">
                <h1>{gig.title}</h1>

                <SellerOverview seller={gig.owner} />
                <GigImgsCarousel imgList={gig.imgUrls} />
                <h2>About this Gig</h2>
                <p>{gig.description}</p>
                <hr />
                <h2>About the Seller</h2>
                <UserInfo />
                <h2>Reviews</h2>
                <ReviewList />

            </section>
            <section className="plans">
                <GigPlans />
            </section>
        </div>
    )
}