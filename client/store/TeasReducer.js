import axios from 'axios'

//actionType
const SET_TEAS = 'SET_TEAS'

//action creator
export const setTeas = teas => ({
  type: SET_TEAS,
  teas
})
const initialState = {
  teas: []
}
//thunks
export const fetchTeas = () => async dispatch => {
  try {
    const {data} = await axios.get('api/teas')
    dispatch(setTeas(data))
    console.log('this is data in redux', data)
  } catch (error) {
    console.log(error)
  }
}

export default function teasReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEAS:
      return action.teas
    default:
      return state
  }
}
