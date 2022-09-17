import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import { render } from 'react-dom'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import Slider from 'react-slick'

export function GetInspired() {
  const settings = {
    dots: false,
    infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  const slideObjs = [
    {
      h4: 'Logo Design',
      small: 'by bruno_malagrino',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356106/Fiverr-Sprint-4/imgs/Get%20inspired/bruno_malagrino_wfy5dn.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/AF1BF970-07CA-454B-8AF1-2F3E06838C8B_eefv01.webp',
    },
    {
      h4: 'WordPress',
      small: 'Customize your site',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356106/Fiverr-Sprint-4/imgs/Get%20inspired/passionshake_svf0mc.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/74e5ab33-a5fc-40ae-9cee-a91b23e80237_gmctcz.webp',
    },
    {
      h4: 'Voice Over',
      small: 'Share your message',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356106/Fiverr-Sprint-4/imgs/Get%20inspired/spickex_ff1pl7.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/fiverr_profile_lehn6k.webp',
    },
    {
      h4: 'Video Explainer',
      small: 'Engage your audience',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356106/Fiverr-Sprint-4/imgs/Get%20inspired/annapietrangeli_nun34m.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/1d531e54-7607-4bdb-815f-088dbc0fb971_fk7ssu.webp',
    },
    {
      h4: 'Social Media',
      small: 'Reach more customers',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356105/Fiverr-Sprint-4/imgs/Get%20inspired/noneyn_xtipzp.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5_heut2c.webp',
    },
    {
      h4: 'SEO',
      small: 'Unlock growth online',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356106/Fiverr-Sprint-4/imgs/Get%20inspired/skydesigner_dxu0wj.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/2bb8af3c-4cce-42a8-a699-f11177524084_iwnr96.webp',
    },
    {
      h4: 'Illustration',
      small: 'Color your dreams',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356105/Fiverr-Sprint-4/imgs/Get%20inspired/mijalzagier_ag9skk.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/750ccab0-8a64-4c91-b9a4-d10039dbf79c_ehrhi5.webp',
    },
    {
      h4: 'Translation',
      small: 'Go global',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356105/Fiverr-Sprint-4/imgs/Get%20inspired/fernandobengua_ayzzcw.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/db111eb4-c119-42b4-9a1d-9116601f3d22_gbugud.webp',
    },
    {
      h4: 'Data Entry',
      small: 'Learn your business',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356105/Fiverr-Sprint-4/imgs/Get%20inspired/lamonastudio-img_bbrn6a.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c_wz0xtm.webp',
    },
    {
      h4: 'Book Covers',
      small: 'Showcase your story',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356105/Fiverr-Sprint-4/imgs/Get%20inspired/christophbrandl_sdyila.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/6b4a9867-ad06-415f-b307-11177ae30fdd_bjtxcg.webp',
    },
    {
      h4: 'Logo Design',
      small: 'by eveelin',
      url: 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663356105/Fiverr-Sprint-4/imgs/Get%20inspired/eveeelin_un0a8r.webp',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/f79ede47-da5f-440a-bf23-57ed9ef7d363_ystdjm.webp',
    },
  ]

  return (
    <div className="max-width-container get-inspired">
      <div className="flex get-inspired-top">
        <h1>Get inspired with projects made by our freelancers</h1>
        <NavLink to="/explore">
          <span>See More Projects &gt;</span>
        </NavLink>
      </div>

      <div className="get-inspired-carousel">
        <Slider {...settings}>
          {slideObjs.map((obj) => {
            return (
              <div className="project-card">
                <a
                  className="slide-link"
                  href={`/explore/${obj.h4}`}
                  target="_blank"
                >
                  <img className="slide-img" src={obj.url} />
                  <div className="flex slide-profile">
                    <img className="slide-profile-img" src={obj.profilePic} />
                    <h4 className="flex slide-title">
                      {obj.h4}
                      <small>{obj.small}</small>
                    </h4>
                  </div>
                </a>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
