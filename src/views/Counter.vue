<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ counter * counter }} </p> 

  <div>
    <button v-on:click="increase()" class="btnControl">+1</button>
    <!-- El manejo de eventos se puede hacer con v-on y con @ -->
    <button @click="decrease()" class="btnControl">-1</button>
  </div>

</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 15,
            // required: true
            validator(value){
                return value >= 0
            }
        }
    },
    data(){
        return{
            counter: this.start
        }
    },
    methods:{
        getSquareValue(){
            return this.counter * this.counter
        },
        increase(){
            this.counter++
            console.log(this.counter)
        },
        decrease(){
            this.counter--
            console.log(this.counter)
        }
    },
    computed:{
        squareCounter(){
            return this.counter * this.counter
        },
        customTitle(){
            return this.title ? this.title : 'Counter'
        }
    }
}
</script>

<style>
    .btnControl{
        background-color: #64bb87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    .btnControl:hover{
        background-color: #5aa67b;
        transition: 0.4s ease-in-out;
    }
    
    p, h2{
        color: #fff
    }

</style>