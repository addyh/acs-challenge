<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div v-bind:key="panel.id" v-for="panel in panels" class="card">
                    <div class="card-header">
                        {{panel.name}} &mdash;
                        <span class="abbreviation">({{panel.abbreviation}})</span>
                    </div>

                    <div class="card-body">
                        <LabTest v-bind:panelId="panel.id" v-bind:labTests="labTests" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LabTest from './LabTest.vue';

    export default {
      name: "Panel",
      props: ["panels"],
      components: {
          LabTest
      },
      data() {
          return {
              labTests: labTestsData
          }
      },
        mounted() {
            console.log('Panel mounted.');
        }
    }
</script>

<style scoped>
    .card  {
        margin-top: 40px;
    }

    .card-header {
        font-weight: bold;
        font-size: 25pt;
    }

    .abbreviation {
        font-size: 16pt;
    }
</style>
