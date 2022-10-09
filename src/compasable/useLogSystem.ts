import { computed, onMounted } from 'vue'
import { Store } from 'vuex'
import useTable from '../compasable/useTable'
export default function useLogSystem(store:Store<any>){
    
    const { tableJoinCall,tableList } = useTable(store)
    const logArr = computed(()=>{
        return store.state.logSystem.logMsgArr
    })


    onMounted(()=>{
      let tableA = tableList.value.find((i:any)=>i.name.includes('A'))
      tableJoinCall(tableA.uuid)
  
      window.onbeforeunload = function(){
          //return為重整前提示訊息
          return "onbeforeunload is work";
      }
    })

    return {
        //methods
        logArr,
    }   
}