import Vue from 'vue'
import App from './App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(MintUI);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
