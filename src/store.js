import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [],
    currentColor: { primary: '', secondary: '' }
  },
  mutations: {
    setColor(state, payload) {
      state.colors.push(...payload.data)
    },
    setCurrentColor(state, payload) {
      state.currentColor = payload.data
    }
  },
  actions: {
    setColor({ commit }, data) {
      commit('setColor', {
        data: data.data
      })
    },
    setCurrentColor({ commit }, data) {
      commit('setCurrentColor', {
        data: data
      })
    },
    injectStyle({ dispatch }, data) {
      const existingStyles = document.querySelectorAll('style.variables')
      existingStyles.forEach((style) => style.remove())

      const style = document.createElement('style')
      style.classList.add('variables')
      style.type = 'text/css'
      style.innerHTML = `:root { --primary: ${data.primary}; --secondary: ${data.secondary} }`
      document.head.appendChild(style)

      dispatch('setCurrentColor', {
        primary: data.primary,
        secondary: data.secondary
      })
    },
    setRandomColor({ dispatch, state }, data) {
      let currPrimary = state.primary
      let currSecondary = state.secondary
      let item

      do {
        item = data.items[Math.floor(Math.random() * data.items.length)]
      } while (item && item.primary === currPrimary && item.secondary === currSecondary)

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
