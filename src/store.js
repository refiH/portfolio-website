import { createStore } from 'vuex'

export default createStore({
  state: {
    navActive: false
  },
  mutations: {
    activateNav(state) {
      state.navActive = !state.navActive
    }
  },
  actions: {},
  getters: {}
})
