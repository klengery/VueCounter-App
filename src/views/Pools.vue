<template>
  <div>
    <h4>Haz clcik en el boton, para ver las pools</h4>
    <div>
        <!-- <button @click="getPools()">Ver Pools</button> -->
        <ul>
            <li v-for=" pool in pools" :key="pool">
                <div class="contentData">
                    <p>{{ pool.name }}</p>
                    <img :src="`${pool.image}`">
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { poolStore } from '@/store/poolState'
import pool from '@/store/pool'

const store = poolStore();

export default {
    data(){
        return{
            pools: [],
            logo: null,
            image: null,
            baseUrl: "https://api.sogcial.com/"
        }
    },
    created(){
        this.getPools()
    },
    methods:{
        async getPools(){
            //AQUI SE GUARDA EL ESTADO
            const response = await pool.getAllPool()
            const {data} = response.data

            this.image = data.image
            this.pools = data
            console.log(this.pools)

            store.setPool(this.pools)
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