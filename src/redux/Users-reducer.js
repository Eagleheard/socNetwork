const FOLLOW = 'FOLLOW';
const SHOW_MORE = 'SHOW_MORE';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_СURRENT_PAGE = 'SET_СURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let InitialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []

}

const UsersReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
      ...state,
        users: state.users.map(  u=> {
          if (u.id === action.userId) {
           return {...u, followed: true}
          }
          return u;
        })
        
      }

      case UNFOLLOW:
        return {
       ...state,
          users: state.users.map(  u=> {
            if (u.id === action.userId) {
             return {...u, followed: false}
            }
            return u;
          })
        }
          
        
        case SET_USER:
          return {
            ...state, 
            users: action.users
          }
    case SHOW_MORE:
      return {

      }
    case SET_СURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_COUNT: 
    return {
      ...state,
      totalUsersCount: action.totalUsersCount
    }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ?
        [...state.followingInProgress, action.id] :
        state.followingInProgress.filter(id => id !== action.id) 
        }

    default:
      return state;
  }
}

export const follow = (userId) => {
  return { type: FOLLOW, userId }
}
export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId }
}
export const showMore = (action) => {
  return { type: SHOW_MORE };
}
export const setUsers = (users) => {
  return { type: SET_USER, users}
}
export const setCurrentPage = (PageNumber) => {
  return { type: SET_СURRENT_PAGE, currentPage: PageNumber}
}
export const totalCount = (totalUsersCount) => {
  return { type: SET_TOTAL_COUNT, totalUsersCount}
}
export const toggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const progressFollow = (isFetching, id) => {
  return {type: FOLLOWING_IN_PROGRESS, isFetching, id}
}
 
export default UsersReducer;