import Axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_DRINK = 'GET_DRINK'
const UPDATE_TEA = 'UPDATE_TEA'

/**S
 * ACTION CREATORS
 */
const getDrink = drink => ({type: GET_DRINK, drink})

const updateTea = teaId => ({
  type: UPDATE_TEA,
  teaId
})

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

export const thunkToUpdateTea = (id, teaToBeUpdated) => async dispatch => {
  try {
    const {data} = await Axios.put(`/api/teas/${id}`, teaToBeUpdated)
    dispatch(updateTea(data))
  } catch (error) {
    console.log('There was an error in the axious thunkToUpdateTea', error)
  }
}

/**
 * INITIAL STATE
 */
const singleDrink = {}

/**
 * REDUCER
 */
export default function singleDrinkReducer(state = singleDrink, action) {
  switch (action.type) {
    case GET_DRINK:
      return action.drink
    case UPDATE_TEA:
      return action.drink
    default:
      return state
  }
}
