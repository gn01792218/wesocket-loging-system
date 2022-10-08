export const state = {
  Draw:{},  //要再改成卡牌的
  BroadcastGameResult:{},
  end:{},
};
export const actions = {}

export const mutations = {
  Draw(state:any, payload:any) { //接收wbSocket的訊息
    state.Draw = payload
    // console.log("vuex-Draw資料更新",state.Draw)
  },
  BroadcastGameResult(state:any, payload:any){
    state.BroadcastGameResult = payload
    // console.log("vuex-BroadcastGameResult資料更新",state.BroadcastGameResult)
  },
  resetGameResults(state:any){
    if(state.BroadcastGameResult.results){
      state.BroadcastGameResult.results = []
      if(state.BroadcastGameResult.totalWin){
        state.BroadcastGameResult.totalWin = null
        console.log("重置金錢",state.BroadcastGameResult.totalWin)
      }
      
    }
  },
  end(state:any,payload:any){
    state.end = payload
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