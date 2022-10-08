import { computed } from 'vue'
import { sendTableJoinCall } from '../socketApi'
import { Store } from 'vuex'

export default function useTable(store:Store<any>){
    const tableList = computed(()=>{
        return store.state.lobby.lobbyInfo.tables
    })
    function tableJoinCall(tableUid:string) {
        sendTableJoinCall({uuid:tableUid})
    }
    return {
        //data
        tableList,
        //methods
        tableJoinCall,
    }
}