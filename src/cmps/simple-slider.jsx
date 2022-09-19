import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export function SimpleSlider({ imgUrls, gigId }) {
    
  //---- settings and demodata ----//
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          paddingBottom: '0.8rem',
        }}
      >
        <ul className="dots" style={{ margin: '0px' }}>
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
  }
  const imgs = ['1', '2', '3', '4', '5', '6']

  //---- carousel arrows btns ----//
  function NextArrow(props) {
    const { className, onClick } = props
    return (
      <div
        className={`simple-slider-btn ${className}`}
        style={{
          display: 'none',
          backgroundColor: 'transperent',
          zIndex: '10',
        }}
        onClick={onClick}
      />
    )
  }

  function PrevArrow(props) {
    const { className, onClick } = props
    return (
      <div
        className={`simple-slider-btn ${className}`}
        style={{
          display: 'none',
          backgroundColor: 'transperent',
          zIndex: '10',
        }}
        onClick={onClick}
      />
    )
  }

  //---- component rendering ----//
  return (
    <Slider {...settings}>
      {imgUrls.map((imgUrl, idx) => (
        <div key={idx}>
          <Link to={`/gig/${gigId}`}>
            <img className="slider-img" src={imgUrl} />
          </Link>
        </div>
      ))}
    </Slider>
  )
}
