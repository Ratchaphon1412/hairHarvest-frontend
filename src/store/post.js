import { defineStore } from 'pinia'
import { postAPI} from '@/service/api.js'

export const usePost = defineStore({
    id:'post',
    state: () => ({
        postAll: null,//array post
    }),

    getters: {
        getPostAll: state => {
            return state.postAll;
        },

    },

    actions:{
        async fetch(){
            this.postAll = await postAPI.allPost()
        },
        async allPost(){
            const response = await postAPI.allPost()
            this.postAll = response
        },


    }


});