import Vue from 'vue';
import Vuex, {
  StoreOptions,
} from 'vuex';
import { RootState } from '@/store/storeTypes';
import moduleA from '@/store/ModuleA.ts';
import moduleB from '@/store/ModuleB.ts';
import todoModule from '@/store/TodoModule';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, newCount: number) {
      state.count = newCount;
    },
  },
  actions: {
    addCount(context, argument: number) {
      const {
        state, commit,
      } = context;

      commit('setCount', state.count + argument);
    },
  },
  getters: {
    count: (state) => state.count,
  },
  modules: {
    moduleA,
    moduleB,
    todoModule,
  },
};

export default new Vuex.Store(store);
