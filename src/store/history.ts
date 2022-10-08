export const state = {
  HistoryRecall:[]
  };
  export const actions = {}
  
  export const mutations = {
    HistoryRecall(state:any,payload:any){
      state.HistoryRecall = payload.histories
    },
  };
  export const getters = {
   
  }
  
  export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
  };