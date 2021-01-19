import axios from 'axios'

//action types
const ADD_TO_CART = 'ADD_TO_CART'
const LOAD_CART = 'LOAD_CART'
const DELETE_ITEM = 'DELETE_ITEM'

//action creators
const addTeaToCart = (orderId, tea) => ({type: ADD_TO_CART, orderId, tea})
const loadCart = orderItems => ({type: LOAD_CART, orderItems})
const deleteItem = teaId => ({type: DELETE_ITEM, teaId})

//thunks
export const addingTeaToCart = (orderId, tea) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/orders/${orderId}`, tea)
    console.log(data)
    dispatch(addTeaToCart(orderId, data))
  } catch (error) {
    console.log('There was an error in the axios addingTeaToCart', error)
  }
}

export const fetchOrders = orderId => async dispatch => {
  try {
    console.log('fecthorder thunk')
    const {data} = await axios.get(`/api/orders/${orderId}`)
    dispatch(loadCart(data.teas))
  } catch (error) {
    console.log('There was an error', error)
  }
}

export const removeItem = (orderId, teaId) => async dispatch => {
  try {
    await axios.delete(`/api/orders/${orderId}/${teaId}`)
    dispatch(deleteItem(teaId))
  } catch (error) {
    console.log('There was an error delteing.', error)
  }
}

const initial = {
  cartItems: []
}

//reducer
export default function CartReducer(state = initial, action) {
  switch (action.type) {
    case LOAD_CART:
      return {...state, cartItems: action.orderItems}
    case DELETE_ITEM:
      let newList = state.cartItems.filter(item => item.id !== action.teaId)
      return {...state, cartItems: newList}
    case ADD_TO_CART:
    default:
      return state
  }
}
