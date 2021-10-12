import MyPostsContainer from "./MyPosts/MyPostsContainer";
import PersonInfo from "./PersonInfo/PersonInfo";
import s from "./Profile.module.css";




const Profile = (props) => {
    return (
        <div className={s.profile}>
            <PersonInfo profile={props.profile} />
            <MyPostsContainer store={props.store} dispatch={props.dispatch}
            />
           
        </div>
    );
}
export default Profile;