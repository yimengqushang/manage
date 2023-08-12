import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
// 导入样式
import './assets/css/bootstrap.css'
import './index.css'
import ECharts from 'echarts'

Vue.config.productionTip = false

Vue.prototype.$echarts = ECharts;

new Vue({
    render: h => h(App),
    // 挂载router
    router
}).$mount('#app')