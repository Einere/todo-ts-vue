<template>
  <main>
    <TodoInput/>
    <TodoItem v-for="todoItem in filteredTodoItems" :key="todoItem.id" :id="todoItem.id"
              :title="todoItem.title" :status="todoItem.status"/>
  </main>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import TodoInput from '@/components/TodoInput.vue';
import TodoItem from '@/components/TodoItem.vue';
import { TodoItemType } from '@/store/storeTypes';

  @Component({
    components: {
      TodoInput,
      TodoItem,
    },
  })
export default class Todo extends Vue {
  get todoItems(): TodoItemType[] {
    return this.$store.getters['todoModule/todoList'];
  }

  get filter(): string | undefined {
    return this.$route.params.filter;
  }

  // todoItems에 의존하는 filteredTodoItems를 이런식으로 반응형으로 구현해야 하는게 좀 불편..
  private filteredTodoItems: TodoItemType[] = this.todoItems;

  private updateFilteredTodoItems(todoItems: TodoItemType[], filter: string | undefined) {
    switch (filter) {
      case undefined: {
        this.filteredTodoItems = todoItems;
        break;
      }
      case 'progress': {
        this.filteredTodoItems = todoItems.filter((todoItem) => !todoItem.status);
        break;
      }
      case 'done': {
        this.filteredTodoItems = todoItems.filter((todoItem) => todoItem.status);
        break;
      }
      default: {
        this.filteredTodoItems = todoItems;
      }
    }
  }

  @Watch('todoItems')
  todoItemsUpdated(todoItems: TodoItemType[]) {
    this.updateFilteredTodoItems(todoItems, this.filter);
  }

  @Watch('filter')
  routeUpdated(filter: string) {
    this.updateFilteredTodoItems(this.todoItems, filter);
  }
}
</script>

<style scoped>

</style>
