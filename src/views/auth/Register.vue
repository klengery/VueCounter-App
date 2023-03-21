<template>
  
    <span class="login100-form-title p-b-41">
		Registrarse
    </span>
    
    <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="register">

        <div class="wrap-input100 validate-input" data-validate = "Enter name">
            <input v-model="name" class="input100" type="text" placeholder="Nombre" required>
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate = "Enter last name">
            <input v-model="last_name" class="input100" type="text" placeholder="Apellido" required>
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate = "Enter mail">
            <input v-model="email" class="input100" type="text" placeholder="Correo" required>
            <span class="focus-input100" data-placeholder="&#xe818;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate="Enter password">
            <input v-model="password" class="input100" type="password" placeholder="Contraseña" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate="Confirm password">
            <input v-model="confirmPassword" class="input100" type="password" placeholder="Confirma tu contraseña" required>
            <span class="focus-input100"></span>
        </div>

        <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>

        <div class="container-login100-form-btn m-t-32">
            <button class="login100-form-btn">
                Registrarse
            </button>

        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{name: 'login'}">¿Ya tienes una cuenta?</router-link>
        </div>
    </form>

</template>

<script>
import auth from "@/store/auth"
export default {
    data(){
        return{
            name: "",
            last_name: "",
            email: "",
            password: "",
            confirmPassword: "",
            error: false
        }
    },
    methods: {
        async register(){
        //     const response = await auth.register(
        //         this.name, 
        //         this.lastname,
        //         this.email,
        //         this.password,
        //         this.confirmPassword
        //     )
        //     console.log(response)
        // }
            console.log(this.name, this.last_name, this.email, this.password, this.confirmPassword)
            try {
                if(this.password === this.confirmPassword){
                await auth.register(
                    this.name,
                    this.last_name,
                    this.email,
                    this.password,
                    this.confirmPassword
                )
                this.$router.push('/login')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>

.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}

</style>