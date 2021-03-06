import { Module } from 'vuex';
import { RootState, SubStateTodo, TodoItemType } from '@/store/storeTypes';

const todoModule: Module<SubStateTodo, RootState> = {
  namespaced: true,
  state: {
    todoList: [
      { id: 0, title: 'hello', status: false },
      { id: 1, title: 'world', status: false },
      { id: 2, title: 'foo', status: true },
      { id: 3, title: 'bar', status: true },
    ],
  },
  mutations: {
    setTodoList(state, newTodoList) {
      state.todoList = newTodoList;
    },
  },
  actions: {
    addTodo(context, newTodoItem: Exclude<TodoItemType, 'id' | 'status'>) {
      const {
        state,
        commit,
      } = context;

      const newId = state.todoList[state.todoList.length - 1].id + 1;

      commit('setTodoList', state.todoList.concat({ ...newTodoItem, id: newId, status: false }));
    },
    removeTodo(context, { id }: Pick<TodoItemType, 'id'>) {
      const {
        state,
        commit,
      } = context;

      const copiedTodoList = [...state.todoList];
      const targetIndex = copiedTodoList.findIndex((todoItem) => todoItem.id === id);
      copiedTodoList.splice(targetIndex, 1);

      commit('setTodoList', copiedTodoList);
    },
    setStatus(context, { id, status }: Pick<TodoItemType, 'id' | 'status'>) {
      const {
        state,
        commit,
      } = context;

      const copiedTodoList = [...state.todoList];
      const targetIndex = copiedTodoList.findIndex((todoItem) => todoItem.id === id);
      copiedTodoList[targetIndex].status = status;

      commit('setTodoList', copiedTodoList);
    },
  },
  getters: {
    todoList: (state) => state.todoList,
  },
};

export default todoModule;
