import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: []
  },
  mutations: {
    setColor(state, payload) {
      state.colors.push(...payload.data)
    }
  },
  actions: {
    setColor({ commit }, data) {
      commit('setColor', {
        data: data.data
      })
    },
    injectStyle({}, data) {
      const existingStyles = document.querySelectorAll('style.variables')
      existingStyles.forEach((style) => style.remove())

      const style = document.createElement('style')
      style.classList.add('variables')
      style.type = 'text/css'
      style.innerHTML = `:root { --primary: ${data.primary}; --secondary: ${data.secondary} }`
      document.head.appendChild(style)
    },
    setRandomColor({ dispatch }, data) {
      let item = data.items[Math.floor(Math.random() * data.items.length)]

      if (item) {
        dispatch('injectStyle', {
          primary: item.primary,
          secondary: item.secondary
        })
      } else {
        dispatch('injectStyle', {
          primary: '#263c72',
          secondary: '#1e47ab'
        })
      }
    }
  },
  getters: {}
})
