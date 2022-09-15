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
