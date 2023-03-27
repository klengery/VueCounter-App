<template>
    <header-main />
    <main>
        <div>
            <h1>{{ userLogged.name }}'s workspace</h1>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
import auth from '@/store/auth'
export default {
    computed: {
        userLogged(){
            return JSON.parse(auth.getUserLogged())
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