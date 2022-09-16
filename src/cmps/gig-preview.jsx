import { useEffect, useState } from "react"
import Slider from "react-slick"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Link } from "react-router-dom"

// for getting random pics
import { utilService } from "../services/util.service"

export const GigPreview = () => {
  return (
    <div className="gig-preview">
      <SimpleSlider />
      <div className="preview-details">
        <div className="seller-details">
          <span className="prerview-avatar"></span>
          <p className="preview-seller-name">Ad by {`${"seller name"}`}</p>
          <p>Level {`${"seller level"}`} Seller</p>
        </div>
        <div className="preview-offer">
          <p className="preview-title">{`${"title"}`}</p>
          <p className="stars">
            <span>⭐</span>rate <span>(likedByUsers)</span>
          </p>
        </div>
        <div>
          <span>♥</span>
          <span>
            <p className="start-at">starting at</p>
            <p>${`${100.00}`}</p>
          </span>
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
      {imgs.map((img) => (
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
