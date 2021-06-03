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
            .then(response => response.data);
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
        // console.warn('Use profileAPI.getProfileId');
        return profileAPI.getProfileId(userId);
    }


}
export const profileAPI = {

    getProfileId(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
            .then(response => response.data)
    },
savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
      return instance.put(`profile/photo/`, formData,{ headers: {'Content-Type': 'multipart/form-data'}} )
          .then(response => response.data)
}

}


export const authAPI = {

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});

    },
    logout(email, password, rememberMe = false) {
        return instance.delete(`auth/login`);

    }


}



