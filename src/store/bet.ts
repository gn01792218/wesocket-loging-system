export const state = {
  coinPosition: [
    //注區Data
    {
      initBottom: 0,
      initX: 0,
      coinArray: [],
      odds: "1:1",
      host: "閒",
      configClass: "betArea-item red alertFont",
      betStatus: 0,
      tableAllPlayerBetStatus: 0,
      maxBet: 100000, //目前這一回合的下注狀況
    },
    {
      initBottom: 0, //初始化的bottom值
      initX: 0,
      coinArray: [], //生籌碼的地方
      odds: "1:0.95",
      host: "莊",
      configClass: "betArea-item yellow alertFont",
      betStatus: 0, //目前這一回合的下注狀況
      tableAllPlayerBetStatus: 0,
      maxBet: 100000,
    },
    {
      initBottom: 0,
      initX: 0,
      coinArray: [],
      odds: "1:11",
      host: "閒對",
      configClass: "betArea-item red",
      betStatus: 0, //目前這一回合的下注狀況
      tableAllPlayerBetStatus: 0,
      maxBet: 9000,
    },
    {
      initBottom: 0,
      initX: 0,
      coinArray: [],
      odds: "1:8",
      host: "和",
      configClass: "betArea-item green alertFont",
      betStatus: 0, //目前這一回合的下注狀況
      tableAllPlayerBetStatus: 0,
      maxBet: 12500,
    },
    {
      initBottom: 0,
      initX: 0,
      coinArray: [],
      odds: "1:11",
      host: "莊對",
      configClass: "betArea-item yellow",
      betStatus: 0, //目前這一回合的下注狀況
      tableAllPlayerBetStatus: 0,
      maxBet: 9000,
    },
  ],
  canBet:true,
  BetRecall: {},
  BetResetRecall: {},
  BetConfirmRecall: {},
  BroadcastBetstatus: {},
  totalBets: 0,
  BetError: {},
  betErrorArray: [], //存放錯誤訊息的陣列
  betstatus: {},
  isConfirmed: false, //下注按鈕是否有下注
  flyCard: false, //是否要飛牌
  isWatchCard: true, //是否選擇咪牌
  canUseFlyCard: true, // 可以使用飛牌按鈕
  canUseConfirm: true, //可以使用確認鈕
  canUseWatchCard: true, //可否使用咪牌按鈕
  tableBtn: {},
};
export const actions = {};

export const mutations = {
  setCanBet(state:any,canBet:boolean){
    state.canBet = canBet
  },
  BetRecall(state: any, payload: any) {
    //接收wbSocket的訊息
    state.BetRecall = payload;
    state.betstatus = payload.betStatus;
    state.isConfirmed = payload.isConfirmed;
    state.totalBets = payload.totalBets
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    // console.log("vuex-BetRecall資料更新",state.BetRecall)
  },
  BetResetRecall(state: any, payload: any) {
    state.BetResetRecall = payload;
    // console.log("vuex-BetResetRecall資料更新",state.BetResetRecall)
  },
  BetConfirmRecall(state: any, payload: any) {
    state.BetConfirmRecall = payload;
    // console.log("vuex-BetConfirmRecall",state.BetConfirmRecall)
  },
  BroadcastBetstatus(state: any, payload: any) {
    state.BroadcastBetstatus = payload;
    // console.log("vuex-BroadcastBetstatus",state.BroadcastBetstatus)
  },
  setBetResultRest(state: any) {
    state.BetResetRecall.result = 0;
  },
  BetError(state: any, payload: any) {
    state.BetError = payload;
    // console.log("vuex-BetError資料更新",state.BetError)
  },
  resetBetResult(state: any) {
    state.BetRecall.result = 0;
  },
  resetTotalBets(state: any) {
    state.totalBets = 0;
  },
  setIsConfirmed(state: any, usage: boolean) {
    state.isConfirmed = usage;
  },
  setFlyCard(state: any, flyCard: boolean) {
    state.flyCard = flyCard;
  },
  setWatchCard(state: any, watchCard: boolean) {
    state.isWatchCard = watchCard;
  },
  setCanUseFlyCard(state: any, canuse: boolean) {
    state.canUseFlyCard = canuse;
  },
  setCanUseConfirm(state: any, canuse: boolean) {
    state.canUseConfirm = canuse;
  },
  setCanUseWatchCard(state: any, canuse: boolean) {
    state.canUseWatchCard = canuse;
  },
  setTableBtn(state: any, payload: any) {
    state.tableBtn[payload.table].iswatchCard = payload.iswatchCard;
    state.tableBtn[payload.table].canUseWatchCard = payload.canUseWatchCard;
  },
};
export const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
