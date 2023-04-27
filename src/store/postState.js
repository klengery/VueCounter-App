import { defineStore } from 'pinia';


export const postStore = defineStore('post', {
    state: () => ({
        post: []
    }),
    actions: {
        getPosts(response){
            this.post = response
            console.log(this.post)
        }
    }
})