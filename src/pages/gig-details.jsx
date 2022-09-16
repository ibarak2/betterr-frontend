import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { gigService } from "../services/gig.service"
import { loadGigs } from "../store/gig.actions"
import { GigPlans } from "../cmps/gig-plans"
import { UserInfo } from "../cmps/user-info"
import { ReviewList } from "../cmps/review-list"
import { GigImgsCarousel } from "../cmps/gig-imgs-carousel"
import { SellerOverview } from "../cmps/seller-overview"
import { CssVarsProvider } from '@mui/joy/styles'
import { userService } from "../services/user.service"
import ReactStars from 'react-stars'
import { utilService } from "../services/util.service"






export const GigDetails = () => {

    const [gig, setGig] = useState(null)
    const [reviews, setReviews] = useState([])
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
            loadReviews(gig.owner._id)
            console.log("gig", gig);
        } catch (err) {
            console.log('Failed to load gig');
        }
    }

    const loadReviews = async (userId) => {
        try {
            const user = await userService.getById(userId)
            if (!reviews) {
                console.log("here")
                return
            }
            setReviews(user.reviews)
            console.log("here1")

            console.log("review", user.reviews);
        } catch (err) {
            console.log(err);
        }
    }

    if (!gig) return <div>Loading</div>
    return (
        <CssVarsProvider>

            <div className='gig-details'>
                <section className="gig-description">
                    <h1>{gig.title}</h1>
                    <SellerOverview seller={gig.owner} />

                    <div className="carousel-container">
                        <GigImgsCarousel imgList={gig.imgUrls} />
                    </div>
                    <h2>About this Gig</h2>
                    <p>{gig.description}</p>
                    <hr />
                    <h2>About the Seller</h2>
                    <UserInfo />
                    {!reviews ? <div>0 Reviews</div> :
                        <section className="reviews-container">
                            <div className="flex align-center reviews-title" >

                                <h2><span>{reviews.length}</span> Reviews </h2>
                                <ReactStars
                                    value={utilService.averageRating(reviews)}
                                    count={5}
                                    size={24}
                                    color2={'#ffd700'}
                                    edit={false}
                                />
                                <b>{utilService.averageRating(reviews)}</b>
                            </div>
                            <ReviewList reviews={reviews} />
                        </section>
                    }

                </section>
                <section className="plans">
                    <GigPlans plans={gig.plans} />
                </section>
            </div>
        </CssVarsProvider>

    )
}