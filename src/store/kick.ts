export const state = {
    Kickout:{},
    kickoutWarn:{},
    isKickout:false,
  };
  export const actions = {}
  
  export const mutations = {
    Kickout(state:any,payload:any){
        state.Kickout = payload
    },
    kickoutwarn(state:any,payload:any){
      state.kickoutWarn = payload
      // console.log('vuexWarn',state.kickoutWarn.message)
    },
    setIsKickout(state:any,isOut:boolean){
      state.isKickout = isOut
    }
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