import { defineStore } from 'pinia';


export const postStore = defineStore('post', {
    state: () => ({
        post: []
    }),
    actions: {
        setPosts(response){
            this.post = response
            console.log(this.post)
        },
        updatePost(postUpdated){
            const x = this.post.find(element => element.id == postUpdated.id)
            let index = x.id
            this.post[index] = postUpdated
            console.log(this.post[index])
            console.log('Esto es index', index)
        }
    },
    getters: {
        getPost(){
            return this.post
        }
    }
})