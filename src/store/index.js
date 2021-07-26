import Vue from 'vue'
import Vuex from 'vuex'
import UsersService from '../services/UsersService';
import RolesService from '../services/RolesService';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      {
        icon: 'mdi-view-dashboard',
        title: 'Dashboard',
        route: '/dashboard',
        isFocused: true
      },
      {
        icon: 'mdi-clock-outline',
        title: 'Schedule',
        route: '/schedule',
        isFocused: false
      },
      {
        icon: 'admin_panel_settings',
        title: 'Administrator',
        route: '/administrator',
        isFocused: false
      },
    ],
    listImages:[
      {
        src: "tree.jpg",
        isFocused: true
      },
      {
        src: "elephant.jpg",
        isFocused: false
      },
      {
        src: "deer.jpg",
        isFocused: false
      },
    ],
    imgSrc: 'tree.jpg',
    loading: false,
    styleFocused: {
      'background-color': '#000'
    },
    users:[],
    roles:[],
    toast: {
      isActive: false,
      msgToast: '',
      type: 'warning',
    },
    isLoading: false,
  },
  mutations: {
    SET_USER(state, params) {
      state.users.unshift(params)
    },
    UPDATE_USER(state, params) {
      Object.assign(state.users[state.users.indexOf(state.users.find(x=> x.id == params.id))], params)
    },
    DELETE_USER(state, params) {
      state.users = state.users.filter(x => x.id != params.id)
    },
    CLICK_LINK(state, params) {
      state.links.forEach(x => x.isFocused = (x.route == params) ? true : false )
    },
    CLICK_IMG(state, params) {
      state.listImages.forEach(x => x.isFocused = (x.src == params.src) ? true : false )
      let img = state.listImages.find(x=>x.isFocused == true)
      state.imgSrc = img.src
    },
    SET_USERS(state, params){
      state.users = params
    },
    SET_ROLES(state, params){
      console.log(params)
      state.roles = params
    }
  },
  actions: {
    async POST_USER(store, params) {
      store.state.isLoading = true
      try{
        const res = await UsersService.postUsers(params)
        store.commit('SET_USER', res.data.response)
        store.state.toast.isActive = true
        store.state.toast.msgToast = 'The user has been created successfully'
        store.state.toast.type = 'success'
      }catch (err){
        store.state.toast.isActive = true
        store.state.toast.msgToast = 'The user has not been created'
        store.state.toast.type = 'error'
      }
      store.state.isLoading = false
    },
    async PUT_USER(store, params) {
      store.state.isLoading = true
      try{
        const res = await UsersService.putUsers(params)
        store.commit('UPDATE_USER', res.data.response)
        store.state.toast.isActive = true
        store.state.toast.msgToast = 'The user has been updated successfully'
        store.state.toast.type = 'success'
      }catch (err){
        store.state.toast.isActive = true
        store.state.toast.msgToast = 'The user has not been updated'
        store.state.toast.type = 'error'
      }
      store.state.isLoading = false
    },
    async DELETE_USER(store, params){
      store.state.isLoading = true
      try{
        await UsersService.deleteUsers(params)
        store.commit('DELETE_USER', params)
        store.state.toast.isActive = true
        store.state.toast.msgToast = 'The user has been deleted successfully'
        store.state.toast.type = 'success'
      }catch (err){
        store.state.toast.isActive = true
        store.state.toast.msgToast = 'The user has not been deleted'
        store.state.toast.type = 'error'
      }
      store.state.isLoading = false
    },
    CLICK_LINK({commit}, params){
      commit('CLICK_LINK', params)
    },
    CLICK_IMG({commit}, params){
      commit('CLICK_IMG', params)
    },
    async GET_USERS(store){
      // state.state.overlay = true
      store.state.isLoading = true
      try{
        const res = await UsersService.getAll()
        store.commit("SET_USERS", res.data.response)
      }catch (err){
        store.state.toast.isActive = true
        store.state.toast.msgToast = 'The users could not be obtained'
        store.state.toast.type = 'error'
      }
      store.state.isLoading = false
      // state.state.overlay = false
    },
    async GET_ROLES(store){
      // state.state.overlay = true
      store.state.isLoading = true
      try{
        const res = await RolesService.getAll()
        store.commit("SET_ROLES", res.data.response)
      }catch (err){
        store.state.toast.isActive = true
        store.state.toast.msgToast = 'The roles could not be obtained'
        store.state.toast.type = 'error'
      }
      store.state.isLoading = false
      // state.state.overlay = false
    },
  },
  modules: {
  }
})
