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
                <img src={props.profile.photos.small !=null ? props.profile.photos.small :  'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/eQaVr0W4vwoLViiso_ZjIuNnemsFCgBkImSta2yM6NTq2aDBkZaW_FZT4tMG5g1wE268Hoj7ztoCnN-Ch4UFarv2.jpg?size=200x224&quality=96&crop=182,233,726,816&ava=1'} className={s.persava}/>
            </div>
            <div className={s.desc}>
               <span>{props.profile.aboutMe}</span>
            </div>
        </div>
    );
}

export default PersonInfo;