const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let InitialState = {
  PostsData: [
    { id: "1", post: "Hi, how are you?", likes: "14" },
    { id: "2", post: "This is my first post", likes: "11" },
    { id: "3", post: "User3", likes: "10" },
    { id: "4", post: "User4", likes: "22" }
  ],
  NewPost: '',
  profile: null
}

const ProfileReducer = (state = InitialState, action) => {

  switch (action.type) {
    case ADD_POST:

      return {
        ...state,
        PostsData: [...state.PostsData,
        {
          id: "5",
          post: state.NewPost,
          likes: "0"
        }],
        NewPost: ''
      }

    case UPDATE_POST_TEXT:
      return {
        ...state,
        NewPost: action.newPost
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state;

  }
}
export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}
export const updatePostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-POST-TEXT',
    newPost: text
  }
}
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}
export default ProfileReducer;