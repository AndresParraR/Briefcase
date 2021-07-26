import Vue from 'vue'
import Vuex from 'vuex'
import { latLng } from "leaflet";
import { coordinatesBus } from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    io:{},
    links: [
      {
        icon: 'mdi-view-dashboard',
        title: 'Dashboard',
        route: '/dashboard',
        isFocused: true
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
    marker: latLng(47.3131387, -1.319423),
    center: latLng(47.3131387, -1.319423),
    listRoles:['Administrator','Workstation','Guard'],
    dataUsers:[
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        roleName: 'Administrator',
        active: false,
      },
      {
        id: 2,
        firstName: 'Alejandro',
        lastName: 'Test',
        email: 'alejandrotest@gmail.com',
        roleName: 'Workstation',
        active: true,
      },
    ],
    someValues: [20,60,10,80,30,65,100]
  },
  mutations: {
    CLICK_LINK(state, params) {
      state.links.forEach(x => x.isFocused = (x.title == params.title) ? true : false )
    },
    CLICK_IMG(state, params) {
      state.listImages.forEach(x => x.isFocused = (x.src == params.src) ? true : false )
      let img = state.listImages.find(x=>x.isFocused == true)
      state.imgSrc = img.src
    },
    SOCKET_NEW_COORDINATES(state, coordinates){
      state.marker = latLng(parseFloat(coordinates.lat), parseFloat(coordinates.lng)),
      state.center = state.marker
      coordinatesBus.$emit('coordinatesChanged')
      console.log(state, coordinates)
    },
    SOCKET_NEW_VALUES(state, someNewValues){
      someNewValues.forEach(x=>x=parseInt(x))
      state.someValues = someNewValues
      console.log(state, someNewValues)
    }
  },
  actions: {
    CLICK_LINK({commit}, params){
      commit('CLICK_LINK', params)
    },
    CLICK_IMG({commit}, params){
      commit('CLICK_IMG', params)
    },
  },
  modules: {
  }
})
