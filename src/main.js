import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import 'animate.css';

Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
