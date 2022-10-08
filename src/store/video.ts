export const state = {
    video:"",
    watchCardVideo1:"",
    watchCardVideo2:"",
  };
  export const actions = {}
  
  export const mutations = {
    setVideo(state:any,videoInstance:any){
      state.video = videoInstance
    },
    setWatchCardVideo1(state:any,watchCardVideo:any){
      state.watchCardVideo1 = watchCardVideo
    },
    setWatchCardVideo2(state:any,watchCardVideo:any){
      state.watchCardVideo2 = watchCardVideo
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