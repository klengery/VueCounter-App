<template>
  <div class="p-l-r">
        <span class="login100-form-title p-b-41">
            Edit Pool
        </span>
        
        <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="createPool">

            <div class="wrap-input100 validate-input" data-validate = "Enter a pool name">
                <input v-model="name" class="input100" type="text" placeholder="Name">
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Enter a description">
                <input v-model="description" class="input100" type="text" placeholder="Description">
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Enter a mail">
                <input v-model="email" class="input100" type="email" placeholder="Correo">
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Enter a image">
                <input type="file" @change="previewFiles" name="image" multiple>
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Is private?">
                <input type="checkbox" id="checkbox" v-model="is_private" @change="showInput()">
                <label for="checkbox">{{ is_private === 0 ? 'false' : 'true' }}</label>
                <input class="input100" type="password" placeholder="Is private?">
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" style="display: none;" id="password" data-validate = "Enter a password">
                <input v-model="password" class="input100" type="password" placeholder="Password">
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Enter a price">
                <input v-model="price" class="input100" type="number" placeholder="Price">
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Enter a coin">
                <p class="input100" style="text-align: left;">Currency</p>
                <select id="currency" name="currency" v-model="currency_id" class="input100">
                    <option value="1">USD</option>
                    <option value="2">COP</option>
                    <option value="3">BsF</option>
                </select>
                <span class="focus-input100"></span>
            </div>

            <!-- <p v-if="error" class="error">Has introducido mal algun dato.</p> -->
            
            <div class="container-login100-form-btn m-t-32">
                <button class="login100-form-btn">
                    Update
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import auth from "@/store/auth"
import pool from '@/store/pool'
import { poolStore } from '@/store/poolState'

const store = poolStore()

export default {
data(){
    return{
        currentPool: null,
        user_id: null,
        name: "",
        description: "",
        image: null,
        email: "",
        is_private: 0,
        password: "",
        price: "",
        currency_id: null,
        pool_id: null
    }
},
props: {
    id: { 
      type: Number,
      required: true
    }
},
created(){
    this.pool_id = this.id
    console.log(this.pool_id)
    this.getUser()
    // this.getPool()
},
methods:{
    getUser(){
        const user = JSON.parse(auth.getUserLogged())
        this.user_id = user.id
    },
    async getPool(){
        var poolActual = await pool.getPoolById(this.id)
        this.currentPool = poolActual
    },
    async updatePool(){
        const data = {
            user_id: this.user_id,
            name: this.name,
            description: this.description,
            image: this.image,
            email: this.email,
            is_private: this.is_private ? 1 : 0 ,
            price: this.price,
            currency_id: this.currency_id
        }

        var poolUpdated = await pool.updatePool(data)
    },
    showInput(){
        const passDiv = document.getElementById('password')
        this.is_private === true ? passDiv.style.display='block' : passDiv.style.display='none'
    },
    previewFiles(event) {
        console.log(event.target.files)
        this.image = event.target.files[0]
      
    }

}

}
</script>

<style>
@import '@/css/auth.css';
@import '@/css/util.css';

.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}

.p-l-r{
    padding-left: 30rem;
    padding-right: 30rem;
    /* margin-left: 15rem;
    margin-right: 15rem; */
}

</style>