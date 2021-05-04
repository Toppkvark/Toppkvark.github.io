import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import SprintOne from "./components/SprintOne";
import SprintTwo from "./components/SprintTwo";
import SprintThree from "./components/SprintThree";
import SprintFour from "./components/SprintFour";
import Home from "./components/Home"; 
import About from "./components/About";

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { 
    path: '/:catchAll(.*)', 
    component: Home,
    name: 'Home'
  },
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/SprintOne', component: SprintOne },
  { path: '/SprintTwo', component: SprintTwo },
  { path: '/SprintThree', component: SprintThree },
  { path: '/SprintFour', component: SprintFour },
]



const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
