<template>
  <div>
    <h4>Haz clcik en el boton, para ver las pools</h4>
    <div>
        <button>Ver Pools</button>
        <ul>
            <li>
                <div class="contentData">
                    <p></p>
                    <img>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

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
        padding-top: 10px;
        padding-bottom: 10px;
    }

    button{
        background-color: #f1f1f2;
        padding: 8px;
        border-radius: 10px;
        border: 1px solid purple;
    }

</style>