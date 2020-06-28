export enum ActionEnum {
  addCount = 'addCount',
  changeFoo = 'changeFoo',
  changeBar = 'changeBar',
  addTodo = 'addTodo',
  setStatus = 'setStatus',
}

export interface RootState {
  count: number;
}

export interface SubStateA {
  foo: string;
}

export interface SubStateB {
  bar: boolean;
}

export interface TodoItemType {
  id: number;
  title: string;
  status: boolean;
}

export interface SubStateTodo {
  todoList: TodoItemType[];
}
