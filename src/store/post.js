import { defineStore } from 'pinia'
import { postAPI} from '@/service/api.js'

export const usePost = defineStore({
    id:'post',
    state: () => ({
        postAll: null,
        myPost: null,
        savePost: null,
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
        async getPost(id){
            const response = await postAPI.getPost(id)
            this.myPost = response
        },
        async getMyPost(id){
            const response = await postAPI.getMyPost(id)
            this.myPost = response
        },
        delete(id) {
            this.postAll = this.postAll.filter((post) => post.id != id)
        },
        async getMySavePost(id){

            
            
            this.savePost = await postAPI.getMySavePost(id)
        }
        
    }


});