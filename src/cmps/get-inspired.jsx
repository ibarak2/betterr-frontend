import { NavLink } from 'react-router-dom'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slider from 'react-slick'

export function GetInspired() {
  //---- carousel settings and demodata ----//
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const slideObjs = [
    {
      title: 'Logo Design',
      small: 'by bruno_malagrino',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/AF1BF970-07CA-454B-8AF1-2F3E06838C8B_eefv01.webp',
    },
    {
      title: 'Product Photography',
      small: 'by passionshake',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/74e5ab33-a5fc-40ae-9cee-a91b23e80237_gmctcz.webp',
    },
    {
      title: 'Flyer Design',
      small: 'by spickex',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/fiverr_profile_lehn6k.webp',
    },
    {
      title: 'Book Design',
      small: 'by annapietrangeli',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/1d531e54-7607-4bdb-815f-088dbc0fb971_fk7ssu.webp',
    },
    {
      title: 'Portraits & Carlcatures',
      small: 'by noneyn',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5_heut2c.webp',
    },
    {
      title: 'Web & Mobile Design',
      small: 'by skydesigner',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/2bb8af3c-4cce-42a8-a699-f11177524084_iwnr96.webp',
    },
    {
      title: 'Packaging Design',
      small: 'by mijalzagier',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/750ccab0-8a64-4c91-b9a4-d10039dbf79c_ehrhi5.webp',
    },
    {
      title: 'Social Media Design',
      small: 'by fernandobengua',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/db111eb4-c119-42b4-9a1d-9116601f3d22_gbugud.webp',
    },
    {
      title: 'Animated GIFs',
      small: 'by lamonastudio',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c_wz0xtm.webp',
    },
    {
      title: 'Illustration',
      small: 'by christophbrandl',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431788/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/6b4a9867-ad06-415f-b307-11177ae30fdd_bjtxcg.webp',
    },
    {
      title: 'Logo Design',
      small: 'by eveelin',
      xl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 2x',
      l: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 2x',
      m: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_400,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 2x',
      s: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg 2x',
      profilePic:
        'https://res.cloudinary.com/dalkffrhf/image/upload/v1663431789/Fiverr-Sprint-4/imgs/Get%20inspired/profile%20pics/f79ede47-da5f-440a-bf23-57ed9ef7d363_ystdjm.webp',
    },
  ]

  //---- component rendering ----//
  return (
    <section className="get-inspired">
      <div className="get-inspired-wrapper">
        <h2>Get inspired with projects made by our freelancers</h2>

        <div className="get-inspired-carousel">
          <Slider {...settings}>
            {slideObjs.map((obj) => {
              return (
                <div className="project-card">
                  <a className="slide-link" href={'/explore'} target="_blank">
                    <picture className="slide-pic">
                      <source media="(min-width: 1060px)" srcset={obj.xl} />
                      <source media="(min-width: 800px)" srcset={obj.l} />
                      <source media="(min-width: 600px)" srcset={obj.m} />
                      <source media="(max-width: 599px)" srcset={obj.s} />
                      <img className="slide-img" src={obj.s} />
                    </picture>
                    <div className="flex slide-profile">
                      <a href="" className="slide-profile-img">
                        <img src={obj.profilePic} />
                      </a>
                      <span className="slide-title">
                        <b><a href="/explore">{obj.title}</a></b>
                        <a>{obj.small}</a>
                      </span>
                    </div>
                  </a>
                </div>
              )
            })}
          </Slider>
        </div>

        <NavLink to="/explore" className='see-more-projects'>
          <span>See More Projects &gt;</span>
        </NavLink>
      </div>
    </section>
  )
}
