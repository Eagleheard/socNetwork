import { combineReducers, createStore } from "redux";
import MessageReducer from "./Message-reducer";
import ProfileReducer from "./Profile-reducer";
import UsersReducer from "./Users-reducer";
import AuthReducer from "./auth-reducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagePage: MessageReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer
})
let store = createStore(reducers);

export default store;