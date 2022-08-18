import Vue from 'vue'
import App from './App.vue'
import { MessageBox } from "./components/MyUi";
Vue.config.productionTip = false

Vue.use(MessageBox)
new Vue({
  render: h => h(App),
}).$mount('#app')
