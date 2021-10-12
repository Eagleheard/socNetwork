import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let NewPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    let NewPostChange = () => {
        let text = NewPostElement.current.value;
        props.NewPostChange(text);

    }
    let PostsElemets = props.posts.PostsData.map((post) => <Post message={post.post} likes={post.likes} />);
    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <textarea placeholder="What's new?" className={s.field} ref={NewPostElement} onChange={NewPostChange} value={props.newPost} />
            <div className={s.add}>
                <button onClick={addPost}>Add</button>
            </div>
            {PostsElemets}

        </div>


    );
}
export default MyPosts;