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
}
window.cs = gigService

function query(filterBy) {
  return storageService.query(STORAGE_KEY)
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
    owner: {
      _id: "u101",
      fullname: "Dudu Da",
      imgUrl: "url",
      level: "basic",
      rate: 4,
    },
    daysToMake: 3,
    description: "Make unique logo...",
    imgUrls: ["https://robohash.org/g101"],
    tags: ["logo-design", "artisitic", "proffesional"],
    likedByUsers: ["mini-user"],
  },
  {
    _id: "g102",
    title: "I will paint your logo",
    price: 79,
    owner: {
      _id: "u101",
      fullname: "Dudu Da",
      imgUrl: "url",
      level: "basic",
      rate: 4,
    },
    daysToMake: 5,
    description: "Paint unique logo...",
    imgUrls: ["https://robohash.org/g102", "https://robohash.org/g1025", "https://robohash.org/g102124"],
    tags: ["logo-design", "artisitic", "proffesional", "accessible"],
    likedByUsers: ["mini-user"],
  },
  {
    _id: "g103",
    title: "I will destroy your logo",
    price: 39,
    owner: {
      _id: "u101",
      fullname: "Dudu Da",
      imgUrl: "url",
      level: "basic",
      rate: 4,
    },
    daysToMake: 7,
    description: "Destroy unique logo...",
    imgUrls: ["https://robohash.org/g103", "https://robohash.org/g102213321"],
    tags: ["proffesional", "accessible"],
    likedByUsers: ["mini-user"],
  },

]
const gGigs = storageService.query(STORAGE_KEY) || []
if (!gGigs || !gGigs.length) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gigsDemoData))
}