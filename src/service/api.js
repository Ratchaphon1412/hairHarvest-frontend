import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

const JWT_TOKEN_LOCALSTORAGE_KEY = 'jwt_token'


export const authAPI = {
    async login(email, password) {
        console.log(email, password)
        const json = JSON.stringify({"email": email, "password": password});
        const response = await axiosInstance.post('login/', json)
        if (response.status == 200) {
            localStorage.setItem(JWT_TOKEN_LOCALSTORAGE_KEY, response.data.jwt)
            return true
        }
        return false
    },
    async auth() {
        const token = localStorage.getItem(JWT_TOKEN_LOCALSTORAGE_KEY)
        const json = JSON.stringify({"token": token});
        const response = await axiosInstance.post('user/', json)
        if (response.status == 200) {
            return response.data
        }
        return {}
    },
    async register(name, email, password, image) {
        const json = JSON.stringify({
            "name": name, "email": email, "password": password, "user_profile": [{
                "imageProfile": image
            }]
        });
        const response = await axiosInstance.post('register/', json)
        if (response.status == 200) {
            return true
        }
        return false

    },
    logout() {
        localStorage.removeItem(JWT_TOKEN_LOCALSTORAGE_KEY)
    }
}

export const postAPI = {
    async getAllPost() {
        const response = await axiosInstance.get('post/');
        if (response.status == 200) {
            return response.data
        }
        return {}
    },
    async deletePost(id) {
        const response = await axiosInstance.delete('/post/save/' + id)
        if (response.status == 200) {
            return response.data.data
        }
        return []
    },
    async savePost(id) {
        const response = await axiosInstance.put('/post/save/' + id)
        if (response.status == 200) {
            return response.data
        }
        return {}
    },

    async getMyPost(id) {
        const response = await axiosInstance.get('/post/save/' + {parems: {user_id: id}})
        if (response.status == 200) {
            return response.data
        }
        return {}
    },
}
