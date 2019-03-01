<template>
    <div class="container">
        <h1 class="main-title">ACS Test Panel Results</h1>


          <div id="panel-list"><Panel></Panel></div>

    </div>
</template>

<script>
   import Panel from './Panel.vue';

    export default {
        name: "App",
        components: {
          Panel
        },
        mounted() {
            console.log('App mounted.');
        }
    }
</script>
