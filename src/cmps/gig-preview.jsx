import { useEffect, useState } from "react"
import Slider from "react-slick";
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
  return <SimpleSlider />
    // <div className="gig-preview">
      {/* <div className="slideshow-container" style={{backgroundImage: `url("https://picsum.photos/200/300?random=${1}")`}}>
      <button className="btn-preview prev">
        <ArrowBackIosIcon />
      </button>
      <button className="btn-preview next">
        <ArrowForwardIosIcon />
      </button>
      <div className="preview-dots">
        {dots.map(dot=><span className="c"></span>)}
      </div>
      </div> */}
    // </div>
  
}




function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}