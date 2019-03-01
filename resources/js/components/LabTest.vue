<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div v-if="panelId == labTest.panel_id" v-bind:key="labTest.id" v-for="labTest in labTests" class="card">

                    <div class="card-body">
                        <table class="lab-test-table">
                            <tr>

                                <td class="lab-test-col-1">
                                    <b>Name:</b><br />
                                    Test ID:<br />
                                    Panel ID:<br />
                                    Abbreviation:<br />
                                    High Value:
                                </td>
                                <td class="lab-test-col-2">
                                    <b>{{labTest.name}}</b><br />
                                    {{labTest.id}}<br />
                                    {{labTest.panel_id}}<br />
                                    {{labTest.abbreviation}}<br />
                                    {{labTest.high_value}}
                                </td>

                                <td class="lab-test-col-3">
                                    <b>Alias:</b><br />
                                    Identifier:<br />
                                    Created:<br />
                                    Updated:<br />
                                    Low Value:
                                </td>
                                <td class="lab-test-col-4">
                                    <b>{{labTest.alias}}</b><br />
                                    {{labTest.identifier}}<br />
                                    {{labTest.created_at}}<br />
                                    {{labTest.updated_at}}<br />
                                    {{labTest.low_value}}
                                </td>

                            </tr>
                        </table>
                    </div>

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

<style scoped>
    .lab-test-table {
        width: 100%;
        border: 0px;
    }
    .lab-test-col-1 {
        text-align: right;
    }
    .lab-test-col-2 {
        padding-left: 10px;
    }
    .lab-test-col-3 {
        text-align: right;
    }

    .lab-test-col-4 {
        padding-left: 10px;
    }
</style>
