import * as axios from "axios";


const instance = axios.create( {
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {"API-KEY" : "cce7ec00-fe5b-482d-9481-0936ec780cd3"}

} )
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).
            then( response => {
                return response.data;
            })
        
    },
    follow(id) {
        return instance.post(`/follow/${id}`).
        then (response => {
            return response.data;
        })
    },
    unfollow(id) {
        return instance.delete(`/follow/${id}`).
        then (response => {
            return response.data
        })
    }
}
