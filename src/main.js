import Vue from 'vue'
import App from './App.vue'
import vueKanban from 'vue-kanban'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(vueKanban)
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
