import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from '@/store/index'
import router from './router'
import TypeNav from '@/components/TypeNav/index.vue'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
import Pagination from '@/components/pagesaction/index'
import * as API from '@/api'
import { Button, MessageBox } from 'element-ui';
//注册全局组件
Vue.component(Button.name, Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
Vue.config.productionTip = false
//测试
// import { reqCategoryList } from '@/api/index'
// reqCategoryList();

new Vue({
  el: '#app',
  render: h => h(App),
  //全局事件总线配置
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  store,
  router
}).$mount('#app')
