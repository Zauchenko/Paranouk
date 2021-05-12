import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b883471e-fec0-402f-85e1-b444da1d9b5e"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    authUser() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    unfollowUsers(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUsers(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfileId(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }


}