import MessageReducer from "./Message-reducer";
import ProfileReducer from "./Profile-reducer";


/*let state = {
  ProfilePage: {
    PostsData: [
      { id: "1", post: "Hi, how are you?", likes: "14" },
      { id: "2", post: "This is my first post", likes: "11" },
      { id: "3", post: "User3", likes: "10" },
      { id: "4", post: "User4", likes: "22" }
    ],
    NewPost: ''
  },
  MessagePage: {
    dialogs: [
      { id: "1", name: "User1" },
      { id: "2", name: "User2" },
      { id: "3", name: "User3" },
      { id: "4", name: "User4" }
    ],
    messages: [
      { id: "1", message: "Yo" },
      { id: "2", message: "How are you?" },
      { id: "3", message: "I'm fine" },
      { id: "4", message: "That's cool!" }
    ]
  }
}

export const addPost = () => {
  let newPost = {
    id: "5",
    post: state.ProfilePage.NewPost,
    likes: "0"
  };
  state.ProfilePage.PostsData.push(newPost);
  state.ProfilePage.NewPost = '';
  rerenderEntireTree();
} 

export const updatePostText = (newPost) => {
  state.ProfilePage.NewPost = newPost;
  rerenderEntireTree();
}

export const subscriber = (observe) => {
  rerenderEntireTree = observe;
}

export default state; */
let store = {
  _state: {
    ProfilePage: {
      PostsData: [
        { id: "1", post: "Hi, how are you?", likes: "14" },
        { id: "2", post: "This is my first post", likes: "11" },
        { id: "3", post: "User3", likes: "10" },
        { id: "4", post: "User4", likes: "22" }
      ],
      NewPost: ''
    },
    MessagePage: {
      dialogs: [
        { id: "1", name: "User1" },
        { id: "2", name: "User2" },
        { id: "3", name: "User3" },
        { id: "4", name: "User4" }
      ],
      messages: [
        { id: "1", message: "Yo" },
        { id: "2", message: "How are you?" },
        { id: "3", message: "I'm fine" },
        { id: "4", message: "That's cool!" }
      ],
      NewMessage : ''
    },
  },
  _callSubscriber() {
    console.log('');
  },
  addPost() {
    let newPost = {
      id: "5",
      post: this._state.ProfilePage.NewPost,
      likes: "0"
    };
    this._state.ProfilePage.PostsData.push(newPost);
    this._state.ProfilePage.NewPost = '';
    this._callSubscriber();
  },
  updatePostText(newPost) {
    this._state.ProfilePage.NewPost = newPost;
    this._callSubscriber();
  },
  dispatch(action) {
    this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
    this._state.MessagePage = MessageReducer(this._state.MessagePage, action);
    this._callSubscriber(this._state);
  },
  subscriber(observe) {
    this._callSubscriber = observe;
  },
  getState() {
    return this._state;
  },
  getPost() {
    return this._state.ProfilePage.PostsData;
  },
  getDialog() {
    return this.dialogs;
  },
  getMessage() {
    return this.messages;
  },
  setPost(post) {
    this.NewPost = post;
  },
}

export default store;

