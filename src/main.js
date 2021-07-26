import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSocketIO from 'vue-socket.io'

export const coordinatesBus = new Vue();

Vue.use(new VueSocketIO({
  debug: true,
  connection: process.env.VUE_APP_SOCKETS_URL,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  options: {
    withCredentials: false
  }
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //setting set on store
  beforeCreate(){
    store.state.io = this.$socket
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
