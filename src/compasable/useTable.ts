import { computed, watch } from 'vue'
import { sendTableJoinCall } from '../socketApi'
import { Store } from 'vuex'

export default function useTable(store:Store<any>){
    const tableList = computed(()=>{
        return store.state.lobby.LobbyInfo.tables
    })
    function tableJoinCall(tableUid:string) {
        sendTableJoinCall({uuid:tableUid})
    }
    watch(tableList,()=>{
        console.log(tableList.value)
    })
    return {
        //data
        tableList,
        //methods
        tableJoinCall,
    }
}