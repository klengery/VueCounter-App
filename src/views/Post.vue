<template>
  <div>
    <div>
        <button @click="toPost()">Get poolUp</button>
        <ul>
            <li v-for=" post in posts" :key="post">
                <div class="contentData">
                    <p>{{ post.id }}</p>
                    <p>{{ post.title }}</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import post from '@/store/post'
import { postStore } from '@/store/postState'
import poolEdit from '@/views/EditPool.vue'

const store = postStore()

export default {
components:{
  poolEdit
},
data(){
    return{
      posts: []
    }
},
created(){
  this.getPost()
},
methods: {
  async getPost(){
    const response = await post.getPost()
    this.posts = response.data
    store.getPosts(this.posts)
  },
  toPost(info){
    console.log("Click event on the button of the children with: " + info)
  }
}
}
</script>

<style>

.contentData{
  display: flex;
  justify-content: space-between;
  padding-left: 20rem;
  padding-right: 30rem;
}

</style>