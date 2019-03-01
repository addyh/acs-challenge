<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div v-bind:key="panel.id" v-for="panel in panels" class="card">

                    <div class="card-header">
                        <table class="panel-table">
                            <tr>

                                <td class="panel-header">
                                        {{panel.name}}
                                </td>

                                <td class="panel-description">
                                    Panel ID: &nbsp;&nbsp;&nbsp;&nbsp;{{panel.id}}<br />
                                    Abbreviation: {{panel.abbreviation}}<br />
                                    Alias: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{panel.alias}}<br />
                                    Description: &nbsp;{{panel.description}}<br />
                                    Identifier: &nbsp;&nbsp;{{panel.identifier}}<br />
                                    Created at: &nbsp;&nbsp;{{panel.created_at}}<br />
                                    Updated at: &nbsp;&nbsp;{{panel.updated_at}}
                                </td>
                            </tr>
                        </table>
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

    .abbreviation {
        font-size: 16pt;
    }

    .panel-table {
        width: 100%;
        border-width: 0px;
    }

    .panel-header {
        font-weight: bold;
        font-size: 25pt;
    }

    .panel-description {
        font-family: Courier;
        line-height: 85%;
    }

</style>
