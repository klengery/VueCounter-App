<template>
    <div class="p-l-r">
        <span class="login100-form-title p-b-41">
            Ingresar
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

            <div class="wrap-input100 validate-input" data-validate = "Enter a mail">
                <input v-model="email" class="input100" type="email" placeholder="Correo" required>
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Enter a image">
                <input type="file" @change="previewFiles" multiple>
                <!-- <input  type="file"  id="image" @change="onFileChange" class="form-control">
                <input v-model="image" class="input100" type="text" placeholder="Image" required> -->
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Is private?">
                <input type="checkbox" id="checkbox" v-model="isPrivate" @change="showInput()">
                <label for="checkbox">{{ isPrivate }}</label>
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
                <select id="currency" name="currency" v-model="currency" class="input100" required>
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

export default {
data(){
    return{
        name: "",
        description: "",
        image: null,
        email: "",
        isPrivate: false,
        password: "",
        price: "",
        currency: null,
        user: null
    }
},
created(){
    this.getUser()
},
methods: {
    getUser(){
        const user = JSON.parse(auth.getUserLogged())
        this.user = user.id
        console.log(this.user)
    },
    async createPool(){
        const data = {
            user: this.user,
            name: this.name,
            description: this.description,
            image: this.image,
            email: this.email,
            isPrivate: this.isPrivate,
            price: this.price,
            currency: this.currency
        }

        if(this.isPrivate==true)
            Object.assign(data, {password: this.password})

        await pool.createPool(data)
        auth.setUserLogged(JSON.stringify(userLogger.data.result))
        this.$router.push('/pools')
        
        console.log(data)
    },
    showInput(){
        const passDiv = document.getElementById('password')
        this.isPrivate === true ? passDiv.style.display='block' : passDiv.style.display='none'
    },
    previewFiles(event) {
      console.log(event.target.files)
      this.image = event.target.files
      console.log(this.image)
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