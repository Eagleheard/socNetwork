import { connect } from "react-redux";
import { addPostActionCreator, updatePostTextActionCreator } from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage,
        newPost: state.ProfilePage.NewPost
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        NewPostChange: (text) => {
            let action = updatePostTextActionCreator(text)
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;