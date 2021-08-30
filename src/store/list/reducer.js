export const listReducer = (state = [], action) => {
    switch (action.type) {
      case "USERLIST":
        return {
          data: action.data
        }
      default:
        return state
    }
  }