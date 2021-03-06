import { Module } from 'vuex';
import { ActionEnum, RootState, SubStateA } from '@/store/storeTypes';

const moduleA: Module<SubStateA, RootState> = {
  namespaced: true,
  state: {
    foo: 'foo',
  },
  mutations: {
    setFoo(state, newFoo: string) {
      state.foo = newFoo;
    },
  },
  actions: {
    [ActionEnum.changeFoo](context, argument: string) {
      const {
        commit,
      } = context;

      commit('setFoo', argument);
    },
  },
  getters: {
    foo: (state) => `${state.foo} and foo!`,
  },
};

export default moduleA;
