import { Module } from 'vuex';
import { ActionEnum, RootState, SubStateB } from '@/store/storeTypes';

const moduleB: Module<SubStateB, RootState> = {
  namespaced: true,
  state: {
    bar: true,
  },
  mutations: {
    setBar(state, newBar: boolean) {
      state.bar = newBar;
    },
  },
  actions: {
    [ActionEnum.changeBar](context, argument: boolean) {
      const {
        commit,
      } = context;

      commit('setBar', argument);
    },
  },
  getters: {
    bar: (state) => `${state.bar} and bar!`,
  },
};

export default moduleB;
