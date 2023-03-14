<template>
    <div>
        <h4>Haz click en el boton, para ver los paises</h4>
        <div>
            <button @click="getCountries()">Ver Paises</button>
            <ul>
                <li v-for="country in countries" :key="country">
                    <div class="contentData">
                        <p>{{ country.name }}</p>
                        <img :src="`${baseUrl + 'storage/uploads/' + country.flag}`" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            countries: [],
            flag: null,
            baseUrl: "https://api.sogcial.com/"
        }
    },
    methods:{
        async getCountries(){
            const r = await fetch(this.baseUrl + 'api/countries')
            const {countries} = await r.json()
            this.countries = countries
            console.log(this.countries)

            const {flag} = countries
            this.flag = flag
            console.log(this.flag)
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
    }

    button{
        background-color: #f1f1f2;
        padding: 8px;
        border-radius: 10px;
        border: 1px solid purple;
    }

</style>