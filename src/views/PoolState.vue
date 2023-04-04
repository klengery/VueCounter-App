<template>
  <div>
    <h4>Haz clcik en el boton, para ver las pools</h4>
    <div>
        <button @click="getPools()">Ver Pools</button>
        <ul>
            <li v-for=" pool in pools" :key="pool">
                <div class="contentData">
                    <p>{{ pool.name }}</p>
                    <!-- <img :src="`${pool.image}`"> -->
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import poolState from '@/store/poolState'
import pool from '@/store/pool'
export default {
    data(){
        return{
            pools: []
        }
    },
    methods:{
        async getPools(){
            await pool.getAllPool()
            .then(r => {
                const resp = r.data.data
                this.pools = resp
                this.$store.commit('setPool', this.pools)
                console.log(this.pools)
            })
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

    h4{
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    button{
        background-color: #f1f1f2;
        padding: 8px;
        border-radius: 10px;
        border: 1px solid purple;
    }

</style>