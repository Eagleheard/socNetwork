import s from './Users.module.css'
import userPhoto from '../../assets/images/wp3092009.jpg';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(u => <span className={props.currentPage === u && s.selectedPage} onClick={(e) => props.onPageChanged(u)}>{u}</span>)}
        </div>
        {

            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}></img>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some( id => id == u.id)} onClick={() => {
                                props.progressFollow(true, u.id)
                                usersAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode === 0) { props.unfollow(u.id) }
                                    props.progressFollow(false, u.id)
                                })
                                


                            }}>Unfollow</button> :

                            <button disabled={props.followingInProgress.some( id => id == u.id)} onClick={() => {
                                props.progressFollow(true, u.id)
                                usersAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) { props.follow(u.id) }
                                    props.progressFollow(false, u.id)
                                })
                                

                            }}> Follow </button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div><div>{u.status}</div>
                </span>
                <div>u.location.city</div>
                <div>u.location.country</div>
            </div>)

        }
    </div>
}
export default Users;