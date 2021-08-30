export const editReducer = (state = {}, action) => {
  switch (action.type) {
    case "EXIST":
      return {
        data: action.data
      }
    default:
      return state
  }
}