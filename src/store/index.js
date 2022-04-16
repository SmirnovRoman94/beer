import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    profile: {},
  },
  getters: {
    getProfileUser(state){
      return state.profile
    }
  },
  mutations: {
    setUser(state, result){
      state.profile = result
    }
  },
  actions: {
    profileInite({commit}){
      return axios.get('https://random-data-api.com/api/users/random_user')
      .then(res => {
        commit('setUser', res.data)
      })
      .catch((e) => console.log(e))
    }
    
  },
  modules: {
  }
})
