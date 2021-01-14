import Axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_DRINK = 'GET_DRINK'

/**
 * ACTION CREATORS
 */
const getDrink = drink => ({type: GET_DRINK, drink})

/**
 * THUNK CREATORS
 */
export const gettingSingleDrink = id => async dispatch => {
  try {
    const {data} = await Axios.get(`/api/teas/${id}`)
    dispatch(getDrink(data))
  } catch (err) {
    console.log('There was an error in the axios gettingSingleDrink', err)
  }
}

/**
 * INITIAL STATE
 */
const singleDrink = {}

/**
 * REDUCER
 */
export default function(state = singleDrink, action) {
  switch (action.type) {
    case GET_DRINK:
      return action.drink
    default:
      return state
  }
}
