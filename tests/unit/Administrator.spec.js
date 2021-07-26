import Administrator from '../../src/pages/Administrator.vue';
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify';
import Vue from 'vue';

Vue.use(Vuetify, {})
Vue.use(Vuex)

// localVue.config.productionTip = false;

describe('Adminitrator.vue', () => {
  let store, actions

  beforeEach(() =>{
    actions = {
      POST_USER: jest.fn(),
      DELETE_USER: jest.fn(),
      CLICK_LINK: jest.fn(),
      CLICK_IMG: jest.fn(),
    }
  
    const mutations = {
      testMutation: jest.fn()
    }
    
    store = new Vuex.Store({ mutations, actions })
  })
  
  const build = () => {
    const wrapper = shallowMount(Administrator, {
      store,
      Vue
    })
    
    return {
      wrapper,
      dataTableUsers: () => wrapper.findComponent({ref: 'dataTableUsers'}),
      inputFirstName: () => wrapper.findComponent({ref: 'firstName'}),
      inputLastName: () => wrapper.findComponent({ref: 'lastName'}),
      inputEmail: () => wrapper.findComponent({ref: 'email'}),
      selectRole: () => wrapper.findComponent({ref: 'role'}),
      checkActive: () => wrapper.findComponent({ref: 'active'}),
      buttonAddUser: () => wrapper.findComponent({ref: 'addUser'}),
      buttonEditUser: () => wrapper.findComponent({ref: 'editUser'}),
      buttonSubmit: () => wrapper.findComponent({ref: 'submit'}),
    }
  }

  it('it renders the component', async () => {
    const { wrapper, dataTableUsers, inputFirstName, inputLastName, inputEmail, selectRole, checkActive, buttonAddUser, buttonEditUser, buttonSubmit } = build()

    
    // wrapper.vm.$nextTick()

    expect(wrapper.html()).toMatchSnapshot()

    console.log(wrapper.vm.$data)
    expect(buttonAddUser().exists()).toBe(true)

    await buttonAddUser().trigger("click")

    console.log(wrapper.vm.$data.dialog)

    expect(wrapper.vm.$data.dialog).toBe(true)

    expect(inputFirstName().exists()).toBe(true)
  })
})