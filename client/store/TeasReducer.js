import axios from 'axios'

//actionType
const SET_TEAS = 'SET_TEAS'
const REMOVE_TEA = 'REMOVE_TEA'
const ADD_TEA = 'ADD_TEA'

//action creator

const addTea = tea => ({
  type: ADD_TEA,
  tea
})

const setTeas = teas => ({
  type: SET_TEAS,
  teas
})

const removeTea = tea => ({type: REMOVE_TEA, tea})

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

export const removingTea = teaId => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/teas/${teaId}`)
    dispatch(removeTea(data))
  } catch (err) {
    console.log('unable to delete tea', err)
  }
}

export const thunkToAddTea = newTea => async dispatch => {
  try {
    console.log('befor axios', newTea)
    const {data} = await axios.post('/api/admin/add', newTea)
    console.log('after axios', newTea)
    dispatch(addTea(data))
  } catch (error) {
    console.log(error)
  }
}
const initialState = {
  teas: []
}
export default function teasReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEAS:
      return action.teas
    case ADD_TEA:
      return {
        ...state,
        teas: [...state.teas, action.tea]
      }
    case REMOVE_TEA:
      return {
        ...state,
        teas: state.filter(tea => tea.id !== action.teaId)
      }
    default:
      return state
  }
}
