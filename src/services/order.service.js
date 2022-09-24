import { httpService } from "./http.service.js"
import { store } from "../store/store"
import {
  socketService,
  SOCKET_EVENT_HIRE_FOR_GIG_REQUEST,
} from "./socket.service"
import { getActionAddReview } from "../store/order.actions.js"
import { showSuccessMsg } from "./event-bus.service.js"

const BASE_URL = "order/"

const orderChannel = new BroadcastChannel("orderChannel")
;(() => {
  // reviewChannel.addEventListener('message', (ev) => {
  //     store.dispatch(ev.data)
  // })
  socketService.on(SOCKET_EVENT_HIRE_FOR_GIG_REQUEST, (order) => {
    console.log("GOT from socket", order)
    store.dispatch(getActionAddReview(order))
  })
  socketService.on(SOCKET_EVENT_HIRE_FOR_GIG_REQUEST, (review) => {
    showSuccessMsg(`New review about me ${review.txt}`)
  })
})()

export const orderService = {
  query,
  save,
  updateStatus,
}

async function query(isBuyer = {}) {
  try {
    const orders = await httpService.get(BASE_URL, { params: isBuyer })
    return orders
  } catch (err) {
    return "order.service: cannot get orders"
  }
}

async function save(order) {
  var saveOrder
  try {
    if (order._id) {
      saveOrder = await httpService.put(BASE_URL + order._id, order)
    } else {
      saveOrder = await httpService.post(BASE_URL, order)
    }
  } catch (err) {
    return err
  }
}

async function updateStatus(orderId, status) {
  try {
    const savedOrder = await httpService.put(BASE_URL + `status/${orderId}`, {
      status,
    })
    return savedOrder
  } catch (err) {
    return err
  }
}
