<template>
  <div>
    <div>
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
import { inject, onMounted } from "vue";

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
  this.emitter.on("postUp",this.postUp)
},
methods: {
  async getPost(){
    const response = await post.getPost()
    this.posts = response.data
    store.setPosts(this.posts)
  },
  postUp(pool){
    console.log('Recibe', pool)

    store.updatePost(pool)

    this.emitter.off("postUp")
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