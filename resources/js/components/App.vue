<template>
    <div class="container">

        <h1 class="main-title">ACS Test Panel Results</h1>


          <div id="panel-list">
            <div>
              <Panel v-bind:panels="panels" />
            </div>


          </div>

    </div>
</template>

<script>
   import Panel from './Panel.vue';

    export default {
        name: "App",
        components: {
            Panel
        },
        props: ["x"],
        data() {
            return {
                panels: panelsData
            }
        },
        mounted() {
            console.log('App mounted.');
        }
    }
</script>

<style scoped>
    .main-title  {
        text-align: center;
        font-weight: bold;
        margin-top: 20px;
    }
</style>
