import * as axios from "axios"


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': '99d47491-cbe6-482d-8c79-c411ad680076'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then( response => response.data);
    },
    followUser(userId){
        return instance.post(`follow/${userId}`,{}).then(response => response.data);
    },
    unFollowUser(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data); 
    }
   
}

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    }, 
    setStatus(status){
        return instance.put(`profile/status`,{status}).then(response => response.data);
    }
}

export const authAPI = {
    authMe(){
        return instance.get('auth/me').then( response => response.data);
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login',{email, password, rememberMe});
    },
    logout(){
        return instance.delete('auth/login');
    }
}