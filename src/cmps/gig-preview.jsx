import { useEffect, useState } from "react"
import Slider from "react-slick"
import { Link, useNavigate } from "react-router-dom"
import FavoriteIcon from "@mui/icons-material/Favorite"
import StarIcon from "@mui/icons-material/Star"
import { utilService } from "../services/util.service"

export const GigPreview = ({ owner, _id, title, price, likedByUsers }) => {
  const [liked, setLiked] = useState()
  console.log("OWNER", owner)
  const handleLike = () => {
    setLiked(!liked)
  }
  return (
    <div className="gig-preview">
      <SimpleSlider />
      <div className="preview-details">
        <div className="seller-details">
          <img className="prerview-avatar" src={`${owner.imgUrl}`} />
          <div className="seller-details-text">
            <p>
              Ad by {""}
              <Link
                to={`${owner._id}`}
                className="preview-seller-name"
              >{`${owner.fullname}`}</Link>
            </p>
            <span className="preview-seller-level">
              Level {`${owner.level}`} Seller
            </span>
          </div>
        </div>
        <div className="preview-title">
          <Link to={`${_id}`}>{`${title}`}</Link>
        </div>
        <div className="stars">
          {/* ⭐rate */}
          <StarIcon />
          {owner.rate}
          <span className="liked-by">({likedByUsers.length})</span>
        </div>
        <div className="preview-footer">
          <FavoriteIcon
            className={`like ${liked ? "liked" : "heart"}`}
            onClick={() => handleLike()}
          />
          <Link to={`${_id}`} className="preview-offer">
            <p className="start-at">starting at</p>
            <p className="price">${price}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

function SimpleSlider() {
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
          position: "absolute",
          bottom: "0",
          paddingBottom: "0.8rem",
        }}
      >
        <ul className="dots" style={{ margin: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  }
  const imgs = ["1", "2", "3", "4", "5", "6"]
  return (
    <Slider {...settings}>
      {imgs.map((img, idx) => (
        <div key={idx}>
          <img
            src={`https://picsum.photos/200/300?random=${utilService.getRandomIntInclusive(
              1,
              30
            )}`}
          />
        </div>
      ))}
    </Slider>
  )
}

function NextArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={className}
      style={{
        display: "block",
        backgroundColor: "transperent",
        zIndex: "10",
        right: "0",
      }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={className}
      style={{
        display: "block",
        backgroundColor: "transperent",
        zIndex: "10",
        left: "0",
      }}
      onClick={onClick}
    />
  )
}
