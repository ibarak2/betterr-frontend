import { useEffect, useState } from "react"
import Slider from "react-slick"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Link } from "react-router-dom"
import FavoriteIcon from "@mui/icons-material/Favorite"
import StarIcon from "@mui/icons-material/Star"
// for getting random pics
import { utilService } from "../services/util.service"

export const GigPreview = () => {
  return (
    <div className="gig-preview">
      <SimpleSlider />
      <div className="preview-details">
        <div className="seller-details">
          <img className="prerview-avatar" />
          <div className="seller-details-text">
            <p>
              Ad by {/* <Link>{`${"seller name"}`}</Link> */}
              <a className="preview-seller-name">{`${"seller name"}`}</a>
            </p>
            <span className="preview-seller-level">
              Level {`${"2"}`} Seller
            </span>
          </div>
        </div>
        <div className="preview-title">
          <a>{`${"title"}`}</a>
        </div>
        <div className="stars">
          {/* ⭐rate */}
          <StarIcon />
          {`likedByUsers`}
        </div>
        <div className="preview-footer">
          <FavoriteIcon className="heart" />
          <div className="preview-offer">
            <p className="start-at">starting at</p>
            <p className="price">${`${100.0}`}</p>
          </div>
        </div>
        {/* {
      _id: "i101",
      title: "I will design your logo",
      price: 12,
      owner: {
        _id: "u101",
        fullname: "Dudu Da",
        imgUrl: "url",
        level: "basic/premium",
        rate: 4,
      },
      daysToMake: 3,
      description: "Make unique logo...",
      imgUrl: "",
      tags: ["logo-design", "artisitic", "proffesional", "accessible"],
      likedByUsers: ["mini-user"], // for user-wishlist : use $in
    } */}
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
        <div>
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
