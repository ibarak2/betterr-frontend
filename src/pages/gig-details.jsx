import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { gigService } from "../services/gig.service"
import { loadGigs } from "../store/gig.actions"
import { GigPlans } from "../cmps/gig-plans"
import { SellerInfo } from "../cmps/seller-info"
import { ReviewList } from "../cmps/review-list"
import { GigImgsCarousel } from "../cmps/gig-imgs-carousel"
import { SellerOverview } from "../cmps/seller-overview"
import { CssVarsProvider } from '@mui/joy/styles'
import { userService } from "../services/user.service"
import ReactStars from 'react-stars'
import { utilService } from "../services/util.service"
import { ReviewsFilter } from "../cmps/reviews-filter"
import { useEffectUpdate } from "../hooks/useEffectUpdate"






export const GigDetails = () => {

    const [gig, setGig] = useState()
    const [reviews, setReviews] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log('gig-details page: params.id:', params.id);
        loadGig()

    }, [])

    // useEffectUpdate(() => {

    // }, [reviews])
    // useEffect(() => {

    // }, [gig])

    const loadGig = async () => {
        const gigId = params.id
        try {
            const gig = await gigService.getById(gigId)
            console.log("1");
            setGig(gig)
            console.log("2");
            await loadReviews(gig.owner._id)
            console.log("gig", gig);
        } catch (err) {
            console.log('Failed to load gig');
        }
    }

    const loadReviews = async (userId) => {
        try {
            const reviews = await userService.getReviewsById(userId)
            setReviews(reviews)

            console.log("reviews", reviews);
        } catch (err) {
            console.log(err);
        }
    }

    const onChangeSortBy = (sortBy) => {
        let sortedReviews
        (sortBy === 'rate') ?
            sortedReviews = reviews.sort((a, b) => (b.rate > a.rate) ? 1 : ((a.rate > b.rate) ? -1 : 0)) :
            sortedReviews = reviews.sort((a, b) => (b.createdAt > a.createdAt) ? 1 : ((a.createdAt > b.createdAt) ? -1 : 0));

        setReviews([...sortedReviews])
        console.log("reviews:", reviews);

    }


    if (!gig) return <div>Loading</div>
    return (
        <CssVarsProvider>

            <div className='gig-details'>
                <section className="gig-description">
                    <div className="gig-layout">

                        <h1>{gig.title}</h1>
                        <SellerOverview seller={gig.owner} />
                        <hr />
                        <div className="carousel-container">
                            <GigImgsCarousel imgList={gig.imgUrls} />
                        </div>
                        <div className="about-this-gig">
                            <h2>About This Gig</h2>
                            <p>{gig.description}</p>
                        </div>
                        <hr />
                        <div className="about-the-seller">

                            <h2>About the Seller</h2>
                            <SellerInfo seller={gig.owner} />
                        </div>
                        <hr />
                        {!reviews ? <div>0 Reviews</div> :
                            <section className="reviews-container">
                                <div className="flex space-between align-center">

                                    <div className="flex align-center reviews-title" >

                                        <h2><span>{reviews.length}</span> Reviews </h2>
                                        <ReactStars
                                            value={utilService.averageRating(reviews)}
                                            count={5}
                                            size={22}
                                            color2={'#FFB33E'}
                                            edit={false}
                                        />
                                        <b>{`${utilService.averageRating(reviews)}`}</b>
                                    </div>
                                    <div>
                                        <ReviewsFilter onChangeSortBy={onChangeSortBy} />
                                    </div>
                                </div>
                                <div>
                                    <ReviewList reviews={reviews} />
                                </div>
                            </section>
                        }
                    </div>

                </section>
                <section className="plans">
                    <GigPlans plans={gig.plans} />
                </section>
            </div>
        </CssVarsProvider>

    )
}