import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import Home from "./components/Home";

/*import SprintOne from "./components/SprintOne";
import SprintTwo from "./components/SprintTwo";
import SprintThree from "./components/SprintThree";
import SprintFour from "./components/SprintFour";
import About from "./components/About";*/

Vue.config.productionTip = false

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/:catchAll(.*)',
      component: Home,
      name: 'Home'
    },
    { path: '/', component: Home },
      ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
