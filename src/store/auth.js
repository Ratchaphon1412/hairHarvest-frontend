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
        async register(email, password, username) {
            const response = await authAPI.register(email, password, username);
            if (response['status'] === 200) {
                // const data = JSON.parse();
                console.log(response['body']);

                return true;
            }
        },
        async auth() {
            const response = await authAPI.auth();
            console.log(response);
            this.userID = response['user']['id'];
            this.username = response['user']['name'];
            this.image = response['profile_pic'];

            if (response['status'] === 200) {
                // const data = JSON.parse();
                //

                this.userID = response['user']['id'];
                this.username = response['user']['name'];
                this.image = response['profile_pic'];
                console.log(this.image)

                // console.log(response['user'])
                // this.email = response['body']['email'];
                // this.name = response['body']['name'];
                // this.userID = response['body']['id'];

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