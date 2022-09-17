import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"
import { userService } from "./user.service.js"
import { removeGig, addGig, updateGig } from "../store/gig.actions.js"


// This file demonstrates how to use a BroadcastChannel to notify other browser tabs

const STORAGE_KEY = "gig"


export const gigService = {
  query,
  getById,
  save,
  remove,
  getEmptyGig,
  loadDemoData
}
window.cs = gigService

async function query(filterBy) {
  let gigs = await storageService.query(STORAGE_KEY)
  if (!gigs.length) {
    loadDemoData()
    gigs = gigsDemoData
  }
  return gigs
}
function getById(gigId) {
  return storageService.get(STORAGE_KEY, gigId)
  // return axios.get(`/api/gig/${gigId}`)
}
async function remove(gigId) {
  await storageService.remove(STORAGE_KEY, gigId)
}
async function save(gig) {
  var savedGig
  if (gig._id) {
    savedGig = await storageService.put(STORAGE_KEY, gig)

  } else {
    // Later, owner is set by the backend
    gig.owner = userService.getLoggedinUser()
    savedGig = await storageService.post(STORAGE_KEY, gig)

  }
  return savedGig
}

function getEmptyGig() {
  return {
    vendor: "Susita-" + (Date.now() % 1000),
    price: utilService.getRandomIntInclusive(1000, 9000),
  }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))


