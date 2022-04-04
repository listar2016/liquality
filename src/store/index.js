import Vue from 'vue'
import Vuex from 'vuex'

import { api } from '@/service/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    marketInfo: []
  },
  getters: {
    marketInfo: state => state.marketInfo
  },
  mutations: {
    SET_MARKET_INFO(state, payload) {
      state.marketInfo = payload
    }
  },
  actions: {
    async getMarketInfo({ commit }) {
      const data = await api.getMarketInfo()
      commit('SET_MARKET_INFO', data)
    }
  },
  modules: {
  }
})
