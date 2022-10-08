export const state = {
    map:{},
    askRoad:[],
    askRoadReCall:{}, //問下三路的資料
    // bigEyeRoadAsk:0,
    // smallRoadAsk:0,
    // cockroachRoadAsk:0,
};
export const actions = {}
  
export const mutations = {
    map(state:any,payload:any){
        state.map= payload
        // console.log("vuex",state.map)
    },
    setAskRoad(state:any,roadNum:number){
        state.askRoad.push(roadNum)
    },
    setAskRoadRecall(state:any,payload:any){
        state.askRoadReCall = payload
        console.log('vuex下三路',state.askRoadReCall)
    },
    resetBigEyeRoadAsk(state:any){
        state.bigEyeRoadAsk = 0
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