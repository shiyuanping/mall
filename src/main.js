import Vue from 'vue'
import App from './App.vue'
import Index from './components/Index.vue'
import MyInfo from './components/MyInfo.vue'
import Cart from './components/Cart.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
