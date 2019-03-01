
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

window.fallbackPanelsData = [{"id":1,"name":"Vitamins","alias":"vitamins","abbreviation":"Vit","identifier":"v1","description":"Vitamins Panel","created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":2,"name":"Hormones","alias":"hormones","abbreviation":"Hor","identifier":"hor","description":"Hormones Panel","created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":3,"name":"Amino Acids","alias":"amino-acids","abbreviation":"AA","identifier":"aa","description":"Amino Acids Panel","created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":4,"name":"Fatty Acids","alias":"fatty-acids","abbreviation":"FA","identifier":"fa","description":"Fatty Acids Panel","created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"}];

window.fallbackLabTestsData = [{"id":1,"name":"25-Hydroxyvitamin D2 & D3","alias":"Vitamin D","abbreviation":"D","identifier":"","low_value":"17","high_value":"57","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":2,"name":"D2","alias":"25-Hydroxyvitamin D2","abbreviation":"D2","identifier":"25-Hydroxyvitamin_D2","low_value":"17","high_value":"57","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":3,"name":"D3","alias":"25-Hydroxyvitamin D3","abbreviation":"D3","identifier":"25-Hydroxyvitamin_D3","low_value":"17","high_value":"57","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":4,"name":"Alpha-Tocopherol, Gamma-Tocopherol","alias":"Vitamin E","abbreviation":"E","identifier":"Vitamin_E","low_value":"3000","high_value":"34800","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":5,"name":"Alpha-Tocopherol","alias":"Alpha-Tocopherol","abbreviation":"AlphaT","identifier":"Alpha_Tocopherol","low_value":"3000","high_value":"34800","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":6,"name":"Gamma-Tocopherol","alias":"Gamma-Tocopherol","abbreviation":"GammaT","identifier":"Gamma_Tocopherol","low_value":"3000","high_value":"34800","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":7,"name":"Retinol","alias":"Vitamin A","abbreviation":"A","identifier":"Retinol","low_value":"500","high_value":"2000","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":8,"name":"Ascorbic Acid","alias":"Vitamin C","abbreviation":"C","identifier":"C(Ascorbic_acid)","low_value":"1692","high_value":"18140","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":9,"name":"Thiamine","alias":"Vitamin B1","abbreviation":"B1","identifier":"B1(Thiamine)","low_value":"2.4","high_value":"9","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":10,"name":"Riboflavin","alias":"Vitamin B2","abbreviation":"B2","identifier":"B2(Riboflavin)","low_value":"1","high_value":"220","panel_id":1,"created_at":"2019-01-31 16:17:53","updated_at":"2019-01-31 16:17:53"},{"id":11,"name":"Nicotinic Acid, Nicotinamide","alias":"Vitamin B3","abbreviation":"B3","identifier":"","low_value":"1970","high_value":"8986","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":12,"name":"Nicotinic Acid","alias":"Nicotinic Acid","abbreviation":"B3-NA","identifier":"B3(Nicotinic_acid)","low_value":"1970","high_value":"8986","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":13,"name":"Nicotinamide","alias":"Nicotinamide","abbreviation":"B3-NM","identifier":"B3(Nicotinamide)","low_value":"1970","high_value":"8986","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":14,"name":"Panthothenic Acid","alias":"Vitamin B5","abbreviation":"B5","identifier":"B5(Pantothetic_acid)","low_value":"68","high_value":"640","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":15,"name":"Pyridoxine, PLP","alias":"Vitamin B6","abbreviation":"B6","identifier":"B6","low_value":"2","high_value":"206","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":16,"name":"","alias":"Pyridoxine","abbreviation":"B6P","identifier":"b6pyridoxine","low_value":"2","high_value":"206","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":17,"name":"Pyridoxine-5-phosphate","alias":"PLP","abbreviation":"B6PLP","identifier":"plp","low_value":"2","high_value":"206","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":18,"name":"Biotin","alias":"Vitamin B7","abbreviation":"B7","identifier":"B7(Biotin)","low_value":"1.22","high_value":"2.4","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":19,"name":"Folic Acid, 5-M-THF","alias":"Vitamin B9","abbreviation":"B9","identifier":"B9","low_value":"45","high_value":"406","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":20,"name":"Vitamin B9 - Folic Acid","alias":"Folic Acid","abbreviation":"B9-FA","identifier":"B9(Folic_acid)","low_value":"45","high_value":"406","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":21,"name":"Vitamin B9 - 5-M-THF","alias":"5-M-THF","abbreviation":"B9-5-M-THF","identifier":"5-M-THF","low_value":"45","high_value":"406","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":22,"name":"*B12 Deficiency if greater than 66","alias":"Methylmalonic Acid","abbreviation":"B12","identifier":"Methylmalonic_acid","low_value":"0","high_value":"66","panel_id":1,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":23,"name":" ","alias":"Testosterone","abbreviation":"T","identifier":"Testosterone","low_value":"250","high_value":"1000","panel_id":2,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":24,"name":" ","alias":"Cortisol","abbreviation":"Cortisol","identifier":"Cortisol","low_value":"30","high_value":"230","panel_id":2,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":25,"name":"Ratio","alias":"Testosterone\/Cortisol","abbreviation":"T-Ratio","identifier":"","low_value":"0.0","high_value":"100","panel_id":2,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":26,"name":"Carnitine","alias":"L-Carnitine","abbreviation":"","identifier":"L-Carnitine","low_value":"2400","high_value":"12700","panel_id":3,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":27,"name":"Alanine","alias":"L-Alanine","abbreviation":"","identifier":"L-Alanine","low_value":"15770","high_value":"52200","panel_id":3,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":28,"name":"Arginine","alias":"L-Arginine","abbreviation":"","identifier":"L-Arginine","low_value":"2262","high_value":"11136","panel_id":3,"created_at":"2019-01-31 16:17:54","updated_at":"2019-01-31 16:17:54"},{"id":29,"name":"Glutamine","alias":"L-Glutamine","abbreviation":"","identifier":"L-Glutamine","low_value":"30000","high_value":"110000","panel_id":3,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":30,"name":"Valine","alias":"L-Valine","abbreviation":"","identifier":"L-Valine","low_value":"12800","high_value":"79000","panel_id":3,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":31,"name":"Leucine","alias":"L-Leucine","abbreviation":"","identifier":"L-Leucine","low_value":"7345","high_value":"26600","panel_id":3,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":32,"name":"Isoleucine","alias":"L-Isoleucine","abbreviation":"","identifier":"L-Isoleucine","low_value":"3410","high_value":"25700","panel_id":3,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":33,"name":"Lactic Acid","alias":"L-Lactic Acid","abbreviation":"","identifier":"Lactic_acid","low_value":"45000","high_value":"1000000","panel_id":3,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":34,"name":"EPA, DPA, DHA, ALA","alias":"Omega-3 Fatty Acid","abbreviation":"Omega-3","identifier":"","low_value":"1374","high_value":"205941","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":35,"name":"A-Linolenic Acid","alias":"Alpha-Linolenic Acid","abbreviation":"ALA","identifier":"Alpha_linolenic_acid","low_value":"639","high_value":"52038","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":36,"name":" ","alias":"Docosapentaenoic Acid","abbreviation":"DPA","identifier":"Docosapentaenoic_acid","low_value":"176","high_value":"10741","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":37,"name":" ","alias":"Docosahexaenoic Acid","abbreviation":"DHA","identifier":"Docosahexaenoic_acid","low_value":"447","high_value":"78014","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":38,"name":"Arachidonic Acid, Linoleic Acid","alias":"Omega-6 Fatty Acid","abbreviation":"Omega-6","identifier":"","low_value":"3887","high_value":"1671050","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":39,"name":" ","alias":"Arachidonic Acid","abbreviation":"AA","identifier":"Arachidonic_acid","low_value":"970","high_value":"268800","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":40,"name":" ","alias":"Eicosapentaenoic Acid","abbreviation":"EPA","identifier":"Eicosapentaenoic_acid","low_value":"112","high_value":"65148","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":41,"name":" ","alias":"Linoleic Acid","abbreviation":"LA","identifier":"Linoleic_acid","low_value":"2917","high_value":"1402250","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":42,"name":"Omega-3\/Omega-6","alias":"Fatty Acid Ratio","abbreviation":"FAR","identifier":"","low_value":"2","high_value":"10","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"},{"id":43,"name":" ","alias":"AA\/EPA","abbreviation":"AA\/EPA","identifier":"","low_value":"2","high_value":"71","panel_id":4,"created_at":"2019-01-31 16:17:55","updated_at":"2019-01-31 16:17:55"}];

window.fallback = function() {
    window.panelsData = fallbackPanelsData;
    window.labTestsData = fallbackLabTestsData;
    startVue();
}

window.startVue = function() {
    Vue.component('App', require('./components/App.vue').default);
    // Vue.component('Panel', require('./components/Panel.vue').default);
    //Vue.component('LabTest', require('./components/LabTest.vue').default);

    const app = new Vue({
        el: '#app'
    });
}


$(function() {

    $.get("http://challenge.acslabtest.com/api/lab/panels", function(data) {
        // Save panel data
        window.panelsData = data;

        $.get("http://challenge.acslabtest.com/api/lab/tests", function(data) {
            // Save lab test data
            window.labTestsData = data;

            startVue();

        }).fail(function() {
            fallback();
        });
    }).fail(function() {
        fallback();
    });

});
