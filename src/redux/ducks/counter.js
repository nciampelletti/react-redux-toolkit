//action -> reducer -> state

//actions
const INCREMENT = "increment"
const DECREMENT = "decrement"

//functions for actions
export const increment = () => ({
  type: INCREMENT,
})

export const decrement = () => ({
  type: DECREMENT,
})

//define initial state
const initialState = {
  count: 0,
  name: "Natalia",
  id: 0,
}

//reducer as unnamed function
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }

    case DECREMENT:
      return { ...state, count: state.count - 1 }

    default:
      return state
  }
}
