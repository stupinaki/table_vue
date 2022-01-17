import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/js/bootstrap.bundle.min';


Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
}).$mount('#app');
