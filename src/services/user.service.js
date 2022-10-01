import { storageService } from "./async-storage.service"
// import { httpService } from './http.service'

import {
    socketService,
    SOCKET_EVENT_USER_UPDATED,
    SOCKET_EMIT_USER_WATCH,
} from "./socket.service"
import { showSuccessMsg } from "../services/event-bus.service"
import { httpService } from "./http.service"

const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser"
const STORAGE_KEY = "users"


export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    changeScore,
    getReviewsById,
}

window.userService = userService

function getUsers() {
    // return storageService.query('user')
    // ELLIOT MADE THIS CHANGE
    return httpService.get(`user`)
}

function onUserUpdate(user) {
    showSuccessMsg(
        `This user ${user.fullname} just got updated from socket, new score: ${user.score}`
    )
}

async function getById(userId) {
    const user = await storageService.get(STORAGE_KEY, userId)
    // const user = await httpService.get(`user/${userId}`)

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}

async function getReviewsById(userId) {
    const user = await storageService.get(STORAGE_KEY, userId)

    return user.reviews
}

function remove(userId) {
    return storageService.remove("user", userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    try {
        console.log('user', user)
        const updatedUser = await httpService.put(`user/${user._id}`, user)
        return updatedUser
    } catch (err) {
        console.log(err);
    }
}

async function login(userCred) {
    const user = await httpService.post("auth/login", userCred)
    // const user = users.find(user => user.username === userCred.username)

    if (user) {
        socketService.login(user._id)
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    const user = await httpService.post("auth/signup", userCred)
    socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    socketService.logout()
    return await httpService.post('auth/logout')
}

async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error("Not loggedin")
    user.score = user.score + by || by
    await update(user)
    return user.score
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    const user = JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
    if (user) socketService.login(user._id)
    return user
}

const reviewsDemoData = [
    {
        _id: "a1001",
        fullname: "Admin",
        imgUrl:
            "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9ba6c31d9ab17b49428edbaa4e513b4d-1545993179609/6ce73d39-1230-48bd-ba40-d721ca8336b3.jpg",
        username: "admin",
        password: "admin",
        level: "basic/premium",

        isAdmin: true,
    },
    {
        _id: "u101",
        fullname: "User 1",
        imgUrl:
            "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/3358886/original/profile.jpg",
        username: "user1",
        password: "user1",
        level: "basic/premium",
    },
    {
        _id: "u102",
        fullname: "user 2",
        imgUrl:
            "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/ed5d40bebd0c7aae9584f5528954fd50-1607943922666/d3648fb8-ee92-4300-97a6-9d33ad285970.jpg",
        username: "user2",
        password: "user2",
        level: "basic/premium",
    },
    {
        _id: "u103",
        fullname: "seller 1",
        imgUrl:
            "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/6616615/original/Yoed_Outdoors_158.jpg",
        username: "seller1",
        password: "seller1",
        level: "basic/premium",
    },
    {
        _id: "u104",
        fullname: "seller 2",
        imgUrl:
            "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/872fb61b000b18e488600e1a769675f1-1583836058695/e1c81c09-6e62-4f6d-88b4-207be0828543.jpg",
        username: "seller2",
        password: "seller2",
        level: "basic/premium",
    },
]

async function loadDemoData() {
    const gUsers = (await storageService.query(STORAGE_KEY)) || []
    if (!gUsers || !gUsers.length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reviewsDemoData))
        console.log("Loaded New reviews Demo data")
    }
}

// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()
