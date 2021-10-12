import Preloader from "../../../common/Preloader";
import s from "./PersonInfo.module.css";

const PersonInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.person}>
             <div className={s.cover}>
                <img src='https://c4.wallpaperflare.com/wallpaper/135/681/249/field-flowers-hd-cornflower-field-wallpaper-preview.jpg' className={s.backlay} />
            </div>
            <div className={s.ava}>
                <img src={props.profile.photos.small} className={s.persava} />
            </div>
            <div className={s.desc}>
               <span>{props.profile.aboutMe}</span>
            </div>
        </div>
    );
}

export default PersonInfo;