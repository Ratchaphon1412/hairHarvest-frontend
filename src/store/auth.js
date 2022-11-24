import { defineStore } from 'pinia'
import { authAPI } from '@/service/api.js'

export const useAuthStore = defineStore('auth',{

    state: () => ({
        userID: null,
        email: null,
        username: null,
        image:null,
        token: null,
    }),
    getters: {
        getUsername: (state) => state.username,
        getEmail: (state) => state.email,
        getUserID: (state) => state.userID,
        getImage: (state) => state.image,

    },
    actions: {
        async login(email, password) {
            const response = await authAPI.login(email, password);
            console.log(response)
            if (response['status'] === 200) {
                // const data = JSON.parse();
                console.log(response['body']);

                return true;
            }
            return false;
        },
        async register(email, username,password,image) {
            const response = await authAPI.register(email, username,password,image);
            if (response['status'] === 200) {
                // const data = JSON.parse();
                console.log(response['body']);

                return true;
            }
        },
        async auth() {
            const response = await authAPI.auth();
            console.log(response);
            this.email = response.user.email;
            this.username = response.user.name;
            this.userID = response.user.id;
            this.image = response.profile_pic;
            console.log(this.userID)
            

            if (response['status'] == 200) {
                // const data = JSON.parse();
                console.log(response);
                this.email = response['body']['user']['email'];
                this.name = response['body']['user']['name'];
                this.userID = response['body']['user']['id'];
                console.log(this.userID)

                return true;
            }
            return false;
        },
        async logout() {
            const response = await authAPI.logout();
            if (response['status'] === 200) {

                return true;
            }

            return false;
        }


    }



});