import { LogMsg } from "../type/log";
interface State {
  logMsgArr: LogMsg[];
}
export const state: State = {
  logMsgArr: [],
};
export const actions = {};

export const mutations = {
  pushLogMsg(state: State, payload: LogMsg) {
    state.logMsgArr.push(payload);
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
