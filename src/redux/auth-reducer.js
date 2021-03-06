const SET_USER_DATA = 'SET_USER_DATA';

let InitialState = {
      id:  null,
      login: null,
      email: null,
      isAuth: false

}

const AuthReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
        
      }
    default:
      return state;
  }
}

export const setAuthUserData = (id, login, email) => {
  return { type: SET_USER_DATA, data: {id, login, email} }
}
 
export default AuthReducer;