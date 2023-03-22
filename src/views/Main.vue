<template>
    <header-main />
    <main>
        <div>
            <h1>Klen's workspace</h1>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
import auth from '@/store/auth'
export default {
    computed: {
        userLogged(){
            return auth.getUserLogged()
        }
    }
}
</script>

<style>
    main{
        padding-bottom: 3rem;
        padding-top: 1rem;
    }
</style>