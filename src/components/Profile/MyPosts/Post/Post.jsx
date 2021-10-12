import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/1586206/pub_5f4a71c406e04d00154692f2_5f4a7211da92f97bb510d852/scale_1200" className={s.img} />
            <span>{props.message}</span>
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    );
}
export default Post;