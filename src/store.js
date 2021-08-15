import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    cards: [],
    editMode: false
  },
  getters: {
    user: state => state.user,
    cards: state => state.cards,
    editMode: state => state.editMode,
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data
    },
    CLEAR_USER(state) {
      state.user = null
    },
    SET_CARDS(state, data) {
      state.cards = data
    },
    SET_EDIT_MODE(state, data) {
      state.editMode = data
    }
  },
  actions: {
    SET_USER(context, data) {
      context.commit('SET_USER', data)
    },
    CLEAR_USER(context) {
      context.commit('CLEAR_USER')
    },
    SET_CARDS(context, data) {
      context.commit('SET_CARDS', data)
    },
    SET_EDIT_MODE(context, data) {
      context.commit('SET_EDIT_MODE', data)
    }
  }
})