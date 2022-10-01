import { utilService } from "./util.service.js"
import { userService } from "./user.service.js"
import { httpService } from './http.service.js'
// This file demonstrates how to use a BroadcastChannel to notify other browser tabs

const BASE_URL = `gig/`

export const gigService = {
  query,
  getById,
  save,
  remove,
  sortReviews,
  addReview
}


async function query(filterBy = {}) {
  try {
    const gigs = await httpService.get(BASE_URL, { params: filterBy })
    return gigs
  } catch (err) {
    return ('gig.service: cannot get gigs', err);
  }
}

async function getById(gigId) {
  try {
    const gig = await httpService.get(BASE_URL + gigId)
    return gig
  } catch (err) {
    return ('gig.service: cannot get gig', err);
  }
}
async function save(gig) {
  var savedGig
  if (gig._id) {
    savedGig = await httpService.put(BASE_URL + gig._id, gig)
  } else {
    // Later, owner is set by the backend
    // gig.owner = userService.getLoggedinUser()
    savedGig = await httpService.post(BASE_URL, gig)
  }
  return savedGig
}

async function remove(gigId) {
  try {
    const removedGig = await httpService.delete(BASE_URL + `${gigId}`)
    return removedGig
  } catch (err) {
    return ('gig.service: cannot remove gig', err);
  }
}

async function addReview(gigId, review) {
  try {
    const updatedReview = await httpService.put(BASE_URL + `review/${gigId}`, review)
    return updatedReview
  } catch (err) {
    return (err);
  }
}

function sortReviews(reviews, sortBy) {
  var sortedReviews = (sortBy === 'rate') ?
    reviews.sort((a, b) => (b.rate > a.rate) ? 1 : ((a.rate > b.rate) ? -1 : 0)) :
    reviews.sort((a, b) => (b.createdAt > a.createdAt) ? 1 : ((a.createdAt > b.createdAt) ? -1 : 0));
  return sortedReviews
}

