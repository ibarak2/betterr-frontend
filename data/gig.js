const db = {
  gig: [
    {
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
    },
  ],
  order: [
    {
      _id: "o1225",
      createdAt: 9898989,
      buyer: { _id: "u101", fullname: "User 1", imgUrl: "/img/img1.jpg" },
      seller: { _id: "u102", fullname: "seller", imgUrl: "/img/img2.jpg" },
      gig: {
        // mini gig
        _id: "i101",
        product: "Design Logo",
        price: 20,
      },
      status: "pending",

      //? statuses -- pending // done //  inProcess
    },
  ],
  user: [
    // ADMIN
    {
      _id: "a1001",
      fullname: "admin",
      imgUrl: "/img/img1.jpg",
      username: "Admin",
      password: "admin",
      isAdmin: true,
    },
    // USER - BUYER
    {
      _id: "u101",
      fullname: "User 1",
      imgUrl: "/img/img1.jpg",
      username: "user",
      password: "user",
      reviews: [
        {
          id: "madeIdByUtil",
          txt: "Very kind and works fast",
          rate: 4,
          by: {
            _id: "u102",
            fullname: "User 1",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedSellers: [{ _id: "u102" }],
    },
    // SELLER
    {
      _id: "u102",
      fullname: "seller",
      imgUrl: "/img/img1.jpg",
      username: "seller",
      password: "seller",
      level: "basic/premium",
      reviews: [
        {
          id: "madeIdByUtil",
          txt: "Very kind and works fast",
          rate: 4,
          by: {
            _id: "u101",
            fullname: "User 1",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedSellers: [{ _id: "u101" }],
    },
  ],
}


const allTags = [
  "logo-design",
  "wordpress",
  "voice-over",
  "artisitic",
  "proffesional",
  "accessible",
]
function isPrimaryTag(tag) {
  return allTags.slice(0, 3).includes(tag)
}

// HomePage
//  list of gigs with link to gig-details
//  CSS Infra, Master CSS

// Gig Details
// <pre>JSON, slowly improve

// UserDetails
//  basic info
//  orderedGigs => orderService.query({userId: 'u101'})
//  ownedGigs => gigService.query({ownerId: 'u103'})

// GigEdit - make it super easy to add Gig for development

// GigList, GigOrder
// Order, confirm Order
// Lastly: GigExplore, Filtering

function loadApp() {
  socketService.on(SOCKET_EVENT_ORDER_ADDED, (order) => {
    showSuccessMsg(`Another order was just made, check it out ${order.gig._id}`)
  })
}
