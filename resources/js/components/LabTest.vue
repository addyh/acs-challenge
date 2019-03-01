<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div v-if="panelId == labTest.panel_id" v-bind:key="labTest.id" v-for="labTest in labTests" class="card">
                    <div class="card-body">{{labTest.abbreviation}} id: {{labTest.panel_id}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Panel from './Panel.vue';

    export default {
      name: "LabTest",
      props: ["labTests", "panelId"],
      components: {
      },
        mounted() {
            console.log('LabTest mounted.');
        }
    }
</script>
