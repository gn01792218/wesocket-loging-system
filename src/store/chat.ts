import {chatContent} from '../types/global'
export const state = {
    chatContentArr:[] as chatContent[],
    showEmoji:false,
    chatMsg:"",
    BroadcastChat:{}
  };
  export const actions = {}
  
  export const mutations = {
    BroadcastChat(state:any,payload:any){
      state.BroadcastChat = payload
    },
    loadChatContentArr(state:any,payload:any){
        payload.forEach((i:any)=>{
            i.name = i.name.replace('桌','')
            state.chatContentArr.push({
                table:i.name,
                chatMsgArr:[],
            })
        })
    },
    setShowEmoji(state:any,show:boolean){
      state.showEmoji = show
    },
    setChatMsg(state:any,chatMsg:string){
      state.chatMsg = chatMsg
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