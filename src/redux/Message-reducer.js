const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let InitialState = {
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
  NewMessage: ''
}

const MessageReducer = (state = InitialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages,
        {
          id: "6",
          message: state.NewMessage
        }],
        NewMessage: ''
      }

    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        NewMessage: action.newMessage
      }

    default:
      return state;
  }
}

export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE'
  }
}
export const updateMessageActionCreator = (text) => {
  return {
    type: 'UPDATE-MESSAGE-TEXT',
    newMessage: text
  }
}
export default MessageReducer;