const gigsDemoData = [
  {
    _id: "g101",
    title: "I will design your logo",
    price: 12,
    plans: {
      basicPrice: 12,
      basicDescription: "Standad logo design",
      standardPrice: 29,
      standardDescription: "Standad logo design",
      premiumPrice: 39,
      premiumDescription: "Premium logo design",
    },
    owner: {
      _id: "u102",
      fullname: "Dudu Da",
      imgUrl: "https://robohash.org/g101",
      level: "Level 2 Seller",
      rate: 4.7,
      reviewsAmount: 3,
    },
    daysToMake: 3,
    description:
      "Make unique logo... It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet nec mauris nec accumsan. Sed malesuada iaculis enim, quis dictum orci facilisis a. Phasellus nec massa a leo maximus blandit. Sed suscipit rhoncus fringilla. Suspendisse mattis velit nec scelerisque congue. Sed dictum vulputate massa quis rutrum. Pellentesque lacinia tellus lacus. Aenean ut metus odio.   Maecenas imperdiet mi non est iaculis fermentum. Morbi nec erat at odio hendrerit luctus. Aliquam erat volutpat. Proin id posuere ex. Proin nec lorem ullamcorper est tempor fermentum vel eget leo. Donec luctus nec mauris rhoncus blandit. Quisque ut nisi consectetur, dignissim metus id, imperdiet tellus.   Nunc ullamcorper ornare sem, vel posuere ex mollis ut. Curabitur augue risus, viverra vel ligula id, iaculis laoreet dui. Donec orci elit, auctor nec enim non, congue cursus tellus. Sed pulvinar congue interdum. In vel tortor a est ultrices elementum. In sed massa nec metus fermentum aliquet quis tincidunt ipsum. Sed ultricies felis eget libero mollis, quis elementum turpis hendrerit. Maecenas eget fringilla quam. Quisque molestie metus neque, at rhoncus ligula vestibulum nec. Proin vehicula at mi sed tincidunt.",
    imgUrls: ["https://robohash.org/g101"],
    tags: ["logo-design", "artisitic", "proffesional"],
    likedByUsers: ["mini-user"],
  },

  {
    _id: "g102",
    title: "I will paint your logo",
    price: 79,
    plans: {
      basicPrice: 79,
      basicDescription: "Standad paint logo design",
      standardPrice: 111,
      standardDescription: "Standad paint logo design",
      premiumPrice: 149,
      premiumDescription: "Premium paint logo design",
    },
    owner: {
      _id: "u102",
      fullname: "Dudu Da",
      imgUrl: "https://robohash.org/g101",
      level: "Level 2 Seller",
      rate: 4.7,
      reviewsAmount: 3,
    },
    daysToMake: 5,
    description:
      "Paint unique logo... The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet nec mauris nec accumsan. Sed malesuada iaculis enim, quis dictum orci facilisis a. Phasellus nec massa a leo maximus blandit. Sed suscipit rhoncus fringilla. Suspendisse mattis velit nec scelerisque congue. Sed dictum vulputate massa quis rutrum. Pellentesque lacinia tellus lacus. Aenean ut metus odio.   Maecenas imperdiet mi non est iaculis fermentum. Morbi nec erat at odio hendrerit luctus. Aliquam erat volutpat. Proin id posuere ex. Proin nec lorem ullamcorper est tempor fermentum vel eget leo. Donec luctus nec mauris rhoncus blandit. Quisque ut nisi consectetur, dignissim metus id, imperdiet tellus.   Nunc ullamcorper ornare sem, vel posuere ex mollis ut. Curabitur augue risus, viverra vel ligula id, iaculis laoreet dui. Donec orci elit, auctor nec enim non, congue cursus tellus. Sed pulvinar congue interdum. In vel tortor a est ultrices elementum. In sed massa nec metus fermentum aliquet quis tincidunt ipsum. Sed ultricies felis eget libero mollis, quis elementum turpis hendrerit. Maecenas eget fringilla quam. Quisque molestie metus neque, at rhoncus ligula vestibulum nec. Proin vehicula at mi sed tincidunt.",
    imgUrls: [
      "https://robohash.org/g102",
      "https://robohash.org/g1025",
      "https://robohash.org/g102124",
    ],
    tags: ["logo-design", "artisitic", "proffesional", "accessible"],
    likedByUsers: ["mini-user"],
  },

  {
    _id: "g103",
    title: "I will destroy your logo",
    price: 39,
    plans: {
      basicPrice: 39,
      basicDescription: "Standad destroy logo design",
      standardPrice: 89,
      standardDescription: "Standad destroy logo design",
      premiumPrice: 199,
      premiumDescription: "Premium destroy logo design",
    },
    owner: {
      _id: "u101",
      fullname: "User 1",
      imgUrl: "https://robohash.org/g101",
      level: "Level 1 Seller",
      rate: 4,
      reviewsAmount: 1,
    },
    daysToMake: 7,
    description:
      "Destroy unique logo... The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet nec mauris nec accumsan. Sed malesuada iaculis enim, quis dictum orci facilisis a. Phasellus nec massa a leo maximus blandit. Sed suscipit rhoncus fringilla. Suspendisse mattis velit nec scelerisque congue. Sed dictum vulputate massa quis rutrum. Pellentesque lacinia tellus lacus. Aenean ut metus odio.   Maecenas imperdiet mi non est iaculis fermentum. Morbi nec erat at odio hendrerit luctus. Aliquam erat volutpat. Proin id posuere ex. Proin nec lorem ullamcorper est tempor fermentum vel eget leo. Donec luctus nec mauris rhoncus blandit. Quisque ut nisi consectetur, dignissim metus id, imperdiet tellus.   Nunc ullamcorper ornare sem, vel posuere ex mollis ut. Curabitur augue risus, viverra vel ligula id, iaculis laoreet dui. Donec orci elit, auctor nec enim non, congue cursus tellus. Sed pulvinar congue interdum. In vel tortor a est ultrices elementum. In sed massa nec metus fermentum aliquet quis tincidunt ipsum. Sed ultricies felis eget libero mollis, quis elementum turpis hendrerit. Maecenas eget fringilla quam. Quisque molestie metus neque, at rhoncus ligula vestibulum nec. Proin vehicula at mi sed tincidunt.",
    imgUrls: ["https://robohash.org/g103", "https://robohash.org/g102213321"],
    tags: ["proffesional", "accessible"],
    likedByUsers: ["mini-user"],
  },
  {
    _id: "g104",
    title: "I will Develop your beautiful website",
    price: 49,
    plans: {
      basicPrice: 49,
      basicDescription: "Basic build small 3 pages website",
      standardPrice: 189,
      standardDescription:
        "Standad build normal 8 pages website with API and Data-Base",
      premiumPrice: 399,
      premiumDescription:
        "Premium build small +10 pages website with 3 APIs and full 3 Data-Bases",
    },
    owner: {
      _id: "a1001",
      fullname: "Admin",
      imgUrl: "https://robohash.org/admin",
      level: "Top Rated Seller",
      rate: 5,
      reviewsAmount: 1,
    },
    daysToMake: 7,
    description:
      "I will develop your own unqiue website with full functionality  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet nec mauris nec accumsan. Sed malesuada iaculis enim, quis dictum orci facilisis a. Phasellus nec massa a leo maximus blandit. Sed suscipit rhoncus fringilla. Suspendisse mattis velit nec scelerisque congue. Sed dictum vulputate massa quis rutrum. Pellentesque lacinia tellus lacus. Aenean ut metus odio.   Maecenas imperdiet mi non est iaculis fermentum. Morbi nec erat at odio hendrerit luctus. Aliquam erat volutpat. Proin id posuere ex. Proin nec lorem ullamcorper est tempor fermentum vel eget leo. Donec luctus nec mauris rhoncus blandit. Quisque ut nisi consectetur, dignissim metus id, imperdiet tellus.   Nunc ullamcorper ornare sem, vel posuere ex mollis ut. Curabitur augue risus, viverra vel ligula id, iaculis laoreet dui. Donec orci elit, auctor nec enim non, congue cursus tellus. Sed pulvinar congue interdum. In vel tortor a est ultrices elementum. In sed massa nec metus fermentum aliquet quis tincidunt ipsum. Sed ultricies felis eget libero mollis, quis elementum turpis hendrerit. Maecenas eget fringilla quam. Quisque molestie metus neque, at rhoncus ligula vestibulum nec. Proin vehicula at mi sed tincidunt.",
    imgUrls: [
      "https://robohash.org/g154503",
      "https://robohash.org/g1202213321",
    ],
    tags: ["proffesional", "accessible", "web developer"],
    likedByUsers: ["mini-user"],
  },
]

// async function loadDemoData() {
//   const gGigs = (await storageService.query(STORAGE_KEY)) || []
//   if (!gGigs || !gGigs.length) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(gigsDemoData))
//   }
// }
