export default {
  state: {
    num: 0
  },
  getters: {
    getNum(state) {
      return state.num
    }
  },
  mutations: {
    updateNum(state, num) {
      state.num = num;
    }
  },
  actions: {
    // updateNumAction({commit},num) {
    //   commit('updateNum', num)
    // }
    updateNumAction({commit},num) {
      commit('updateNum', num)
    }
  }
}