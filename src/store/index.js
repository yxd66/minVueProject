import { createApp } from 'vue'
import Vuex from 'vuex'

createApp().use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0
  },
  mutations: {
    score_20(state) {
			state.score +=20
		}
  },
  getters: {

  },
  actions: {
    
  },
  modules: {
  }
})
