import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export function PopularServices() {
    
    const imgs = [
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/logo-design-2x_uthuru.webp",
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/wordpress-2x_acuz0n.webp",
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/voiceover-2x_mhn6jw.webp",
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/animated-explainer-2x_iicugo.webp",
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/social-2x_ighzfn.webp",
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355727/Fiverr-Sprint-4/imgs/popular%20services/seo-2x_t41ldf.webp",
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/illustration-2x_sag2ot.webp",
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/translation-2x_ezwz9h.webp",
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355729/Fiverr-Sprint-4/imgs/popular%20services/data-entry-2x_tv1022.webp",
        "https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/book-covers-2x_sfi3ss.webp",
    ]

  return (
    <div className="popular-services">
        <h1 className="popular-services-title">Popular professional services</h1>
      <Carousel
        className="popular-services-carousel"
        infiniteLoop
        autoPlay={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, label) => (
          <button
            className="btn carousel-btn"
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ left: 15 }}
          >
            <ArrowBackIosNewIcon />
          </button>
        )}
        renderArrowNext={(onClickHandler, label) => (
          <button
            className="carousel-btn"
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              right: 15,
            }}
          >
            <ArrowForwardIosIcon />
          </button>
        )}
      >
        {imgs.map((img) => {
          return (
            <div>
              <img alt="" src={img} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
