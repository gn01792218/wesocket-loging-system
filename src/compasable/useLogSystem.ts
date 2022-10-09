import { computed } from 'vue'
import { Store } from 'vuex'
export default function useLogSystem(store:Store<any>){
    const logArr = computed(()=>{
        return store.state.logSystem.logMsgArr
    })
    return {
        //methods
        logArr,
    }   
}