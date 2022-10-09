interface State{
  HistoryRecall:Array<any>
}
export const state:State = {
  HistoryRecall:[]
  };
  export const actions = {}
  
  export const mutations = {
    HistoryRecall(state:State,payload:Array<any>){
      state.HistoryRecall = payload
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