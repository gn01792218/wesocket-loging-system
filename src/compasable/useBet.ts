import { sendBetCall } from '../socketApi'
import { computed } from 'vue'
import { Store } from 'vuex'
export default function useBet(store:Store<any>){
    const roundUuid = computed(() => {
        //遊戲回合的Uuid
        return store.state.game.gameUuid;
      });
    function betRequest(betCoinIndex:number,betArea:number){
        sendBetCall({
            gameUuid:roundUuid.value,
            betIndex:1,
            betArea:1,
        })
    }
    return {
        //methods
        betRequest,
    }   
}