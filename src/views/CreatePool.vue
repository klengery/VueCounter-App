<template>
    <div class="p-l-r">
        <span class="login100-form-title p-b-41">
            Create Pool
        </span>
        
        <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="createPool">

            <div class="wrap-input100 validate-input" data-validate = "Enter a pool name">
                <input v-model="name" class="input100" type="text" placeholder="Name" required>
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Enter a description">
                <input v-model="description" class="input100" type="text" placeholder="Description" required>
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
                <input v-model="price" class="input100" type="number" placeholder="Price" required>
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Enter a coin">
                <p class="input100" style="text-align: left;">Currency</p>
                <select id="currency" name="currency" v-model="currency_id" class="input100" required>
                    <option value="1">USD</option>
                    <option value="2">COP</option>
                    <option value="3">BsF</option>
                </select>
                <span class="focus-input100"></span>
            </div>

            <!-- <p v-if="error" class="error">Has introducido mal algun dato.</p> -->
            
            <div class="container-login100-form-btn m-t-32">
                <button class="login100-form-btn">
                    Create
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
        name: "",
        description: "",
        image: null,
        is_private: 0,
        password: "",
        price: "",
        currency_id: null,
        user_id: null
    }
},
created(){
    this.getUser()
},
methods: {
    getUser(){
        const user = JSON.parse(auth.getUserLogged())
        this.user_id = user.id
        console.log(this.user_id)
    },
    async createPool(){
        const data = {
            user_id: this.user_id,
            name: this.name,
            description: this.description,
            image: this.image,
            is_private: this.is_private ? 1 : 0 ,
            price: this.price,
            currency_id: this.currency_id
        }
        console.log(this.image)
        if(this.is_private==1)
            Object.assign(data, { password: this.password })

        Object.assign(data, {image: this.image})
        
        var newPool = await pool.createPool(data)
        var dataPool = newPool.data.data
        store.newPool(dataPool)
        // auth.setUserLogged(JSON.stringify(userLogger.data.result))
        
        this.$router.push('/poolState')
        
        console.log(data)
    },
    showInput(){
        const passDiv = document.getElementById('password')
        this.is_private === true ? passDiv.style.display='block' : passDiv.style.display='none'
    },
    previewFiles(event) {
        console.log(event.target.files[0])
        this.image = event.target.files[0]
      
    }
    // async getCurrency(){
    //     const response = await pool.getCurrency()
    //     console.log(response)
    // }
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