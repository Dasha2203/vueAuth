import { createStore } from 'vuex';
import user from "@/store/modules/user";
import loading from "@/store/modules/loading";

export default createStore({
  modules: {
    user,
    loading
  }
})
