import { createStore } from "vuex";
import game from "./game"
import lobby from "./lobby";
import auth from "./auth";
import history from "./history";
import logSystem from "./logSystem";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    game,
    lobby,
    auth,
    history,
    logSystem,
  },
});
