interface State {
  gameUuid:string
}
export const state:State = {
    gameUuid:"",
  };
  export const actions = {}
  
  export const mutations = {
    GameUuid(state:State, payload:string){
      state.gameUuid = payload
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