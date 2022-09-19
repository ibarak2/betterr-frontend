import React, { Component } from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Slider from 'react-slick'

export function PopularServices() {
  var settings = {
    dots: false,
    infinite: true,
    mobileFirst: true,
    className: 'inner-slider-div',
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  }

  const slideObjs = [
    {
      h4: 'Logo Design',
      small: 'Build your brand',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/logo-design-2x_uthuru.webp',
    },
    {
      h4: 'WordPress',
      small: 'Customize your site',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/wordpress-2x_acuz0n.webp',
    },
    {
      h4: 'Voice Over',
      small: 'Share your message',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/voiceover-2x_mhn6jw.webp',
    },
    {
      h4: 'Video Explainer',
      small: 'Engage your audience',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/animated-explainer-2x_iicugo.webp',
    },
    {
      h4: 'Social Media',
      small: 'Reach more customers',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/social-2x_ighzfn.webp',
    },
    {
      h4: 'SEO',
      small: 'Unlock growth online',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355727/Fiverr-Sprint-4/imgs/popular%20services/seo-2x_t41ldf.webp',
    },
    {
      h4: 'Illustration',
      small: 'Color your dreams',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/illustration-2x_sag2ot.webp',
    },
    {
      h4: 'Translation',
      small: 'Go global',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/translation-2x_ezwz9h.webp',
    },
    {
      h4: 'Data Entry',
      small: 'Learn your business',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355729/Fiverr-Sprint-4/imgs/popular%20services/data-entry-2x_tv1022.webp',
    },
    {
      h4: 'Book Covers',
      small: 'Showcase your story',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663355728/Fiverr-Sprint-4/imgs/popular%20services/book-covers-2x_sfi3ss.webp',
    },
  ]



  return (
    <div className="popular-services">
      <div className="main-container title">
      <h1 className="popular-services-title">Popular professional services</h1>
      </div>
      <Slider {...settings}>
        {slideObjs.map((obj) => {
          return (
            <div key={obj.small}>
              <a className="slide-link" href={`/explore`} target="_blank">
                <h4 className="slide-title">
                  <small>{obj.small}</small>
                  {obj.h4}
                </h4>
                <img src={obj.url} />
                {/* <picture>
                  <source media="(min-width: 1060px)" srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x"/>
                  <source media="(min-width: 800px)" srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x"/>
                  <source media="(min-width: 600px)" srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x"/>
                  <source media="(max-width: 599px)" srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x"/>
                  <img alt="Logo Design" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"/>
                </picture> */}
              </a>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

//   return (
//     <div className="popular-services">
//         <h1 className="popular-services-title">Popular professional services</h1>
//   <Carousel
//     className="popular-services-carousel"
//     infiniteLoop
//     autoPlay={false}
//     showIndicators={false}
//     showStatus={false}
//     showThumbs={false}
//     renderArrowPrev={(onClickHandler, label) => (
//       <button
//         className="btn carousel-btn"
//         type="button"
//         onClick={onClickHandler}
//         title={label}
//         style={{ left: 15 }}
//       >
//         <ArrowBackIosNewIcon />
//       </button>
//     )}
//     renderArrowNext={(onClickHandler, label) => (
//       <button
//         className="carousel-btn"
//         type="button"
//         onClick={onClickHandler}
//         title={label}
//         style={{
//           right: 15,
//         }}
//       >
//         <ArrowForwardIosIcon />
//       </button>
//     )}
//   >
//         {imgs.map((img) => {
//           return (
//             <div>
//               <img alt="" src={img} />
//             </div>
//           )
//         })}
//       </Carousel>
//     </div>
//   )



