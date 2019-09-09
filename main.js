import Vue from 'vue'
import App from './App'

Vue.prototype.serverUrl = "https://www.imovietrailer.com/superhero";			// 生产环境
// Vue.prototype.serverUrl = "https://www.imovietrailer-dev.com/superhero";		// 开发环境
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
