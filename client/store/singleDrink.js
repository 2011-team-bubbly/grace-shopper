import Axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_DRINK = 'GET_DRINK'
const REMOVE_DRINK = 'REMOVE_DRINK'

/**
 * ACTION CREATORS
 */
const getDrink = drink => ({type: GET_DRINK, drink})
const removeDrink = drink => ({type: REMOVE_DRINK, drink})
/**
 * THUNK CREATORS
 */
export const gettingSingleDrink = id => async dispatch => {
  try {
    const {data} = await Axios.get(`/api/drinks/${id}`)
    dispatch(getDrink(data))
  } catch (err) {
    console.log('There was an error in the axios gettingSingleDrink', err)
  }
}

export const deleteDrink = id => async dispatch => {
  try {
    await Axios.delete(`/api/drinks/${id}`)
    dispatch(removeDrink(id))
  } catch (error) {
    console.log('There was a problem removing drink in axios delete', error)
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
