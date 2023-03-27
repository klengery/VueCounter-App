<template>
  
    <span class="login100-form-title p-b-41">
		Ingresar
    </span>
    
    <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="login">

        <div class="wrap-input100 validate-input" data-validate = "Enter username">
            <input v-model="email" class="input100" type="text" placeholder="Correo" required>
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate="Enter password">
            <input v-model="password" class="input100" type="password" placeholder="Contraseña" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
        
        <div class="container-login100-form-btn m-t-32">
            <button class="login100-form-btn">
                Login
            </button>

        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{name: 'register'}">¿No tienes cuenta?</router-link>
        </div>
    </form>

</template>

<script>
import auth from '@/store/auth'
export default {
    data(){
        return{
            email: "",
            password: "",
            error: false
        }
    },
    methods: {
        async login(){
            try {
                var userLogger = await auth.login(
                    this.email,
                    this.password
                )

                console.log(userLogger.data.result)
                auth.setUserLogged(JSON.stringify(userLogger.data.result))
                this.$router.push('/main')
                
            } catch (error) {
                this.error = true
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
