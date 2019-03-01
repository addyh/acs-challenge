<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header panels">Panel Name</div>

                    <div class="card-body">Panel Content</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LabTest from './LabTest.vue';

    export default {
      name: "Panel",
      components: {
          LabTest
      },
        mounted() {
            console.log('Panel mounted.');
        }
    }
</script>
