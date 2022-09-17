import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

import { getActionSetWatchedUser } from '../store/review.actions'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import { showSuccessMsg } from '../services/event-bus.service'


const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY = 'users'

loadDemoData()

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
    return storageService.query('user')
    // return httpService.get(`user`)
}

function onUserUpdate(user) {
    showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
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
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    await storageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user;
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        socketService.login(user._id)
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    userCred.score = 10000;
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    socketService.logout()
    // return await httpService.post('auth/logout')
}

async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}


function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

const reviewsDemoData = [

    {
        _id: "a1001",
        fullname: "admin",
        imgUrl: "/img/img1.jpg",
        username: "Admin",
        password: "admin",
        isAdmin: true,
        reviews: [
            {
                id: "r107",
                txt: "Trustworthy fellow",
                rate: 5,
                createdAt: 1600000332964,
                by: {
                    _id: "u102",
                    fullname: "User 1",
                    imgUrl: "https://robohash.org/u102",
                },
            },
        ],
        likedSellers: [{ _id: "u102" }],
    },
    {
        _id: "u101",
        fullname: "User 1",
        imgUrl: "/img/img1.jpg",
        username: "user",
        password: "user",
        reviews: [
            {
                id: "r101",
                txt: "Very kind and works fast",
                rate: 4,
                createdAt: 1653368332964,
                by: {
                    _id: "u102",
                    fullname: "User 1",
                    imgUrl: "https://robohash.org/u102",
                },
            },
        ],
        likedSellers: [{ _id: "u102" }],
    },
    {
        _id: "u102",
        fullname: "seller",
        imgUrl: "/img/img1.jpg",
        username: "seller",
        password: "seller",
        level: "basic/premium",
        reviews: [
            {
                id: "r102",
                txt: "Very kind and works fast",
                rate: 4,
                createdAt: 1660368332964,
                by: {
                    _id: "a1001",
                    fullname: "Admin",
                    imgUrl: 'https://robohash.org/g1201',
                },
            },
            {
                id: "r103",
                txt: "Best work never dissapointed",
                rate: 5,
                createdAt: 1652368332964,
                by: {
                    _id: "u101",
                    fullname: "User 1",
                    imgUrl: 'https://robohash.org/u101',
                },
            },
            {
                id: "r104",
                txt: "not my first time with this guy, great work!",
                rate: 5,
                createdAt: 1642368332964,
                by: {
                    _id: "u101",
                    fullname: "User 1",
                    imgUrl: 'https://robohash.org/u101',
                },
            },
        ],
        likedSellers: [{ _id: "u101" }],
    },


]

async function loadDemoData() {
    const gUsers = await storageService.query(STORAGE_KEY) || []
    if (!gUsers || !gUsers.length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reviewsDemoData))
        console.log("Loaded New reviews Demo data");

    }
}

// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()



