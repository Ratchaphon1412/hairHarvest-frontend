import { defineStore } from 'pinia'
import { postAPI} from '@/service/api.js'

export const usePost = defineStore({
    id:'post',
    state: () => ({
        postAll: null,
    }),

    getters: {
        getPostAll: state => {
            return state.postAll;
        },

    },

    actions:{
        async fetch(){
            this.postAll = await postAPI.getAllPost()
        },
        async allPost(){
            const response = await postAPI.getAllPost()
            this.postAll = response
        },
        delete(id) {
            this.postAll = this.postAll.filter((post) => post.id != id)
        },
        
    }


});