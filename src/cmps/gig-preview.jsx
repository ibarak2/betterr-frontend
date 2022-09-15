import { useEffect, useState } from "react"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Link } from "react-router-dom"

export const GigPreview = () => {
  // let slideIndex = 1;
  // showSlides(slideIndex);

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }

  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("demo");
  //   let captionText = document.getElementById("caption");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  //   captionText.innerHTML = dots[slideIndex-1].alt;
  // }
  const imgs = [
    "1",
    // , "2", "3"
  ]
  const dots = [1,2,3,4]
  return (
    <div className="gig-preview">
      <div className="slideshow-container" style={{backgroundImage: `url("https://picsum.photos/200/300?random=${1}")`}}>
      <button className="btn-preview prev">
        <ArrowBackIosIcon />
      </button>
      <button className="btn-preview next">
        <ArrowForwardIosIcon />
      </button>
      <div className="preview-dots">
        {dots.map(dot=><span className="preview-dot"></span>)}
      </div>
      </div>
    </div>
  )
}
