const initialState = {
  orders: [],
}

export function orderReducer(state = initialState, action = {}) {
  let newState
  let orderIdx
  let changedOrder
  switch (action.type) {
    case 'SET_ORDERS':
      return { ...state, orders: action.orders }

    case 'SET_ORDER_STATUS':
      orderIdx = state.orders.findIndex(order => order._id === action.order._id)
      newState = state.orders
      newState.splice(orderIdx, 1, action.order)
      return { ...state, orders: [...newState] }

    case 'SET_ORDER_STATUS_LOCAL':
      changedOrder = state.orders.find(order => order._id === action.miniOrder.orderId)
      changedOrder.status = action.miniOrder.status
      orderIdx = state.orders.findIndex(order => order._id === action.miniOrder.orderId)
      newState = state.orders
      newState.splice(orderIdx, 1, changedOrder)
      return { ...state, orders: [...newState] }

    case 'ADD_ORDER':
      return { ...state, orders: [...state.orders, action.order] }
    case 'REMOVE_ORDER':
      return { ...state, orders: state.orders.filter(order => order._id !== action.orderId) }

    case 'UPDATE_ORDER':
      return {
        ...state,
        orders: state.orders.map(order =>
          order._id === action.order._id ? action.order : order
        )
      }
    default:
      return state
  }
}
