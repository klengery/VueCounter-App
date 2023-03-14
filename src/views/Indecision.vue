<template>
  <img v-if="img" :src="img" alt="bg">
  <div class="bg-dark"></div>

  <div class="indecision-container">
    <input v-model="question" type="text" placeholder="Hazme una Pregunta">
    <p>Recuerda terminar con un signo de interrogacion (?)</p>

    <div v-if="isValidQuestion">
        <h2>{{ question || 'No has hecho una pregunta' }}</h2>
        <h1>{{ answer === 'yes' ? 'Si!' : 'No!'}}</h1>
    </div>
  </div>

</template>

<script>
export default {
    data(){
        return{
            question: null,
            answer: null,
            img: null,
            isValidQuestion: false
        }
    },
    methods:{
        async getAnswer(){
            this.answer = "Pensando..."

            const {answer, image} = await fetch('https://yesno.wtf/api').then(r => r.json())
            console.log(answer)
        
            this.answer = answer
            this.img = image
        }
    },
    watch:{
        question(value, oldValue){
            this.isValidQuestion = false

            // console.log({value , oldValue})
            // console.log(value.includes('?'))
            
            if(!value.includes('?')) return
            this.isValidQuestion = true
            this.getAnswer()
 
        }
    }
}
</script>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(148, 124, 147, 0.267);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        margin-top: 1rem;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
        padding-top: 10px;
        padding-bottom: 1rem;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>