<template>
    <div id="nav">
      <!-- <button  @click="redirect(1)"> Counter </button>
      <button  @click="redirect(2)"> Indecision </button> -->
      <ul>
        <li> <router-link style="color: white;" to="/counter">Counter</router-link> </li>
        <li> <router-link style="color: white;" to="/indecision">Indecision</router-link> </li>
        <li> <router-link style="color: white;" to="/countries">Countries</router-link> </li>
        <li> <router-link style="color: white;" to="/pools">Pools</router-link> </li>
        <li> <router-link style="color: white;" to="/poolState">Pools with State</router-link> </li>
        <li> <router-link style="color: white;" to="/createPool">Create Pool</router-link> </li>
        <li> <router-link style="color: white;" to="/post">Post</router-link> </li>
      </ul>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HeaderMain',
  setup() {
    const router = useRouter();

    function  redirect(index) {
    if(index == 1)
      router.push({ name: "counter" });
    else 
      router.push({ name: "indecision" });
      
    }

    return {
      redirect
    }
  }
});
</script>

<style>
  #nav{
    z-index: 99999;
    display: block;
    position: absolute;
  }
  
  h1{
      color: white;
  }

  ul{
    list-style: none;
  }

  li{
    color: white !important;
    font-size: 20px;
    line-height: 30px;
  }

</style>