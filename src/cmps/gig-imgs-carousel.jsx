import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const GigImgsCarousel = ({ imgList }) => {

    return (
        <div className="gig-imgs-carousel">
            <Carousel
                autoPlay={false}
                showIndicators={false}
                infiniteLoop
                showStatus={false}
                renderArrowPrev={(onClickHandler, label) => (
                    <button
                        className="carousel-btn carousel-btn-left"
                        type="button"
                        onClick={onClickHandler}
                        style={{
                            left: 5
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </button>
                )}
                renderArrowNext={(onClickHandler, label) => (
                    <button
                        className="carousel-btn carousel-btn-right"
                        type="button"
                        onClick={onClickHandler}
                        style={{
                            right: 5
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </button>
                )}
            >
                {imgList.map((img, idx) => {
                    return <div key={idx} className='img'>
                        <img
                            alt=""
                            src={img}
                        />
                    </div>
                })}

            </Carousel>
        </div>
    )
}