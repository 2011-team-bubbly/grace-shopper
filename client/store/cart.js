import axios from 'axios'

//action types
const ADD_TO_CART = 'ADD_TO_CART'

//action creators
const addTeaToCart = (orderId, tea) => ({type: ADD_TO_CART, orderId, tea})

//thunks
export const addingTeaToCart = (orderId, tea) => async dispatch => {
  console.log('in thunks')
  try {
    const {data} = await axios.post(`/api/orders/${orderId}`, tea)
    dispatch(addTeaToCart(orderId, data))
  } catch (error) {
    console.log('There was an error in the axios addingTeaToCart', error)
  }
}

const initial = {
  cartItems: []
}

//reducer
export default function CartReducer(state = initial, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let cartItems
      let teaExist = state.cartItems.some(tea => tea.id === action.tea.id)
      if (teaExist) {
        cartItems = state.cartItems.map(tea => {
          if (tea.id === action.tea.id) {
            tea.quantity += 1
          }
          return tea
        })
      } else {
        cartItems = state.cartItems.concat([
          {
            orderId: action.orderId,
            quantity: 1,
            tea: action.tea,
            teaId: action.tea.id
          }
        ])
      }
      return {...state, cartItems}
    default:
      return state
  }
}
