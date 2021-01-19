import axios from 'axios'

//actionType
const SET_DRINKS = 'SET_DRINKS'

//action creator
export const setDrinks = drinks => ({
  type: SET_DRINKS,
  drinks
})
const initialState = {
  drinks: []
}
//thunks
export const thunkToSetAllDrinks = () => async dispatch => {
  try {
    const {data} = await axios.get('api/drinks')
    dispatch(setDrinks(data))
    console.log('this is data in redux', data)
  } catch (error) {
    console.log(error)
  }
}

export default function drinksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DRINKS:
      return {
        ...state,
        drinks: action.drinks
      }
    default:
      return state
  }
}
