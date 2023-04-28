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
            const x = this.post.findIndex(element => element.id == postUpdated.id)
            // let index = x.id
            this.post[x].title = postUpdated.name
            console.log(this.post[x])
            console.log('Esto es index', x)
        }
    },
    getters: {
        getPost(){
            return this.post
        }
    }
})