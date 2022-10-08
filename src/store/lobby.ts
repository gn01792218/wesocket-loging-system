export const state = {
  LobbyInfo: {
  },
  showannouncement:false,
  BroadcastTotalPlayersOnline:{}  //玩家在線總人數
};
export const actions = {}

export const mutations = {
  LobbyInfo(state:any, payload:any) { //接收wbSocket的訊息
    state.LobbyInfo=payload
    console.log("vuex-lobby資料更新",state.LobbyInfo)
  },
  BroadcastTotalPlayersOnline(state:any,payload:any){
    state.BroadcastTotalPlayersOnline = payload
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