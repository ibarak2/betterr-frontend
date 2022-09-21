import { httpService } from "./http.service.js";



const BASE_URL = 'order/'

export const orderService = {
    query,
    save
}


async function query(isBuyer = {}) {
    try {
        console.log(isBuyer);
        const orders = await httpService.get(BASE_URL, { params: isBuyer })
        return orders
    } catch (err) {
        console.log('order.service: cannot get orders');
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
        console.log(err);
    }
}