export const state = {
    DonateRecall:{},
    donatErr:0,
  };
  export const actions = {}
  
  export const mutations = {
    DonateRecall(state:any,payload:any){
      state.DonateRecall = payload
      state.donatErr = payload.error
    },
    reSetDonatErr(state:any){
      state.donatErr = 0
    }
  };
  export const getters = {}
  
  export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
  };