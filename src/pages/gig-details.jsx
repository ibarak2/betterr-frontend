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

    const [screenWidth, setScreenWidth] = useState()
    const [gig, setGig] = useState()
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log('gig-details page: params.id:', params.id);
        loadGig()

    }, [])

    useEffect(() => {
        setScreenWidth(window.innerWidth)
        window.removeEventListener('resize', onResize)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const onResize = () => {
        setScreenWidth(window.innerWidth)
    }

    const loadGig = async () => {
        const gigId = params.id
        try {
            const gig = await gigService.getById(gigId)
            setGig(gig)
        } catch (err) {
            console.log('Failed to load gig');
        }
    }

    const onChangeSortBy = (sortBy) => {
        const sortedReviews = gigService.sortReviews(gig.reviews, sortBy)

        setGig({ ...gig, reviews: sortedReviews })
        console.log(gig.reviews);

    }

    console.log(window.innerWidth);
    if (!gig) return <div>Loading</div>
    return (
        <CssVarsProvider>
            <section className="main-gig-details">

                <div className='gig-details'>
                    <section className="gig-description">
                        <div className="gig-layout">
                            <h1>{gig.title}</h1>
                            <SellerOverview seller={gig.owner} reviewsAmount={gig.reviews.length} />
                            <div className="carousel-container">
                                <GigImgsCarousel imgList={gig.imgUrls} />
                            </div>
                            <div className="mobile-plans">
                                {(screenWidth < 900) &&
                                    <GigPlans plans={gig.plans} />

                                }
                            </div>
                            <div className="about-this-gig">
                                <h2>About This Gig</h2>
                                <p>{gig.description}</p>
                            </div>
                            <hr />
                            <div className="about-the-seller">
                                <h2>About the Seller</h2>
                                <SellerInfo seller={gig.owner} reviewsAmount={gig.reviews.length} />
                            </div>
                            <hr />
                            {!gig.reviews.length ? <div>0 Reviews</div> :
                                <section className="reviews-container">
                                    <div className="flex space-between align-center">
                                        <div className="flex align-center reviews-title" >
                                            <h2><span>{gig.reviews.length}</span> Reviews </h2>
                                            <ReactStars
                                                value={utilService.averageRating(gig.reviews)}
                                                count={5}
                                                size={22}
                                                color2={'#FFB33E'}
                                                edit={false}
                                            />
                                            <b>{`${utilService.averageRating(gig.reviews)}`}</b>
                                        </div>
                                        <div>
                                            <ReviewsFilter onChangeSortBy={onChangeSortBy} />
                                        </div>
                                    </div>
                                    <div>
                                        <ReviewList reviews={gig.reviews} />
                                    </div>
                                </section>
                            }
                        </div>
                    </section>
                    <section className="plans">
                        {(screenWidth > 900) &&
                            <GigPlans plans={gig.plans} />

                        }
                    </section>
                </div>
            </section>
        </CssVarsProvider>

    )
}