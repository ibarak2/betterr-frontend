import { httpService } from "./http.service.js"
import {
  socketService,
  SOCKET_EVENT_NEW_ORDER_REQUEST,
  SOCKET_EVENT_ORDER_CHANGE_STATUS
} from "./socket.service"

const BASE_URL = "order/"

export const orderService = {
  query,
  save,
  updateStatus,
  getAnalytics
}

async function query(filter) {
  try {
    const orders = await httpService.get(BASE_URL, { params: filter })
    return orders
  } catch (err) {
    return ("order.service: cannot get orders")
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
    socketService.emit(SOCKET_EVENT_NEW_ORDER_REQUEST, order.seller._id)

    return saveOrder
  } catch (err) {
    return err
  }
}

async function updateStatus(miniOrder) {
  const status = miniOrder.status
  try {
    const savedOrder = await httpService.put(BASE_URL + `status/${miniOrder._id}`, {
      status,
    })
    socketService.emit(SOCKET_EVENT_ORDER_CHANGE_STATUS, miniOrder)

    return savedOrder
  } catch (err) {
    return err
  }
}

async function getAnalytics() {
  try {
    const analytics = await httpService.get(BASE_URL + `analytics/`)
    return analytics
  } catch (err) {
    return err
  }
}
