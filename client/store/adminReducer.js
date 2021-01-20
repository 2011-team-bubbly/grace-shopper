// import axios from 'axios';

// const SET_AUTH = 'SET_AUTH';

// const _setAuth = auth => ({
//     type: SET_AUTH,
//     auth
// })

// const removeTea = tea => ({type: REMOVE_TEA, tea})

// export const removingTea = teaId => async dispatch => {
//     try {
//       const {data} = await axios.delete(`/api/teas/${teaId}`)
//       dispatch(removeTea(data))
//     } catch (err) {
//       console.log('unable to delete tea', err)
//     }
//   }

// const adminReducer = (state = {}, action) => {
//     switch(action.type) {
//         case SET_AUTH:
//             return action.auth;
//         default:
//             return state;
//     }
// }

// export default adminReducer;
