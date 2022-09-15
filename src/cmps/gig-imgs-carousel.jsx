import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';





export const GigImgsCarousel = ({ imgList }) => {


    console.log(imgList);

    return (
        <div className="gig-imgs-carousel">
            <Carousel
                autoPlay={false}
                showIndicators={false}
                infiniteLoop
                width={"45%"}
                renderArrowPrev={(onClickHandler, label) => (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{
                            position: "absolute",
                            zIndex: 2,
                            top: "calc(50% - 15px)",
                            width: 30,
                            height: 30,
                            cursor: "pointer",
                            left: 15

                        }}
                    >
                        {"<"}
                    </button>
                )}
                renderArrowNext={(onClickHandler, label) => (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{
                            position: "absolute",
                            zIndex: 2,
                            top: "calc(50% - 15px)",
                            width: 30,
                            height: 30,
                            cursor: "pointer",
                            right: 15

                        }}
                    >
                        {">"}
                    </button>
                )}
            >
                <div>
                    <img
                        alt=""
                        src="https://res.cloudinary.com/ibarak/image/upload/v1663222495/test1/hdyi7zhrvzuycrd9pajw.jpg"
                    />
                </div>
                <div>
                    <img
                        alt=""
                        src="https://res.cloudinary.com/ibarak/image/upload/v1663222181/test1/zo7ydzobzs6tswah4lun.jpg"
                    />
                </div>
                <div>
                    <img
                        alt=""
                        src="https://res.cloudinary.com/ibarak/image/upload/v1663222777/test1/vkikk6syk54fp8fewknk.jpg"
                    />
                </div>
            </Carousel>
        </div>
    )
}