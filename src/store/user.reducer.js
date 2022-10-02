import { userService } from "../services/user.service.js"
import { backofficeSellerOrderRoutes } from "../backoffice.routes.js"

const initialState = {
  user: userService.getLoggedinUser(),
  tableByUserState: backofficeSellerOrderRoutes,
}

export function userReducer(state = initialState, action) {
  var newState = state
  switch (action.type) {
    case "SET_USER":
      newState = { ...state, user: action.user }
      break
    default:
  }
  // For debug:
  window.userState = newState
  return newState
}
