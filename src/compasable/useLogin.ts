import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { sendLogin } from '../socketApi'
import { Store } from 'vuex'
export default function useLogin(store:Store<any>){
    const router = useRouter()
    
    const userToken = ref<string>('DEV_TOKEN')
    const loginStatus = computed(()=>{
        return store.state.auth.LoginRecall.status
    })

    //watcher
    const stopLogingStatusWatcher = watch(loginStatus,()=>{
        switch(loginStatus.value){
            case -1:
                alert('驗證失敗')
                break
            case 1:
                router.push('/LogingPage')
                break 
        }
    })

    function loginRequest(token:string) {
        sendLogin({token:token})
    }
    
    onBeforeUnmount(()=>{
        //註銷監聽
        stopLogingStatusWatcher()
    })
    return {
        //data
        userToken,
        loginStatus,
        //methods
        loginRequest,
    }
}