const gigsDemoData = [

  {
    _id: "g101",
    title: "I will design your logo",
    price: 12,
    plans: {
      basicPrice: 12,
      basicDescription: 'Standad logo design',
      standardPrice: 29,
      standardDescription: 'Standad logo design',
      premiumPrice: 39,
      premiumDescription: 'Premium logo design'
    },
    owner: {
      _id: "u102",
      fullname: "Dudu Da",
      imgUrl: "https://robohash.org/g101",
      level: "Level 2 Seller",
      rate: 4.7,
      reviewsAmount: 3
    },
    daysToMake: 3,
    description: "Make unique logo... It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet nec mauris nec accumsan. Sed malesuada iaculis enim, quis dictum orci facilisis a. Phasellus nec massa a leo maximus blandit. Sed suscipit rhoncus fringilla. Suspendisse mattis velit nec scelerisque congue. Sed dictum vulputate massa quis rutrum. Pellentesque lacinia tellus lacus. Aenean ut metus odio.   Maecenas imperdiet mi non est iaculis fermentum. Morbi nec erat at odio hendrerit luctus. Aliquam erat volutpat. Proin id posuere ex. Proin nec lorem ullamcorper est tempor fermentum vel eget leo. Donec luctus nec mauris rhoncus blandit. Quisque ut nisi consectetur, dignissim metus id, imperdiet tellus.   Nunc ullamcorper ornare sem, vel posuere ex mollis ut. Curabitur augue risus, viverra vel ligula id, iaculis laoreet dui. Donec orci elit, auctor nec enim non, congue cursus tellus. Sed pulvinar congue interdum. In vel tortor a est ultrices elementum. In sed massa nec metus fermentum aliquet quis tincidunt ipsum. Sed ultricies felis eget libero mollis, quis elementum turpis hendrerit. Maecenas eget fringilla quam. Quisque molestie metus neque, at rhoncus ligula vestibulum nec. Proin vehicula at mi sed tincidunt.",
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
      basicDescription: 'Standad paint logo design',
      standardPrice: 111,
      standardDescription: 'Standad paint logo design',
      premiumPrice: 149,
      premiumDescription: 'Premium paint logo design'
    },
    owner: {
      _id: "u102",
      fullname: "Dudu Da",
      imgUrl: "https://robohash.org/g101",
      level: "Level 2 Seller",
      rate: 4.7,
      reviewsAmount: 3
    },
    daysToMake: 5,
    description: "Paint unique logo... The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet nec mauris nec accumsan. Sed malesuada iaculis enim, quis dictum orci facilisis a. Phasellus nec massa a leo maximus blandit. Sed suscipit rhoncus fringilla. Suspendisse mattis velit nec scelerisque congue. Sed dictum vulputate massa quis rutrum. Pellentesque lacinia tellus lacus. Aenean ut metus odio.   Maecenas imperdiet mi non est iaculis fermentum. Morbi nec erat at odio hendrerit luctus. Aliquam erat volutpat. Proin id posuere ex. Proin nec lorem ullamcorper est tempor fermentum vel eget leo. Donec luctus nec mauris rhoncus blandit. Quisque ut nisi consectetur, dignissim metus id, imperdiet tellus.   Nunc ullamcorper ornare sem, vel posuere ex mollis ut. Curabitur augue risus, viverra vel ligula id, iaculis laoreet dui. Donec orci elit, auctor nec enim non, congue cursus tellus. Sed pulvinar congue interdum. In vel tortor a est ultrices elementum. In sed massa nec metus fermentum aliquet quis tincidunt ipsum. Sed ultricies felis eget libero mollis, quis elementum turpis hendrerit. Maecenas eget fringilla quam. Quisque molestie metus neque, at rhoncus ligula vestibulum nec. Proin vehicula at mi sed tincidunt.",
    imgUrls: ["https://robohash.org/g102", "https://robohash.org/g1025", "https://robohash.org/g102124"],
    tags: ["logo-design", "artisitic", "proffesional", "accessible"],
    likedByUsers: ["mini-user"],
  },

  {
    _id: "g103",
    title: "I will destroy your logo",
    price: 39,
    plans: {
      basicPrice: 39,
      basicDescription: 'Standad destroy logo design',
      standardPrice: 89,
      standardDescription: 'Standad destroy logo design',
      premiumPrice: 199,
      premiumDescription: 'Premium destroy logo design'
    },
    owner: {
      _id: "u101",
      fullname: "User 1",
      imgUrl: "https://robohash.org/g101",
      level: "Level 1 Seller",
      rate: 4,
      reviewsAmount: 1
    },
    daysToMake: 7,
    description: "Destroy unique logo... The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet nec mauris nec accumsan. Sed malesuada iaculis enim, quis dictum orci facilisis a. Phasellus nec massa a leo maximus blandit. Sed suscipit rhoncus fringilla. Suspendisse mattis velit nec scelerisque congue. Sed dictum vulputate massa quis rutrum. Pellentesque lacinia tellus lacus. Aenean ut metus odio.   Maecenas imperdiet mi non est iaculis fermentum. Morbi nec erat at odio hendrerit luctus. Aliquam erat volutpat. Proin id posuere ex. Proin nec lorem ullamcorper est tempor fermentum vel eget leo. Donec luctus nec mauris rhoncus blandit. Quisque ut nisi consectetur, dignissim metus id, imperdiet tellus.   Nunc ullamcorper ornare sem, vel posuere ex mollis ut. Curabitur augue risus, viverra vel ligula id, iaculis laoreet dui. Donec orci elit, auctor nec enim non, congue cursus tellus. Sed pulvinar congue interdum. In vel tortor a est ultrices elementum. In sed massa nec metus fermentum aliquet quis tincidunt ipsum. Sed ultricies felis eget libero mollis, quis elementum turpis hendrerit. Maecenas eget fringilla quam. Quisque molestie metus neque, at rhoncus ligula vestibulum nec. Proin vehicula at mi sed tincidunt.",
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
      basicDescription: 'Basic build small 3 pages website',
      standardPrice: 189,
      standardDescription: 'Standad build normal 8 pages website with API and Data-Base',
      premiumPrice: 399,
      premiumDescription: 'Premium build small +10 pages website with 3 APIs and full 3 Data-Bases'
    },
    owner: {
      _id: "a1001",
      fullname: "Admin",
      imgUrl: "https://robohash.org/admin",
      level: "Top Rated Seller",
      rate: 5,
      reviewsAmount: 1
    },
    daysToMake: 7,
    description: "I will develop your own unqiue website with full functionality  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet nec mauris nec accumsan. Sed malesuada iaculis enim, quis dictum orci facilisis a. Phasellus nec massa a leo maximus blandit. Sed suscipit rhoncus fringilla. Suspendisse mattis velit nec scelerisque congue. Sed dictum vulputate massa quis rutrum. Pellentesque lacinia tellus lacus. Aenean ut metus odio.   Maecenas imperdiet mi non est iaculis fermentum. Morbi nec erat at odio hendrerit luctus. Aliquam erat volutpat. Proin id posuere ex. Proin nec lorem ullamcorper est tempor fermentum vel eget leo. Donec luctus nec mauris rhoncus blandit. Quisque ut nisi consectetur, dignissim metus id, imperdiet tellus.   Nunc ullamcorper ornare sem, vel posuere ex mollis ut. Curabitur augue risus, viverra vel ligula id, iaculis laoreet dui. Donec orci elit, auctor nec enim non, congue cursus tellus. Sed pulvinar congue interdum. In vel tortor a est ultrices elementum. In sed massa nec metus fermentum aliquet quis tincidunt ipsum. Sed ultricies felis eget libero mollis, quis elementum turpis hendrerit. Maecenas eget fringilla quam. Quisque molestie metus neque, at rhoncus ligula vestibulum nec. Proin vehicula at mi sed tincidunt.",
    imgUrls: ["https://robohash.org/g154503", "https://robohash.org/g1202213321"],
    tags: ["proffesional", "accessible", "web developer"],
    likedByUsers: ["mini-user"],
  },

]


async function loadDemoData() {

  const gGigs = await storageService.query(STORAGE_KEY) || []
  if (!gGigs || !gGigs.length) {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(gigsDemoData))
    console.log("Loaded New gigs Demo data");
  }
}

