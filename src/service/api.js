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
        if (response.status === 200) {
            localStorage.setItem(JWT_TOKEN_LOCALSTORAGE_KEY, response.data.jwt)
            return true
        }
        return false
    },
    async auth() {
        const token = localStorage.getItem(JWT_TOKEN_LOCALSTORAGE_KEY)
        const json = JSON.stringify({"token": token});
        console.log(json)
        const response = await axiosInstance.post('user/', json)
        if (response.status === 200) {
            console.log(response.data)
            return response.data
        }
        return {}
    },
    async register(email, username,password,image) {
        let formData = new FormData();
        formData.append("image", image);
        formData.append ("name",username);
        formData.append ("email",email);
        formData.append ("password",password);

        const response = await axiosInstance.post('register/', formData,{headers: {
            "Content-Type": "multipart/form-data"
          },})
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
            console.log(response.data)
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
    async savePost(userID,postID) {
        const json = JSON.stringify({"userID": userID, "postID": postID});
        const response = await axiosInstance.post('/post/save/', json)
        if (response.status == 200) {
            return response.data
        }
        return {}
    },

    async getPost(id) {
    
        const response = await axiosInstance.get('/post/view/' + "?id=" + id)
        if (response.status == 200) {
            return response.data
        }
        return {}
    },
    async createPost(userID,title,detials,post_image){
        let formData = new FormData();
        formData.append("userID",userID)
        formData.append("title",title)
        formData.append("detials",detials)
        formData.append("post_image",post_image)



        const response = await axiosInstance.post('/post/', formData,{headers: {"Content-Type": "multipart/form-data"}})
        if (response.status == 200) {
            return response.data
        }
        return {}
    },
    async getMyPost(id){
        const json = JSON.stringify({"userID": id});
        const response = await axiosInstance.post('/post/view/',json);
        

       

        if (response.status == 200) {

            return response.data

        }
        return {}
    },
    async getMySavePost(id){
       
        const response = await axiosInstance.get('/post/save/'+"?userID="+id);
        

       

        if (response.status == 200) {

            console.log(response.data)

            return response.data

        }
        return {}
    }

}
