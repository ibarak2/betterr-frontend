import { httpService } from "./http.service"

const BASE_URL = "chat/"

export const chatService = {
    query,
    save,
    newMsg
}

async function query(loggedinUserId = {}) {
    try {
        const chats = await httpService.get(BASE_URL, {params: loggedinUserId} )
        return chats
    } catch (err) {
        return ("chat.service: cannot get chats", err)
    }
}

async function save(chat) {
    var savedChat
    try {
        if (chat._id) {
            savedChat = await httpService.put(BASE_URL + chat._id, chat)
        } else {
            console.log('chat.service save:', chat)
            savedChat = await httpService.post(BASE_URL, chat)
        }
    } catch (err) {
        return err
    }
}

async function newMsg(newMsg = {}) {
    try {
        const addedMsg = await httpService.put(BASE_URL, { params: newMsg })
        return addedMsg
    } catch (err) {
        return err
    }
}