import { useEffect, useState } from "react"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
// import { GigCarousel } from "./gig-carousel"

export const GigPreview = () => {
  const imgs = ["1", "2", "3"]
  return (
    <div className="gig-preview">
      <div className="img-preview">
        {imgs.map((img) => (
          <img key={img} src={`https://picsum.photos/200/300?random=${img}`} />
        ))}
      </div>
      <button className="btn-preview">
        <ArrowBackIosIcon />
      </button>
      <button className="btn-preview">
        <ArrowForwardIosIcon />
      </button>
    </div>
  )
}
