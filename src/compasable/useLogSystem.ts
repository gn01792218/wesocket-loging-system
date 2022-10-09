import { computed, onMounted, onUpdated, ref } from 'vue'
import { Store } from 'vuex'
import useTable from '../compasable/useTable'
export default function useLogSystem(store:Store<any>){
    const onScroll = ref(false)
    const { tableJoinCall,tableList } = useTable(store)

    const logArr = computed(()=>{
        return store.state.logSystem.logMsgArr
    })
    
    onUpdated(()=>{
        if(!onScroll.value) toBottom()
    })
    onMounted(()=>{
        let tableA = tableList.value.find((i:any)=>i.name.includes('A'))
        tableJoinCall(tableA.uuid)
        
        window.onbeforeunload = function(){
            //return為重整前提示訊息
            return "onbeforeunload is work";
        }
        
        //監測使用者是否有捲動滾條
        window.onscroll = function(){
            const { scrollHeight, scrollTop, clientHeight } = document.documentElement
            if( scrollHeight - scrollTop === clientHeight) {
                onScroll.value = false
            }else if( scrollHeight - scrollTop >= clientHeight*1.5 ){
                onScroll.value = true
            }
        }
    })
    
    function toBottom(){
        window.scrollTo(0,document.body.scrollHeight)
    }
    return {
        //data
        logArr,
        onScroll,
        //methods
        toBottom,
    }   
}