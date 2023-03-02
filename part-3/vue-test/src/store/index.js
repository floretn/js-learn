import { createStore } from 'vuex'
import auth from './auth'
import info from "@/store/info"

export default createStore({
  state: {
    error: null
  },
  getters: {
    error: s => s.error
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
  },
  modules: {
    auth, info
  }
})
