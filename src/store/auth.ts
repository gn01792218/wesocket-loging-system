interface State{
  LoginRecall:Object
}
export const state:State = {
  LoginRecall: {},
};
export const actions = {}

export const mutations = {
  LoginRecall(state:State, payload:Object) { //接收wbSocket的訊息
    state.LoginRecall=payload
    // console.log("vuex-auth資料更新",state.LoginRecall)
  },
};
export const getters = {}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};